"use client";

import { trackLead } from "@/lib/analytics";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import FormStatusModal from "@/components/common/FormStatusModal";

type ModalState = {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  // async function handleSubmit(
  //   e: React.FormEvent<HTMLFormElement>
  // ) {
  //   e.preventDefault();

  //   const form = e.currentTarget;

  //   setIsSubmitting(true);

  //   try {
  //     const formData = new FormData(form);

  //     const data = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       phone: formData.get("phone"),
  //       subject: formData.get("subject"),
  //       message: formData.get("message"),
  //     };

  //     const response = await fetch(
  //       "http://localhost:5000/api/contact",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(
  //         result.message || "Something went wrong."
  //       );
  //     }

  //     form.reset();

  //     setModal({
  //       isOpen: true,
  //       type: "success",
  //       title: "Message Sent!",
  //       message:
  //         "Thank you for contacting us. Our team has received your message and will get back to you shortly.",
  //     });

  //   } catch (error) {
  //     console.error(error);

  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Unable To Send Message",
  //       message:
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong. Please try again.",
  //     });

  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }


  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  // Prevent double submission
  if (isSubmitting) return;

  const form = e.currentTarget;

  setIsSubmitting(true);

  try {
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    /* =====================================================
        BASIC VALIDATION
    ===================================================== */

    if (!data.name || !data.email || !data.phone) {
      throw new Error(
        "Please provide your name, email address and phone number."
      );
    }

    if (!data.subject) {
      throw new Error(
        "Please enter a subject for your message."
      );
    }

    if (!data.message) {
      throw new Error(
        "Please enter your message before continuing."
      );
    }

    /* =====================================================
        CREATE WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
📩 *NEW CONTACT MESSAGE*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

━━━━━━━━━━━━━━━━━━

📌 *SUBJECT*

${data.subject}

━━━━━━━━━━━━━━━━━━

💬 *MESSAGE*

${data.message}

━━━━━━━━━━━━━━━━━━

🌍 *Global Horizons Tours & Travels*

New enquiry received from the website.
`.trim();

    /* =====================================================
        WHATSAPP NUMBER

        Country code included
        Do not use +
    ===================================================== */

    const whatsappNumber = "917770069004";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    /* =====================================================
        OPEN WHATSAPP
    ===================================================== */

    trackLead("contact_form");

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* =====================================================
        RESET FORM
    ===================================================== */

    form.reset();

    /* =====================================================
        SUCCESS MODAL
    ===================================================== */

    setModal({
      isOpen: true,
      type: "success",
      title: "Message Ready!",
      message:
        "Your message has been prepared successfully. WhatsApp has been opened so you can send it directly to our team.",
    });

  } catch (error) {
    console.error("Contact Form Error:", error);

    setModal({
      isOpen: true,
      type: "error",
      title: "Unable To Continue",
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    });

  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden border border-[#e6dfd3] bg-[#fffefd] shadow-[0_30px_100px_rgba(18,63,85,0.10)]">

            {/* Top Accent */}

            <div className="h-[4px] bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />

            <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full border border-[#d9a737]/15" />

            <div className="relative p-6 sm:p-10 lg:p-14">

              {/* Header */}

              <div className="max-w-[650px]">

                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#d9a737]" />

                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={13}
                      className="text-[#d9a737]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#14596a]">
                      Send Us A Message
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-[34px] font-bold leading-tight text-[#123f55] sm:text-[42px]">
                  We&apos;d Love To Hear

                  <span className="block italic text-[#d9a737]">
                    From You.
                  </span>
                </h2>

                <p className="mt-5 text-[14px] leading-7 text-[#7b898d]">
                  Tell us how we can help and our team will get back to you as
                  soon as possible.
                </p>

              </div>

              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="mt-10 grid gap-6 md:grid-cols-2"
              >

                <PremiumField
                  icon={<User size={17} />}
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <PremiumField
                  icon={<Mail size={17} />}
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <PremiumField
                  icon={<Phone size={17} />}
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

                <PremiumField
                  icon={<MessageSquare size={17} />}
                  label="Subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                />

                {/* Message */}

                <div className="md:col-span-2">

                  <label className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#657176]">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14596a]/10 text-[#14596a]">
                      <MessageSquare size={14} />
                    </span>

                    Your Message

                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your enquiry..."
                    className="w-full resize-none border border-[#ded8ce] bg-[#fcfbf8] px-5 py-4 text-[14px] text-[#536166] outline-none transition-all duration-300 placeholder:text-[#a2aaac] focus:border-[#14596a] focus:bg-white focus:shadow-[0_10px_28px_rgba(20,89,106,0.08)]"
                  />

                </div>

                {/* Submit */}

                <div className="md:col-span-2">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex min-h-[56px] min-w-[220px] items-center justify-center gap-4 overflow-hidden bg-[#14596a] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_15px_35px_rgba(20,89,106,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#123f55] disabled:cursor-not-allowed disabled:opacity-70"
                  >

                    <span className="absolute inset-0 translate-x-[-110%] bg-[#d9a737] transition-transform duration-500 group-hover:translate-x-0" />

                    <span className="relative z-10 flex items-center gap-3">

                      {isSubmitting
                        ? "Sending..."
                        : "Send Message"}

                      <Send
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </span>

                  </button>

                </div>

              </form>

              {/* Privacy */}

              <div className="mt-8 flex items-center gap-2 text-[11px] text-[#929b9d]">

                <CheckCircle2
                  size={14}
                  className="text-[#d9a737]"
                />

                Your information is kept private and secure.

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Common Premium Modal */}

      <FormStatusModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((previous) => ({
            ...previous,
            isOpen: false,
          }))
        }
      />
    </>
  );
}

function PremiumField({
  icon,
  label,
  ...props
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="group">

      <label className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#657176]">

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14596a]/10 text-[#14596a] transition-all duration-300 group-focus-within:bg-[#14596a] group-focus-within:text-white">
          {icon}
        </span>

        {label}

      </label>

      <input
        {...props}
        className="h-[56px] w-full border border-[#ded8ce] bg-[#fcfbf8] px-5 text-[14px] text-[#536166] outline-none transition-all duration-300 placeholder:text-[#a2aaac] focus:border-[#14596a] focus:bg-white focus:shadow-[0_10px_28px_rgba(20,89,106,0.08)]"
      />

    </div>
  );
}