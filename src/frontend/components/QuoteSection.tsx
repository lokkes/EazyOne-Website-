import Link from "next/link";

export function QuoteSection() {
  return (
    <section className="site-container py-16 md:py-24">
      <div className="grid gap-10 bg-black p-8 text-white md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="eyebrow mb-5 text-white/50">Request a Quote</p>
          <h2 className="section-title max-w-4xl">One strategic partner. One order. One easy process.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-white/70">
            Tell us what you need, your estimated quantity and your delivery
            goals. Our team will review the request and contact you with next
            steps.
          </p>
          <Link className="mt-8 inline-flex border border-white px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-white hover:text-black" href="/quote">
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
