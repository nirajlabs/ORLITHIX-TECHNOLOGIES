import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCapabilities } from "@/lib/capabilities";
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

// Icon resolution map
const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  DatabaseZap,
  Cpu,
  CloudCog,
  Smartphone,
};

export const CapabilitiesSection: React.FC = () => {
  const capabilities = getAllCapabilities();

  return (
    <section id="capabilities" className="relative py-16 sm:py-20">
      <Container>
        <SectionHeader
          badgeText="ENGINEERING PILLARS"
          badgeVariant="development"
          title="Core Capabilities Driving Our Technology Ventures"
          subtitle="Our engineering practice is built on six foundational disciplines, engineered to solve complex operational bottlenecks with mathematical rigor."
        />

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {capabilities.map((capability) => {
            const IconComponent = iconMap[capability.icon] || Layers;

            return (
              <Card
                key={capability.id}
                hoverEffect
                className="flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Metric Tag */}
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#40D6C5] transition-colors group-hover:border-[#586BFF]/50">
                      <IconComponent aria-hidden="true" className="h-5 w-5" />
                    </div>
                    {capability.benchmarkMetric && (
                      <span className="rounded-full border border-[#263650] bg-[#10192B] px-2.5 py-1 text-[10px] text-[#40D6C5]">
                        {capability.benchmarkMetric.value}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#F4F6FF] transition-colors group-hover:text-[#40D6C5]">
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="inline-flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                    >
                      {capability.name}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-[#A5B2CC] line-clamp-3">
                    {capability.description}
                  </p>

                  {/* Key Technologies */}
                  <div className="mt-5 border-t border-[#263650] pt-4">
                    <span className="mb-2 block text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC]">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {capability.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#263650] bg-[#10192B] px-2 py-1 text-[10px] font-mono text-[#A5B2CC]"
                        >
                          {tech}
                        </span>
                      ))}
                      {capability.technologies.length > 4 && (
                        <span className="rounded-md px-1 py-1 text-[10px] font-mono text-[#A5B2CC]">
                          +{capability.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer link to detail */}
                <div className="mt-5 flex items-center justify-end border-t border-[#263650] pt-2 text-xs font-medium text-[#A5B2CC] transition-colors group-hover:text-[#40D6C5]">
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    <span>Technical Architecture</span>
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
