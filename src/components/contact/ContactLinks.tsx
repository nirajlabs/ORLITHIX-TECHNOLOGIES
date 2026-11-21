import { Mail, Phone } from "lucide-react";
import { contactEmails, contactPhones } from "@/data/contact";

interface ContactLinksProps {
  className?: string;
}

export function ContactLinks({ className = "" }: ContactLinksProps) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {contactPhones.map((contact) => (
        <li key={contact.tel}>
          <a
            href={`tel:${contact.tel}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-[#A5B2CC] underline decoration-[#586BFF]/50 underline-offset-4 transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-[#40D6C5]" />
            {contact.label}
          </a>
        </li>
      ))}
      {contactEmails.map((email) => (
        <li key={email}>
          <a
            href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Business enquiry - Orlithix Technologies")}`}
            className="inline-flex min-h-11 items-center gap-2 break-all text-sm text-[#A5B2CC] underline decoration-[#586BFF]/50 underline-offset-4 transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#40D6C5]" />
            {email}
          </a>
        </li>
      ))}
    </ul>
  );
}
