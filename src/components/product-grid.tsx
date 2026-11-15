"use client";

import React, { useState, useMemo } from "react";
import type { ProductItem } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Search, SlidersHorizontal } from "lucide-react";

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
        <div className="mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-none">
            {categories.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border whitespace-nowrap select-none ${
                    isSelected
                      ? "bg-[#586BFF] text-[#F4F6FF] border-[#586BFF] shadow-[0_0_15px_rgba(88,107,255,0.4)]"
                      : "bg-[#10192B] text-[#A5B2CC] border-[#263650] hover:text-[#F4F6FF] hover:border-[#586BFF]/40"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
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
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A5B2CC]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or tech stack..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-[#10192B] border border-[#263650] text-xs font-mono text-[#F4F6FF] placeholder-[#A5B2CC]/50 focus:outline-none focus:border-[#586BFF] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A5B2CC] hover:text-[#F4F6FF]"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-[#10192B] border border-[#263650]">
          <SlidersHorizontal className="w-8 h-8 text-[#586BFF] mx-auto mb-3 opacity-60" />
          <h4 className="text-base font-bold text-[#F4F6FF]">
            No matching product concepts found
          </h4>
          <p className="mt-1 text-xs text-[#A5B2CC]">
            No products match the search &quot;{searchQuery}&quot; in the selected category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-1.5 rounded-lg bg-[#121F36] border border-[#263650] text-xs font-mono text-[#40D6C5] hover:border-[#40D6C5]/50 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
