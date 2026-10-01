import LegalPageLayout from "@/components/LegalPageLayout";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cancellation & Refund Policy",
  description: "Cancellation terms and refund process for tours and transport bookings with Global Horizons Tours & Travels.",
  path: "/cancellation-refund-policy",
});

export default function CancellationRefundPolicyPage() {
  const sections = [
    {
      title: "Cancellation Policy Overview",
      content: [
        "We understand that travel plans can change unexpectedly. Cancellation requests will be handled according to the nature of the booking, the services reserved and any commitments already made to third-party service providers.",
        "Applicable cancellation charges may vary depending on the booking type and timing of the cancellation request.",
      ],
    },

    {
      title: "How to Request Cancellation",
      content: [
        "Cancellation requests should be communicated to Global Horizon Tours & Travels through an official communication channel such as email, WhatsApp or telephone.",
        "The effective cancellation time may be considered from the time the request is received and acknowledged by our team.",
      ],
    },

    {
      title: "Cancellation Charges",
      content: [
        "Cancellation charges may depend on how close the cancellation request is to the scheduled travel date and whether payments have already been committed to hotels, transport providers or other service partners.",
      ],
      points: [
        "Early cancellation may be eligible for a higher refund, subject to applicable deductions.",
        "Cancellation closer to the travel date may result in higher charges.",
        "Last-minute cancellations may be non-refundable depending on committed service costs.",
        "Non-refundable bookings or special promotional offers may not qualify for refunds.",
        "Third-party cancellation charges may be deducted where applicable.",
      ],
    },

    {
      title: "Refund Processing",
      content: [
        "Where a refund is approved, Global Horizon Tours & Travels will initiate the refund process after necessary verification and calculation of applicable deductions.",
        "Refund processing times may vary depending on the original payment method, banking institutions and payment service providers.",
      ],
    },

    {
      title: "No-Show Policy",
      content: [
        "If a customer fails to arrive at the agreed pickup location or does not use the booked service without prior cancellation, the booking may be treated as a no-show.",
        "No-show bookings may be non-refundable depending on the services already arranged.",
      ],
    },

    {
      title: "Service Provider Charges",
      content: [
        "Certain travel services may involve third-party providers such as hotels, transport operators or activity providers.",
        "Refund eligibility for these services may depend on the cancellation policies of the respective service provider.",
      ],
    },

    {
      title: "Changes Instead of Cancellation",
      content: [
        "Where possible, customers may request modifications to travel dates, pickup timings or services instead of cancelling a booking.",
        "Changes are subject to availability and may involve additional charges.",
      ],
    },

    {
      title: "Exceptional Circumstances",
      content: [
        "In exceptional situations, such as major travel disruptions or emergencies, cancellation and refund requests may be reviewed individually based on available circumstances and applicable service commitments.",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Booking Protection"
      title="Cancellation & Refund Policy"
      description="Clear information regarding cancellations, booking changes and the refund process for our travel services."
      sections={sections}
    />
  );
}