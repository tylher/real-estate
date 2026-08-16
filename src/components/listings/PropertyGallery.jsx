"use client";

import { useState } from "react";
import Image from "next/image";

export default function PropertyGallery({ images, title }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative h-[260px] w-full overflow-hidden rounded-xl sm:h-[360px]">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${title} — photo ${active + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === active}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                i === active ? "border-olive" : "border-transparent"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
