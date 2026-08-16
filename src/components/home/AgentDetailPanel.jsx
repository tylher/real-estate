"use client";

import { EASE } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { LuMail, LuPhone } from "react-icons/lu";

/**
 * AgentDetailPanel
 * No longer a flex sibling in the image row — it's absolutely positioned
 * against its parent wrapper (see AgentsSection: the <div className="relative">
 * around AgentActiveCard). That keeps it out of the row's gap math entirely,
 * so the images stay evenly spaced no matter which agent is active.
 *
 * `panelOnRight` decides which side it's pinned to:
 * - true  -> sits just right of the active card (left-full + ml matching the row gap)
 * - false -> sits just left of the active card (right-full + mr matching the row gap)
 * Either way it layers (z-20) above whatever thumbnail happens to be underneath it.
 */
export default function AgentDetailPanel({ agent, panelOnRight }) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      className={`relative w-full py-4 sm:absolute sm:top-0 sm:z-20 sm:w-80 sm:py-0 ${
        panelOnRight ? "sm:left-full sm:ml-6" : "sm:right-full sm:mr-6"
      }`}
    >
      <div className="w-full rounded-2xl sm:bg-background/90 sm:p-6 sm:shadow-lg sm:backdrop-blur-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p className="text-base leading-relaxed text-ice-muted sm:text-lg">
              &ldquo;{agent.bio}&rdquo;
            </p>

            <span className="my-5 block h-px w-10 bg-orange" />

            <p className="font-display text-xl text-ice">{agent.name}</p>
            <p className="mt-1 text-sm text-ice-dim">{agent.title}</p>

            <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-4">
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
        </AnimatePresence>
      </div>
    </motion.div>
  );
}