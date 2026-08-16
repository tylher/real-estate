// components/Footer.jsx
//
// No client-side state needed here, so it stays a server component.

import { site } from "@/data/site";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const [firstWord, ...rest] = site.name.split(" ");

  return (
    <footer className="border-t border-sand/10 bg-ink px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-sand">
              {firstWord}
              <span className="text-olive-light">{rest.join(" ")}</span>
            </Link>
            <p className="mt-2 max-w-xs font-body text-sm text-sand-70">
              {site.tagline}
            </p>
          </div>

          {/* Nav — same two links as the header */}
          <nav className="flex items-center gap-8">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-sand-70 transition-colors hover:text-sand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {site.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sand/15 text-sand-70 transition-colors hover:border-olive hover:text-sand"
                >
                  <Icon size={15} strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom row — copyright + contact */}
        <div className="mt-10 flex flex-col gap-4 border-t border-sand/10 pt-6 font-ui text-xs text-sand-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="transition-colors hover:text-sand"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-sand"
            >
              {site.email}
            </a>
            <span>{site.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
