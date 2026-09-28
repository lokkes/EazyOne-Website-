import type { Metadata } from "next";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";
import { SectionHeader } from "@/frontend/components/SectionHeader";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Why Eazyone",
  description:
    "Why businesses choose Eazyone for made-to-order wholesale apparel, private label manufacturing and production visibility.",
  path: "/why-eazyone"
});

const features = [
  ["ONE PARTNER", "No need to manage multiple factories and suppliers."],
  ["MADE TO ORDER", "Products are manufactured based on your confirmed requirements."],
  ["PREMIUM QUALITY", "We work with selected manufacturing partners and defined product specifications."],
  ["COMPETITIVE PRICING", "Our manufacturing network allows us to offer attractive wholesale economics."],
  ["PRODUCTION VISIBILITY", "You receive updates at key stages of your order."],
  ["QUALITY CONTROL", "Orders are checked before shipment."],
  ["DELIVERED TO YOU", "We coordinate the logistics from production through delivery."]
];

const audiences = [
  {
    title: "WHOLESALE RETAILERS",
    copy: "Stock your stores with premium wholesale apparel.",
    imageSrc: "/images/why-eazyone/wholesale-retailers.png"
  },
  {
    title: "FASHION BRANDS & BOUTIQUES",
    copy: "Build collections with flexible manufacturing and private-label options.",
    imageSrc: "/images/why-eazyone/fashion-brands-and-boutiques.png"
  },
  {
    title: "CORPORATE & UNIFORM BUYERS",
    copy: "Bulk apparel programs for organizations and businesses.",
    imageSrc: "/images/why-eazyone/corporate-and-uniform-buyers.png"
  }
];

export default function WhyEazyonePage() {
  return (
    <main>
      <section className="site-container py-12 md:py-20">
        <SectionHeader
          copy="Why businesses choose Eazyone for wholesale clothing, made-to-order production and international apparel sourcing."
          eyebrow="Why Eazyone"
          title="Why businesses choose Eazyone"
        />
        <div className="grid border-t fine-border md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, copy]) => (
            <article className="border-b border-r fine-border p-6 md:min-h-[240px]" key={title}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">{title}</h2>
              <p className="mt-5 leading-relaxed text-[#706b63]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container py-16 md:py-24">
        <SectionHeader eyebrow="Who We Serve" title="Wholesale buyers, brands and organizations." />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map(({ title, copy, imageSrc }) => (
            <div key={title}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d0c4]">
                <PremiumImage alt={title} label="IMAGE PLACEHOLDER" src={imageSrc} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
              <p className="mt-3 leading-relaxed text-[#706b63]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-16 text-center md:py-24">
          <p className="mx-auto max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-7xl">
            From manufacturing and quality control to production updates and
            delivery, Eazyone manages the process so you do not have to.
          </p>
        </div>
      </section>
    </main>
  );
}
