import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TechVisual } from "@/components/ui/TechVisual";
import { companyData } from "@/data/company";
import { divisionsData } from "@/data/divisions";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[440px] max-w-5xl bg-[radial-gradient(ellipse_at_top,rgba(88,107,255,0.12),transparent_68%)]"
      />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Status Badge */}
          <div className="mb-6">
            <Badge variant="concept" size="md">
              PROPOSED TECHNOLOGY VENTURE
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F4F6FF] sm:text-5xl lg:text-6xl">
            {companyData.heroHeadline}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A5B2CC] sm:text-lg">
            {companyData.heroDescription}
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
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
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-[#263650] pt-6">
            <span className="mr-1 text-xs text-[#A5B2CC]">
              Areas of exploration
            </span>
            {divisionsData.slice(0, 3).map((division) => (
              <span
                key={division.id}
                className="rounded-full border border-[#263650] bg-[#10192B]/80 px-3 py-1.5 text-xs text-[#A5B2CC]"
              >
                {division.shortName}
              </span>
            ))}
          </div>
        </div>

        <TechVisual />
      </Container>
    </section>
  );
};
