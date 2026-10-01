import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Compass,
} from "lucide-react";

export default function PlanJourney() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full border border-[#e5b34d]/20" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full border border-[#14596a]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5b34d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Premium CTA Card */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#e6dfd2] bg-white px-6 py-14 text-center shadow-[0_25px_80px_rgba(20,89,106,0.10)] sm:px-10 md:px-16 md:py-20">

          {/* Top Decorative Line */}
          <div className="mx-auto flex items-center justify-center gap-4">

            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#e5b34d]" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5b34d]/40 bg-[#e5b34d]/10 text-[#d9a737]">
              <Sparkles size={18} strokeWidth={1.8} />
            </div>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#e5b34d]" />

          </div>

          {/* Small Heading */}
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#d9a737]">
            Your Next Adventure Awaits
          </p>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-[36px] font-bold leading-[1.15] text-[#14596a] sm:text-[44px] md:text-[52px]">
            Let&apos;s Plan Your
            <span className="block italic text-[#d9a737]">
              Journey Together
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#687276]">
            Speak with our travel designers today and begin crafting a
            personalised journey that perfectly aligns with your aspirations,
            preferences and timeline.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Primary Button */}
            <a
              href="/enquiry"
              className="group inline-flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-xl bg-[#dc6945] px-8 text-[13px] font-semibold tracking-[0.8px] text-white shadow-[0_12px_25px_rgba(220,105,69,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#c55332] hover:shadow-[0_18px_35px_rgba(220,105,69,0.35)]"
            >
              START PLANNING

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917770069004"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-xl border border-[#14596a]/20 bg-[#faf9f6] px-8 text-[13px] font-semibold tracking-[0.5px] text-[#14596a] transition duration-300 hover:-translate-y-1 hover:border-[#14596a]/40 hover:bg-white hover:shadow-[0_15px_30px_rgba(20,89,106,0.10)]"
            >
              <MessageCircle
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              WHATSAPP US
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="mx-auto mt-12 grid max-w-[650px] grid-cols-1 gap-4 border-t border-[#ebe5da] pt-8 sm:grid-cols-3">

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#687276]">
              <Compass size={15} className="text-[#d9a737]" />
              Personalised Planning
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#687276]">
              <Sparkles size={15} className="text-[#d9a737]" />
              Premium Experiences
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#687276]">
              <MessageCircle size={15} className="text-[#d9a737]" />
              Dedicated Support
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}