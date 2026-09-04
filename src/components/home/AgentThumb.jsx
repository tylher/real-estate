"use client";

import { EASE } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HOVER_DELAY = 90;

export default function AgentThumb({ agent, onActivate }) {
  const timeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function handleEnter() {
    if (isMobile) return; // No hover on mobile
    
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(onActivate, HOVER_DELAY);
  }

  function handleLeave() {
    if (isMobile) return; // No hover on mobile
    
    clearTimeout(timeoutRef.current);
  }

  function handleClick() {
    onActivate(); // Click works on all devices
  }

  return (
    <motion.button
      layout
      layoutId={`agent-photo-${agent.id}`}
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={onActivate}
      onClick={handleClick}
      aria-label={`Show details for ${agent.name}`}
      className="relative h-full w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-sm sm:h-64 sm:w-40"
    >
      <motion.img
        layout
        src={agent.image}
        alt={agent.name}
        draggable={false}
        className="h-full w-full object-cover"
      />

      {/* Mobile-only name label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:hidden">
        <span className="font-display text-sm text-ice">{agent.name}</span>
      </div>
    </motion.button>
  );
}