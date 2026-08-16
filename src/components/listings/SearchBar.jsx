"use client";

import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by property, neighborhood, or city...",
}) {
  return (
    <div className="relative w-full max-w-xl">
      <FaSearch
        size={14}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-45"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-sand-dim bg-white py-3 pl-11 pr-4
                   font-body text-sm text-ink placeholder:text-ink-45
                   outline-none transition-shadow duration-200 focus:ring-2 focus:ring-olive"
      />
    </div>
  );
}
