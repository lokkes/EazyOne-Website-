import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Eazyone for wholesale apparel, private label and B2B clothing manufacturing inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="site-container py-12 md:py-20">
      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5 text-black/45">Contact</p>
          <h1 className="section-title">Business inquiries and wholesale quotes.</h1>
        </div>
        <div className="grid gap-6">
          {[
            ["Company Information", "PLACEHOLDER"],
            ["Email", "PLACEHOLDER"],
            ["Phone", "PLACEHOLDER"],
            ["Location", "PLACEHOLDER"]
          ].map(([label, value]) => (
            <div className="border-b fine-border pb-5" key={label}>
              <p className="text-xs font-bold tracking-[0.14em] text-black/45">{label.toUpperCase()}</p>
              <p className="mt-2 text-2xl tracking-[-0.04em]">{value}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-5">
            <Link className="bg-black px-6 py-4 text-xs font-bold tracking-[0.16em] text-white" href="/quote">
              REQUEST A QUOTE
            </Link>
            <Link className="border border-black px-6 py-4 text-xs font-bold tracking-[0.16em]" href="/services">
              BUSINESS INQUIRY
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
