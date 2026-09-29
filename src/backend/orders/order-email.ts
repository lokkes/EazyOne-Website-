import { Resend } from "resend";
import type { OrderRequest } from "./order-schema";

type EmailDeliveryStatus = "sent";

type EmailPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export class EmailConfigurationError extends Error {
  constructor() {
    super("Email delivery is not configured.");
    this.name = "EmailConfigurationError";
  }
}

export class EmailDeliveryError extends Error {
  status: number | null;

  constructor(status: number | null) {
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
    ["Private label", valueOrNotProvided(order.privateLabel)],
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
        <p style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666;">Eazyone Apparel wholesale inquiry</p>
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
        <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666;">Eazyone Apparel</p>
        <h1 style="font-size:28px;margin:12px 0 24px;">Wholesale inquiry received</h1>
        <p style="font-size:16px;line-height:1.7;">Hello ${safeName},</p>
        <p style="font-size:16px;line-height:1.7;">Thank you for contacting Eazyone Apparel.</p>
        <p style="font-size:16px;line-height:1.7;">We have received your wholesale quote request and our team will review the details and contact you with the next steps.</p>
        <p style="font-size:16px;line-height:1.7;">This message confirms receipt of your inquiry only and does not represent a confirmed order.</p>
        <p style="font-size:16px;line-height:1.7;">Best regards,<br />Eazyone Apparel</p>
      </div>`,
    text: `Hello ${contactName},\n\nThank you for contacting Eazyone Apparel.\n\nWe have received your wholesale quote request and our team will review the details and contact you with the next steps.\n\nThis message confirms receipt of your inquiry only and does not represent a confirmed order.\n\nBest regards,\nEazyone Apparel`
  };
}

async function sendEmail(
  resend: Resend,
  payload: EmailPayload,
  idempotencyKey: string
) {
  const { error } = await resend.emails.send(payload, {
    idempotencyKey
  });

  if (error) {
    throw new EmailDeliveryError(error.statusCode);
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
    throw new EmailConfigurationError();
  }

  const resend = new Resend(apiKey);
  const internalEmail = buildInternalEmail(order);
  const customerEmail = buildCustomerEmail(order.contactName);

  await Promise.all([
    sendEmail(
      resend,
      {
        from: fromEmail,
        to: [notificationEmail],
        replyTo: order.email,
        subject: `New Wholesale Quote Request - ${order.companyName}`,
        ...internalEmail
      },
      `${requestId}-internal`
    ),
    sendEmail(
      resend,
      {
        from: fromEmail,
        to: [order.email],
        subject: "We received your Eazyone Apparel wholesale inquiry",
        ...customerEmail
      },
      `${requestId}-customer`
    )
  ]);

  return "sent";
}
