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
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    service: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    research: {
      badgeBg: "bg-[#10192B] text-[#A5B2CC] border-[#263650]",
      dot: "bg-[#A5B2CC]",
    },
  }[capability.statusType];

  return (
    <article
      className={`group flex h-full flex-col justify-between rounded-2xl border border-[#263650] bg-[#121F36] p-5 transition-[background-color,border-color,box-shadow] duration-200 hover:border-[#586BFF]/60 hover:bg-[#15233c] hover:shadow-md hover:shadow-[#080D1B]/25 sm:p-6 ${className}`}
    >
      <div>
        {/* Top Header Bar: Icon, Benchmark & Status Badge */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#40D6C5] transition-colors group-hover:border-[#586BFF]/50">
            <IconComponent aria-hidden="true" className="h-5 w-5" />
          </div>

          <div className="flex max-w-full flex-col items-start gap-1.5 sm:items-end">
            <span
              className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase leading-tight ${statusConfig.badgeBg}`}
            >
              <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusConfig.dot}`} />
              <span>{capability.statusLabel}</span>
            </span>

            {capability.benchmarkMetric && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#A5B2CC]">
                {capability.benchmarkMetric.value}
              </span>
            )}
          </div>
        </div>

        {/* Name & Tagline */}
        <h3 className="text-lg font-semibold leading-snug text-[#F4F6FF] group-hover:text-[#40D6C5] transition-colors duration-200 sm:text-xl">
          <Link
            href={`/capabilities/${capability.slug}`}
            className="inline-flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            {capability.name}
          </Link>
        </h3>

        <p className="mt-2 text-xs font-medium text-[#40D6C5]">
          {capability.shortTagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[#A5B2CC] line-clamp-3">
          {capability.description}
        </p>

        {/* Technologies List */}
        <div className="mt-6 pt-4 border-t border-[#263650]/60">
          <span className="mb-2 block text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC]">
            Related technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {capability.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#263650] bg-[#10192B] px-2 py-1 text-[10px] font-mono text-[#A5B2CC]"
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
          <div className="mt-4 flex items-center gap-2 border-t border-[#263650] pt-3 text-xs text-[#A5B2CC]">
            <Layers aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#40D6C5]" />
            <span className="truncate">
              Use Case: <strong className="text-[#F4F6FF] font-medium">{capability.useCases[0].title}</strong>
            </span>
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#263650] pt-4">
        <span className="text-[10px] text-[#A5B2CC]">
          {capability.useCases.length} illustrative use cases
        </span>

        <Link
          href={`/capabilities/${capability.slug}`}
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
        >
          <span>Explore capability</span>
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};
