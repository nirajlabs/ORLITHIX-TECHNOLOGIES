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
    <section id="capabilities" className="py-20 relative">
      <Container>
        <SectionHeader
          badgeText="ENGINEERING PILLARS"
          badgeVariant="development"
          title="Core Capabilities Driving Our Technology Ventures"
          subtitle="Our engineering practice is built on six foundational disciplines, engineered to solve complex operational bottlenecks with mathematical rigor."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] group-hover:text-[#40D6C5] group-hover:border-[#40D6C5]/40 transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {capability.benchmarkMetric && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#10192B] border border-[#263650] text-[#40D6C5]">
                        {capability.benchmarkMetric.value}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#F4F6FF] group-hover:text-[#40D6C5] transition-colors">
                    <Link href={`/capabilities/${capability.slug}`}>
                      {capability.name}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed line-clamp-3">
                    {capability.description}
                  </p>

                  {/* Key Technologies */}
                  <div className="mt-5 pt-4 border-t border-[#263650]/60">
                    <span className="block text-[10px] font-mono uppercase text-[#A5B2CC]/70 tracking-wider mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {capability.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#10192B] border border-[#263650] text-[10px] font-mono text-[#F4F6FF]/90"
                        >
                          {tech}
                        </span>
                      ))}
                      {capability.technologies.length > 4 && (
                        <span className="text-[10px] font-mono text-[#A5B2CC]/70 px-1 py-0.5">
                          +{capability.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer link to detail */}
                <div className="mt-6 pt-3 border-t border-[#263650]/40 flex items-center justify-between text-xs font-medium text-[#586BFF] group-hover:text-[#40D6C5] transition-colors">
                  <Link href={`/capabilities/${capability.slug}`} className="inline-flex items-center gap-1.5">
                    <span>Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
