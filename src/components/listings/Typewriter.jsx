"use client";

// components/Typewriter.jsx
//
// Types `text` in character by character, then fades in an optional italic
// `accent` word after. Extracted from HeroSection.jsx's inline Typewriter so
// both the home hero and this listings hero share one implementation.

import { motion } from "framer-motion";

export default function Typewriter({
  text,
  accent,
  charDelay = 0.045,
  startDelay = 0,
  accentClassName = "text-olive-light",
  className = "",
}) {
  const chars = text.split("");

  return (
    <motion.h1 className={className}>
      <span className="inline">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: startDelay + i * charDelay, duration: 0.05 }}
          >
            {/* Plain space, not \u00A0 — a non-breaking space has no line-break
                opportunity by spec, which is what was blocking wrapping on
                mobile. A regular " " inside its own <motion.span> is not
                collapsed by normal HTML whitespace rules (that only applies
                to whitespace-only text runs between elements, not a space
                that's the sole content of an element), so this still renders
                reliably while letting the browser wrap at it. */}
            {char}
          </motion.span>
        ))}
      </span>
      {accent && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: startDelay + chars.length * charDelay + 0.15,
            duration: 0.5,
          }}
          className={`italic font-normal ${accentClassName}`}
        >
          {" "}
          {accent}
        </motion.span>
      )}
    </motion.h1>
  );
}