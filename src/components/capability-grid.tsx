"use client";

import React, { useState, useMemo } from "react";
import { CapabilityItem, CapabilityStatusType } from "@/lib/capabilities";
import { CapabilityCard } from "@/components/capability-card";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

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
      label: "Active Engineering Core",
      count: capabilities.filter((c) => c.statusType === "current").length,
    },
    {
      id: "service",
      label: "Available Architectural Services",
      count: capabilities.filter((c) => c.statusType === "service").length,
    },
    {
      id: "research",
      label: "Active R&D Expansion",
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
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Status Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {statusFilters.map((tab) => {
              const isSelected = selectedStatus === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedStatus(tab.id)}
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

          {/* Search Box */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A5B2CC]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, e.g. Python, Next.js..."
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

      {/* Capabilities Grid */}
      {filteredCapabilities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCapabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-[#10192B] border border-[#263650]">
          <SlidersHorizontal className="w-8 h-8 text-[#586BFF] mx-auto mb-3 opacity-60" />
          <h4 className="text-base font-bold text-[#F4F6FF]">
            No matching capabilities found
          </h4>
          <p className="mt-1 text-xs text-[#A5B2CC]">
            No capabilities match the search &quot;{searchQuery}&quot; in the selected filter.
          </p>
          <button
            onClick={() => {
              setSelectedStatus("all");
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
