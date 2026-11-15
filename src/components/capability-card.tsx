import React from "react";
import Link from "next/link";
import { CapabilityItem } from "@/lib/capabilities";
import { 
  Brain, 
  Code2, 
  DatabaseZap, 
  Cpu, 
  CloudCog, 
  Smartphone, 
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

// Icon mapping for dynamic resolution
const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  DatabaseZap,
  Cpu,
  CloudCog,
  Smartphone,
};

interface CapabilityCardProps {
  capability: CapabilityItem;
  className?: string;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  capability,
  className = "",
}) => {
  const IconComponent = iconMap[capability.icon] || Layers;

  // Status badge styling
  const statusConfig = {
    current: {
      badgeBg: "bg-[#586BFF]/10 text-[#7888FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    service: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    research: {
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      dot: "bg-purple-400",
    },
  }[capability.statusType];

  return (
    <div
      className={`group relative flex flex-col justify-between bg-[#121F36] border border-[#263650] hover:border-[#586BFF]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[#15233c] hover:shadow-[0_12px_40px_rgba(88,107,255,0.12)] hover:-translate-y-1 overflow-hidden ${className}`}
    >
      {/* Subtle top edge border gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/30 to-transparent pointer-events-none" />

      <div>
        {/* Top Header Bar: Icon, Benchmark & Status Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] group-hover:text-[#40D6C5] group-hover:border-[#40D6C5]/40 transition-colors duration-300 flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.badgeBg}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusConfig.dot}`} />
              <span>{capability.statusLabel}</span>
            </span>

            {capability.benchmarkMetric && (
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#A5B2CC]/70">
                {capability.benchmarkMetric.value}
              </span>
            )}
          </div>
        </div>

        {/* Name & Tagline */}
        <h3 className="text-xl font-bold text-[#F4F6FF] group-hover:text-[#40D6C5] transition-colors duration-200">
          <Link href={`/capabilities/${capability.slug}`} className="focus:outline-none">
            {capability.name}
          </Link>
        </h3>

        <p className="mt-1 font-mono text-xs text-[#7888FF]">
          {capability.shortTagline}
        </p>

        {/* Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed line-clamp-3">
          {capability.description}
        </p>

        {/* Technologies List */}
        <div className="mt-6 pt-4 border-t border-[#263650]/60">
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC]/70 mb-2">
            Core Technologies & Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {capability.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#10192B] border border-[#263650] text-[11px] font-mono text-[#F4F6FF]/90 group-hover:border-[#586BFF]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {capability.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 rounded bg-[#080D1B] text-[10px] font-mono text-[#A5B2CC]/70">
                +{capability.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Use Case Teaser */}
        {capability.useCases.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#263650]/40 flex items-center gap-1.5 text-xs text-[#A5B2CC]">
            <Sparkles className="w-3.5 h-3.5 text-[#40D6C5] flex-shrink-0" />
            <span className="truncate">
              Use Case: <strong className="text-[#F4F6FF] font-medium">{capability.useCases[0].title}</strong>
            </span>
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="mt-6 pt-4 border-t border-[#263650] flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#A5B2CC]/60 uppercase">
          {capability.useCases.length} Enterprise Use Cases
        </span>

        <Link
          href={`/capabilities/${capability.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#586BFF] group-hover:text-[#40D6C5] transition-colors"
        >
          <span>Explore Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
