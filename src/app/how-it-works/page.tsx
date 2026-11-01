import type { Metadata } from "next";
import { WorkflowSelector } from "@/app/how-it-works/WorkflowSelector";
import { SectionHeader } from "@/frontend/components/SectionHeader";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "How It Works",
  description:
    "Wholesale made easy with a transparent made-to-order apparel production process from product selection through delivery.",
  path: "/how-it-works"
});

const timeline = [
  ["ORDER CONFIRMED", "Your specifications and quantities are finalized."],
  ["MATERIALS READY", "Fabric and production materials are confirmed."],
  ["PRODUCTION STARTED", "Your order has entered manufacturing."],
  ["QUALITY CHECK", "Finished products undergo quality inspection."],
  ["READY TO SHIP", "Your order has completed production and packing."],
  ["IN TRANSIT", "Your shipment is on its way."],
  ["DELIVERED", "Your order arrives at your designated location."]
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="site-container py-12 md:py-20">
        <SectionHeader
          copy="Two ways to work with EazyOne, from ready-to-order apparel to custom sourcing."
          eyebrow="How It Works"
          title="How It Works"
        />
        <WorkflowSelector />
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-16 md:py-24">
          <SectionHeader dark eyebrow="Production Visibility" title="Your Order. Your Visibility." />
          <div className="mx-auto max-w-4xl">
            {timeline.map(([title, copy], index) => (
              <div className="grid grid-cols-[4rem_1fr] gap-6" key={title}>
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-white" />
                  {index < timeline.length - 1 ? <span className="h-20 w-px bg-white/25" /> : null}
                </div>
                <div className="pb-10">
                  <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
                  <p className="mt-2 text-white/66">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
