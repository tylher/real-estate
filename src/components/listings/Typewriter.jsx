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
            {char === " " ? "\u00A0" : char}
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
