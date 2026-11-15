import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export const ContactCtaSection: React.FC = () => {
  const { email, phone, address, socialLinks } = companyData.contactDetails;
  const contactEmail = email?.trim();
  const hasContactDetails = Boolean(
    contactEmail ||
      phone?.trim() ||
      address?.trim() ||
      socialLinks?.some((link) => link.label.trim() && link.url.trim()),
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#586BFF]/15 to-[#40D6C5]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#121F36] to-[#0c1424] border border-[#586BFF]/30 p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <Badge variant="concept" size="md" className="mb-6">
            CONTACT // ENQUIRY OPTIONS
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight leading-tight max-w-3xl mx-auto">
            {companyData.contactCtaHeadline}
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#A5B2CC] max-w-2xl mx-auto leading-relaxed">
            {companyData.contactCtaDescription}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              View Enquiry Options
            </Button>
            {contactEmail && (
              <Button
                href={`mailto:${encodeURIComponent(contactEmail)}`}
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4 text-[#40D6C5]" />}
                className="w-full sm:w-auto"
              >
                Direct Email Channel
              </Button>
            )}
          </div>

          {!hasContactDetails && (
            <p
              role="status"
              className="mt-8 text-xs text-[#A5B2CC]"
            >
              Business contact details are being added.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
