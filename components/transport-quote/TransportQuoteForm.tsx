"use client";

import { trackLead } from "@/lib/analytics";
import { FormEvent, useState } from "react";
import { Send, ShieldCheck, Loader2 } from "lucide-react";

import JourneyDetails from "./JourneyDetails";
import VehicleDetails from "./VehicleDetails";
import CustomerDetails from "./CustomerDetails";

import FormStatusModal from "@/components/common/FormStatusModal";

export type TransportFormData = {
  journeyType: string;

  pickupLocation: string;
  dropLocation: string;

  departureDate: string;
  departureTime: string;

  returnDate: string;
  returnTime: string;

  vehicleType: string;
  passengers: string;
  vehicles: string;

  fullName: string;
  phone: string;
  email: string;

  requirements: string;
};

type ModalState = {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
};

const initialFormData: TransportFormData = {
  journeyType: "one-way",

  pickupLocation: "",
  dropLocation: "",

  departureDate: "",
  departureTime: "",

  returnDate: "",
  returnTime: "",

  vehicleType: "",
  passengers: "",
  vehicles: "1",

  fullName: "",
  phone: "",
  email: "",

  requirements: "",
};

export default function TransportQuoteForm() {
  const [formData, setFormData] =
    useState<TransportFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const updateField = (
    field: keyof TransportFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // const handleSubmit = async (
  //   event: FormEvent<HTMLFormElement>
  // ) => {
  //   event.preventDefault();

  //   // Double submission prevent
  //   if (isSubmitting) return;

  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/api/transport-quote",
  //       {
  //         method: "POST",

  //         headers: {
  //           "Content-Type": "application/json",
  //         },

  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     // Safe JSON parsing
  //     const result = await response.json().catch(() => ({
  //       success: false,
  //       message:
  //         "Unable to process the server response.",
  //     }));

  //     if (!response.ok) {
  //       throw new Error(
  //         result.message ||
  //           "Unable to submit transport quote request."
  //       );
  //     }

  //     // Reset controlled form data
  //     setFormData(initialFormData);

  //     // Success Modal
  //     setModal({
  //       isOpen: true,
  //       type: "success",
  //       title: "Transport Request Received!",
  //       message:
  //         "Thank you for sharing your journey details. Our transport specialists have received your request and will get back to you shortly with a customised quotation.",
  //     });
  //   } catch (error) {
  //     console.error(
  //       "Transport Quote Request Error:",
  //       error
  //     );

  //     // Error Modal
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
  //     // IMPORTANT
  //     // Loading state always reset
  //     setIsSubmitting(false);
  //   }
  // };


const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  // Prevent double submission
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    /* =====================================================
       CREATE WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
🚌 *NEW TRANSPORT QUOTE REQUEST*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${formData.fullName || "Not provided"}

Email: ${formData.email || "Not provided"}

Phone: ${formData.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━

🗺️ *JOURNEY DETAILS*

Journey Type: ${formData.journeyType || "Not specified"}

Pickup Location: ${
  formData.pickupLocation || "Not provided"
}

Drop Location: ${
  formData.dropLocation || "Not provided"
}

Departure Date: ${
  formData.departureDate || "Not provided"
}

Departure Time: ${
  formData.departureTime || "Not provided"
}

${
  formData.journeyType === "round-trip"
    ? `
Return Date: ${formData.returnDate || "Not provided"}

Return Time: ${formData.returnTime || "Not provided"}
`
    : ""
}

━━━━━━━━━━━━━━━━━━

🚐 *TRANSPORT REQUIREMENTS*

Vehicle Type: ${
  formData.vehicleType || "Not specified"
}

Number of Passengers: ${
  formData.passengers || "Not specified"
}

Number of Vehicles: ${
  formData.vehicles || "1"
}

━━━━━━━━━━━━━━━━━━

💬 *ADDITIONAL REQUIREMENTS*

${
  formData.requirements ||
  "No additional requirements provided."
}

━━━━━━━━━━━━━━━━━━

🌍 *Global Horizons Tours & Travels*

*New Transport Enquiry*
`.trim();

    /* =====================================================
       WHATSAPP NUMBER
       Country code ke saath number.
       + sign nahi lagana.
    ===================================================== */

    const whatsappNumber = "917770069004";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    /* =====================================================
       OPEN WHATSAPP
    ===================================================== */

    trackLead("transport_quote");

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* =====================================================
       RESET FORM
    ===================================================== */

    setFormData(initialFormData);

    /* =====================================================
       SUCCESS MODAL
    ===================================================== */

    setModal({
      isOpen: true,
      type: "success",
      title: "Transport Request Ready!",
      message:
        "Your transport request has been prepared successfully. WhatsApp has been opened so you can send your journey details directly to our transport team.",
    });

  } catch (error) {
    console.error(
      "Transport Quote Request Error:",
      error
    );

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
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(18,63,85,0.08)]"
      >
        {/* Form Header */}

        <div className="border-b border-gray-100 px-6 py-7 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7eef0] text-[#123f55]">
              <Send size={20} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#123f55]">
                Tell Us About Your Journey
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Complete the details below and receive a customized
                transport quotation from our team.
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}

        <div className="space-y-10 px-6 py-8 sm:px-8 sm:py-10">
          <JourneyDetails
            formData={formData}
            updateField={updateField}
          />

          <VehicleDetails
            formData={formData}
            updateField={updateField}
          />

          <CustomerDetails
            formData={formData}
            updateField={updateField}
          />

          {/* Submit Section */}

          <div className="border-t border-gray-100 pt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#123f55] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#123f55]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d5069] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  Sending Request...
                </>
              ) : (
                <>
                  Request My Transport Quote

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-gray-400">
              <ShieldCheck
                size={15}
                className="text-[#d4a139]"
              />

              Your information is securely shared with our travel
              team.
            </div>
          </div>
        </div>
      </form>

      {/* COMMON PREMIUM STATUS MODAL */}

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