"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { LuCheck, LuX } from "react-icons/lu";

const EASE = [0.16, 1, 0.3, 1];

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Message Sent!",
  description = "Thanks for reaching out. Our team will get back to you within one business day.",
  actionLabel = "Done",
}) {
  // Escape to close + lock page scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.35, ease: EASE }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            className="relative w-full max-w-sm rounded-[28px] bg-white p-8 text-center shadow-[0_40px_90px_-30px_rgba(12,38,49,0.45)] sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-45 transition-colors duration-200 hover:bg-sand hover:text-ink"
            >
              <LuX className="h-4 w-4" />
            </button>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.45,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive/10 text-olive"
            >
              <LuCheck className="h-7 w-7" strokeWidth={2.25} />
            </motion.div>

            <motion.h3
              id="success-modal-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
              className="mt-5 font-heading text-xl text-ink sm:text-2xl"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4, ease: EASE }}
              className="mt-3 text-sm leading-relaxed text-ink-45"
            >
              {description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.4, ease: EASE }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="btn btn-primary mt-7 w-full justify-center"
            >
              {actionLabel}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
