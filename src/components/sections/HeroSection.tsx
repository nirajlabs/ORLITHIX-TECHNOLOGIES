import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TechVisual } from "@/components/ui/TechVisual";
import { companyData } from "@/data/company";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] bg-[#586BFF]/12 rounded-full blur-[140px]" />
        <div className="absolute top-44 left-1/3 -translate-x-1/2 w-[300px] sm:w-[450px] h-[220px] bg-[#40D6C5]/8 rounded-full blur-[100px]" />
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="concept" size="md">
              AI-FIRST PARENT VENTURE · ACTIVE R&D
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F6FF] leading-[1.12]">
            {companyData.heroHeadline}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A5B2CC] leading-relaxed max-w-3xl font-normal">
            {companyData.heroDescription}
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              href="/capabilities"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Explore Our Capabilities
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<Sparkles className="w-4 h-4 text-[#40D6C5]" />}
              className="w-full sm:w-auto"
            >
              Let&apos;s Collaborate
            </Button>
          </div>

          {/* Key Venture Signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#A5B2CC]/80 border-t border-[#263650]/60 pt-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#586BFF]" />
              Modular Parent Architecture
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40D6C5]" />
              Multi-Agent Orchestration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F6FF]" />
              High-Assurance Engineering
            </span>
          </div>
        </div>

        {/* Sophisticated SVG/CSS Technology Visual */}
        <TechVisual />
      </Container>
    </section>
  );
};
