import Link from "next/link";
import type { Category, Product } from "@/backend/catalog/products";
import { CategoryCard } from "@/frontend/components/CategoryCard";
import { Hero } from "@/frontend/components/Hero";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";
import { ProcessSection } from "@/frontend/components/ProcessSection";
import { ProductGrid } from "@/frontend/components/ProductGrid";
import { QuoteSection } from "@/frontend/components/QuoteSection";
import { SectionHeader } from "@/frontend/components/SectionHeader";

type HomePageProps = {
  categories: Category[];
  featuredProducts: Product[];
};

const reasons = [
  "One partner across sourcing, manufacturing and delivery.",
  "Made-to-order production based on confirmed requirements.",
  "Selected manufacturing partners and defined specifications.",
  "Production visibility at key stages of the order."
];

const audiences = [
  [
    "WHOLESALE RETAILERS",
    "Stock your stores with premium wholesale apparel.",
    "/images/why-eazyone/wholesale-retailers.png"
  ],
  [
    "FASHION BRANDS & BOUTIQUES",
    "Build collections with flexible manufacturing and private-label options.",
    "/images/why-eazyone/fashion-brands-and-boutiques.png"
  ],
  [
    "CORPORATE & UNIFORM BUYERS",
    "Bulk apparel programs for organizations and businesses.",
    "/images/why-eazyone/corporate-and-uniform-buyers.png"
  ]
] as const;

export function HomePage({ categories, featuredProducts }: HomePageProps) {
  return (
    <main>
      <Hero />

      <section className="site-container py-16 md:py-24">
        <SectionHeader
          copy="Premium wholesale apparel manufactured to order."
          eyebrow="Shop Our Collection"
          title="Shop Our Collection"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.slug} />
          ))}
        </div>
      </section>

      <ProductGrid products={featuredProducts} />

      <section className="site-container grid gap-8 py-16 md:py-24 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden bg-[#d8d0c4]">
          <PremiumImage
            alt="Made-to-order apparel manufacturing"
            label="MANUFACTURING IMAGE PLACEHOLDER"
            src="/images/home/manufacturing.png"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-5 text-black/45">Made to Order</p>
          <h2 className="section-title">Built around your order.</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#706b63]">
            Eazyone works with selected manufacturing partners in India to make
            wholesale apparel production simpler for U.S. buyers. Choose from
            our collection, define the requirements and let our team coordinate
            the process.
          </p>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-black text-white">
        <div className="site-container py-16 md:py-24">
          <SectionHeader
            dark
            copy="From manufacturing and quality control to production updates and delivery, Eazyone manages the process so you don't have to."
            eyebrow="Why Eazyone"
            title="A premium wholesale partner."
          />
          <div className="grid border-t border-white/20 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div className="border-b border-r border-white/20 p-6" key={reason}>
                <p className="text-lg leading-relaxed text-white/76">{reason}</p>
              </div>
            ))}
          </div>
          <Link className="mt-8 inline-flex border border-white px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-white hover:text-black" href="/why-eazyone">
            WHY EAZYONE
          </Link>
        </div>
      </section>

      <section className="site-container py-16 md:py-24">
        <SectionHeader eyebrow="Who We Serve" title="Built for B2B apparel buyers." />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map(([title, copy, imageSrc]) => (
            <div className="grid gap-5" key={title}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d0c4]">
                <PremiumImage alt={title} label="IMAGE PLACEHOLDER" src={imageSrc} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#706b63]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container grid gap-8 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5 text-black/45">Private Label & Custom Manufacturing</p>
          <h2 className="section-title">Your brand on premium apparel.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-[#706b63]">
            Selected styles can be manufactured under your brand with private
            labels, custom colors, custom sizing, embroidery, printing and
            packaging options.
          </p>
          <Link className="mt-8 inline-flex border border-black px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-black hover:text-white" href="/services">
            VIEW SERVICES
          </Link>
        </div>
      </section>

      <QuoteSection />
    </main>
  );
}
