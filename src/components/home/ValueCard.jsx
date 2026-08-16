"use client";

import { useInView } from "@/hooks/useInView";

// Flex-basis (width) and height are what make the card "expand" — those get
// a slower, weightier transition than opacity/transform (the scroll-reveal),
// so the two don't fight for attention. Kept as a plain style string rather
// than Tailwind's transition-all because each property needs its own speed.
const CARD_TRANSITION =
  "flex 1100ms cubic-bezier(0.16,1,0.3,1), height 1100ms cubic-bezier(0.16,1,0.3,1), opacity 700ms ease, transform 700ms ease";

export function ValueCard({
  value,
  index = 0,
  active,
  onEnter,
  onLeave,
  onToggle,
}) {
  const [ref, inView] = useInView(0.15);
  const { number, title, description, image, icon: Icon } = value;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 90}ms`,
        transition: CARD_TRANSITION,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={!!active}
      aria-label={title}
      className={`
        group relative overflow-hidden rounded-[30px] bg-ink outline-none cursor-pointer select-none
        focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-olive

        /* Mobile height states & Desktop flex expansion */
        w-full h-[96px] md:w-auto md:h-full
        ${active ? "h-[300px] md:flex-[3.4_1_340px]" : "md:flex-[0_1_100px] md:min-w-[150px] hover:md:flex-[3.4_1_340px]"}

        /* Scroll-reveal state */
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Background Image & Scrim */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          draggable={false}
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            active ? "scale-100" : "scale-108 group-hover:scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink/90" />
      </div>

      {/* Number Label */}
      <span className="absolute left-5 top-5 z-10 font-ui text-[13px] font-medium tracking-wider text-sand-70">
        {number}
      </span>

      {/* Glassmorphic Icon Badge */}
      <span className="absolute right-4.5 top-4.5 z-10 flex h-8.5 w-8.5 items-center justify-center rounded-full border border-sand/30 bg-sand/14 text-sand backdrop-blur-md">
        <Icon size={16} strokeWidth={1.75} />
      </span>

      {/* Collapsed Title (vertical on desktop, horizontal on mobile) */}
      <span
        className={`
          absolute z-10 font-heading font-bold text-sand transition-opacity duration-[350ms] ease-in-out
          left-5 bottom-4.5 max-h-[calc(100%-84px)] overflow-hidden whitespace-nowrap text-base
          md:left-5.5 md:bottom-5.5 md:text-[22px] md:[writing-mode:vertical-rl] md:rotate-180
          ${active ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
        `}
      >
        {title}
      </span>

      {/* Expanded Frosted Panel — no border, stronger frost, sits over the scrim */}
      <div
        className={`
          absolute inset-x-0 bottom-0 z-20 rounded-b-[30px] bg-ink/30 p-6
          backdrop-blur-2xl backdrop-saturate-150
          transition-all duration-500 delay-[120ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}
        `}
      >
        <h3 className="mb-2 font-heading text-2xl font-bold text-olive-light">
          {title}
        </h3>
        <p className="m-0 font-body text-sm md:text-lg leading-relaxed text-sand/85 ">
          {description}
        </p>
      </div>
    </div>
  );
}
