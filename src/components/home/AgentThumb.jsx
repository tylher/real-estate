"use client";

import { EASE } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";

// Small delay before activating on hover. Without this, activating a thumb
// reflows the row under the cursor — the mouse can end up over a *different*
// thumb that just slid into place, re-triggering onMouseEnter and causing
// rapid back-and-forth activation that looks like images flickering/disappearing.
const HOVER_DELAY = 90;

export default function AgentThumb({ agent, onActivate }) {
  const timeoutRef = useRef(null);

  function handleEnter() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(onActivate, HOVER_DELAY);
  }

  function handleLeave() {
    clearTimeout(timeoutRef.current);
  }

  return (
    <motion.button
      layout
      layoutId={`agent-photo-${agent.id}`}
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={onActivate}
      aria-label={`Show details for ${agent.name}`}
      className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-sm sm:h-64 sm:w-40"
    >
      {/* `layout` here is the key fix: without it, this image doesn't get
          Framer Motion's scale-correction during the parent's layoutId
          transition and can render clipped/invisible for a few frames. */}
      <motion.img
        layout
        src={agent.image}
        alt={agent.name}
        draggable={false}
        className="h-full w-full object-cover"
      />
    </motion.button>
  );
}
