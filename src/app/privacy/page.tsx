import type { Metadata } from "next";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Eazyone.",
  path: "/privacy",
  noIndex: true
});

export default function PrivacyPage() {
  return (
    <main className="site-container py-12 md:py-20">
      <p className="eyebrow mb-5 text-black/45">Legal</p>
      <h1 className="section-title">Privacy Policy</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#706b63]">
        Placeholder legal content. This page should be completed with final
        privacy language before production launch.
      </p>
    </main>
  );
}
