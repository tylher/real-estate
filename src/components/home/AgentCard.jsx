"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LuPhone, LuMail } from "react-icons/lu";
import { EASE } from "@/lib/motion";

export default function AgentCard({ agent, active, onActivate }) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      role="button"
      aria-expanded={active}
      aria-label={agent.name}
      className={[
        "relative w-full cursor-pointer overflow-hidden rounded-[24px]",
        "border border-white/10 outline-none focus-visible:border-orange/50",
        "sm:h-[440px]",
        active
          ? "h-[380px] sm:min-w-[300px] sm:flex-[3.4]"
          : "h-24 sm:min-w-[130px] sm:flex-[0.85]",
      ].join(" ")}
    >
      <img
        src={agent.image}
        alt={agent.name}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

      {/* Collapsed state — name + title only */}
      <AnimatePresence>
        {!active && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5"
          >
            <p className="truncate font-display text-sm text-ice">
              {agent.name}
            </p>
            <p className="truncate text-xs text-ice-dim">{agent.title}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded state — full glass detail panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
            className="glass absolute inset-x-4 bottom-4 rounded-2xl p-5"
          >
            <p className="font-display text-lg text-ice">{agent.name}</p>
            <p className="mb-3 text-xs uppercase tracking-wide text-orange">
              {agent.title}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-ice-muted">
              {agent.bio}
            </p>

            <div className="space-y-1.5 border-t border-white/10 pt-3">
              <a
                href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-sm text-ice-muted transition-colors hover:text-orange"
              >
                <LuPhone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-2 text-sm text-ice-muted transition-colors hover:text-orange"
              >
                <LuMail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                {agent.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
