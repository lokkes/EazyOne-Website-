import Link from "next/link";
import { HeroSlideshow } from "@/frontend/components/HeroSlideshow";

export function Hero() {
  return (
    <section className="site-container grid min-h-[calc(100vh-5rem)] gap-8 py-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
      <div className="flex flex-col justify-between gap-10 py-8">
        <div>
          <p className="eyebrow mb-6 text-black/50">
            Premium Quality | Affordable Price
          </p>
          <h1 className="text-[clamp(2.5rem,5.3vw,4.5rem)] leading-[0.94] tracking-[-0.04em]">
            <span className="lg:block">Born in USA |</span>{" "}
            <span className="lg:block lg:whitespace-nowrap">Apparel Custom</span>{" "}
            <span className="lg:block">Manufacturing</span>{" "}
            <span className="lg:block">and Sourcing</span>{" "}
            <span className="lg:block">Company</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#706b63] md:text-xl">
            Your brand deserves products you will be proud to put your label on!
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link className="bg-black px-6 py-4 text-xs font-bold tracking-[0.16em] text-white transition hover:bg-[#2a2a2a]" href="/shop">
            SHOP OUR COLLECTION
          </Link>
          <Link className="border border-black px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-black hover:text-white" href="/quote">
            REQUEST A QUOTE
          </Link>
        </div>
      </div>

      <HeroSlideshow />
    </section>
  );
}
