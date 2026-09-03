"use client";

// components/HeroSection.jsx
//
// MOBILE REWORK — mobile (<768px) no longer reuses the sky/building
// layered trick at all. It's a completely separate, simpler block:
//   - ONE image per slide (`slide.mobileImage`, falls back to
//     `slide.building` if you haven't added mobile-specific photos yet).
//   - The headline is back in NORMAL document flow — a plain heading
//     above the image, not absolutely positioned and sandwiched between
//     two image layers (z-0 sky / z-10 headline / z-20 building) the way
//     desktop does it.
//   - Subheading, meta, CTA, and slide indicators just stack underneath
//     in normal flow too.
// Desktop/tablet (md: and up) is completely untouched — same sky/
// building dual-layer hero, same slide.sectionHeight, same absolute
// positioning, exactly as before. The two layouts now live in separate
// markup blocks (toggled with `md:hidden` / `hidden md:block`) rather
// than trying to force one structure to serve both, since the mobile
// version isn't a smaller version of the desktop layout anymore — it's
// a fundamentally different one.
//
// Optional per-slide mobile fields (both safe to omit):
//   mobileImage       — the single photo shown on mobile.
//   mobileAspectRatio — box shape for that photo, e.g. "4/5", "1/1".
//                       Defaults to "4/5" if not set.

import { heroSlides } from "@/data/home";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 6500;

// Real aspect ratio of the building source photos (width / height).
// Keep this in sync with the actual files in /public/images/hero.
const BUILDING_ASPECT = 1110 / 741;

const phoneNumber = "2348057872464";
const message = "Hello! I would like to inquire about your services.";

// Safely encodes spaces and special characters for the URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = heroSlides[index];
  const mobileImage = slide.mobileImage || slide.building;
  const mobileAspectRatio = slide.mobileAspectRatio || "4/5";

  return (
    <section className="relative bg-ink">
      {/* ====================================================================
          MOBILE HERO (<768px) — normal flow, one image, no layering.
          ==================================================================== */}
      <div className="px-5 pb-10 pt-36 md:pt-12 md:hidden">
        {/* HEADLINE — plain, in normal flow, centered. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-headline-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Typewriter main={slide.headline} accent={slide.headlineAccent} />
          </motion.div>
        </AnimatePresence>

        {/* SINGLE IMAGE — one photo, no sky/building split. */}
        <div
          className="relative mt-6 w-full overflow-hidden rounded-[24px]"
          style={{ aspectRatio: mobileAspectRatio }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={`mobile-image-${slide.id}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={mobileImage}
                alt={slide.headline}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SUBHEADING + META */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <LiquidText
              key={`mobile-sub-${slide.id}`}
              text={slide.subheading}
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`mobile-meta-${slide.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-3 font-ui text-xs uppercase tracking-[0.1em] text-sand-70"
            >
              {slide.meta}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA — stacked full-width on mobile */}
        <div className="mt-8 flex flex-col gap-3">
          <a href="/listings" className="btn btn-primary w-full text-center">
            View Listings
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full text-center"
          >
            Book a Tour
          </a>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="mt-6 flex justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-olive" : "w-1.5 bg-sand-70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ====================================================================
          DESKTOP / TABLET HERO (md: and up) — unchanged sky/building
          layered version, exactly as before.
          ==================================================================== */}
      <div
        className="relative hidden min-h-[640px] md:block"
        style={{ height: slide.sectionHeight }}
      >
        {/*
          IMAGE CLIP WRAPPER — overflow-hidden lives HERE now, not on the
          section. That way the sky/building images stay clipped to the
          section's real (variable) height, while the foreground content
          layer below is free to position itself against a fixed 100vh
          regardless of how tall the section actually is.
        */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* SKY LAYER — z-0, always fills the full fixed-height hero */}
          <AnimatePresence mode="sync">
            <motion.div
              key={`sky-${slide.id}`}
              className="absolute inset-0 z-0 w-full"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={slide.sky}
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/35" />
            </motion.div>
          </AnimatePresence>

          {/* HEADLINE — z-10, sits between sky and building */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[25%] z-10 flex justify-center px-4 sm:top-[var(--headline-top)]"
            style={{
              "--headline-top": slide.headlineTop,
              top: slide.headlineTop,
            }}
          >
            <AnimatePresence mode="wait">
              <Typewriter
                key={`headline-${slide.id}`}
                main={slide.headline}
                accent={slide.headlineAccent}
              />
            </AnimatePresence>
          </div>

          {/* TAGS — top right, desktop only */}
          <div className="absolute right-6 top-8 z-20 hidden text-right font-ui text-xs uppercase tracking-[0.14em] text-sand-70 md:block lg:right-10">
            <AnimatePresence mode="wait">
              <motion.ul
                key={`tags-${slide.id}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
                className="space-y-1.5"
              >
                {slide.tags.map((tag) => (
                  <li key={tag}>— {tag}</li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/*
            BUILDING LAYER — z-20
            The critical fix: width is a % of the hero, height is DERIVED from
            that width via aspect-ratio (not set independently). That guarantees
            the image is never stretched or cropped out of proportion — it just
            scales as a whole, the way it would if it were one photo. Anchored
            to the bottom of the fixed-height hero so the "ground" always sits
            on the same line, regardless of slide.
          */}
          <AnimatePresence mode="sync">
            <motion.div
              key={`building-${slide.id}`}
              className="absolute left-0 z-20 w-[92%] max-w-[1400px] sm:w-screen"
              style={{
                aspectRatio: BUILDING_ASPECT,
                top: slide.top,
                // WebkitMaskImage:
                //   "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
                // maskImage:
                //   "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <Image
                src={slide.building}
                alt={slide.headline}
                fill
                priority
                className="object-contain object-bottom"
              />
              {/* legibility gradient for subheading, clipped to the same mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/*
          FOREGROUND CONTENT LAYER — back to h-screen, and NOT inside the
          overflow-hidden wrapper above. This is the piece that makes the
          subheading, CTA, and indicators sit at the exact same pixel
          position every slide, as if the hero were always 100vh — the
          clipping that used to cut this off when sectionHeight was short
          now only applies to the image layer, not this one.
        */}
        <div className="sticky inset-x-0 top-0 z-30 h-screen w-screen">
          {/* SUBHEADING — z-30, bottom-left, liquid wave-in */}
          <div className="absolute bottom-28 left-6 z-30 max-w-md sm:bottom-12 sm:left-10 md:max-w-lg">
            <AnimatePresence mode="wait">
              <LiquidText key={`sub-${slide.id}`} text={slide.subheading} />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`meta-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 font-ui text-xs uppercase tracking-[0.1em] text-sand-70"
              >
                {slide.meta}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA — z-30, persistent across all slides, no re-animation */}
          <div className="absolute bottom-8 right-6 z-30 flex gap-3 sm:bottom-10 sm:right-10">
            <a href="/listings" className="btn btn-primary">
              View Listings
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Book a Tour
            </a>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="absolute bottom-8 left-6 z-30 flex gap-2 sm:bottom-10 sm:left-10">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-olive" : "w-1.5 bg-sand-70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   TYPEWRITER HEADLINE
   ========================================================================== */

function Typewriter({ main, accent }) {
  const mainChars = main.split("");

  return (
    <motion.h1
      className="flex flex-wrap items-baseline justify-center gap-x-4 text-center font-heading font-black leading-[0.85] text-sand"
      style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
    >
      <span className="inline-flex">
        {mainChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.055, duration: 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: mainChars.length * 0.055 + 0.15, duration: 0.5 }}
        className="font-heading text-[0.4em] font-normal italic text-clay"
      >
        {accent}
      </motion.span>
    </motion.h1>
  );
}

/* ==========================================================================
   LIQUID WAVE SUBHEADING
   ========================================================================== */

function LiquidText({ text }) {
  const words = text.split(" ");

  return (
    <p className="flex flex-wrap font-body text-lg text-sand sm:text-xl">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.3em] inline-block"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.15 + i * 0.07,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
