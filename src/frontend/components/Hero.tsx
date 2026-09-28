import Link from "next/link";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

export function HeroImagePlaceholder() {
  return (
    <div className="relative min-h-[460px] overflow-hidden bg-[#d8d0c4] lg:min-h-[690px]">
      <PremiumImage
        alt="Eazyone hero product and manufacturing"
        label="HERO IMAGE PLACEHOLDER"
        priority
        src="/images/hero/homepage.jpg"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="site-container grid min-h-[calc(100vh-5rem)] gap-8 py-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
      <div className="flex flex-col justify-between gap-10 py-8">
        <div>
          <p className="eyebrow mb-6 text-black/50">Premium Wholesale Apparel</p>
          <h1 className="editorial-title">Born in USA — Made to Order</h1>
        </div>

        <div className="max-w-xl">
          <p className="text-2xl leading-tight tracking-[-0.04em] md:text-4xl">
            Wholesale apparel sourcing and manufacturing company
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#706b63]">
            Premium Wholesale Apparel. Made to Order. Made Easy.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-[#706b63]">
            Choose your products. Place your order. We handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="bg-black px-6 py-4 text-xs font-bold tracking-[0.16em] text-white transition hover:bg-[#2a2a2a]" href="/shop">
              SHOP OUR COLLECTION
            </Link>
            <Link className="border border-black px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-black hover:text-white" href="/quote">
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>

      <HeroImagePlaceholder />
    </section>
  );
}
