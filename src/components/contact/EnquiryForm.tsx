"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { contactEmails } from "@/data/contact";

interface EnquiryValues {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  enquiryType: string;
  subject: string;
  message: string;
}

type EnquiryField = keyof EnquiryValues;
type EnquiryErrors = Partial<Record<EnquiryField, string>>;

const initialValues: EnquiryValues = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  enquiryType: "",
  subject: "",
  message: "",
};

function validate(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Enter your phone number.";
  } else if (
    values.phone.replace(/\D/g, "").length < 7 ||
    values.phone.replace(/\D/g, "").length > 15
  ) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.enquiryType) errors.enquiryType = "Choose an enquiry type.";
  if (!values.subject.trim()) errors.subject = "Enter a subject.";
  if (!values.message.trim()) errors.message = "Enter a message.";

  return errors;
}

export function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [isPreparing, setIsPreparing] = useState(false);
  const [notice, setNotice] = useState("");

  function updateField(field: EnquiryField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setNotice("");
  }

  function handleBlur(field: EnquiryField) {
    const fieldErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setNotice("");

    if (Object.keys(validationErrors).length > 0) {
      document
        .getElementById(Object.keys(validationErrors)[0])
        ?.focus();
      return;
    }

    setIsPreparing(true);
    const body = [
      `Full name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Organisation: ${values.organisation.trim() || "Not provided"}`,
      `Enquiry type: ${values.enquiryType}`,
      "",
      values.message.trim(),
    ].join("\n");
    const mailto = `mailto:${contactEmails[0]}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      window.location.href = mailto;
      setIsPreparing(false);
      setNotice(
        "Your email app should open with the enquiry details. Nothing has been sent until you review and send the email. If no email app opens, use one of the email links above.",
      );
    }, 150);
  }

  function fieldProps(field: EnquiryField) {
    return {
      id: field,
      name: field,
      value: values[field],
      onChange: (
        event: ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => updateField(field, event.target.value),
      onBlur: () => handleBlur(field),
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": errors[field] ? `${field}-error` : undefined,
      className: `mt-1.5 min-h-11 w-full rounded-lg border ${
        errors[field] ? "border-[#FF9E9E]" : "border-[#263650]"
      } bg-[#080D1B] px-3.5 py-2.5 text-sm text-[#F4F6FF] placeholder:text-[#A5B2CC]/60 focus:border-[#586BFF] focus:outline-none focus:ring-2 focus:ring-[#586BFF]/30`,
    };
  }

  function errorMessage(field: EnquiryField) {
    return errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-xs text-[#FF9E9E]">
        {errors[field]}
      </p>
    ) : null;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#263650] bg-[#10192B] p-5 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#F4F6FF] sm:text-2xl">
          Send an Enquiry
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
          Complete the form to prepare an email in your email application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-[#F4F6FF]">
            Full Name <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <input
            {...fieldProps("fullName")}
            autoComplete="name"
            required
            placeholder="Your full name"
          />
          {errorMessage("fullName")}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-[#F4F6FF]">
            Email Address <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
          {errorMessage("email")}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-[#F4F6FF]">
            Phone Number <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91 9876543210"
          />
          {errorMessage("phone")}
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="text-sm font-medium text-[#F4F6FF]"
          >
            Organisation <span className="text-[#A5B2CC]">(optional)</span>
          </label>
          <input
            {...fieldProps("organisation")}
            autoComplete="organization"
            placeholder="Organisation name"
          />
        </div>

        <div>
          <label
            htmlFor="enquiryType"
            className="text-sm font-medium text-[#F4F6FF]"
          >
            Enquiry Type <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <select {...fieldProps("enquiryType")} required>
            <option value="">Select an enquiry type</option>
            <option>General Enquiry</option>
            <option>Technology Collaboration</option>
            <option>AI/ML Solutions</option>
            <option>Software Development</option>
            <option>Product Enquiry</option>
            <option>Business Partnership</option>
            <option>Other</option>
          </select>
          {errorMessage("enquiryType")}
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium text-[#F4F6FF]">
            Subject <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <input
            {...fieldProps("subject")}
            required
            placeholder="How can we help?"
          />
          {errorMessage("subject")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-[#F4F6FF]">
            Message <span aria-hidden="true" className="text-[#40D6C5]">*</span>
          </label>
          <textarea
            {...fieldProps("message")}
            required
            rows={5}
            placeholder="Tell us about your enquiry..."
          />
          {errorMessage("message")}
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[#A5B2CC]">
        The form opens a prefilled email addressed to {contactEmails[0]}. Nothing
        is sent by this website; you will need to review and send it in your
        email app.
      </p>
      <button
        type="submit"
        disabled={isPreparing}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#586BFF] bg-[#586BFF] px-5 py-2.5 text-sm font-semibold text-[#F4F6FF] transition-colors hover:border-[#7180ff] hover:bg-[#4d5fe8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5] disabled:cursor-wait disabled:opacity-70"
      >
        {isPreparing ? "Preparing email…" : "Prepare Enquiry Email"}
      </button>
      <p aria-live="polite" role="status" className="mt-3 text-sm text-[#40D6C5]">
        {notice}
      </p>
    </form>
  );
}
