"use client";

import { EASE } from "@/lib/motion";
import { motion } from "framer-motion";

/**
 * AgentActiveCard
 * Fills its parent (the fixed-size wrapper in AgentsSection) via absolute
 * inset-0 rather than setting its own width/height. That keeps the wrapper's
 * box completely stable regardless of the layoutId FLIP transform happening
 * to this element — which is what AgentDetailPanel anchors its position to.
 */
export default function AgentActiveCard({ agent }) {
  return (
    <motion.div
      layout
      layoutId={`agent-photo-${agent.id}`}
      transition={{ layout: { duration: 0.6, ease: EASE } }}
      className="absolute inset-0 overflow-hidden rounded-2xl  shadow-sm"
    >
      <motion.img
        layout
        src={agent.image}
        alt={agent.name}
        draggable={false}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}
