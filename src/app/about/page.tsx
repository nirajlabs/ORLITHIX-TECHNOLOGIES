import type { Metadata } from "next";
import type { ElementType } from "react";
import { ArrowRight, Bot, BrainCircuit, Briefcase, Cloud, Cpu, Database, Layers, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyData } from "@/data/company";
import { developmentApproachData } from "@/data/developmentApproach";
import { divisionsData } from "@/data/divisions";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Orlithix Technologies, a proposed emerging technology venture exploring AI, software engineering, and digital innovation.",
};

const divisionIcons: Record<string, ElementType> = {
  BrainCircuit,
  Layers,
  Briefcase,
  Database,
  Bot,
  Cloud,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent" />

      <Container className="relative">
        <header className="mx-auto mb-14 max-w-4xl text-center sm:mb-16">
          <Badge variant="concept" size="md" className="mb-4">
            PROPOSED TECHNOLOGY VENTURE
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-[#F4F6FF] sm:text-5xl">
            {companyData.aboutHeadline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#A5B2CC] sm:mt-6 sm:text-base">
            {companyData.aboutSummary}
          </p>
        </header>

        <section id="introduction" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="01 // COMPANY INTRODUCTION"
            title="A venture taking shape"
            subtitle="Orlithix is proposed as a place to explore technology ideas with purpose, clear direction, and an honest account of their development stage."
          />
          <Card className="mx-auto max-w-4xl border-[#586BFF]/25">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#40D6C5]">
                <Cpu aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#F4F6FF]">
                  A proposed emerging technology venture
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
                  The venture is focused on the intersection of artificial intelligence, software engineering, and digital innovation. Its public materials describe areas of interest and product concepts, not a record of past achievements or established client work.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section id="vision" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="02 // OUR VISION"
            title="Technology should serve a meaningful purpose"
            subtitle={companyData.aboutVision}
          />
        </section>

        <section id="mission" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="03 // OUR MISSION"
            title="The questions guiding our work"
            subtitle="These are intended priorities for the venture as it develops."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {companyData.aboutMission.map((item, index) => (
              <Card key={item} className="h-full">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#40D6C5]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-[#F4F6FF]">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section id="tenets" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="04 // TECHNOLOGY PHILOSOPHY"
            title="Principles for thoughtful innovation"
            subtitle="A proposed set of principles for evaluating ideas and technical choices."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {companyData.aboutTechnologyPhilosophy.map((principle) => (
              <Card key={principle.title} className="h-full">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#40D6C5]"
                  />
                  <div>
                    <h3 className="font-semibold text-[#F4F6FF]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="innovation" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="05 // AREAS OF INNOVATION"
            title="Fields we are exploring"
            subtitle="These areas describe research interests and possible directions, not a catalogue of established services."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {divisionsData.map((division) => {
              const DivisionIcon = divisionIcons[division.iconName] || Cpu;

              return (
                <Card key={division.id} className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#263650] bg-[#10192B] text-[#586BFF]">
                    <DivisionIcon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-[#40D6C5]">
                    Exploration area
                  </p>
                  <h3 className="mt-1 text-base font-bold text-[#F4F6FF]">
                    {division.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
                    {division.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="approach" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="06 // OUR APPROACH"
            title="A considered path from question to evaluation"
            subtitle="A proposed working approach that can adapt as ideas are researched and validated."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {developmentApproachData.map((step) => (
              <Card key={step.stepNumber} className="h-full">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[#40D6C5]">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#F4F6FF]">
                      {step.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#40D6C5]">
                      {step.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#A5B2CC]">
                      {step.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {step.keyDeliverables.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-[#263650] bg-[#080D1B] px-2.5 py-1 text-[10px] font-mono text-[#A5B2CC]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="future-direction" className="mb-16 sm:mb-20">
          <SectionHeader
            badgeText="07 // FUTURE DIRECTION"
            title="Progress through learning and validation"
            subtitle={companyData.aboutFutureDirection}
          />
          <div className="mx-auto max-w-4xl rounded-2xl border border-[#586BFF]/30 bg-[#10192B] p-6 text-center sm:p-10">
            <p className="text-sm leading-relaxed text-[#A5B2CC]">
              Orlithix remains a proposed venture in development. Any future initiatives will be presented with clear status and without implying unverified outcomes.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="mt-6"
              icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
            >
              Explore enquiry options
            </Button>
          </div>
        </section>

        <div className="mx-auto max-w-4xl rounded-xl border border-[#263650] bg-[#10192B] p-6 text-center sm:p-8">
          <Badge variant="concept" size="sm" className="mb-3">
            ENTITY TRANSPARENCY
          </Badge>
          <p className="text-xs leading-relaxed text-[#A5B2CC]">
            {companyData.legalEntityNotice}
          </p>
        </div>
      </Container>
    </div>
  );
}
