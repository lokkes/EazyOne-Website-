import type { Metadata } from "next";
import { QuoteForm } from "@/frontend/components/QuoteForm";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Wholesale Quote",
  description:
    "Request a wholesale apparel quote from eazyone for made-to-order clothing, private label apparel and bulk production.",
  path: "/quote"
});

type QuotePageProps = {
  searchParams?: Promise<{ product?: string }>;
};

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;

  return (
    <main className="site-container grid gap-12 py-12 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="eyebrow mb-5 text-black/45">Request a Wholesale Quote</p>
        <h1 className="section-title">Request a wholesale quote.</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#706b63]">
          Share your product interests, estimated quantity and production
          requirements. Our team will review your inquiry and contact you with
          the next steps.
        </p>
      </div>
      <QuoteForm initialProduct={params?.product} />
    </main>
  );
}
