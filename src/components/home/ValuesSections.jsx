"use client";

import { values } from "@/data/home";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Eyebrow } from "./Eyebrow";
import { ValueCard } from "./ValueCard";

const DEFAULT_ACTIVE = 0;

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [topRef, topInView] = useInView(0.3);

  return (
    <section className="bg-sand-dim py-16 px-5 md:py-22 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        {/* Header Section */}
        <div
          ref={topRef}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-10 pb-8 md:mb-14 md:pb-11 border-b border-sand-dim"
        >
          {/* Left Block */}
          <div className="max-w-[660px]">
            <Eyebrow inView={topInView}>Why Choose Us</Eyebrow>
            <h2
              className={`font-heading font-bold text-3xl md:text-[48px] leading-snug text-ink transition-all duration-800 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                topInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Real estate, handled with{" "}
              <em className="italic font-normal text-olive">precision</em> - not
              guesswork.
            </h2>
          </div>

          {/* Right Block */}
          <div className="flex flex-col items-start gap-5.5 max-w-full md:max-w-[390px]">
            <p
              className={`font-body text-base md:text-lg font-medium leading-relaxed text-ink-70 m-0 transition-all duration-800 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                topInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              From first search to closing day, every step is built around
              clarity, craft, and the numbers to back it up.
            </p>

            <Link
              className={`btn btn-dark transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                topInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              href="#agents"
            >
              Meet the Team
              <FiArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Dynamic Expanding Card Grid */}
        <div className="flex flex-col gap-4 md:h-[460px] md:flex-row">
          {values.map((value, i) => (
            <ValueCard
              key={value.id}
              value={value}
              index={i}
              active={i === activeIndex}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(DEFAULT_ACTIVE)}
              onToggle={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
