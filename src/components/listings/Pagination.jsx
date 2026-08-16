"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_SIZE_OPTIONS = [4, 8, 12, 16, 24];

/**
 * Builds a condensed page list like: 1, 2, 3, …, 9, 10
 * so large result sets don't render a button per page.
 */
function getPageList(current, total) {
  const pages = [];
  const spread = 1; // pages shown on either side of current

  for (let p = 1; p <= total; p++) {
    const isEdge = p === 1 || p === total;
    const isNearCurrent = Math.abs(p - current) <= spread;
    if (isEdge || isNearCurrent) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalItems,
}) {
  if (totalItems === 0) return null;

  const pages = getPageList(currentPage, totalPages);

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-sand-dim pt-8 sm:flex-row">
      <p className="font-body text-sm text-ink-45">
        Showing {Math.min((currentPage - 1) * pageSize + 1, totalItems)}–
        {Math.min(currentPage * pageSize, totalItems)} of {totalItems}{" "}
        properties
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-dim
                     text-ink-70 transition-colors hover:border-olive hover:text-olive
                     disabled:pointer-events-none disabled:opacity-40"
        >
          <FaChevronLeft size={11} />
        </button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="px-1.5 font-ui text-sm text-ink-45"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 font-ui text-sm font-medium transition-colors ${
                p === currentPage
                  ? "bg-ink text-sand"
                  : "text-ink-70 hover:bg-sand-dim/60"
              }`}
            >
              {p}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-dim
                     text-ink-70 transition-colors hover:border-olive hover:text-olive
                     disabled:pointer-events-none disabled:opacity-40"
        >
          <FaChevronRight size={11} />
        </button>
      </div>

      <label className="flex items-center gap-2 font-body text-sm text-ink-70">
        Show
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="rounded-md border border-sand-dim bg-white px-2 py-1.5 font-ui text-sm text-ink
                     outline-none focus:ring-2 focus:ring-olive"
        >
          {PAGE_SIZE_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        per page
      </label>
    </div>
  );
}
