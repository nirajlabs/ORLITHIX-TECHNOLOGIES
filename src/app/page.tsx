import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { InnovationLabSection } from "@/components/sections/InnovationLabSection";
import { DevelopmentApproachSection } from "@/components/sections/DevelopmentApproachSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Headline, Tagline, CTAs and Sophisticated Tech Visual */}
      <HeroSection />

      {/* 2. Capability Preview (Six Core Areas) */}
      <CapabilitiesSection />

      {/* 3. About Preview ("Innovation Begins With Understanding Real Problems") */}
      <AboutPreviewSection />

      {/* 4. Innovation Lab (Software Handover Readiness AI - R&D Concept) */}
      <InnovationLabSection />

      {/* 5. Development Approach (Discover, Design, Engineer, Validate) */}
      <DevelopmentApproachSection />

      {/* 6. Contact CTA ("Let's Create Something Different.") */}
      <ContactCtaSection />
    </div>
  );
}
