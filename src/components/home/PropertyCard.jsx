"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

/**
 * PropertyCard
 * Styled entirely with Tailwind utilities built on the @theme tokens in
 * globals.css (bg-ink, text-olive, font-heading, etc.) — no bespoke CSS class
 * needed for this component.
 *
 * - Entrance: fades in and slides up as it enters the viewport (Framer Motion).
 * - Hover: `group` + `group-hover:` drives the image zoom/saturation bump,
 *   while the card itself lifts and gains a shadow — Tailwind handles the
 *   whole "more realistic on hover" effect, no vanilla CSS required.
 * - Click: calls `onOpen(property)` so a parent can drive a detail modal.
 *   Keyboard users get the same behavior via Enter/Space since the card is
 *   exposed as a button.
 *
 * `index` is optional — pass it from a map() to stagger each card's entrance.
 */
export default function PropertyCard({ property, index = 0, onOpen }) {
  const { image, tag, tagVariant, price, title, location, beds, baths, sqft } =
    property;

  return (
    <motion.article
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(property)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.(property);
        }
      }}
      aria-label={`View details for ${title}`}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-sand-dim bg-white
                 outline-none transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(12,38,49,0.25)]
                 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-olive"
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Photo */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]
                     group-hover:scale-110 group-hover:saturate-125 group-hover:contrast-110 group-hover:brightness-105"
        />
        <span
          className={`absolute left-3.5 top-3.5 rounded-md px-2.5 py-1 font-ui text-[11px] font-semibold
                      uppercase tracking-wide text-ink ${
                        tagVariant === "olive" ? "bg-olive" : "bg-clay"
                      }`}
        >
          {tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-[22px]">
        <p className="mb-1.5 font-ui text-xl font-bold text-olive">{price}</p>
        <h3 className="mb-1.5 font-heading text-[19px] font-bold text-ink">
          {title}
        </h3>
        <p className="mb-4 font-body text-sm text-ink-45">{location}</p>

        <div className="flex gap-4 border-t border-sand-dim pt-3.5 font-ui text-[12.5px] font-medium text-ink-70">
          <span className="flex items-center gap-1.5">
            <FaBed size={14} />
            {beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <FaBath size={14} />
            {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <FaRulerCombined size={14} />
            {sqft.toLocaleString()} Sqft
          </span>
        </div>
      </div>
    </motion.article>
  );
}
