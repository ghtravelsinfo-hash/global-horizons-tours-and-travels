import LegalPageLayout from "@/components/LegalPageLayout";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payment Policy",
  description: "Accepted payment methods and payment terms for Global Horizons Tours & Travels bookings.",
  path: "/payment-policy",
});

export default function PaymentPolicyPage() {
  const sections = [
    {
      title: "Payment Requirements",
      content: [
        "Depending on the type of service, Global Horizon Tours & Travels may require an advance payment, partial payment or full payment before booking confirmation.",
        "Payment requirements will be communicated during the booking process.",
      ],
    },

    {
      title: "Accepted Payment Methods",
      content: [
        "Available payment methods may include secure online payment options, bank transfers, UPI or other officially approved payment methods communicated by our team.",
      ],
    },

    {
      title: "Advance Payments",
      content: [
        "An advance payment may be required to reserve transportation, accommodation or other travel services.",
        "The required amount may vary depending on service availability and commitments required to confirm the booking.",
      ],
    },

    {
      title: "Outstanding Payments",
      content: [
        "Customers are responsible for completing any remaining payment according to the agreed booking terms.",
        "Failure to complete required payments may affect the confirmation or delivery of services.",
      ],
    },

    {
      title: "Payment Confirmation",
      content: [
        "Customers should retain payment confirmation or transaction records until the booking has been completed.",
        "Our team may request payment verification in case of transaction discrepancies.",
      ],
    },

    {
      title: "Pricing Changes",
      content: [
        "Prices may change before booking confirmation due to supplier pricing, availability, seasonal demand, route modifications or changes in service requirements.",
        "Once a booking is confirmed, applicable pricing will generally follow the confirmed booking details unless modifications are requested.",
      ],
    },

    {
      title: "Additional Charges",
      points: [
        "Additional waiting time where applicable.",
        "Route changes requested after booking confirmation.",
        "Additional destinations or services.",
        "Parking, tolls or entry charges where not included.",
        "Damage caused to vehicles or property.",
        "Changes requested after confirmation that result in additional operational costs.",
      ],
    },

    {
      title: "Refunds",
      content: [
        "Refund eligibility will be handled according to our Cancellation & Refund Policy and any applicable terms communicated during the booking process.",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Payment Information"
      title="Payment Policy"
      description="Important information regarding payments, advances, pricing and financial responsibilities for your booking."
      sections={sections}
    />
  );
}