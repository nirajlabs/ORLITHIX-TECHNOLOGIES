import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllCapabilities } from "@/lib/capabilities";
import { CapabilityGrid } from "@/components/capability-grid";
import { 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  FlaskConical,
  Wrench
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Capabilities",
  description:
    "Explore the technology capabilities, engineering disciplines, and multi-disciplinary systems powering Orlithix Technologies.",
};

export default function CapabilitiesPage() {
  const capabilities = getAllCapabilities();

  return (
    <div className="py-24 sm:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#586BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="development" size="md" className="mb-4">
            PARENT VENTURE // ENGINEERING MATRIX
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight">
            Technology Capabilities & Systems Architecture
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#A5B2CC] leading-relaxed">
            As a multi-technology parent company, Orlithix organizes its technical competencies into distinct, modular capability domains. From applied machine intelligence to cloud-native platforms, explore our technical disciplines, tools, and enterprise use cases.
          </p>
        </div>

        {/* Strategic Horizon Distinction Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="p-5 rounded-xl bg-[#10192B] border border-[#263650] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#121F36] border border-[#586BFF]/30 flex items-center justify-center text-[#586BFF]">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F4F6FF] uppercase tracking-wider">
                  Current Engineering Core
                </span>
              </div>
              <p className="text-xs text-[#A5B2CC] leading-relaxed">
                Battle-tested production proficiencies, strict TypeScript patterns, and high-concurrency microservices continuously active in our platform runtime.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#263650]/60 flex items-center gap-2 font-mono text-[10px] text-[#586BFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#586BFF]" />
              Production Deployed
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#10192B] border border-[#263650] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#121F36] border border-[#40D6C5]/30 flex items-center justify-center text-[#40D6C5]">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F4F6FF] uppercase tracking-wider">
                  Available Architectural Services
                </span>
              </div>
              <p className="text-xs text-[#A5B2CC] leading-relaxed">
                Structured technical engagement models, cloud modernizations, multi-agent integration, and high-assurance architecture consulting.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#263650]/60 flex items-center gap-2 font-mono text-[10px] text-[#40D6C5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40D6C5]" />
              Engagement Ready
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#10192B] border border-[#263650] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#121F36] border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F4F6FF] uppercase tracking-wider">
                  Active R&D Expansion
                </span>
              </div>
              <p className="text-xs text-[#A5B2CC] leading-relaxed">
                Next-generation exploratory research, edge model quantization, self-healing swarms, and cross-platform native sync architectures.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#263650]/60 flex items-center gap-2 font-mono text-[10px] text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Innovation Pipeline
            </div>
          </div>
        </div>

        {/* Central Data-Driven Capabilities Grid */}
        <CapabilityGrid capabilities={capabilities} enableFilters={true} />

        {/* Bottom Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121F36] to-[#0c1424] border border-[#263650] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6FF]">
              Need a Custom Multi-Disciplinary Architecture?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
              Our engineering team collaborates with partners on high-concurrency systems design, distributed data telemetry, and deterministic AI pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Initiate Technical Dialogue
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
