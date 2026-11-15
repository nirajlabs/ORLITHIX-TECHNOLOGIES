import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { companyData } from "@/data/company";
import { ArrowRight, Layers, ShieldCheck, Cpu } from "lucide-react";

export const AboutPreviewSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0c1424] border-y border-[#263650]/50 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#586BFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Badge variant="concept" size="md" className="mb-4">
              PROPOSED VENTURE ETHOS
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F4F6FF] tracking-tight leading-tight">
              {companyData.aboutHeadline}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#A5B2CC] leading-relaxed">
              {companyData.aboutSummary}
            </p>

            <p className="mt-3 text-xs sm:text-sm text-[#A5B2CC]/80 leading-relaxed">
              Modern enterprises do not suffer from a lack of raw AI models — they suffer from the brittle integration of probabilistic systems into mission-critical software fabrics. Orlithix exists to construct the deterministic engineering layers that make advanced intelligence dependable, secure, and auditable.
            </p>

            {/* Strategic Anchors */}
            <div className="mt-6 space-y-3 w-full">
              {companyData.aboutMission.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#10192B] border border-[#263650]"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-[#121F36] border border-[#586BFF]/40 text-[#40D6C5] font-mono text-xs flex items-center justify-center font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#F4F6FF]/90 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Our Vision
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Philosophy Visual Bento */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F6FF]">
                  Parent Architecture
                </h3>
                <p className="mt-2 text-xs text-[#A5B2CC] leading-relaxed">
                  A unified technological core providing shared telemetry, security, and type safety across multiple autonomous software verticals.
                </p>
              </div>
              <span className="mt-4 font-mono text-[10px] text-[#40D6C5] uppercase tracking-wider block">
                Expandable Foundation
              </span>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#40D6C5] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F6FF]">
                  Deterministic AI
                </h3>
                <p className="mt-2 text-xs text-[#A5B2CC] leading-relaxed">
                  Eliminating stochastic unpredictability through rigorous verification pipelines and structured schema validation.
                </p>
              </div>
              <span className="mt-4 font-mono text-[10px] text-[#586BFF] uppercase tracking-wider block">
                Mathematical Rigor
              </span>
            </Card>

            <Card className="sm:col-span-2 flex flex-col justify-between bg-gradient-to-br from-[#121F36] to-[#10192B] border-[#586BFF]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#080D1B] border border-[#586BFF]/40 flex items-center justify-center text-[#40D6C5] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F4F6FF]">
                    Zero-Fabrication Operating Standards
                  </h3>
                  <p className="mt-1 text-xs text-[#A5B2CC] leading-relaxed">
                    We maintain strict transparency: no fictitious client claims, no unearned vanity metrics, and no conceptual prototypes disguised as historical enterprise software.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
