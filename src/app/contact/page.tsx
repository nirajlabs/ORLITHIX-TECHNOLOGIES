"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { Mail, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    inquiryType: "technical-collaboration",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate non-database client state validation and acknowledgment
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <Badge variant="concept" size="md" className="mb-4">
            COMMUNICATION GATEWAY // OPEN INQUIRIES
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight">
            Connect With Our Engineering Team
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#A5B2CC] leading-relaxed">
            We welcome technical discussions regarding distributed architecture, applied machine intelligence, and research collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Details & Standards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#F4F6FF] mb-4">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B2CC] leading-relaxed mb-6">
                All inquiries are reviewed directly by technical leadership. We do not use automated marketing funnels or third-party lead brokers.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#10192B] border border-[#263650]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#40D6C5] block">
                    Direct Email Gateway
                  </span>
                  <a
                    href={`mailto:${companyData.contactEmail}`}
                    className="text-sm font-semibold text-[#F4F6FF] hover:text-[#586BFF] transition-colors mt-1 block"
                  >
                    {companyData.contactEmail}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#10192B] border border-[#263650]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#586BFF] block">
                    Response Benchmark
                  </span>
                  <span className="text-sm font-semibold text-[#F4F6FF] mt-1 block">
                    1-2 Business Days
                  </span>
                  <span className="text-xs text-[#A5B2CC] block mt-0.5">
                    Direct technical appraisal
                  </span>
                </div>
              </div>
            </div>

            {/* Privacy Assurance */}
            <div className="mt-8 p-4 rounded-xl bg-[#121F36] border border-[#263650] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#40D6C5] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#A5B2CC] leading-relaxed">
                <strong className="text-[#F4F6FF]">Privacy Commitment: </strong>
                Your communications and technical project details are held in strict confidence. No promotional spam.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Interface */}
          <div className="lg:col-span-7">
            <Card className="border-[#263650]">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#40D6C5]/10 border border-[#40D6C5]/40 flex items-center justify-center text-[#40D6C5] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F4F6FF]">
                    Transmission Received
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC] max-w-sm">
                    Thank you for reaching out. Your inquiry has been routed to our technical architecture team.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        organization: "",
                        inquiryType: "technical-collaboration",
                        message: "",
                      });
                    }}
                    variant="secondary"
                    size="sm"
                    className="mt-6"
                  >
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1B] border border-[#263650] text-[#F4F6FF] placeholder-[#A5B2CC]/40 text-xs sm:text-sm focus:outline-none focus:border-[#586BFF] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1B] border border-[#263650] text-[#F4F6FF] placeholder-[#A5B2CC]/40 text-xs sm:text-sm focus:outline-none focus:border-[#586BFF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-1.5">
                        Organization / Venture
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Organization Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1B] border border-[#263650] text-[#F4F6FF] placeholder-[#A5B2CC]/40 text-xs sm:text-sm focus:outline-none focus:border-[#586BFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-1.5">
                      Inquiry Classification *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1B] border border-[#263650] text-[#F4F6FF] text-xs sm:text-sm focus:outline-none focus:border-[#586BFF] transition-colors"
                    >
                      <option value="technical-collaboration">
                        Architectural & Technical Collaboration
                      </option>
                      <option value="research-inquiry">
                        Innovation Lab & R&D Inquiry
                      </option>
                      <option value="technology-partnerships">
                        Technology Infrastructure Partnerships
                      </option>
                      <option value="general-inquiry">
                        General Corporate Inquiries
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-1.5">
                      Transmission Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your architectural context, research interests, or collaboration vector..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1B] border border-[#263650] text-[#F4F6FF] placeholder-[#A5B2CC]/40 text-xs sm:text-sm focus:outline-none focus:border-[#586BFF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Transmitting..." : "Send Technical Transmission"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
