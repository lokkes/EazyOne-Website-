import type { Metadata } from "next";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Eazyone is a U.S.-based wholesale apparel company making international manufacturing simple.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="site-container py-12 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow mb-5 text-black/45">About Us</p>
          <h1 className="section-title">A U.S.-based wholesale apparel company.</h1>
        </div>
        <div className="grid gap-6 text-xl leading-relaxed text-[#706b63]">
          <p>
            We make global manufacturing simple. EazyOne is a US-born sourcing
            and manufacturing partner for brands, retailers, and boutiques who
            want global pricing without global risk. You place the order. We
            carry the rest.
          </p>
          <p>
            Everything we do rests on transparency, trust, and relationships.
            It&apos;s how we built our network of vetted manufacturers, and why
            many of those partnerships span years. We believe in long-term
            strategic partnerships, and those relationships are why quality in
            every batch isn&apos;t a hope but a habit.
          </p>
          <p>
            Choose from our own line or create your own private label. Every
            order is made to order, and we keep you updated at each major
            milestone.
          </p>
          <p>Give EazyOne a try. We think you will stay.</p>
        </div>
      </section>
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden bg-[#d8d0c4]">
          <PremiumImage
            alt="Eazyone apparel manufacturing"
            label="MANUFACTURING IMAGE PLACEHOLDER"
            src="/images/about/manufacturing.png"
          />
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-[#d8d0c4]">
          <PremiumImage
            alt="Eazyone wholesale apparel collection"
            label="PRODUCT IMAGE PLACEHOLDER"
            src="/images/about/product-collection.png"
          />
        </div>
      </section>
    </main>
  );
}
