"use client";

import { SAMPLE_PROPERTIES } from "@/data/listings";
import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import PropertyCard from "../home/PropertyCard";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import PropertyDetailModal from "./PropertyModal";

export default function PropertiesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Client‑side filtering
  const filteredProperties = useMemo(() => {
    if (!searchQuery.trim()) return SAMPLE_PROPERTIES;
    const lowerQ = searchQuery.toLowerCase();
    return SAMPLE_PROPERTIES.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQ) ||
        p.location.toLowerCase().includes(lowerQ),
    );
  }, [searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = filteredProperties.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset to page 1 when search or page size changes
  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (size) => {
    setItemsPerPage(size);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-sand-light px-4 py-10 md:px-8 lg:px-12" id="properties">
      <div className="mx-auto max-w-7xl">
        {/* Header + Search */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-heading text-3xl font-bold text-ink md:text-4xl">
            Properties
          </h1>
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by property, neighborhood, or city..."
          />
        </div>

        {/* Property Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProperties.map((property, idx) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={idx}
              onOpen={(p) => setSelectedProperty(p)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProperties.length === 0 && (
          <div className="mt-20 text-center text-ink-45">
            <p className="font-ui text-lg">No properties match your search.</p>
          </div>
        )}

        {/* Pagination (only when needed) */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          pageSize={itemsPerPage}
          onPageSizeChange={handlePageSizeChange}
          totalItems={filteredProperties.length}
        />
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <PropertyDetailModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
