"use client";

import Image from "next/image";
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
        <Link
          aria-label="EazyOne home"
          className="relative block h-14 w-[4.5rem] shrink-0 sm:h-16 sm:w-20"
          href="/"
        >
          <Image
            alt="EazyOne"
            className="-translate-x-2.5 object-contain object-left sm:-translate-x-3"
            fill
            priority
            sizes="(min-width: 640px) 80px, 72px"
            src="/images/logo/eazyone-logo.png"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-[0.72rem] font-bold tracking-[0.14em] min-[1120px]:flex xl:gap-6">
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
            className="border border-black px-4 py-3 text-[0.72rem] font-bold tracking-[0.14em] min-[1120px]:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            MENU
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t fine-border bg-[#f4f1eb] min-[1120px]:hidden">
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
