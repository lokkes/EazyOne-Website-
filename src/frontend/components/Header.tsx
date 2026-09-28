"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/shop", label: "SHOP WHOLESALE" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT US" },
  { href: "/why-eazyone", label: "WHY EAZYONE" },
  { href: "/contact", label: "CONTACT" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    setIsOpen(false);

    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b fine-border bg-[#f4f1eb]/92 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link className="text-2xl font-black tracking-[-0.06em]" href="/">
          Eazyone
        </Link>

        <nav className="hidden items-center gap-6 text-[0.72rem] font-bold tracking-[0.14em] xl:flex">
          {navItems.map((item) => (
            <Link
              className="transition hover:text-[#706b63]"
              href={item.href}
              key={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden border border-black bg-black px-5 py-3 text-[0.72rem] font-bold tracking-[0.14em] text-white transition hover:bg-transparent hover:text-black sm:inline-flex"
            href="/quote"
          >
            REQUEST A QUOTE
          </Link>
          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="border border-black px-4 py-3 text-[0.72rem] font-bold tracking-[0.14em] xl:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            MENU
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t fine-border bg-[#f4f1eb] xl:hidden">
          <nav className="site-container grid gap-1 py-5">
            {navItems.map((item) => (
              <Link
                className="border-b fine-border py-4 text-xl font-semibold tracking-[-0.02em]"
                href={item.href}
                key={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-4 bg-black px-5 py-4 text-center text-sm font-bold tracking-[0.14em] text-white"
              href="/quote"
              onClick={() => setIsOpen(false)}
            >
              REQUEST A QUOTE
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
