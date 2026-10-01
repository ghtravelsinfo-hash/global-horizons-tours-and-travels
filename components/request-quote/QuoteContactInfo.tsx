import {
  Clock3,
  ShieldCheck,
  Headphones,
  Mail,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Quick Response",
    description:
      "Our travel specialists review your request and respond as quickly as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Tailored For You",
    description:
      "Every itinerary and quotation is prepared around your specific requirements.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Receive professional assistance before, during and throughout your journey.",
  },
];

export default function QuoteContactInfo() {
  return (
    <div>

      {/* Eyebrow */}
      <div className="flex items-center gap-3">

        <span className="h-[2px] w-9 bg-[#d9a737]" />

        <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#14596a]">
          Travel With Confidence
        </span>

      </div>

      {/* Heading */}
      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.15] text-[#123f55]">

        Your Journey

        <span className="block italic text-[#d9a737]">
          Starts Here.
        </span>

      </h2>

      <p className="mt-6 max-w-md text-[15px] leading-7 text-[#687276]">

        Whether you're planning a family holiday, corporate trip, pilgrimage,
        group journey or completely customised experience, we're here to help
        you plan every detail.

      </p>

      {/* Benefits */}
      <div className="mt-10 space-y-7">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex gap-4"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5ead0] text-[#14596a]">

                <Icon size={19} />

              </div>

              <div>

                <h3 className="font-serif text-lg font-bold text-[#123f55]">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-[#7a8588]">
                  {benefit.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Contact Card */}
      <div className="mt-12 rounded-[20px] bg-[#123f55] p-7 text-white shadow-[0_20px_50px_rgba(18,63,85,0.18)]">

        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#e5b34d]">
          Prefer To Speak Directly?
        </p>

        <h3 className="mt-4 font-serif text-2xl font-bold">
          Our Travel Team Is Here.
        </h3>

        <div className="mt-6 space-y-4">

          <a
            href="tel:+917770069004"
            className="flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >

            <Phone size={16} className="text-[#e5b34d]" />

            +91 77700 69004

          </a>

          <a
            href="mailto:ghtravelsinfo@gmail.com"
            className="flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >

            <Mail size={16} className="text-[#e5b34d]" />

            ghtravelsinfo@gmail.com

          </a>

        </div>

      </div>

    </div>
  );
}