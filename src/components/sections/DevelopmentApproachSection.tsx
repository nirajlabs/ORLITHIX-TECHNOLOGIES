import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { developmentApproachData } from "@/data/developmentApproach";
import { Search, Compass, Cpu, CheckCircle } from "lucide-react";

const stepIcons = [Search, Compass, Cpu, CheckCircle];

export const DevelopmentApproachSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c1424] border-y border-[#263650]/50 relative">
      <Container>
        <SectionHeader
          badgeText="ENGINEERING METHODOLOGY"
          badgeVariant="development"
          title="Our Structured Development Approach"
          subtitle="We replace guesswork with a disciplined, four-stage engineering lifecycle designed to eliminate technical risk and deliver deterministic software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {developmentApproachData.map((step, index) => {
            const StepIcon = stepIcons[index] || Search;

            return (
              <Card
                key={step.stepNumber}
                className="flex flex-col justify-between relative group hover:border-[#40D6C5]/50"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[#586BFF]/40 group-hover:text-[#40D6C5] transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] group-hover:text-[#40D6C5] group-hover:border-[#40D6C5]/40 transition-colors">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-[#F4F6FF]">
                    {step.name}
                  </h3>

                  {/* Tagline */}
                  <span className="block mt-1 font-mono text-[11px] text-[#40D6C5] tracking-wide">
                    {step.tagline}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="mt-6 pt-4 border-t border-[#263650]/60">
                  <span className="block text-[10px] font-mono uppercase text-[#A5B2CC]/70 tracking-wider mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {step.keyDeliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs text-[#A5B2CC] font-mono gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#40D6C5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
