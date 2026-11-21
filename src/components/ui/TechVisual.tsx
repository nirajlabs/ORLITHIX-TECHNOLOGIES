"use client";

import { useState } from "react";
import type { ElementType } from "react";
import {
  Bot,
  BrainCircuit,
  Briefcase,
  Cloud,
  Cpu,
  Database,
  Layers,
  Network,
} from "lucide-react";
import { divisionsData } from "@/data/divisions";

const divisionIcons: Record<string, ElementType> = {
  BrainCircuit,
  Layers,
  Briefcase,
  Database,
  Bot,
  Cloud,
};

export function TechVisual() {
  const [selectedId, setSelectedId] = useState(divisionsData[0].id);
  const selectedArea =
    divisionsData.find((division) => division.id === selectedId) ??
    divisionsData[0];

  return (
    <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-[#263650] bg-[#10192B] p-4 sm:mt-16 sm:p-6">
      <div className="flex flex-col gap-3 border-b border-[#263650] pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#263650] bg-[#080D1B] text-[#40D6C5]">
            <Network aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#F4F6FF] sm:text-base">
              Technology exploration map
            </h2>
            <p className="mt-0.5 text-xs text-[#A5B2CC]">
              Areas of interest across the proposed venture
            </p>
          </div>
        </div>
        <span className="self-start rounded-full border border-[#263650] px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC] sm:self-auto">
          Illustrative concept
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {divisionsData.map((area) => {
          const AreaIcon = divisionIcons[area.iconName] || Cpu;
          const isSelected = selectedArea.id === area.id;

          return (
            <button
              key={area.id}
              type="button"
              onClick={() => setSelectedId(area.id)}
              aria-pressed={isSelected}
              className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5] ${
                isSelected
                  ? "border-[#586BFF]/70 bg-[#121F36]"
                  : "border-[#263650] bg-[#080D1B]/50 hover:border-[#586BFF]/50 hover:bg-[#121F36]"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                  isSelected
                    ? "border-[#586BFF]/50 bg-[#586BFF]/10 text-[#F4F6FF]"
                    : "border-[#263650] bg-[#10192B] text-[#A5B2CC]"
                }`}
              >
                <AreaIcon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium leading-snug text-[#F4F6FF]">
                {area.name}
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="mt-4 flex flex-col gap-1 rounded-xl border border-[#263650] bg-[#080D1B]/70 px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
      >
        <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-[#40D6C5]">
          Selected area
        </span>
        <p className="text-xs leading-relaxed text-[#A5B2CC]">
          <span className="font-medium text-[#F4F6FF]">
            {selectedArea.name}.
          </span>{" "}
          {selectedArea.description}
        </p>
      </div>
    </div>
  );
}
