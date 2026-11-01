import type { Metadata } from "next";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Eazyone wholesale collection, private label apparel and custom manufacturing services for B2B clothing buyers.",
  path: "/services"
});

const wholesale = ["Product selection", "Wholesale manufacturing", "Bulk production", "Quality control", "Packaging", "Logistics", "Delivery"];
const custom = ["Private labels", "Neck labels", "Care labels", "Hang tags", "Custom packaging", "Custom colors", "Custom fabrics", "Custom sizing", "Embroidery", "Printing"];
const serviceOptions = [
  {
    category: "Buying",
    title: "BUY AS IS",
    description: "Choose EazyOne branded products as they are.",
    image: "/images/products/premium-heavyweight-oversized-sweatshirt/main.png",
    imageAlt: "EazyOne branded heavyweight sweatshirt",
    imagePosition: "object-center"
  },
  {
    category: "Buying",
    title: "CUSTOMIZE",
    description: "Choose our products and customize them with your branding and labeling.",
    image: "/images/about/product-collection.png",
    imageAlt: "EazyOne branded apparel collection",
    imagePosition: "object-[72%_center]"
  },
  {
    category: "Sourcing",
    title: "SOURCING",
    description:
      "Your Vision | Our Expertise — From sourcing fabrics to sample production and manufacturing.",
    image: "/images/services/samples-and-customization.png",
    imageAlt: "Apparel fabrics, samples, and production team",
    imagePosition: "object-center"
  }
];

export default function ServicesPage() {
  return (
    <main className="site-container py-12 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5 text-black/45">Services</p>
          <h1 className="section-title">Wholesale collection and custom manufacturing.</h1>
        </div>
        <div className="relative min-h-[460px] overflow-hidden bg-[#d8d0c4]">
          <PremiumImage
            alt="Apparel samples and customization"
            label="SAMPLES IMAGE PLACEHOLDER"
            src="/images/services/samples-and-customization.png"
          />
        </div>
      </section>

      <section className="border-t fine-border py-16 md:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceOptions.map((service) => (
            <article className="flex h-full flex-col border fine-border" key={service.title}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d0c4]">
                <PremiumImage
                  alt={service.imageAlt}
                  className={service.imagePosition}
                  label={`${service.title} IMAGE`}
                  src={service.image}
                />
              </div>
              <div className="flex min-h-60 flex-1 flex-col p-6 md:p-8">
                <p className="eyebrow text-black/45">{service.category}</p>
                <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-[#706b63]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t fine-border py-16 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl font-semibold tracking-[-0.05em]">Eazyone Wholesale Collection</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#706b63]">
            This is our primary business. Choose from our curated collection of
            wholesale apparel and order in bulk. Products are manufactured to
            order through our production network.
          </p>
        </div>
        <ul className="grid gap-3 text-lg text-[#706b63]">
          {wholesale.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="grid gap-10 border-t fine-border py-16 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl font-semibold tracking-[-0.05em]">Private Label & Custom Manufacturing</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#706b63]">
            Want your own brand on the product? We can take selected styles from
            our collection and manufacture them under your brand.
          </p>
        </div>
        <ul className="grid gap-3 text-lg text-[#706b63] sm:grid-cols-2">
          {custom.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
