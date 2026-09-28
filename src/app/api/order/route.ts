import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import {
  EmailConfigurationError,
  EmailDeliveryError,
  sendOrderEmails
} from "@/backend/orders/order-email";
import { orderRequestSchema } from "@/backend/orders/order-schema";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 16_384;

export async function POST(request: Request) {
  const requestId = randomUUID();
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json(
      { success: false, error: "Content-Type must be application/json." },
      { status: 415 }
    );
  }

  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { success: false, error: "The submitted request is too large." },
      { status: 413 }
    );
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to read the request body." },
      { status: 400 }
    );
  }

  if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { success: false, error: "The submitted request is too large." },
      { status: 413 }
    );
  }

  let body: unknown;

  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { success: false, error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    typeof body.website === "string" &&
    body.website.trim() !== ""
  ) {
    console.warn(`[order:${requestId}] Honeypot submission rejected.`);
    return NextResponse.json({ success: true });
  }

  const result = orderRequestSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please check the submitted fields and try again.",
        fieldErrors: result.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  try {
    const emailDelivery = await sendOrderEmails(result.data, requestId);
    console.info(`[order:${requestId}] Wholesale inquiry accepted.`, {
      emailDelivery
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error(`[order:${requestId}] Email delivery is not configured.`);
      return NextResponse.json(
        { success: false, error: "Inquiry delivery is temporarily unavailable." },
        { status: 503 }
      );
    }

    if (error instanceof EmailDeliveryError) {
      console.error(`[order:${requestId}] Resend rejected an email request.`, {
        status: error.status
      });
    } else {
      console.error(`[order:${requestId}] Unexpected inquiry delivery failure.`, {
        errorName: error instanceof Error ? error.name : "UnknownError"
      });
    }

    return NextResponse.json(
      { success: false, error: "We could not deliver your inquiry right now." },
      { status: 502 }
    );
  }
}
