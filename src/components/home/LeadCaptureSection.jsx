"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

/**
 * LeadCaptureSection
 * "Get notified about new listings" opt-in card styled after the reference
 * layout: dark card, image fading into the panel on the left, light form
 * fields stacked on the right.
 *
 * Cinematic scroll effect: as the card travels through the viewport, the
 * background image scales up gently (1 -> ~1.12) via useScroll/useTransform,
 * so it feels like the shot is slowly pushing in rather than sitting static.
 */

const FIELDS = [
  { id: "fullName", label: "Full Name", type: "text", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
  { id: "phone", label: "Phone Number", type: "tel", required: false },
  { id: "location", label: "Preferred Location", type: "text", required: true },
];

const PROPERTY_TYPES = ["Buy", "Rent", "Invest"];

const leftVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const leftItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const formItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LeadCaptureSection() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle "push in" as the card scrolls through view — scale only, kept small.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your API/email service.
    setSubmitted(true);
  }

  return (
    <section className="bg-sand px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          ref={cardRef}
          className="relative overflow-hidden rounded-[28px] bg-ink"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left — image + copy */}
            <div className="relative flex min-h-[420px] flex-col justify-start overflow-hidden p-10 md:min-h-[560px] md:p-14">
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/home-1.jpg"
                  alt="City skyline at dusk"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-ink/70 to-ink" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                className="relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={leftVariants}
              >
                <motion.span
                  variants={leftItem}
                  className="eyebrow eyebrow-on-dark"
                >
                  Stay Ahead
                </motion.span>

                <motion.h2
                  variants={leftItem}
                  className="mt-4 font-ui text-[clamp(28px,3.8vw,44px)] font-bold uppercase leading-[1.15] tracking-tight text-sand"
                >
                  Get Notified
                  <br />
                  Before Anyone Else
                </motion.h2>

                <motion.p
                  variants={leftItem}
                  className="mt-5 max-w-[300px] font-body text-sm leading-relaxed text-sand-70"
                >
                  Tell us what you're looking for and we'll email you the moment
                  a matching listing goes live — often before it's public.
                </motion.p>
              </motion.div>
            </div>

            {/* Right — form */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-14">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-body text-sand"
                >
                  <p className="font-heading text-xl font-bold text-sand">
                    You're on the list.
                  </p>
                  <p className="mt-2 text-sm text-sand-70">
                    We'll email you the moment a listing matches what you're
                    after.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={formVariants}
                >
                  {FIELDS.map((field) => (
                    <motion.input
                      key={field.id}
                      variants={formItem}
                      type={field.type}
                      name={field.id}
                      required={field.required}
                      placeholder={`${field.label}${field.required ? "*" : ""}`}
                      className="w-full rounded-lg bg-sand px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink-45 outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-olive"
                    />
                  ))}

                  <motion.div variants={formItem} className="relative">
                    <select
                      name="propertyType"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg bg-sand px-4 py-3.5 font-body text-sm text-ink outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-olive"
                    >
                      <option value="" disabled>
                        Property Type*
                      </option>
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <LuChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-45"
                    />
                  </motion.div>

                  <motion.label
                    variants={formItem}
                    className="mt-1 flex items-center gap-2.5 font-ui text-[13px] text-sand-70"
                  >
                    <input
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-sand-dim accent-olive"
                    />
                    I agree to receive updates and accept the Privacy Policy
                  </motion.label>

                  <motion.button
                    variants={formItem}
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-primary mt-2 w-full justify-center"
                  >
                    Notify Me
                  </motion.button>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
