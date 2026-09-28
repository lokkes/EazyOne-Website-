import Link from "next/link";
import { SectionHeader } from "@/frontend/components/SectionHeader";

const steps = [
  ["01", "CHOOSE", "Browse our wholesale collection and select the products you want."],
  ["02", "CUSTOMIZE", "Choose colors, sizes, fabrics, branding and private-label options."],
  ["03", "ORDER", "Tell us your quantities and requirements. We confirm pricing, specifications and delivery timelines."],
  ["04", "WE MAKE IT", "Your order enters production through our manufacturing network."],
  ["05", "WE KEEP YOU UPDATED", "You'll receive milestone updates throughout the production process."],
  ["06", "WE DELIVER", "We coordinate the logistics and deliver your finished order to your designated location."]
];

export function ProcessSection() {
  return (
    <section className="site-container py-16 md:py-24">
      <SectionHeader
        copy="A simple, transparent wholesale process built for businesses that need production handled correctly."
        eyebrow="How It Works"
        title="Wholesale Made Easy"
      />
      <div className="grid border-t fine-border md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([number, title, copy]) => (
          <div className="border-b border-r fine-border p-6 md:min-h-[260px]" key={number}>
            <p className="text-sm text-black/45">{number}</p>
            <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
            <p className="mt-4 leading-relaxed text-[#706b63]">{copy}</p>
          </div>
        ))}
      </div>
      <Link className="mt-8 inline-flex border border-black px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-black hover:text-white" href="/how-it-works">
        VIEW FULL PROCESS
      </Link>
    </section>
  );
}
