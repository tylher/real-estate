"use client";

// components/ListingsHero.jsx
//
// The reference's "glass feel" comes from two things: a bordered,
// blurred, semi-transparent panel framing the content, and translucent
// pill buttons (not solid ones). Replicated here via .glass-panel and
// .btn-glass (design-guide.css) rather than one-off inline styles, so the
// same treatment can be reused anywhere else a photo needs UI on top of it.

import { listingsHero } from "@/data/listings";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "./Typewriter";

// Rough time (seconds) for the headline to finish typing + accent settle,
// so the CTA doesn't fade in mid-type.
const TYPING_DURATION = listingsHero.headlineMain.length * 0.045 + 0.85;

export default function ListingsHero() {
  return (
    <section className="bg-sand ">
      <div className="relative h-full min-h-[600px] w-full overflow-hidden  bg-ink">
        <Image
          src={listingsHero.image}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />

        {/* Glass panel — inset from the photo's edges, like the bordered
            card in the reference, rather than content sitting flush */}
        <div className="absolute inset-4 z-10 flex items-end sm:inset-8 lg:inset-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel w-full rounded-[28px] px-6 py-10 sm:px-10 sm:py-24 lg:px-14"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 font-ui text-sm uppercase tracking-[0.14em] text-sand-70"
            >
              {listingsHero.eyebrow}
            </motion.p>

            <Typewriter
              text={listingsHero.headlineMain}
              accent={listingsHero.headlineAccent}
              startDelay={0.6}
              className="max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] font-heading font-bold leading-[1.05] text-sand"
            />

            <motion.a
              href={listingsHero.cta.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: TYPING_DURATION }}
              className="btn btn-glass mt-8 w-fit"
            >
              {listingsHero.cta.label}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
