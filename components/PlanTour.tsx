import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function PlanTour() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20 lg:py-24">

      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-[#125467]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#e6b442]/[0.05] blur-3xl" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

        {/* ===================================================== */}
        {/* ================= LEFT CONTENT ====================== */}
        {/* ===================================================== */}

        <div>

          {/* Premium Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#e6b442]" />

            <p className="text-xs font-semibold tracking-[3px] text-[#125467]">
              PLAN YOUR PERFECT JOURNEY
            </p>
          </div>

          {/* Small Heading */}
          <div className="mt-6 flex items-center gap-3">
            <Sparkles
              size={18}
              strokeWidth={1.8}
              className="text-[#e6b442]"
            />

            <p className="font-serif text-xl italic text-[#b9471e] md:text-2xl">
              Let&apos;s Go Together
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 max-w-[620px] font-serif text-4xl font-bold leading-[1.12] text-[#123f55] md:text-5xl lg:text-[52px]">
            Plan Your Next
            <br />

            <span className="italic text-[#b9471e]">
              Great Adventure.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[600px] text-[16px] leading-8 text-gray-600">
            Every journey is more than simply travelling from one place to
            another. It is about discovering new destinations, spending
            meaningful time with the people you care about, and creating
            memories that stay with you long after the journey ends.
          </p>

          <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-gray-600">
            From personalised tours and family vacations to private transport,
            airport transfers and unforgettable sightseeing experiences, we
            carefully design every journey around your needs.
          </p>

          {/* ================= PREMIUM FEATURES ================= */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Trusted Service */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#125467] text-[#e6b442] shadow-sm">
                <ShieldCheck size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="font-semibold text-[#123f55]">
                  Trusted Service
                </p>

                <p className="mt-0.5 text-sm text-gray-500">
                  Safe & reliable journeys
                </p>
              </div>
            </div>

            {/* Custom Tours */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3e7c7] text-[#b9471e] shadow-sm">
                <MapPin size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="font-semibold text-[#123f55]">
                  Custom Tours
                </p>

                <p className="mt-0.5 text-sm text-gray-500">
                  Designed around you
                </p>
              </div>
            </div>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {/* Explore Tours */}
            <Link
              href="/tours"
              className="group inline-flex h-[58px] items-center justify-center gap-3 bg-[#b9471e] px-8 text-sm font-semibold tracking-[1px] text-white shadow-lg shadow-[#b9471e]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#963714] hover:shadow-xl"
            >
              EXPLORE OUR TOURS

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Custom Trip */}
            <Link
              href="/enquiry"
              className="group inline-flex h-[58px] items-center justify-center gap-3 border border-[#125467]/20 bg-white px-8 text-sm font-semibold tracking-[1px] text-[#125467] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#125467] hover:bg-[#125467] hover:text-white"
            >
              PLAN A CUSTOM TRIP

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

        {/* ===================================================== */}
        {/* ================= RIGHT IMAGE COLLAGE =============== */}
        {/* ===================================================== */}

        <div className="relative mx-auto w-full max-w-[540px] lg:pt-4">

          {/* ================= DECORATIVE CORNERS ================= */}

          <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#e6b442]" />

          <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[#125467]/30" />

          {/* ================= IMAGE COLLAGE ================= */}

          <div className="relative grid grid-cols-[minmax(0,1fr)_125px] gap-5">

            {/* ================================================= */}
            {/* ================= MAIN COLUMN ==================== */}
            {/* ================================================= */}

            <div className="grid gap-5">

              {/* ---------- TOP IMAGE ---------- */}
              <div className="group relative overflow-hidden rounded-tl-[90px] rounded-br-2xl border border-white bg-[#f3f1eb] shadow-[0_18px_45px_rgba(18,63,85,0.12)]">

                <div className="flex min-h-[145px] items-center justify-center p-1">
                  <img
                    src="/4.png"
                    alt="Tour experience"
                    className="block h-full max-h-[145px] w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-tl-[90px] rounded-br-2xl ring-1 ring-inset ring-black/[0.04]" />

              </div>

              {/* ---------- MAIN IMAGE ---------- */}
              <div className="group relative overflow-hidden rounded-bl-[90px] rounded-tr-2xl border border-white bg-[#f3f1eb] shadow-[0_20px_50px_rgba(18,63,85,0.14)]">

                <div className="flex min-h-[330px] items-center justify-center p-1">
                  <img
                    src="/2.png"
                    alt="Travel journey"
                    className="block h-full max-h-[330px] w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-bl-[90px] rounded-tr-2xl ring-1 ring-inset ring-black/[0.04]" />

              </div>

            </div>

            {/* ================================================= */}
            {/* ================= SIDE COLUMN ==================== */}
            {/* ================================================= */}

            <div className="grid gap-5">

              {/* ---------- SIDE TOP ---------- */}
              <div className="group relative overflow-hidden rounded-tr-[55px] rounded-bl-xl border border-white bg-[#f3f1eb] shadow-[0_15px_40px_rgba(18,63,85,0.11)]">

                <div className="flex min-h-[145px] items-center justify-center p-1">
                  <img
                    src="/1.png"
                    alt="Tour guide"
                    className="block h-full max-h-[145px] w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-tr-[55px] rounded-bl-xl ring-1 ring-inset ring-black/[0.04]" />

              </div>

              {/* ---------- SIDE BOTTOM ---------- */}
              <div className="group relative overflow-hidden rounded-br-[80px] rounded-tl-xl border border-white bg-[#f3f1eb] shadow-[0_20px_45px_rgba(18,63,85,0.13)]">

                <div className="flex min-h-[330px] items-center justify-center p-1">
                  <img
                    src="/3.png"
                    alt="Travel memories"
                    className="block h-full max-h-[330px] w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-br-[80px] rounded-tl-xl ring-1 ring-inset ring-black/[0.04]" />

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ================= PREMIUM BADGE ================== */}
          {/* ================================================= */}

          <div className="absolute -bottom-7 left-1/2 z-20 -translate-x-1/2">

            <div className="relative min-w-[205px] rounded-2xl border border-white/30 bg-[#125467] px-7 py-5 text-center shadow-[0_18px_45px_rgba(18,63,85,0.25)]">

              {/* Gold Accent */}
              <div className="absolute left-1/2 top-0 h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#e6b442]" />

              <p className="font-serif text-2xl font-bold tracking-wide text-[#e6b442]">
                Your Journey
              </p>

              <p className="mt-1 whitespace-nowrap text-[10px] font-medium tracking-[3px] text-white/75">
                OUR RESPONSIBILITY
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}