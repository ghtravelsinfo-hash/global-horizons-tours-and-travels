import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Destinations", href: "/destinations" },
    { label: "Our Transport", href: "/transport" },
    { label: "Tours & Experiences", href: "/tours" },
  ];

  const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Booking Policy",
    href: "/booking-policy",
  },
  {
    label: "Cancellation & Refund",
    href: "/cancellation-refund-policy",
  },
  {
    label: "Payment Policy",
    href: "/payment-policy",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
];

  return (
    <footer className="relative overflow-hidden bg-[#0e4655] text-white">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top Gold Accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7ae3c]/80 to-transparent" />

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[480px] w-[480px] rounded-full border border-[#e7ae3c]/[0.05]" />

      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[220px] w-[220px] rounded-full bg-[#e7ae3c]/[0.025] blur-[90px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-6">

        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <section className="grid gap-8 border-b border-white/[0.10] py-12 sm:py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-12">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e7ae3c]" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#e7ae3c]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e7ae3c]">
                  Global Horizons
                </span>
              </div>
            </div>

            <h2 className="mt-5 max-w-[700px] font-serif text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
              Your Next Journey Begins

              <span className="block italic font-medium text-[#e7ae3c]">
                Beyond The Horizon.
              </span>
            </h2>

            <p className="mt-4 max-w-[600px] text-[14px] leading-6 text-[#b8cbd0] sm:text-[15px]">
              From carefully planned holidays to comfortable transportation,
              we create travel experiences designed around the moments that
              matter most.
            </p>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href="/request-quote"
              className="group relative inline-flex min-h-[52px] items-center justify-center gap-4 overflow-hidden border border-[#e7ae3c]/60 px-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7ae3c] transition-all duration-500 hover:-translate-y-1 hover:border-[#e7ae3c] hover:text-[#0e4655]"
            >
              <span className="absolute inset-0 translate-y-full bg-[#e7ae3c] transition-transform duration-500 group-hover:translate-y-0" />

              <span className="relative z-10">
                Request A Quote
              </span>

              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 xl:grid-cols-[1.15fr_0.8fr_0.9fr_1.1fr_0.8fr] xl:gap-10">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3"
            >
              {/* LOGO IMAGE */}

              <div className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d9a737]/25 bg-white shadow-[0_6px_20px_rgba(18,63,85,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#d9a737]/60 group-hover:shadow-[0_10px_28px_rgba(18,63,85,0.14)] sm:h-[48px] sm:w-[48px]">

                <img
                  src="/logo.png"
                  alt="Global Tours & Travels"
                  className="h-full w-full object-cover"
                />

              </div>


              {/* BRAND TEXT */}

              <div className="hidden flex-col min-[480px]:flex">

                <span className="font-serif text-[16px] font-bold leading-tight text-[#ffffff] sm:text-[18px]">

                  Global Horizons Tours & Travels

                </span>

                <div className="mt-1.5 flex items-center gap-2">

                  <span className="h-px w-5 bg-[#d9a737]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#123f55]/55">

                    Explore The World

                  </span>

                </div>

              </div>

            </Link>

            <p className="mt-6 max-w-[310px] text-[13px] leading-6 text-[#afc3c8]">
              Creating meaningful journeys through exceptional destinations,
              thoughtful planning and travel experiences you will always
              remember.
            </p>

            {/* Trust Badge */}

            <div className="mt-6 inline-flex items-center gap-3 border border-white/[0.09] bg-white/[0.035] px-3.5 py-3 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7ae3c]/10 text-[#e7ae3c]">
                <ShieldCheck size={16} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-white">
                  Trusted Travel Partner
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[0.1em] text-[#8eabb2]">
                  Comfort • Care • Experience
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Navigate"
              title="Explore"
            />

            <div className="mt-6 flex flex-col">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#afc3c8] transition-all duration-300 hover:border-[#e7ae3c]/30 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>

                  <ChevronRight
                    size={15}
                    className="text-[#e7ae3c] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}

              <Link
                href="/request-quote"
                className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#afc3c8] transition-all duration-300 hover:border-[#e7ae3c]/30 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Request A Quote
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[#e7ae3c] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              LEGAL
          ====================================================== */}

          <div>
  <FooterHeading
    eyebrow="Legal"
    title="Policies"
  />

  <div className="mt-6 flex flex-col">
    {legalLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#afc3c8] transition-all duration-300 hover:border-[#e7ae3c]/30 hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {link.label}
        </span>

        <ChevronRight
          size={14}
          className="text-[#e7ae3c] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
      </Link>
    ))}
  </div>
</div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Contact"
              title="Get In Touch"
            />

            <div className="mt-6 space-y-5">

              {/* Location */}

              <div className="group flex gap-3">
                <ContactIcon>
                  <MapPin size={16} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e7ae3c]">
                    Visit Us
                  </p>

                  <p className="mt-1.5 max-w-[270px] text-[13px] leading-5 text-[#afc3c8]">
                    Collector Office Road, Ganesh Colony,
                    Chhatrapati Sambhajinagar, Maharashtra
                  </p>
                </div>
              </div>

              {/* Phone */}

              <a
                href="tel:+919860577147"
                className="group flex gap-3"
              >
                <ContactIcon>
                  <Phone size={15} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e7ae3c]">
                    Call Us
                  </p>

                  <p className="mt-1.5 text-[13px] text-[#afc3c8] transition-colors duration-300 group-hover:text-white">
                    +91 98605 77147
                  </p>
                </div>
              </a>

              {/* Email */}

              <a
                href="mailto:ghtravelsinfo@gmail.com"
                className="group flex gap-3"
              >
                <ContactIcon>
                  <Mail size={15} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e7ae3c]">
                    Email Us
                  </p>

                  <p className="mt-1.5 break-all text-[13px] text-[#afc3c8] transition-colors duration-300 group-hover:text-white">
                    ghtravelsinfo@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* =====================================================
              SOCIAL
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Follow"
              title="Stay Connected"
            />

            <p className="mt-6 max-w-[240px] text-[13px] leading-6 text-[#afc3c8]">
              Follow our latest journeys, destinations and travel experiences.
            </p>

            {/* Social Icons */}

            <div className="mt-5 flex gap-2.5">
              <SocialButton
                href="https://www.instagram.com/global_horizons_tours?igsi=MWw0bGx4NmhjdHI5ZQ=="
                label="Instagram"
              >
                <FaInstagram size={17} />
              </SocialButton>

              <SocialButton
                href="https://www.facebook.com/share/19RzbooduD/?mibextid=wwXIfr"
                label="Facebook"
              >
                <FaFacebookF size={16} />
              </SocialButton>

              <SocialButton
                href="https://wa.me/917770069004"
                label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </SocialButton>
            </div>

            {/* Premium Card */}

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#e7ae3c]/20 bg-gradient-to-br from-[#e7ae3c]/10 via-transparent to-transparent p-4">
              <div className="absolute right-[-15px] top-[-18px] text-[#e7ae3c]/10">
                <Star
                  size={70}
                  fill="currentColor"
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2">
                  <Star
                    size={12}
                    className="fill-[#e7ae3c] text-[#e7ae3c]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e7ae3c]">
                    Premium Service
                  </span>
                </div>

                <p className="mt-3 font-serif text-[16px] font-semibold leading-5 text-white">
                  Exceptional journeys.

                  <span className="block italic text-[#e7ae3c]">
                    Beautiful memories.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <section className="flex flex-col gap-4 py-5 text-[11px] text-[#8eaab0] md:flex-row md:items-center md:justify-between">

          <p className="leading-5">
            © {new Date().getFullYear()} Global Horizon Tours & Travels.
            <span className="hidden sm:inline">
              {" "}All rights reserved.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cancellation-refund-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Refund Policy
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-[#e7ae3c] lg:block" />

            <span className="text-[#d4a139]">
              Crafted For Exceptional Journeys
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}


/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-5 bg-[#e7ae3c]" />

        <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#e7ae3c]">
          {eyebrow}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-[19px] font-bold text-white">
        {title}
      </h3>
    </div>
  );
}


/* =====================================================
   CONTACT ICON
===================================================== */

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.035] text-[#e7ae3c] transition-all duration-300 group-hover:border-[#e7ae3c]/50 group-hover:bg-[#e7ae3c]/10">
      {children}
    </div>
  );
}


/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.035] text-[#b9cbd0] transition-all duration-300 hover:-translate-y-1 hover:border-[#e7ae3c] hover:text-[#0e4655]"
    >
      <span className="absolute inset-0 translate-y-full bg-[#e7ae3c] transition-transform duration-300 group-hover:translate-y-0" />

      <span className="relative z-10">
        {children}
      </span>
    </a>
  );
}