"use client";

import { COMPANY } from "@/data/home";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight, LuAward } from "react-icons/lu";

const EASE = [0.16, 1, 0.3, 1];
const DROP_EASE = [0.22, 1, 0.36, 1];

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-stretch">
        <OverviewImage />
        <OverviewContent />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Image — fills its flex column, parallax drift + cinematic grade    */
/* ------------------------------------------------------------------ */
function OverviewImage() {
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  // Image drifts opposite to scroll for parallax depth.
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  // Slight breathing scale so the drift never exposes an edge.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.08, 1.18]);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative h-[420px] w-full overflow-hidden lg:h-auto lg:min-h-[600px] lg:flex-1 lg:self-stretch"
    >
      <motion.img
        src={COMPANY.image}
        alt={COMPANY.imageAlt}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic grade — bottom-weighted dark gradient + inner vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/55" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_50px_rgba(12,38,49,0.55)]" />

      {/* Curtain wipe reveal on first scroll into view */}
      <motion.div
        className="absolute inset-0 origin-bottom bg-ink"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      />

      {/* Floating credential badge, sits clear of the content overlap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
        className="glass-panel absolute bottom-8 left-8 flex items-center gap-3 rounded-2xl px-5 py-4"
      >
        <LuAward className="h-6 w-6 shrink-0 text-clay" strokeWidth={1.75} />
        <div>
          <p className="font-heading text-xl leading-none text-sand">
            {COMPANY.badge.value}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-sand-70">
            {COMPANY.badge.label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Content — slides in from the right, settles ~20% over the image    */
/* ------------------------------------------------------------------ */
function OverviewContent() {
  return (
    <motion.div
      initial={{ x: "35%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative z-10 flex flex-col justify-center bg-ink px-8 py-12 sm:px-12
                 lg:-ml-[20%] lg:w-[46%] lg:flex-none lg:px-14 lg:py-14
                 lg:shadow-[-50px_0_90px_-30px_rgba(12,38,49,0.55)]"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="eyebrow eyebrow-on-dark mb-3"
      >
        {COMPANY.eyebrow}
      </motion.span>

      {/* Headline drops into place */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: DROP_EASE }}
        className="mb-4 font-heading text-3xl leading-[1.15] text-sand sm:text-4xl"
      >
        Built on trust, <span className="text-clay">driven</span> by results.
      </motion.h2>

      {/* Description fades up */}
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        className="mb-6 max-w-md text-sm leading-relaxed text-sand-70"
      >
        {COMPANY.description}
      </motion.p>

      <div className="mb-6 grid grid-cols-3 gap-4 border-y border-sand/15 py-4">
        {COMPANY.stats.map((stat, i) => (
          <CountStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={0.5 + i * 0.12}
          />
        ))}
      </div>

      <motion.a
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
        href={COMPANY.ctaHref}
        className="btn btn-primary w-fit"
      >
        {COMPANY.ctaLabel} <LuArrowUpRight className="h-4 w-4" />
      </motion.a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Count-up stat — counts from 0 to its target once it enters view    */
/* ------------------------------------------------------------------ */
function CountStat({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const { prefix, target, suffix, decimals } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Number(v.toFixed(decimals)));
      },
    });
    return () => controls.stop();
  }, [isInView, target, delay, decimals]);

  return (
    <div ref={ref}>
      <p className="font-heading text-2xl text-olive-light">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-wide text-sand-70">
        {label}
      </p>
    </div>
  );
}

// Splits "15+", "98%", "$2.4B" etc. into a numeric target plus the
// surrounding prefix/suffix, so any stat string can be counted up.
function parseStatValue(raw) {
  const str = String(raw);
  const match = str.match(/^([^0-9.]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: str, decimals: 0 };

  const [, prefix, numberPart, suffix] = match;
  const decimals = numberPart.includes(".")
    ? numberPart.split(".")[1].length
    : 0;
  return { prefix, target: parseFloat(numberPart), suffix, decimals };
}
