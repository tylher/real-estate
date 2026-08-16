"use client";

export function Eyebrow({ children, onDark = false, inView = true }) {
  return (
    <div
      className={` mb-4.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-clay-dark font-bold ${
        onDark ? "eyebrow-on-dark" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      {children}
    </div>
  );
}
