"use client";

import { FormEvent, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Clock3,
  ChevronDown,
  ExternalLink,
  Send,
} from "lucide-react";

export default function Contact() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState("+91");

  const countries = [
    { code: "+91", country: "India" },
    { code: "+44", country: "United Kingdom" },
    { code: "+1", country: "United States" },
    { code: "+61", country: "Australia" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

const formData = new FormData(e.currentTarget);

const name = formData.get("name")?.toString() || "";
const email = formData.get("email")?.toString() || "";
const phone = formData.get("phone")?.toString() || "";
const message = formData.get("message")?.toString() || "";

// Client WhatsApp number
// Country code included, without +
const whatsappNumber = "917770069004";

const whatsappMessage = `
🌍 *NEW TRAVEL ENQUIRY*

━━━━━━━━━━━━━━

👤 *Name:* ${name}

📧 *Email:* ${email}

📱 *Phone:* ${phone}

💬 *Message:*
${message}

━━━━━━━━━━━━━━
Sent from Global Horizons Tours & Travels Website
`.trim();

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

window.open(url, "_blank", "noopener,noreferrer");
};


  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 md:py-24 lg:px-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-[#14596a]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-[#dc6945]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#dc6945]/60" />

            <span className="h-2 w-2 rotate-45 bg-[#dc6945]" />

            <span className="h-px w-10 bg-[#dc6945]/60" />
          </div>

          <p className="text-[12px] font-semibold tracking-[2.5px] text-[#14596a]">
            LET&apos;S PLAN YOUR NEXT JOURNEY
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#123f55] md:text-5xl lg:text-[56px]">
            Contact Us
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-gray-600 md:text-[16px]">
            Tell us where you would like to go, and our travel specialists will
            help you create a journey designed around your preferences.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_25px_80px_rgba(18,63,85,0.08)]">

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">

            {/* ================= LEFT FORM ================= */}
            <div className="relative p-7 md:p-10 lg:p-12">

              {/* Top Label */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[2px] text-[#dc6945]">
                  SEND US A MESSAGE
                </p>

                <h3 className="mt-3 font-serif text-3xl font-bold text-[#123f55]">
                  Start Your Journey
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-gray-600">
                  Share your travel requirements and our team will get back to
                  you personally.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-semibold tracking-[1px] text-[#123f55]"
                  >
                    FULL NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="h-14 w-full rounded-xl border border-gray-200 bg-[#faf9f5] px-5 text-[15px] text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#14596a] focus:bg-white focus:ring-4 focus:ring-[#14596a]/5"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold tracking-[1px] text-[#123f55]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="h-14 w-full rounded-xl border border-gray-200 bg-[#faf9f5] px-5 text-[15px] text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#14596a] focus:bg-white focus:ring-4 focus:ring-[#14596a]/5"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[13px] font-semibold tracking-[1px] text-[#123f55]"
                  >
                    PHONE NUMBER
                  </label>

                  <div className="relative flex h-14 w-full rounded-xl border border-gray-200 bg-[#faf9f5] transition focus-within:border-[#14596a] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#14596a]/5">

                    {/* Country Code */}
                    <button
                      type="button"
                      onClick={() => setCountryOpen(!countryOpen)}
                      className="flex w-[110px] items-center justify-between border-r border-gray-200 px-4 text-[15px] font-medium text-[#123f55]"
                    >
                      <span>{country}</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          countryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {countryOpen && (
                      <div className="absolute left-0 top-[62px] z-30 w-[180px] overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                        {countries.map((item) => (
                          <button
                            key={item.code}
                            type="button"
                            onClick={() => {
                              setCountry(item.code);
                              setCountryOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-[#faf9f5]"
                          >
                            <span>{item.country}</span>

                            <span className="font-medium text-[#14596a]">
                              {item.code}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="01234 567890"
                      className="min-w-0 flex-1 rounded-r-xl bg-transparent px-5 text-[15px] text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-semibold tracking-[1px] text-[#123f55]"
                  >
                    HOW CAN WE HELP YOU?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your travel plans..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#faf9f5] px-5 py-4 text-[15px] text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#14596a] focus:bg-white focus:ring-4 focus:ring-[#14596a]/5"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-[#dc6945] px-8 text-[13px] font-semibold tracking-[1.5px] text-white shadow-[0_12px_25px_rgba(220,105,69,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c75332] hover:shadow-[0_18px_35px_rgba(220,105,69,0.28)]"
                >
                  SEND YOUR QUERY

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="bg-[#f4f2ed] p-7 md:p-10 lg:p-12">

              {/* Heading */}
              <div className="mb-7">
                <p className="text-xs font-semibold tracking-[2px] text-[#dc6945]">
                  FIND US
                </p>

                <h3 className="mt-3 font-serif text-3xl font-bold text-[#123f55]">
                  Our Operational Base
                </h3>
              </div>

              {/* MAP */}
              <div className="relative h-[400px] overflow-hidden rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

                <iframe
                  title="Global Tours Location"
                  src="https://www.google.com/maps?q=19.8952399,75.3417461&z=17&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />

                {/* Location Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-md">

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7eef0]">
                      <MapPin
                        size={22}
                        className="text-[#14596a]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif text-lg font-bold text-[#123f55]">
                        Chhatrapati Sambhajinagar
                      </h4>

                      <p className="mt-1 text-sm leading-5 text-gray-600">
                        Maharashtra, India
                      </p>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=19.8952399,75.3417461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#14596a] transition hover:text-[#dc6945]"
                      >
                        GET DIRECTIONS

                        <ExternalLink size={14} />
                      </a>
                    </div>

                  </div>
                </div>

              </div>

              {/* ================= INFORMATION ================= */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* 24/7 Availability */}
<div className="relative overflow-hidden rounded-2xl border border-[#dce6e8] bg-white p-6 shadow-[0_12px_35px_rgba(18,63,85,0.06)]">

  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d9a737]/10 blur-2xl" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-center gap-4">

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#14596a] text-white shadow-[0_8px_20px_rgba(20,89,106,0.18)]">

        <Clock3 size={20} />

        {/* Online Indicator */}
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#d9a737]" />

      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#d9a737]">
          Always Available
        </p>

        <h4 className="mt-1 font-serif text-[18px] font-bold text-[#123f55]">
          Available 24 × 7
        </h4>
      </div>

    </div>


    {/* Divider */}
    <div className="my-5 h-px bg-gradient-to-r from-[#14596a]/15 via-[#d9a737]/30 to-transparent" />


    {/* Content */}
    <div className="flex items-center gap-3">

      {/* Status */}
      <div className="flex items-center gap-2 rounded-full bg-[#14596a]/7 px-3 py-2">

        <span className="relative flex h-2.5 w-2.5">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32a36b] opacity-40" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#32a36b]" />

        </span>

        <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#14596a]">
          We're Online
        </span>

      </div>

    </div>


    <p className="mt-4 text-[13px] leading-6 text-[#728084]">
      Our travel assistance team is available around the clock to help you
      plan your journey and answer your travel enquiries.
    </p>


    {/* Bottom Premium Text */}
    <div className="mt-5 flex items-center gap-3">

      <span className="h-px flex-1 bg-[#e5e9e8]" />

      <span className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#9aa5a7]">
        Travel Support Anytime
      </span>

      <span className="h-px flex-1 bg-[#e5e9e8]" />

    </div>

  </div>

</div>

                {/* Contact Details */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                  <h4 className="text-[13px] font-semibold tracking-[1px] text-[#123f55]">
                    CONTACT DETAILS
                  </h4>

                  <div className="mt-5 space-y-5">

                    <a
                      href="tel:+917770069004"
                      className="group flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7eef0] transition group-hover:bg-[#14596a]">
                        <Phone
                          size={18}
                          className="text-[#14596a] transition group-hover:text-white"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          PHONE
                        </p>

                        <p className="text-sm font-medium text-gray-800">
                          +91 77700 69004
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:ghtravelsinfo@gmail.com"
                      className="group flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7eef0] transition group-hover:bg-[#14596a]">
                        <Mail
                          size={18}
                          className="text-[#14596a] transition group-hover:text-white"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          EMAIL
                        </p>

                        <p className="text-sm font-medium text-gray-800">
                          ghtravelsinfo@gmail.com
                        </p>
                      </div>
                    </a>


                     {/* WHATSAPP */}
  <a
    href="https://wa.me/917770069004"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7eef0] transition group-hover:bg-[#25D366]">
      <MessageCircle
        size={18}
        className="text-[#25D366] transition group-hover:text-white"
      />
    </div>

    <div>
      <p className="text-xs text-gray-500">
        WHATSAPP
      </p>

      <p className="text-sm font-medium text-gray-800">
        +91 77700 69004
      </p>
    </div>
  </a>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}