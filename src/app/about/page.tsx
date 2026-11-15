import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { divisionsData } from "@/data/divisions";
import { ShieldCheck, Layers, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Orlithix Technologies, a proposed AI-first parent software venture dedicated to engineering high-concurrency systems and deterministic intelligence.",
};

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        {/* Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="concept" size="md" className="mb-4">
            PROVISIONAL ENTITY // VENTURE PROFILE
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight">
            Engineering Intelligence. Building the Future.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#A5B2CC] leading-relaxed">
            {companyData.aboutSummary}
          </p>
        </div>

        {/* Operating Model */}
        <section id="operating-model" className="mb-20">
          <SectionHeader
            badgeText="ORGANIZATIONAL STRUCTURE"
            title="The Parent Technology Venture Model"
            subtitle="Orlithix functions as an incubator and parent holding venture, providing a unified technological substrate that empowers autonomous product teams and research initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F4F6FF]">
                Core Engineering Substrate
              </h3>
              <p className="mt-2 text-xs text-[#A5B2CC] leading-relaxed">
                Centralized telemetry, zero-trust cryptographic guardrails, and type-safe protocols shared across all subsidiary initiatives to eliminate redundant plumbing.
              </p>
            </Card>

            <Card>
              <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#40D6C5] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F4F6FF]">
                Autonomous Product Units
              </h3>
              <p className="mt-2 text-xs text-[#A5B2CC] leading-relaxed">
                Dedicated focus teams building vertical solutions across Enterprise SaaS, Developer Tooling, and Data Intelligence without organizational bloat.
              </p>
            </Card>

            <Card>
              <div className="w-10 h-10 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F4F6FF]">
                Mathematical & Empirical Rigor
              </h3>
              <p className="mt-2 text-xs text-[#A5B2CC] leading-relaxed">
                Every line of software undergoes rigorous automated testing, formal verification, and drift audits before reaching alpha deployment.
              </p>
            </Card>
          </div>
        </section>

        {/* Divisions Portfolio */}
        <section id="divisions" className="mb-20">
          <SectionHeader
            badgeText="PORTFOLIO VERTICALS"
            title="Technology Divisions"
            subtitle="Structured business and research vectors covering modern computation and intelligence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisionsData.map((division) => (
              <Card key={division.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#40D6C5] uppercase tracking-wider">
                      {division.shortName}
                    </span>
                    <Badge variant={division.status === "ESTABLISHED_FOCUS" ? "development" : "concept"} size="sm">
                      {division.status.replace("_", " ")}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F6FF]">
                    {division.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#7888FF]">
                    {division.tagline}
                  </p>
                  <p className="mt-3 text-xs text-[#A5B2CC] leading-relaxed">
                    {division.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#263650]">
                    <span className="block text-[10px] font-mono text-[#A5B2CC]/70 uppercase tracking-wider mb-2">
                      Research Vectors:
                    </span>
                    <ul className="space-y-1">
                      {division.coreVectors.map((vector, i) => (
                        <li key={i} className="text-xs text-[#A5B2CC] font-mono flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#586BFF]" />
                          {vector}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Transparency Notice */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#10192B] border border-[#263650] max-w-4xl mx-auto text-center">
          <Badge variant="concept" size="sm" className="mb-3">
            LEGAL TRANSPARENCY
          </Badge>
          <p className="text-xs font-mono text-[#A5B2CC] leading-relaxed">
            {companyData.legalEntityNotice}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Architecture Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
