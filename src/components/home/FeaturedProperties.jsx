import { properties } from "@/data/home";
import PropertyCard from "./PropertyCard";

/**
 * FeaturedProperties
 * Home page section, styled with Tailwind utilities on the theme tokens.
 * Server component — the client-only bits (motion, hover) live inside
 * PropertyCard, so this stays a plain server component.
 * Renders 3–6 cards from `properties`; the grid reflows automatically.
 */
export default function FeaturedProperties() {
  return (
    <section className="bg-sand px-6 py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-11 flex flex-col gap-3.5">
          <span className="eyebrow">Featured Listings</span>
          <h2 className="max-w-[560px] font-heading text-[clamp(28px,3.4vw,42px)] font-bold leading-tight tracking-tight text-ink">
            Handpicked homes worth a second look
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
