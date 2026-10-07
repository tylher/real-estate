"use client";

import { AGENTS } from "@/data/home";
import { getAgentLayout } from "@/lib/AgentLayout";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AgentActiveCard from "./AgentActiveCard";
import AgentDetailPanel from "./AgentDetailPanel";
import AgentThumb from "./AgentThumb";

export default function AgentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(null);
  const isFirstRender = useRef(true);

  const { before, active, after, panelOnRight } = getAgentLayout(
    AGENTS,
    activeIndex,
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.innerWidth >= 640) return; // desktop is a row, no jump

    // wait for the 0.6s layout animation to settle, then re-centre the card
    const t = setTimeout(() => {
      activeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 650);

    return () => clearTimeout(t);
  }, [activeIndex]);
  return (
    <section id="agents" className="bg-background px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.14em] text-orange"
          >
            <span className="h-px w-6 bg-orange" />
            Meet The Team
            <span className="h-px w-6 bg-orange" />
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-ice sm:text-5xl"
          >
            The Agents Behind <span className="text-orange">Every Sale</span>
          </motion.h2>
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="flex flex-col items-center gap-3 overflow-x-auto scrollbar-none sm:flex-row sm:items-end sm:gap-6"
        >
          {before.map((agent) => {
            return (
              <AgentThumb
                key={agent.id}
                agent={agent}
                onActivate={() => setActiveIndex(AGENTS.indexOf(agent))}
              />
            );
          })}

          {/* Fixed, explicit size (matches AgentActiveCard's full-size
              dimensions exactly) — this box never changes regardless of
              what Framer Motion is doing internally to animate the card
              inside it. AgentDetailPanel's left-full/right-full anchors to
              THIS stable box, not to the animated card directly. */}
          <div
            ref={activeRef}
            className="relative h-96 w-full shrink-0 sm:h-[520px] sm:w-[340px]"
          >
            <AgentActiveCard key={active.id} agent={active} />
            <AgentDetailPanel agent={active} panelOnRight={panelOnRight} />
          </div>

          {after.map((agent) => (
            <AgentThumb
              key={agent.id}
              agent={agent}
              onActivate={() => setActiveIndex(AGENTS.indexOf(agent))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
