"use client";

import React, { useState, useMemo } from "react";
import type { CapabilityItem } from "@/lib/capabilities";
import { CapabilityCard } from "@/components/capability-card";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface CapabilityGridProps {
  capabilities: CapabilityItem[];
  enableFilters?: boolean;
  className?: string;
}

export const CapabilityGrid: React.FC<CapabilityGridProps> = ({
  capabilities,
  enableFilters = true,
  className = "",
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const statusFilters = [
    { id: "all", label: "All Capabilities", count: capabilities.length },
    {
      id: "current",
      label: "Engineering Focus",
      count: capabilities.filter((c) => c.statusType === "current").length,
    },
    {
      id: "service",
      label: "Potential Service Areas",
      count: capabilities.filter((c) => c.statusType === "service").length,
    },
    {
      id: "research",
      label: "Planned Research",
      count: capabilities.filter((c) => c.statusType === "research").length,
    },
  ];

  const filteredCapabilities = useMemo(() => {
    return capabilities.filter((item) => {
      const matchesStatus =
        selectedStatus === "all" || item.statusType === selectedStatus;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesStatus;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        item.useCases.some((uc) => uc.title.toLowerCase().includes(query));

      return matchesStatus && matchesSearch;
    });
  }, [capabilities, selectedStatus, searchQuery]);

  return (
    <div className={`w-full ${className}`}>
      {enableFilters && (
        <div className="mb-8 flex flex-col items-stretch justify-between gap-4 sm:mb-10 md:flex-row md:items-center">
          {/* Status Filter Tabs */}
          <div
            role="group"
            aria-label="Filter capabilities by status"
            className="flex w-full min-w-0 max-w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-none md:w-auto md:pb-0"
          >
            {statusFilters.map((tab) => {
              const isSelected = selectedStatus === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedStatus(tab.id)}
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

          {/* Search Box */}
          <div className="relative w-full shrink-0 md:w-72">
            <label htmlFor="capability-search" className="sr-only">
              Search capabilities
            </label>
            <Search aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A5B2CC]" />
            <input
              id="capability-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, e.g. Python, Next.js..."
              className="min-h-11 w-full rounded-full border border-[#263650] bg-[#10192B] py-2 pl-9 pr-11 text-sm text-[#F4F6FF] placeholder:text-[#A5B2CC] transition-colors focus-visible:border-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear capability search"
                onClick={() => setSearchQuery("")}
                className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#A5B2CC] transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#40D6C5]"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Capabilities Grid */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {filteredCapabilities.length} {filteredCapabilities.length === 1 ? "capability" : "capabilities"} shown.
      </p>
      {filteredCapabilities.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredCapabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#263650] bg-[#10192B] px-4 py-12 text-center sm:px-8 sm:py-16">
          <SlidersHorizontal aria-hidden="true" className="mx-auto mb-3 h-8 w-8 text-[#40D6C5]" />
          <h2 className="text-base font-semibold text-[#F4F6FF]">
            No matching capabilities found
          </h2>
          <p className="mt-2 text-sm text-[#A5B2CC]">
            {searchQuery
              ? `No capabilities match "${searchQuery}" in the selected filter.`
              : "No capabilities are available in the selected status."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedStatus("all");
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
