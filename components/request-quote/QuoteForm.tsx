"use client";

import { trackLead } from "@/lib/analytics";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import FormStatusModal from "@/components/common/FormStatusModal";

type ModalState = {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
};

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  // Form ko completely remount/reset karne ke liye
  const [formKey, setFormKey] = useState(0);

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();

  //   // FormData async request se pehle immediately create karo
  //   const formData = new FormData(e.currentTarget);

  //   const data = {
  //     name: String(formData.get("name") || "").trim(),
  //     email: String(formData.get("email") || "").trim(),
  //     phone: String(formData.get("phone") || "").trim(),

  //     contactMethod: String(
  //       formData.get("contactMethod") || ""
  //     ).trim(),

  //     destination: String(
  //       formData.get("destination") || ""
  //     ).trim(),

  //     travelDate: String(
  //       formData.get("travelDate") || ""
  //     ).trim(),

  //     travellers: String(
  //       formData.get("travellers") || ""
  //     ).trim(),

  //     journeyType: String(
  //       formData.get("journeyType") || ""
  //     ).trim(),

  //     message: String(
  //       formData.get("message") || ""
  //     ).trim(),
  //   };

  //   // Basic validation
  //   if (!data.name || !data.email || !data.phone) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Missing Information",
  //       message:
  //         "Please provide your name, email address and phone number.",
  //     });

  //     return;
  //   }

  //   if (!data.destination) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Destination Required",
  //       message:
  //         "Please tell us where you would like to travel.",
  //     });

  //     return;
  //   }

  //   if (!data.travelDate) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Travel Date Required",
  //       message:
  //         "Please select your preferred travel date.",
  //     });

  //     return;
  //   }

  //   if (!data.travellers) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Traveller Information Required",
  //       message:
  //         "Please enter the number of travellers.",
  //     });

  //     return;
  //   }

  //   if (!data.contactMethod) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Contact Method Required",
  //       message:
  //         "Please select your preferred contact method.",
  //     });

  //     return;
  //   }

  //   if (!data.journeyType) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Journey Type Required",
  //       message:
  //         "Please select the type of journey you are planning.",
  //     });

  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/api/travel-quote",
  //       {
  //         method: "POST",

  //         headers: {
  //           "Content-Type": "application/json",
  //         },

  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json().catch(() => ({
  //       success: false,
  //       message: "Unable to process server response.",
  //     }));

  //     if (!response.ok) {
  //       throw new Error(
  //         result.message ||
  //           "Unable to submit your quote request."
  //       );
  //     }

  //     // IMPORTANT:
  //     // Native form.reset() use nahi karenge
  //     // Form ko remount karenge
  //     setFormKey((previous) => previous + 1);

  //     setModal({
  //       isOpen: true,
  //       type: "success",
  //       title: "Quote Request Received!",
  //       message:
  //         "Thank you for sharing your travel requirements. Our travel specialists will review your details and get back to you shortly with a personalised quotation.",
  //     });
  //   } catch (error) {
  //     console.error("Travel Quote Error:", error);

  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Unable To Send Request",
  //       message:
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong. Please try again.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };



  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: String(formData.get("name") || "").trim(),

    email: String(formData.get("email") || "").trim(),

    phone: String(formData.get("phone") || "").trim(),

    contactMethod: String(
      formData.get("contactMethod") || ""
    ).trim(),

    destination: String(
      formData.get("destination") || ""
    ).trim(),

    travelDate: String(
      formData.get("travelDate") || ""
    ).trim(),

    travellers: String(
      formData.get("travellers") || ""
    ).trim(),

    journeyType: String(
      formData.get("journeyType") || ""
    ).trim(),

    message: String(
      formData.get("message") || ""
    ).trim(),
  };

  /* =====================================================
      VALIDATION
  ===================================================== */

  if (!data.name || !data.email || !data.phone) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Missing Information",
      message:
        "Please provide your name, email address and phone number.",
    });

    return;
  }

  if (!data.destination) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Destination Required",
      message:
        "Please tell us where you would like to travel.",
    });

    return;
  }

  if (!data.travelDate) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Travel Date Required",
      message:
        "Please select your preferred travel date.",
    });

    return;
  }

  if (!data.travellers) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Traveller Information Required",
      message:
        "Please enter the number of travellers.",
    });

    return;
  }

  if (!data.contactMethod) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Contact Method Required",
      message:
        "Please select your preferred contact method.",
    });

    return;
  }

  if (!data.journeyType) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Journey Type Required",
      message:
        "Please select the type of journey you are planning.",
    });

    return;
  }

  /* =====================================================
      SUBMIT STATE
  ===================================================== */

  setIsSubmitting(true);

  try {
    /* =====================================================
        WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
🌍 *NEW TRAVEL QUOTE REQUEST*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Preferred Contact: ${data.contactMethod}

━━━━━━━━━━━━━━━━━━

✈️ *TRAVEL DETAILS*

📍 Destination: ${data.destination}

📅 Travel Date: ${data.travelDate}

👥 Travellers: ${data.travellers}

🧭 Journey Type: ${data.journeyType}

━━━━━━━━━━━━━━━━━━

💬 *ADDITIONAL MESSAGE*

${data.message || "No additional message provided."}

━━━━━━━━━━━━━━━━━━

🌟 *Global Horizons Tours & Travels*
*New Website Enquiry*
    `.trim();

    /* =====================================================
        CLIENT WHATSAPP NUMBER
    ===================================================== */

    const whatsappNumber = "917770069004";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    /* =====================================================
        OPEN WHATSAPP
    ===================================================== */

    trackLead("travel_quote");

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* =====================================================
        RESET FORM
    ===================================================== */

    setFormKey((previous) => previous + 1);

    /* =====================================================
        SUCCESS MODAL
    ===================================================== */

    setModal({
      isOpen: true,
      type: "success",
      title: "Request Ready!",
      message:
        "Your travel quote request has been prepared successfully. WhatsApp has been opened so you can send your enquiry directly to our travel team.",
    });

  } catch (error) {
    console.error("Travel Quote Error:", error);

    setModal({
      isOpen: true,
      type: "error",
      title: "Unable To Continue",
      message:
        "Something went wrong while preparing your WhatsApp request. Please try again.",
    });

  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <div className="relative overflow-visible rounded-[28px] border border-[#e6dfd3] bg-[#fffefd] shadow-[0_30px_100px_rgba(18,63,85,0.12)]">
        {/* Top Accent */}
        <div className="h-[4px] w-full rounded-t-[28px] bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full border border-[#d9a737]/15" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

        <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-14">
          {/* HEADER */}

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#d9a737]" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-[#d9a737]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#14596a]">
                  Personalised Travel Planning
                </span>
              </div>
            </div>

            <h2 className="mt-5 font-serif text-[32px] font-bold leading-[1.15] text-[#123f55] sm:text-[40px] lg:text-[46px]">
              Tell Us Where You&apos;d Like

              <span className="block italic text-[#d9a737]">
                To Go.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#728084] sm:text-[15px]">
              Share your travel requirements with us and our
              specialists will carefully prepare a personalised
              quotation designed around your journey, preferences
              and comfort.
            </p>
          </div>

          {/* FORM */}

          <form
            key={formKey}
            onSubmit={handleSubmit}
            className="mt-10 space-y-12 lg:mt-12"
          >
            {/* YOUR DETAILS */}

            <FormSection
              number="01"
              title="Your Details"
              subtitle="Let us know how we can get in touch with you."
            >
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <PremiumInput
                  icon={<User size={17} />}
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <PremiumInput
                  icon={<Mail size={17} />}
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <PremiumInput
                  icon={<Phone size={17} />}
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

                <PremiumSelect
                  label="Preferred Contact Method"
                  name="contactMethod"
                  placeholder="Select preferred contact method"
                  required
                  options={[
                    "Email",
                    "Phone Call",
                    "WhatsApp",
                  ]}
                />
              </div>
            </FormSection>

            {/* TRAVEL DETAILS */}

            <FormSection
              number="02"
              title="Your Journey"
              subtitle="Tell us a little about the travel experience you are planning."
            >
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <PremiumInput
                  icon={<MapPin size={17} />}
                  label="Destination"
                  name="destination"
                  placeholder="Where would you like to travel?"
                  required
                />

                <PremiumDateInput required />

                <PremiumInput
                  icon={<Users size={17} />}
                  label="Number of Travellers"
                  name="travellers"
                  type="number"
                  placeholder="How many people?"
                  min="1"
                  required
                />

                <PremiumSelect
                  label="Type of Journey"
                  name="journeyType"
                  placeholder="Select your journey"
                  required
                  options={[
                    "Family Holiday",
                    "Weekend Getaway",
                    "Group Tour",
                    "Pilgrimage Tour",
                    "Corporate Travel",
                    "Custom Holiday",
                    "Transportation Service",
                  ]}
                />
              </div>
            </FormSection>

            {/* REQUIREMENTS */}

            <FormSection
              number="03"
              title="Your Requirements"
              subtitle="Tell us about anything that will help us plan your perfect journey."
            >
              <div>
                <label className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#657176]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14596a]/10 text-[#14596a]">
                    <MessageSquare size={14} />
                  </span>

                  Additional Details
                </label>

                <div className="group relative">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your preferred destinations, accommodation, transportation, sightseeing plans, special requirements or anything else we should know..."
                    className="w-full resize-none rounded-[16px] border border-[#ded8ce] bg-[#fcfbf8] px-5 py-4 text-[14px] leading-7 text-[#536166] outline-none transition-all duration-300 placeholder:text-[#a2aaac] hover:border-[#cfc6b8] focus:border-[#14596a] focus:bg-white focus:shadow-[0_10px_30px_rgba(20,89,106,0.08)] sm:px-6 sm:py-5"
                  />

                  <div className="pointer-events-none absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 bg-gradient-to-r from-[#14596a] via-[#d9a737] to-[#14596a] transition-transform duration-500 group-focus-within:scale-x-100 sm:left-6 sm:right-6" />
                </div>
              </div>
            </FormSection>

            {/* SUBMIT AREA */}

            <div className="relative overflow-hidden rounded-[20px] border border-[#dfe5e4] bg-[#f6f8f7] p-6 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#14596a]/[0.035] to-transparent" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#d9a737]"
                    />

                    <h3 className="font-serif text-[20px] font-bold text-[#123f55]">
                      Ready to Plan Your Journey?
                    </h3>
                  </div>

                  <p className="mt-3 text-[13px] leading-6 text-[#758185] sm:text-sm">
                    Our travel specialists will review your
                    requirements and get back to you with a
                    carefully prepared quotation.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex min-h-[56px] w-full items-center justify-center gap-4 overflow-hidden bg-[#14596a] px-8 text-[10px] font-bold uppercase tracking-[1.8px] text-white shadow-[0_15px_35px_rgba(20,89,106,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#123f55] hover:shadow-[0_22px_45px_rgba(20,89,106,0.3)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[220px]"
                >
                  <span className="absolute inset-0 translate-x-[-110%] bg-[#d9a737] transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting
                      ? "Submitting..."
                      : "Request My Quote"}

                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Privacy */}

            <div className="flex items-center justify-center gap-2 px-2 text-center text-[10px] leading-5 text-[#929b9d] sm:text-[11px]">
              <CheckCircle2
                size={14}
                className="shrink-0 text-[#d9a737]"
              />

              Your information is kept private and used only to
              respond to your travel enquiry.
            </div>
          </form>
        </div>
      </div>

      {/* COMMON PREMIUM MODAL */}

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

/* =====================================================
   FORM SECTION
===================================================== */

function FormSection({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mb-6 flex items-start gap-4 sm:mb-7">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9a737]/30 bg-[#fffaf0] font-serif text-[13px] font-bold text-[#d9a737] sm:h-11 sm:w-11 sm:text-sm">
          {number}
        </div>

        <div className="pt-0.5">
          <h3 className="font-serif text-[21px] font-bold text-[#123f55] sm:text-[22px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-5 text-[#899396] sm:text-[13px] sm:leading-6">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mb-6 h-px w-full bg-gradient-to-r from-[#ded8ce] via-[#ded8ce]/60 to-transparent sm:mb-7" />

      {children}
    </section>
  );
}

/* =====================================================
   PREMIUM INPUT
===================================================== */

function PremiumInput({
  icon,
  label,
  ...props
}: {
  icon?: ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div className="group">
      <label className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#657176]">
        {icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14596a]/8 text-[#14596a] transition-colors duration-300 group-focus-within:bg-[#14596a] group-focus-within:text-white">
            {icon}
          </span>
        )}

        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          className="h-[56px] w-full rounded-[14px] border border-[#ded8ce] bg-[#fcfbf8] px-5 text-[14px] text-[#536166] outline-none transition-all duration-300 placeholder:text-[#a2aaac] hover:border-[#cfc6b8] focus:border-[#14596a] focus:bg-white focus:shadow-[0_10px_28px_rgba(20,89,106,0.08)]"
        />

        <span className="pointer-events-none absolute bottom-0 left-[18px] right-[18px] h-[2px] scale-x-0 bg-gradient-to-r from-[#14596a] via-[#d9a737] to-[#14596a] transition-transform duration-500 group-focus-within:scale-x-100" />
      </div>
    </div>
  );
}

/* =====================================================
   PREMIUM SELECT
===================================================== */

function PremiumSelect({
  label,
  name,
  options,
  placeholder = "Select an option",
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div ref={selectRef} className="group relative z-20">
      <label className="mb-2.5 block text-[10px] font-bold uppercase tracking-[1.5px] text-[#657176]">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`relative flex h-[56px] w-full items-center justify-between rounded-[14px] border px-5 text-left transition-all duration-300 ${
          isOpen
            ? "border-[#14596a] bg-white shadow-[0_10px_28px_rgba(20,89,106,0.10)]"
            : "border-[#ded8ce] bg-[#fcfbf8] hover:border-[#cfc6b8]"
        }`}
      >
        <span
          className={`text-[14px] ${
            selectedValue
              ? "text-[#536166]"
              : "text-[#a2aaac]"
          }`}
        >
          {selectedValue || placeholder}
        </span>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#14596a] text-white"
              : "bg-[#14596a]/8 text-[#14596a]"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <input
        type="hidden"
        name={name}
        value={selectedValue}
        required={required}
      />

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-[80] w-full overflow-hidden rounded-[18px] border border-[#e4ddd1] bg-[#fffefd] p-2 shadow-[0_25px_70px_rgba(18,63,85,0.18)]">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />

          <div className="px-3 pb-2 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#9aa2a4]">
              Choose an option
            </span>
          </div>

          <div className="max-h-[250px] space-y-1 overflow-y-auto px-1 pb-1">
            {options.map((option, index) => {
              const isSelected =
                selectedValue === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedValue(option);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[12px] px-3.5 py-3 text-left text-[13px] transition-all duration-200 ${
                    isSelected
                      ? "bg-[#14596a] text-white shadow-[0_8px_20px_rgba(20,89,106,0.18)]"
                      : "text-[#536166] hover:bg-[#f4f6f5] hover:text-[#14596a]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
                        isSelected
                          ? "bg-white/15 text-[#e5b34d]"
                          : "bg-[#14596a]/7 text-[#14596a]/60"
                      }`}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="font-medium">
                      {option}
                    </span>
                  </div>

                  {isSelected && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9a737] text-[#123f55]">
                      <CheckCircle2 size={14} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   PREMIUM DATE INPUT
===================================================== */

function PremiumDateInput({
  required = false,
}: {
  required?: boolean;
}) {
  const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  });

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const previousMonth = () => {
    const today = new Date();

    const previous = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    const minimumMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previous >= minimumMonth) {
      setCurrentMonth(previous);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const today = new Date();

  const days = Array.from(
    {
      length: firstDay + daysInMonth,
    },
    (_, index) => {
      if (index < firstDay) return null;

      return index - firstDay + 1;
    }
  );

  const isSameDay = (
    date1: Date | null,
    date2: Date
  ) => {
    if (!date1) return false;

    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date: Date) => {
    const compareDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return compareDate < todayDate;
  };

  const formattedValue = selectedDate
    ? `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(
        selectedDate.getDate()
      ).padStart(2, "0")}`
    : "";

  return (
    <div ref={calendarRef} className="group relative z-30">
      <label className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#657176]">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#d9a737] text-white"
              : "bg-[#d9a737]/10 text-[#b9891f]"
          }`}
        >
          <CalendarDays size={15} />
        </span>

        Preferred Travel Date
      </label>

      <button
        type="button"
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        className={`relative flex h-[56px] w-full items-center justify-between rounded-[14px] border px-5 text-left transition-all duration-300 ${
          isOpen
            ? "border-[#14596a] bg-white shadow-[0_10px_28px_rgba(20,89,106,0.10)]"
            : "border-[#ded8ce] bg-[#fcfbf8] hover:border-[#cfc6b8]"
        }`}
      >
        <span
          className={`text-[14px] ${
            selectedDate
              ? "text-[#536166]"
              : "text-[#a2aaac]"
          }`}
        >
          {selectedDate
            ? formatDate(selectedDate)
            : "Select your preferred date"}
        </span>

        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            isOpen
              ? "bg-[#14596a] text-white"
              : "bg-[#14596a]/8 text-[#14596a]"
          }`}
        >
          <CalendarDays size={16} />
        </span>
      </button>

      <input
        type="hidden"
        name="travelDate"
        value={formattedValue}
        required={required}
      />

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-[100] w-full min-w-[310px] overflow-hidden rounded-[22px] border border-[#e4ddd1] bg-[#fffefd] p-4 shadow-[0_30px_80px_rgba(18,63,85,0.20)] sm:min-w-[350px] sm:p-5">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={previousMonth}
              disabled={
                currentMonth.getFullYear() ===
                  today.getFullYear() &&
                currentMonth.getMonth() ===
                  today.getMonth()
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded8ce] bg-[#faf9f5] text-[#14596a] transition-all hover:border-[#14596a] hover:bg-[#14596a] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="text-center">
              <h4 className="font-serif text-lg font-bold text-[#123f55] sm:text-xl">
                {currentMonth.toLocaleString(
                  "default",
                  {
                    month: "long",
                  }
                )}
              </h4>

              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[1.8px] text-[#d9a737]">
                {year}
              </span>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded8ce] bg-[#faf9f5] text-[#14596a] transition-all hover:border-[#14596a] hover:bg-[#14596a] hover:text-white"
            >
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#d9a737]/40 to-transparent" />

          <div className="grid grid-cols-7 gap-1 text-center">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <div
                key={day}
                className="pb-2 text-[8px] font-bold uppercase tracking-[1px] text-[#9aa2a4]"
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => {
              if (!day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square"
                  />
                );
              }

              const date = new Date(
                year,
                month,
                day
              );

              const selected = isSameDay(
                selectedDate,
                date
              );

              const currentDay = isToday(date);

              const past = isPastDate(date);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={past}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  className={`relative flex aspect-square items-center justify-center rounded-full text-[11px] font-semibold transition-all duration-200 ${
                    selected
                      ? "scale-105 bg-[#14596a] text-white shadow-[0_8px_20px_rgba(20,89,106,0.30)]"
                      : currentDay
                      ? "border border-[#d9a737] bg-[#fffaf0] text-[#b9891f]"
                      : past
                      ? "cursor-not-allowed text-[#d0d3d2]"
                      : "text-[#536166] hover:bg-[#14596a]/10 hover:text-[#14596a]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#ebe6de] pt-3">
            <button
              type="button"
              onClick={() => {
                const now = new Date();

                setCurrentMonth(
                  new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    1
                  )
                );

                setSelectedDate(now);
                setIsOpen(false);
              }}
              className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#14596a] transition hover:text-[#d9a737]"
            >
              Select Today
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedDate(null);
              }}
              className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#9aa2a4] transition hover:text-[#b04328]"
            >
              Clear Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}