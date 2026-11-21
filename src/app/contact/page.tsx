import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  contactEmails,
  contactPhones,
  whatsappGreeting,
} from "@/data/contact";
import { companyData } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Call, message, or email Orlithix Technologies, or prepare a business enquiry.",
  path: "/contact",
});

const businessSubject = "Business enquiry - Orlithix Technologies";

const contactOptions = [
  {
    title: "Call Us",
    description:
      "Speak with us by phone. Your device will use its configured calling application.",
    Icon: Phone,
  },
  {
    title: "WhatsApp Us",
    description:
      "Start a WhatsApp conversation with a prefilled professional greeting.",
    Icon: MessageCircle,
  },
  {
    title: "Email Us",
    description:
      "Choose an email address to open a pre-addressed business enquiry.",
    Icon: Mail,
  },
  {
    title: "Send an Enquiry",
    description:
      "Share your details and prepare a prefilled enquiry email in your email app.",
    Icon: Send,
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent"
      />

      <Container className="relative">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <Badge variant="concept" size="md" className="mb-4">
            CONTACT ORLITHIX
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-[#F4F6FF] sm:text-5xl">
            {companyData.contactCtaHeadline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#A5B2CC] sm:mt-6 sm:text-base">
            {companyData.contactCtaDescription}
          </p>
        </header>

        <section aria-label="Contact options">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {contactOptions.map(({ title, description, Icon }) => (
              <Card key={title} className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#40D6C5]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-[#F4F6FF]">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
                  {description}
                </p>

                {title === "Call Us" && (
                  <ul className="mt-4 space-y-1">
                    {contactPhones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#F4F6FF] underline decoration-[#586BFF]/60 underline-offset-4 transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                        >
                          <Phone
                            aria-hidden="true"
                            className="h-4 w-4 text-[#40D6C5]"
                          />
                          {phone.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {title === "WhatsApp Us" && (
                  <ul className="mt-4 space-y-1">
                    {contactPhones.map((phone) => (
                      <li key={phone.whatsapp}>
                        <a
                          href={`https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(whatsappGreeting)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#F4F6FF] underline decoration-[#586BFF]/60 underline-offset-4 transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                        >
                          <MessageCircle
                            aria-hidden="true"
                            className="h-4 w-4 text-[#40D6C5]"
                          />
                          {phone.label}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {title === "Email Us" && (
                  <ul className="mt-4 space-y-1">
                    {contactEmails.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(businessSubject)}`}
                          className="inline-flex min-h-11 items-center gap-2 break-all text-sm font-medium text-[#F4F6FF] underline decoration-[#586BFF]/60 underline-offset-4 transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                        >
                          <Mail
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#40D6C5]"
                          />
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {title === "Send an Enquiry" && (
                  <a
                    href="#enquiry-form"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#586BFF]/40 px-4 py-2 text-sm font-semibold text-[#F4F6FF] transition-colors hover:border-[#586BFF] hover:bg-[#586BFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    Prepare an enquiry
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section id="enquiry-form" className="mx-auto mt-12 max-w-3xl">
          <EnquiryForm />
        </section>
      </Container>
    </div>
  );
}
