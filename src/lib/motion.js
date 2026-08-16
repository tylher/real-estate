/**
 * Shared Framer Motion variants.
 * Import into any section so animation timing/easing stays consistent.
 */

export const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

/**
 * Returns a container variant that staggers its children.
 * Usage: <motion.div variants={staggerContainer()} initial="hidden" whileInView="show">
 */
export function staggerContainer(stagger = 0.12, delay = 0) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}
