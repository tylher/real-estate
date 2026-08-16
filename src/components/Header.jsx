"use client";

// components/Header.jsx
//
// Fixed + sticky: near-transparent at the top of the page, gains a solid
// blurred background once scrolled past 24px. Active nav link gets an
// underline that SLIDES between links via a shared layoutId — Framer Motion
// animates its position automatically when `pathname` changes, rather than
// each link independently fading its own underline in/out.

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
          ? "bg-ink/90 py-3 shadow-lg shadow-ink/20 backdrop-blur-md"
          : "bg-ink/10 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold text-sand">
          {firstWord}
          <span className="text-olive-light">{rest.join(" ")}</span>
        </Link>

        {/* Nav — Home / Listings only, per the brief */}
        <nav className="flex items-center gap-8">
          {site.nav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 font-ui text-sm"
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

        {/* CTA — icon-only, no label */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat us on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-olive text-ink transition-colors hover:bg-olive-light"
        >
          <LuPhone size={17} strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
