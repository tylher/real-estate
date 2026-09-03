"use client";

import { useInView } from "@/hooks/useInView";

// Flex-basis (width) and height are what make the card "expand" — those get
// a slower, weightier transition than opacity/transform (the scroll-reveal),
// so the two don't fight for attention. Kept as a plain style string rather
// than Tailwind's transition-all because each property needs its own speed.
const CARD_TRANSITION =
  "flex 1100ms cubic-bezier(0.16,1,0.3,1), height 1100ms cubic-bezier(0.16,1,0.3,1), opacity 700ms ease, transform 700ms ease";

// MOBILE PASS — the expand/collapse interaction (hover-to-grow, collapsed
// vertical title, frosted panel fading in/out) is now entirely a desktop
// (md: and up) behavior. On mobile the card just renders at a fixed
// "normal" height with the frosted title/description panel permanently
// visible — no toggle, no active-driven state — and the only animation
// left is the existing scroll-reveal fade-up (`inView`), which already
// worked identically at every breakpoint and needed no changes.
//
// This is done purely with `md:`-scoped Tailwind classes rather than a
// JS viewport check: every class that used to depend on `active` now
// only takes effect at md: and up, so on a phone `active` has no visible
// effect at all — the card looks the same whether or not it's the
// "active" one. onClick/onMouseEnter/etc. are still wired the same as
// before (harmless on mobile since nothing visually reacts to them
// there); this keeps the component simple without needing a
// matchMedia-based "is this desktop" hook just to unwire them.
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

        /* Mobile: fixed "normal" height, no expand/collapse.
           Desktop: flex expansion driven by active/hover. */
        w-full h-[300px] md:w-auto md:h-full
        ${active ? "md:flex-[3.4_1_340px]" : "md:flex-[0_1_100px] md:min-w-[150px] hover:md:flex-[3.4_1_340px]"}

        /* Scroll-reveal state — identical at every breakpoint */
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Background Image & Scrim */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          draggable={false}
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 ${
            active ? "md:scale-100" : "md:scale-108 md:group-hover:scale-100"
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

      {/* Collapsed Title (desktop only — vertical, rotated, hides when
          active/hovered). Never shown on mobile: the card is always in
          its "full" state there, so there's no collapsed title to show. */}
      <span
        className={`
          absolute z-10 hidden font-heading font-bold text-sand transition-opacity duration-[350ms] ease-in-out
          md:block md:left-5.5 md:bottom-5.5 md:max-h-[calc(100%-84px)] md:overflow-hidden md:whitespace-nowrap md:text-[22px] md:[writing-mode:vertical-rl] md:rotate-180
          ${active ? "md:opacity-0" : "md:opacity-100 md:group-hover:opacity-0"}
        `}
      >
        {title}
      </span>

      {/* Expanded Frosted Panel — always visible on mobile (no border,
          strong frost, sits over the scrim). On desktop it fades in/out
          with the active/hover state, same as before. */}
      <div
        className={`
          absolute inset-x-0 bottom-0 z-20 rounded-b-[30px] bg-ink/30 p-6
          backdrop-blur-2xl backdrop-saturate-150
          opacity-100 translate-y-0
          md:transition-all md:duration-500 md:delay-[120ms] md:ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            active
              ? "md:translate-y-0 md:opacity-100"
              : "md:pointer-events-none md:translate-y-3 md:opacity-0"
          }
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
