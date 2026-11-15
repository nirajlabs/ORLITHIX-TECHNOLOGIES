import type { Metadata } from "next";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Explore project, collaboration, partnership, and general enquiry options for Orlithix Technologies.",
};

const enquiryOptions = [
  {
    title: "Project enquiry",
    description:
      "Share a technology challenge or an idea for an intelligent software solution.",
    subject: "Project enquiry",
    Icon: Briefcase,
  },
  {
    title: "Collaboration",
    description:
      "Get in touch about research, technical exploration, or potential collaboration.",
    subject: "Collaboration enquiry",
    Icon: Users,
  },
  {
    title: "Business partnership",
    description:
      "Discuss a potential business relationship or partnership opportunity.",
    subject: "Business partnership enquiry",
    Icon: Building2,
  },
  {
    title: "General enquiry",
    description:
      "For other questions or messages related to Orlithix Technologies.",
    subject: "General enquiry",
    Icon: MessageCircle,
  },
];

export default function ContactPage() {
  const { email, phone, address, socialLinks } = companyData.contactDetails;
  const configuredEmail = email?.trim();
  const configuredPhone = phone?.trim();
  const configuredAddress = address?.trim();
  const configuredSocialLinks = socialLinks?.filter(
    (link) => link.label.trim() && link.url.trim(),
  );
  const hasContactDetails = Boolean(
    configuredEmail ||
      configuredPhone ||
      configuredAddress ||
      configuredSocialLinks?.length,
  );

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-[#586BFF]/10 blur-[140px]" />

      <Container className="relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="concept" size="md" className="mb-4">
            CONTACT ORLITHIX
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#F4F6FF] sm:text-5xl">
            {companyData.contactCtaHeadline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#A5B2CC] sm:text-lg">
            {companyData.contactCtaDescription}
          </p>
        </header>

        <section aria-labelledby="enquiry-options-heading">
          <div className="mb-8 text-center">
            <h2
              id="enquiry-options-heading"
              className="text-2xl font-bold text-[#F4F6FF]"
            >
              How can we connect?
            </h2>
            <p className="mt-2 text-sm text-[#A5B2CC]">
              Choose the enquiry category that best fits your message.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {enquiryOptions.map(({ title, description, subject, Icon }) => (
              <Card key={title} className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#40D6C5]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#F4F6FF]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#A5B2CC]">
                  {description}
                </p>
                {configuredEmail ? (
                  <a
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-[#586BFF]/40 px-4 py-2 text-sm font-semibold text-[#F4F6FF] transition-colors hover:border-[#586BFF] hover:bg-[#586BFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                    href={`mailto:${encodeURIComponent(configuredEmail)}?subject=${encodeURIComponent(subject)}`}
                  >
                    Send an enquiry
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-[#A5B2CC]">
                    Enquiry channel not yet available
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="contact-details-heading"
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="rounded-2xl border border-[#263650] bg-[#10192B] p-6 sm:p-8">
            <h2
              id="contact-details-heading"
              className="text-xl font-bold text-[#F4F6FF]"
            >
              Business contact details
            </h2>

            {hasContactDetails ? (
              <div className="mt-5 space-y-4 text-sm text-[#A5B2CC]">
                {configuredEmail && (
                  <p className="flex items-center gap-3">
                    <Mail
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#40D6C5]"
                    />
                    <a
                      className="min-h-11 inline-flex items-center underline decoration-[#586BFF]/60 underline-offset-4 hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                      href={`mailto:${encodeURIComponent(configuredEmail)}`}
                    >
                      {configuredEmail}
                    </a>
                  </p>
                )}
                {configuredPhone && (
                  <p className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-center text-[#40D6C5]"
                    >
                      +
                    </span>
                    <a
                      className="min-h-11 inline-flex items-center underline decoration-[#586BFF]/60 underline-offset-4 hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                      href={`tel:${configuredPhone.replace(/[^\d+]/g, "")}`}
                    >
                      {configuredPhone}
                    </a>
                  </p>
                )}
                {configuredAddress && (
                  <p className="flex items-start gap-3">
                    <Building2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#40D6C5]"
                    />
                    <span>{configuredAddress}</span>
                  </p>
                )}
                {configuredSocialLinks?.map((link) => (
                  <p key={link.label} className="flex items-center gap-3">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#40D6C5]"
                    />
                    <a
                      className="min-h-11 inline-flex items-center underline decoration-[#586BFF]/60 underline-offset-4 hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  </p>
                ))}
              </div>
            ) : (
              <p
                role="status"
                className="mt-4 rounded-lg border border-[#263650] bg-[#080D1B]/70 p-4 text-sm leading-relaxed text-[#A5B2CC]"
              >
                Business contact details are being added. Enquiry actions will
                become available here once verified contact details are
                configured.
              </p>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
