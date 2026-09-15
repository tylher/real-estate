"use client";

import Portal from "@/lib/Portal";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaBath,
  FaBed,
  FaCheck,
  FaEnvelope,
  FaPhoneAlt,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";
import PropertyGallery from "./PropertyGallery";

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyDetailModal({ property, onClose }) {
  // Lock page scroll while the modal is open.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const {
    image,
    gallery,
    tag,
    tagVariant,
    price,
    title,
    location,
    beds,
    baths,
    sqft,
    description,
    amenities,
    agent,
  } = property;

  // Normalise to E.164 digits for wa.me (Nigeria default).
  const toIntl = (raw = "") => {
    const digits = raw.replace(/\D/g, "");
    if (raw.trim().startsWith("+")) return digits;
    if (digits.startsWith("234")) return digits;
    if (digits.startsWith("0")) return `234${digits.slice(1)}`;
    return digits;
  };

  const WHATSAPP_FALLBACK = "2348012345678"; // replace with the office line
  const PHONE_FALLBACK = "+2348012345678";

  const waNumber = toIntl(agent?.whatsapp ?? agent?.phone ?? WHATSAPP_FALLBACK);
  const callNumber = (agent?.phone ?? PHONE_FALLBACK).replace(/[^+\d]/g, "");

  const waMessage = encodeURIComponent(
    `Hello${agent?.name ? ` ${agent.name}` : ""}, I'd like to schedule a viewing for ${title}${
      location ? ` in ${location}` : ""
    }${price ? ` (${price})` : ""}. When are you available?`,
  );

  const waHref = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <Portal>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Modal panel — scales/translates in from the bottom-right corner */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="fixed inset-4 z-[101] origin-bottom-right overflow-hidden rounded-2xl bg-sand shadow-2xl
                   sm:inset-10 lg:inset-y-10 lg:inset-x-[10%] xl:inset-x-[16%]"
        initial={{ opacity: 0, scale: 0.15, x: 160, y: 160 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.15, x: 160, y: 160 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="h-full overflow-y-auto p-6 sm:p-9">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full
                       bg-white text-ink shadow-md transition-colors hover:bg-sand-dim"
          >
            <FaTimes size={14} />
          </button>

          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.15fr_1fr]">
            {/* Left: gallery + description + amenities */}
            <div>
              <span
                className={`mb-3 inline-block rounded-md px-2.5 py-1 font-ui text-[11px] font-semibold
                            uppercase tracking-wide text-ink ${tagVariant === "olive" ? "bg-olive" : "bg-clay"}`}
              >
                {tag}
              </span>

              <PropertyGallery images={gallery ?? [image]} title={title} />

              <h4 className="mb-2 mt-8 font-heading text-lg font-bold text-ink">
                About this home
              </h4>
              <p className="font-body text-[15px] leading-relaxed text-ink-70">
                {description}
              </p>

              <h4 className="mb-3 mt-7 font-heading text-lg font-bold text-ink">
                Amenities
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                {amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body text-sm text-ink-70"
                  >
                    <FaCheck size={11} className="shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: price, specs, agent, CTAs */}
            <div className="lg:border-l lg:border-sand-dim lg:pl-9">
              <p className="mb-1.5 font-ui text-2xl font-bold text-olive">
                {price}
              </p>
              <h3 className="mb-1.5 font-heading text-2xl font-bold text-ink">
                {title}
              </h3>
              <p className="mb-5 font-body text-sm text-ink-45">{location}</p>

              <div className="mb-7 flex gap-5 border-y border-sand-dim py-4 font-ui text-sm font-medium text-ink-70">
                <span className="flex items-center gap-1.5">
                  <FaBed size={15} />
                  {beds} Bed
                </span>
                <span className="flex items-center gap-1.5">
                  <FaBath size={15} />
                  {baths} Baths
                </span>
                <span className="flex items-center gap-1.5">
                  <FaRulerCombined size={15} />
                  {sqft.toLocaleString()} Sqft
                </span>
              </div>

              {agent && (
                <div className="mb-7 rounded-xl border border-sand-dim bg-white p-4">
                  <p className="mb-0.5 font-ui text-xs uppercase tracking-wide text-ink-45">
                    Listed by
                  </p>
                  <p className="mb-3 font-heading text-base font-bold text-ink">
                    {agent.name}
                  </p>
                  <div className="space-y-1.5">
                    <a
                      href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2 font-body text-sm text-ink-70 transition-colors hover:text-olive"
                    >
                      <FaPhoneAlt size={12} /> {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 font-body text-sm text-ink-70 transition-colors hover:text-olive"
                    >
                      <FaEnvelope size={12} /> {agent.email}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="rounded-md bg-ink px-6 py-3.5 font-ui text-sm font-semibold text-sand
                             transition-colors hover:bg-[#153847]"
                >
                  Schedule Viewing
                </button>
                <button
                  type="button"
                  className="rounded-md border border-ink px-6 py-3.5 font-ui text-sm font-semibold text-ink
                             transition-colors hover:bg-ink hover:text-sand"
                >
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Portal>
  );
}
