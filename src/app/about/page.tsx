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
          <p>Eazyone is a U.S.-based wholesale apparel company built to make international manufacturing simple.</p>
          <p>We work with carefully selected manufacturing partners in India to produce premium-quality apparel at competitive wholesale prices.</p>
          <p>Our customers do not need to manage factories, production teams, quality inspections or international logistics. We coordinate the process from order to delivery, keeping you informed at every stage gate.</p>
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
