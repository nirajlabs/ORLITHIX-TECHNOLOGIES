import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllCapabilities } from "@/lib/capabilities";
import { CapabilityGrid } from "@/components/capability-grid";
import { 
  Cpu, 
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
    <div className="relative py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent" />

      <Container className="relative">
        {/* Page Hero */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <Badge variant="development" size="md" className="mb-4">
            PARENT VENTURE // ENGINEERING MATRIX
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight text-[#F4F6FF] sm:text-5xl">
            Technology Capabilities & Systems Architecture
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#A5B2CC] sm:mt-6 sm:text-base">
            As a multi-technology parent company, Orlithix organizes its technical competencies into distinct, modular capability domains. From applied machine intelligence to cloud-native platforms, explore our technical disciplines, tools, and enterprise use cases.
          </p>
        </div>

        {/* Strategic Horizon Distinction Overview */}
        <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-3 sm:mb-16 sm:gap-5">
          <div className="flex flex-col justify-between rounded-xl border border-[#263650] bg-[#10192B] p-5">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#586BFF]/30 bg-[#121F36] text-[#586BFF]">
                  <Cpu aria-hidden="true" className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F6FF]">
                  Current Engineering Core
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#A5B2CC]">
                Battle-tested production proficiencies, strict TypeScript patterns, and high-concurrency microservices continuously active in our platform runtime.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-[#263650] pt-3 font-mono text-[10px] text-[#586BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#586BFF]" />
              Production Deployed
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#263650] bg-[#10192B] p-5">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#40D6C5]/30 bg-[#121F36] text-[#40D6C5]">
                  <Wrench aria-hidden="true" className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F6FF]">
                  Available Architectural Services
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#A5B2CC]">
                Structured technical engagement models, cloud modernizations, multi-agent integration, and high-assurance architecture consulting.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-[#263650] pt-3 font-mono text-[10px] text-[#40D6C5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#40D6C5]" />
              Engagement Ready
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#263650] bg-[#10192B] p-5">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#263650] bg-[#121F36] text-[#A5B2CC]">
                  <FlaskConical aria-hidden="true" className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F6FF]">
                  Active R&D Expansion
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#A5B2CC]">
                Next-generation exploratory research, edge model quantization, self-healing swarms, and cross-platform native sync architectures.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-[#263650] pt-3 font-mono text-[10px] text-[#A5B2CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A5B2CC]" />
              Innovation Pipeline
            </div>
          </div>
        </div>

        {/* Central Data-Driven Capabilities Grid */}
        <CapabilityGrid capabilities={capabilities} enableFilters={true} />

        {/* Bottom Consultation Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#263650] bg-[#10192B] p-6 sm:mt-20 sm:p-8 lg:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl font-semibold text-[#F4F6FF] sm:text-2xl">
              Need a Custom Multi-Disciplinary Architecture?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
              Our engineering team collaborates with partners on high-concurrency systems design, distributed data telemetry, and deterministic AI pipelines.
            </p>
          </div>

          <div className="flex w-full shrink-0 items-center justify-center gap-3 sm:w-auto">
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
