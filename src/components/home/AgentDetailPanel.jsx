"use client";

import { EASE } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { LuMail, LuPhone } from "react-icons/lu";

export default function AgentDetailPanel({ agent, panelOnRight }) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      className={`absolute inset-0 z-20 flex text-sand/85 md:text-ink items-end p-4 sm:inset-auto sm:top-0 sm:flex sm:w-80 sm:items-start sm:p-0 ${
        panelOnRight ? "sm:left-full sm:ml-6" : "sm:right-full sm:mr-6"
      }`}
    >
      <div className="w-full rounded-2xl border border-white/10 bg-background/90 p-4 shadow-lg backdrop-blur-xl [-webkit-backdrop-filter:blur(20px)] supports-[backdrop-filter]:bg-background/55 sm:bg-background/90 sm:p-6 sm:shadow-lg sm:backdrop-blur-md sm:[-webkit-backdrop-filter:blur(12px)] sm:supports-[backdrop-filter]:bg-background/70">
        <AnimatePresence mode="wait">
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p className="text-sm leading-relaxed text-ice-muted sm:text-lg">
              &ldquo;{agent.bio}&rdquo;
            </p>

            <span className="my-3 block h-px w-8 bg-orange sm:my-5 sm:w-10" />

            <p className="font-display text-lg text-ice sm:text-xl">{agent.name}</p>
            <p className="mt-0.5 text-xs text-ice-dim sm:mt-1 sm:text-sm">{agent.title}</p>

            <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 sm:mt-4 sm:gap-1.5 sm:pt-4">
              <a
                href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-1.5 text-xs text-ice-muted transition-colors hover:text-orange sm:gap-2 sm:text-sm"
              >
                <LuPhone className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={1.75} />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-1.5 text-xs text-ice-muted transition-colors hover:text-orange sm:gap-2 sm:text-sm"
              >
                <LuMail className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={1.75} />
                {agent.email}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}