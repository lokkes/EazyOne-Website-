import type { OrderRequest } from "./order-schema";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type EmailDeliveryStatus = "sent" | "skipped";

type EmailPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
};

export class EmailConfigurationError extends Error {
  constructor() {
    super("Email delivery is not configured.");
    this.name = "EmailConfigurationError";
  }
}

export class EmailDeliveryError extends Error {
  status: number;

  constructor(status: number) {
    super("The email provider rejected the request.");
    this.name = "EmailDeliveryError";
    this.status = status;
  }
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      })[character] ?? character
  );
}

function valueOrNotProvided(value: string): string {
  return value || "Not provided";
}

function buildInternalEmail(order: OrderRequest): Pick<EmailPayload, "html" | "text"> {
  const fields = [
    ["Company name", order.companyName],
    ["Contact person", order.contactName],
    ["Business email", order.email],
    ["Phone / WhatsApp", order.phone],
    ["Business type", order.businessType],
    ["Products interested in", order.productsInterested],
    ["Estimated quantity", order.estimatedQuantity],
    ["Delivery location", order.deliveryLocation],
    ["Private label", order.privateLabel],
    ["Target delivery date", valueOrNotProvided(order.targetDeliveryDate)],
    ["Additional requirements", valueOrNotProvided(order.additionalRequirements)]
  ] as const;

  const rows = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:12px 16px;border-bottom:1px solid #ddd;text-align:left;vertical-align:top;width:190px;font-family:Arial,sans-serif;font-size:13px;">${escapeHtml(label)}</th>
          <td style="padding:12px 16px;border-bottom:1px solid #ddd;font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return {
    html: `
      <div style="max-width:720px;margin:0 auto;padding:32px;color:#111;background:#fff;">
        <p style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666;">eazyone wholesale inquiry</p>
        <h1 style="font-family:Arial,sans-serif;font-size:28px;margin:12px 0 24px;">New wholesale quote request</h1>
        <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #ddd;">${rows}</table>
      </div>`,
    text: fields.map(([label, value]) => `${label}: ${value}`).join("\n")
  };
}

function buildCustomerEmail(contactName: string): Pick<EmailPayload, "html" | "text"> {
  const safeName = escapeHtml(contactName);

  return {
    html: `
      <div style="max-width:620px;margin:0 auto;padding:32px;color:#111;background:#fff;font-family:Arial,sans-serif;">
        <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666;">eazyone</p>
        <h1 style="font-size:28px;margin:12px 0 24px;">Wholesale inquiry received</h1>
        <p style="font-size:16px;line-height:1.7;">Hello ${safeName},</p>
        <p style="font-size:16px;line-height:1.7;">Thank you for your wholesale inquiry. We have received your request and our team will contact you shortly.</p>
        <p style="font-size:16px;line-height:1.7;">This message confirms receipt of your inquiry only. It is not an order confirmation.</p>
      </div>`,
    text: `Hello ${contactName},\n\nThank you for your wholesale inquiry. We have received your request and our team will contact you shortly.\n\nThis message confirms receipt of your inquiry only. It is not an order confirmation.`
  };
}

async function sendEmail(
  apiKey: string,
  payload: EmailPayload,
  idempotencyKey: string
) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new EmailDeliveryError(response.status);
  }
}

export async function sendOrderEmails(
  order: OrderRequest,
  requestId: string
): Promise<EmailDeliveryStatus> {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL;
  const fromEmail = process.env.ORDER_FROM_EMAIL;

  if (!apiKey || !notificationEmail || !fromEmail) {
    if (process.env.NODE_ENV === "production") {
      throw new EmailConfigurationError();
    }

    console.warn(
      `[order:${requestId}] Email delivery skipped because Resend environment variables are not configured.`
    );
    return "skipped";
  }

  const internalEmail = buildInternalEmail(order);
  const customerEmail = buildCustomerEmail(order.contactName);

  await Promise.all([
    sendEmail(
      apiKey,
      {
        from: fromEmail,
        to: [notificationEmail],
        reply_to: order.email,
        subject: `Wholesale inquiry from ${order.companyName}`,
        ...internalEmail
      },
      `${requestId}-internal`
    ),
    sendEmail(
      apiKey,
      {
        from: fromEmail,
        to: [order.email],
        subject: "We received your eazyone wholesale inquiry",
        ...customerEmail
      },
      `${requestId}-customer`
    )
  ]);

  return "sent";
}
