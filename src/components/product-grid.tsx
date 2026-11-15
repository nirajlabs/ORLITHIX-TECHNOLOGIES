"use client";

import React, { useState, useMemo } from "react";
import type { ProductItem } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface ProductGridProps {
  products: ProductItem[];
  enableFilters?: boolean;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  enableFilters = true,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Products", count: products.length },
    {
      id: "AI & ML",
      label: "AI & ML",
      count: products.filter((p) => p.category === "AI & ML").length,
    },
    {
      id: "Enterprise Software",
      label: "Enterprise Software",
      count: products.filter((p) => p.category === "Enterprise Software").length,
    },
    {
      id: "Data Intelligence",
      label: "Data Intelligence",
      count: products.filter((p) => p.category === "Data Intelligence").length,
    },
    {
      id: "Automation",
      label: "Automation",
      count: products.filter((p) => p.category === "Automation").length,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Must be published (double check safeguard)
      if (!item.published) return false;

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.problemStatement.toLowerCase().includes(query) ||
        item.solution.toLowerCase().includes(query) ||
        item.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className={`w-full ${className}`}>
      {enableFilters && (
        <div className="mb-8 flex flex-col items-stretch justify-between gap-4 sm:mb-10 lg:flex-row lg:items-center">
          {/* Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter products by category"
            className="flex w-full min-w-0 max-w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-none lg:w-auto lg:pb-0"
          >
            {categories.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`inline-flex min-h-11 shrink-0 select-none items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-mono font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5] ${
                    isSelected
                      ? "border-[#586BFF] bg-[#586BFF] text-[#F4F6FF]"
                      : "bg-[#10192B] text-[#A5B2CC] border-[#263650] hover:text-[#F4F6FF] hover:border-[#586BFF]/40"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isSelected
                        ? "bg-[#080D1B] text-[#F4F6FF]"
                        : "bg-[#121F36] text-[#A5B2CC]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full shrink-0 lg:w-72">
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <Search aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A5B2CC]" />
            <input
              id="product-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or tech stack..."
              className="min-h-11 w-full rounded-full border border-[#263650] bg-[#10192B] py-2 pl-9 pr-11 text-sm text-[#F4F6FF] placeholder:text-[#A5B2CC] transition-colors focus-visible:border-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear product search"
                onClick={() => setSearchQuery("")}
                className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#A5B2CC] transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#40D6C5]"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {filteredProducts.length} published {filteredProducts.length === 1 ? "product" : "products"} shown.
      </p>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#263650] bg-[#10192B] px-4 py-12 text-center sm:px-8 sm:py-16">
          <SlidersHorizontal aria-hidden="true" className="mx-auto mb-3 h-8 w-8 text-[#40D6C5]" />
          <h2 className="text-base font-semibold text-[#F4F6FF]">
            No matching product concepts found
          </h2>
          <p className="mt-2 text-sm text-[#A5B2CC]">
            {searchQuery
              ? `No products match "${searchQuery}" in the selected category.`
              : "There are no published products in the selected category."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-[#263650] bg-[#121F36] px-4 text-xs font-medium text-[#40D6C5] transition-colors hover:border-[#40D6C5]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};
