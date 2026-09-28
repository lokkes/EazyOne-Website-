import { z } from "zod";
import {
  businessTypes,
  estimatedQuantities
} from "@/shared/order-options";

const singleLineText = (label: string, maxLength: number) =>
  z
    .string({ error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`)
    .max(maxLength, `${label} is too long.`)
    .refine(
      (value) => !/[\u0000-\u001f\u007f]/.test(value),
      `${label} contains invalid characters.`
    );

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength, `Must be ${maxLength} characters or fewer.`)
    .refine(
      (value) => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value),
      "Contains invalid characters."
    )
    .optional()
    .default("");

export const orderRequestSchema = z
  .object({
    companyName: singleLineText("Company name", 120),
    contactName: singleLineText("Contact name", 120),
    email: z
      .string({ error: "Business email is required." })
      .trim()
      .min(1, "Business email is required.")
      .max(254, "Business email is too long.")
      .email("Enter a valid business email.")
      .transform((value) => value.toLowerCase()),
    phone: singleLineText("Phone / WhatsApp", 32).refine(
      (value) =>
        /^[+\d][\d\s().-]+$/.test(value) &&
        value.replace(/\D/g, "").length >= 7,
      "Enter a valid phone or WhatsApp number."
    ),
    businessType: z.enum(businessTypes, {
      error: "Select a valid business type."
    }),
    productsInterested: singleLineText("Products interested in", 500),
    estimatedQuantity: z.enum(estimatedQuantities, {
      error: "Select a valid estimated quantity."
    }),
    deliveryLocation: singleLineText("Delivery location", 200),
    privateLabel: z.enum(["Yes", "No"], {
      error: "Select whether private label is required."
    }),
    targetDeliveryDate: z
      .string()
      .trim()
      .max(10, "Enter a valid target delivery date.")
      .refine(
        (value) => {
          if (value === "") {
            return true;
          }

          if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return false;
          }

          const parsedDate = new Date(`${value}T00:00:00.000Z`);
          return (
            !Number.isNaN(parsedDate.getTime()) &&
            parsedDate.toISOString().slice(0, 10) === value
          );
        },
        "Enter a valid target delivery date."
      )
      .optional()
      .default(""),
    additionalRequirements: optionalText(4000),
    website: z.string().max(200).optional().default("")
  })
  .strict();

export type OrderRequest = z.infer<typeof orderRequestSchema>;
