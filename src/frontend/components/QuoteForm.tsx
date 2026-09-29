"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import {
  businessTypes,
  estimatedQuantities
} from "@/shared/order-options";

type ErrorResponse = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

type QuoteFormProps = {
  initialProduct?: string;
};

type FormErrors = Record<string, string>;

function isValidEmail(value: FormDataEntryValue | undefined) {
  return (
    typeof value === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
}

export function QuoteForm({ initialProduct = "" }: QuoteFormProps) {
  const submissionInFlight = useRef(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionInFlight.current) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
    const payload = Object.fromEntries(formData.entries());
    const nextErrors: FormErrors = {};

    [
      "companyName",
      "contactName",
      "email",
      "phone",
      "businessType",
      "productsInterested",
      "estimatedQuantity",
      "deliveryLocation"
    ].forEach((field) => {
      if (!payload[field]) {
        nextErrors[field] = "Required";
      }
    });

    if (payload.email && !isValidEmail(payload.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitError("Please complete all required fields.");
      return;
    }

    setErrors({});
    setSubmitError("");
    submissionInFlight.current = true;
    setIsSending(true);

    try {
      const response = await fetch("/api/order", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      });

      if (!response.ok) {
        const errorResponse = (await response.json().catch(() => ({}))) as ErrorResponse;
        const serverErrors = Object.fromEntries(
          Object.entries(errorResponse.fieldErrors ?? {}).map(([field, messages]) => [
            field,
            messages[0] ?? "Invalid value"
          ])
        );

        setErrors(serverErrors);
        throw new Error(
          errorResponse.error ?? "The quote request could not be submitted."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your request. Please try again in a moment."
      );
    } finally {
      submissionInFlight.current = false;
      setIsSending(false);
    }
  }

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="border fine-border bg-[#fbfaf7] p-8 md:p-12"
        role="status"
      >
        <p className="eyebrow mb-5 text-black/45">Request Received</p>
        <h2 className="text-5xl font-semibold tracking-[-0.05em]">Thank you.</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#706b63]">
          Our team will review your requirements and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
      <Field error={errors.companyName} label="Company Name" maxLength={120} name="companyName" required />
      <Field error={errors.contactName} label="Contact Name" maxLength={120} name="contactName" required />
      <Field
        error={errors.email}
        label="Business Email"
        maxLength={254}
        name="email"
        required
        type="email"
      />
      <Field
        error={errors.phone}
        label="Phone / WhatsApp"
        maxLength={32}
        name="phone"
        required
        type="tel"
      />
      <Select error={errors.businessType} label="Business Type" name="businessType" options={businessTypes} required />
      <Field
        defaultValue={initialProduct}
        error={errors.productsInterested}
        label="Products Interested In"
        maxLength={500}
        name="productsInterested"
        required
      />
      <Select
        error={errors.estimatedQuantity}
        label="Estimated Quantity"
        name="estimatedQuantity"
        options={estimatedQuantities}
        required
      />
      <Field error={errors.deliveryLocation} label="Preferred Delivery Location" maxLength={200} name="deliveryLocation" required />
      <Select error={errors.privateLabel} label="Need Private Label?" name="privateLabel" options={["Yes", "No"]} />
      <Field label="Target Delivery Date" name="targetDeliveryDate" type="date" />
      <label className="grid gap-2">
        <span className="text-xs font-bold tracking-[0.14em]">ADDITIONAL REQUIREMENTS</span>
        <textarea
          className="min-h-36 border fine-border bg-transparent p-4 outline-none transition focus:border-black"
          maxLength={4000}
          name="additionalRequirements"
        />
      </label>
      <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>
      {submitError ? (
        <p className="text-sm text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}
      <button
        className="mt-4 bg-black px-6 py-5 text-xs font-bold tracking-[0.16em] text-white transition hover:bg-[#2a2a2a] disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "SENDING REQUEST..." : "SUBMIT REQUEST"}
      </button>
    </form>
  );
}

function Field({
  defaultValue,
  error,
  label,
  maxLength,
  name,
  required = false,
  type = "text"
}: {
  defaultValue?: string;
  error?: string;
  label: string;
  maxLength?: number;
  name: string;
  required?: boolean;
  type?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2">
      <span className="flex justify-between text-xs font-bold tracking-[0.14em]">
        {label.toUpperCase()}
        {error ? <span className="text-red-700" id={errorId}>{error}</span> : null}
      </span>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className="h-14 border fine-border bg-transparent px-4 outline-none transition focus:border-black"
        defaultValue={defaultValue}
        maxLength={maxLength}
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

function Select({
  error,
  label,
  name,
  options,
  required = false
}: {
  error?: string;
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2">
      <span className="flex justify-between text-xs font-bold tracking-[0.14em]">
        {label.toUpperCase()}
        {error ? <span className="text-red-700" id={errorId}>{error}</span> : null}
      </span>
      <select
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className="h-14 border fine-border bg-transparent px-4 outline-none transition focus:border-black"
        name={name}
        required={required}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
