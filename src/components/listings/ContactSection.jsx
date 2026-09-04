"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import SuccessModal from "../SuccessModal";

const EASE = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const CONTACT_ITEMS = [
  { icon: LuPhone, label: "Phone Number", value: "+234 805 787 2464" },
  { icon: LuMail, label: "Email", value: "info@barakhel.com" },
  {
    icon: LuMapPin,
    label: "Address",
    value: "97, Kujore Street, Off Ogudu Road, Ojota, Lagos.",
  },
];

const INITIAL_FORM = { firstName: "", lastName: "", contact: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{6,}$/;

function validateForm(data) {
  const errors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.lastName.trim()) errors.lastName = "Last name is required.";

  const contact = data.contact.trim();
  if (!contact) {
    errors.contact = "Enter an email or phone number.";
  } else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) {
    errors.contact = "Enter a valid email or phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Please write a message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending
  const [shake, setShake] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (status !== "idle") return;

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("idle");
      setModalOpen(true);
      setFormData(INITIAL_FORM);
    }, 1000);
  }

  return (
    <section className="bg-sand px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[28px] border border-sand-dim bg-white shadow-[0_30px_70px_-30px_rgba(12,38,49,0.18)] lg:grid-cols-2"
      >
        <ContactInfo />
        <ContactForm
          formData={formData}
          errors={errors}
          status={status}
          shake={shake}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </motion.div>

      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Message Sent!"
        description="Thanks for reaching out — our team will get back to you within one business day."
        actionLabel="Done"
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Left — info + contact details                                      */
/* ------------------------------------------------------------------ */
function ContactInfo() {
  return (
    <div className="border-b border-sand-dim bg-ink/90 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
      <motion.h2
        variants={fadeUp}
        className="font-heading text-2xl leading-[1.25] text-sand sm:text-[28px]"
      >
        Need more information?
        <br />
        Get in touch with us
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-sm text-sm leading-relaxed text-sand-70"
      >
        A connected set of services designed to turn strategy into scale.
      </motion.p>

      <div className="mt-10 flex flex-col gap-6">
        {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            whileHover="hover"
            className="flex items-start gap-4"
          >
            <motion.span
              variants={{
                hover: {
                  backgroundColor: "var(--color-olive)",
                  color: "var(--color-sand)",
                },
              }}
              transition={{ duration: 0.25, ease: EASE }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive/30 text-olive-light"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </motion.span>

            <div>
              <p className="font-ui text-[13px] font-medium text-sand">
                {label}
              </p>
              <p className="mt-0.5 max-w-[220px] text-[13px] leading-relaxed text-sand-70">
                {value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Right — send message form                                          */
/* ------------------------------------------------------------------ */
function ContactForm({ formData, errors, status, shake, onChange, onSubmit }) {
  return (
    <div className="p-8 sm:p-10 lg:p-12">
      <motion.h2
        variants={fadeUp}
        className="font-heading text-2xl text-ink sm:text-[28px]"
      >
        Send Message
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-sm text-sm leading-relaxed text-ink-45"
      >
        Please fill out the form below with your details and message to contact
        with us.
      </motion.p>

      <motion.form
        variants={fadeUp}
        onSubmit={onSubmit}
        noValidate
        animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="mt-8 flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            error={errors.firstName}
          />
          <FormField
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            error={errors.lastName}
          />
        </div>

        <FormField
          placeholder="Email or Phone Number"
          name="contact"
          value={formData.contact}
          onChange={onChange}
          error={errors.contact}
        />

        <FormField
          placeholder="Write Message Here..."
          name="message"
          as="textarea"
          rows={5}
          value={formData.message}
          onChange={onChange}
          error={errors.message}
        />

        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE }}
          disabled={status !== "idle"}
          className="btn btn-primary mt-2 w-fit disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "idle" ? (
            <>
              Send Message <LuSend className="h-4 w-4" />
            </>
          ) : (
            "Sending..."
          )}
        </motion.button>
      </motion.form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared input field — olive focus ring, inline validation message   */
/* ------------------------------------------------------------------ */
function FormField({
  as = "input",
  type = "text",
  placeholder,
  name,
  rows,
  value,
  onChange,
  error,
}) {
  const Tag = as;
  const baseClasses =
    "w-full rounded-lg border bg-sand/40 px-4 py-3 font-body text-sm text-ink " +
    "placeholder:text-ink-45 outline-none transition-colors duration-200 resize-none " +
    (error
      ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      : "border-sand-dim focus:border-olive focus:bg-white focus:ring-2 focus:ring-olive/20");

  return (
    <div>
      <Tag
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={baseClasses}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
