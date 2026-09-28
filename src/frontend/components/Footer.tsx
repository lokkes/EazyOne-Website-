import Link from "next/link";

const footerLinks = [
  ["Home", "/"],
  ["Shop Wholesale", "/shop"],
  ["How It Works", "/how-it-works"],
  ["Services", "/services"],
  ["About Us", "/about"],
  ["Why Eazyone", "/why-eazyone"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link className="text-4xl font-black tracking-[-0.06em]" href="/">
            eazyone
          </Link>
          <p className="mt-5 max-w-md text-2xl leading-tight tracking-[-0.03em] text-white/82">
            One strategic partner. One order. One easy process.
          </p>
          <Link
            className="mt-8 inline-flex border border-white px-6 py-4 text-xs font-bold tracking-[0.16em] transition hover:bg-white hover:text-black"
            href="/quote"
          >
            REQUEST A QUOTE
          </Link>
        </div>

        <nav className="grid content-start gap-3 text-sm text-white/70">
          {footerLinks.map(([label, href]) => (
            <Link className="transition hover:text-white" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="grid content-start gap-4 text-sm text-white/70">
          <p>Email: PLACEHOLDER</p>
          <p>Phone: PLACEHOLDER</p>
          <p>Address: PLACEHOLDER</p>
          <div className="mt-4 flex gap-5">
            <Link className="underline-offset-4 hover:underline" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
