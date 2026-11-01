"use client";

import { useState } from "react";
import styles from "./WorkflowSelector.module.css";

type Workflow = "buying" | "sourcing";

const workflows = {
  buying: [
    ["01", "CHOOSE", "Browse our collection and select the products you want."],
    [
      "02",
      "BUY AS IS OR CUSTOMIZE",
      "Buy our EazyOne branded products as they are or relabel them to suit your needs and branding requirements."
    ],
    [
      "03",
      "ORDER",
      "Tell us your quantities and requirements. We confirm pricing, specifications and delivery timelines."
    ],
    ["04", "WE MAKE IT", "Your order enters production through our manufacturing network."],
    [
      "05",
      "WE KEEP YOU UPDATED",
      "You'll receive milestone updates throughout the production process."
    ],
    [
      "06",
      "WE DELIVER",
      "We coordinate both shipping and logistics to deliver your finished order to your designated location."
    ]
  ],
  sourcing: [
    ["01", "SHARE YOUR VISION", "Share your concepts, ideas, and samples with us."],
    [
      "02",
      "USE OUR EXPERTISE",
      "We identify suppliers, source fabrics, and arrange sample production for your products."
    ],
    ["03", "SAMPLE SUBMISSION", "We submit samples for your approval."],
    ["04", "ORDER PLACEMENT", "Place your order after approving the samples."],
    ["05", "BULK PRODUCTION", "Your approved products move into bulk production."],
    ["06", "DELIVERY", "We coordinate delivery of your finished products."]
  ]
} satisfies Record<Workflow, string[][]>;

const workflowLabels: Record<Workflow, string> = {
  buying: "Buying",
  sourcing: "Sourcing"
};

export function WorkflowSelector() {
  const [activeWorkflow, setActiveWorkflow] = useState<Workflow>("buying");

  return (
    <div>
      <div aria-label="Choose a workflow" className="mb-8 inline-flex border fine-border">
        {(Object.keys(workflowLabels) as Workflow[]).map((workflow) => {
          const isActive = activeWorkflow === workflow;

          return (
            <button
              aria-pressed={isActive}
              className={`min-w-32 px-6 py-3 text-sm font-semibold tracking-[0.08em] transition-colors duration-[250ms] ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-reduce:transition-none ${
                isActive
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-black/5"
              }`}
              key={workflow}
              onClick={() => setActiveWorkflow(workflow)}
              type="button"
            >
              {workflowLabels[workflow]}
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className={`${styles.workflowGrid} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}
        key={activeWorkflow}
      >
        {workflows[activeWorkflow].map(([number, title, copy]) => (
          <article
            className="group flex min-h-[280px] flex-col rounded-[10px] border fine-border bg-[#fbfaf7] p-6 shadow-[0_8px_24px_rgba(16,16,16,0.06)] transition-[background-color,box-shadow] duration-[275ms] ease-out hover:bg-[#111111] hover:shadow-[0_16px_36px_rgba(16,16,16,0.14)] motion-safe:transition-[transform,background-color,box-shadow] motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.012] motion-reduce:transition-none"
            key={number}
          >
            <p className="text-sm text-black/45 transition-colors duration-[275ms] ease-out group-hover:text-[#d1d1d1] motion-reduce:transition-none">
              {number}
            </p>
            <h2 className="mt-12 text-2xl font-semibold tracking-[-0.04em] transition-colors duration-[275ms] ease-out group-hover:text-white motion-reduce:transition-none lg:text-3xl">
              {title}
            </h2>
            <p className="mt-5 leading-relaxed text-[#706b63] transition-colors duration-[275ms] ease-out group-hover:text-[#d1d1d1] motion-reduce:transition-none">
              {copy}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
