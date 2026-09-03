"use client";

// components/Header.jsx
//
// Fixed + sticky: near-transparent at the top of the page, gains a solid
// blurred background once scrolled past 24px. Active nav link gets an
// underline that SLIDES between links via a shared layoutId — Framer Motion
// animates its position automatically when `pathname` changes, rather than
// each link independently fading its own underline in/out.
//
// MOBILE PASS — only 2 nav links (Home/Listings), so no hamburger menu is
// needed; the fix is just tightening spacing/sizing so logo + nav + CTA
// don't crowd a narrow phone screen. Everything below is mobile-first
// (the smallest class is the default, sm:/md: open it back up) — nothing
// about the layout itself changed, just the scale.

import { site } from "@/data/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";

const phoneNumber = "2348057872464";
const message = "Hello! I would like to inquire about your services.";

// Safely encodes spaces and special characters for the URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [firstWord, ...rest] = site.name.split(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 py-2.5 shadow-lg shadow-ink/20 backdrop-blur-md sm:py-3"
          : "bg-ink/10 py-4 backdrop-blur-sm sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:px-10">
        {/* Logo — shrinks a step on phones so a longer site name doesn't
            crowd the nav/CTA; back to text-xl from sm: up. */}
        <Link
          href="/"
          className="shrink-0 font-heading text-lg font-bold text-sand sm:text-xl"
        >
          {firstWord}
          <span className="text-olive-light">{rest.join(" ")}</span>
        </Link>

        {/* Nav — Home / Listings only, per the brief. Gap tightens on
            phones, opens back up at sm:/md:. */}
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {site.nav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 font-ui text-[13px] sm:text-sm"
              >
                <span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-sand" : "text-sand-70 hover:text-sand"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-olive"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA — icon-only, no label. Slightly smaller circle on phones,
            `shrink-0` so it never gets squeezed by the flex row. */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat us on WhatsApp"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-olive text-ink transition-colors hover:bg-olive-light sm:h-10 sm:w-10"
        >
          <LuPhone size={16} strokeWidth={2} className="sm:hidden" />
          <LuPhone size={17} strokeWidth={2} className="hidden sm:block" />
        </Link>
      </div>
    </header>
  );
}
