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
  {
    title: "Global Pricing, Without the Global Risk",
    copy:
      "Access the cost advantages of international manufacturing without the complexity and risks of managing overseas production yourself."
  },
  {
    title: "Premium Quality. Affordable Prices."
  },
  {
    title: "Consistent, On-Time Delivery",
    copy:
      "Our long-standing relationships with a vetted network of global manufacturers help us deliver quality products at competitive prices, reliably and consistently."
  },
  {
    title: "More Than a Supplier. Your Strategic Partner.",
    copy:
      "We build long-term relationships grounded in trust, transparency, and shared goals, working alongside your business to support its evolving sourcing and manufacturing needs."
  }
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
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {features.map(({ title, copy }, index) => (
            <article
              className="flex min-h-[260px] flex-col rounded-[10px] border fine-border bg-[#fbfaf7] p-6 shadow-[0_8px_24px_rgba(16,16,16,0.06)] transition-shadow duration-[250ms] ease-out hover:shadow-[0_16px_36px_rgba(16,16,16,0.11)] motion-safe:transition-[transform,box-shadow] motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.015] md:min-h-[300px] md:p-8 lg:p-10"
              key={title}
            >
              <p className="text-sm text-black/45">{String(index + 1).padStart(2, "0")}</p>
              <div className="mt-auto pt-12">
                <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] lg:text-4xl">
                  {title}
                </h2>
                {copy ? (
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#706b63]">
                    {copy}
                  </p>
                ) : null}
              </div>
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
