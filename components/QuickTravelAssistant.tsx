"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Plane,
  Bus,
  Map,
  Headphones,
  FileText,
  CalendarDays,
  Phone,
  Sparkles,
  Route,
  Send,
} from "lucide-react";

type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export default function QuickTravelAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const mainMenu: MenuItem[] = [
    {
      id: "trip",
      title: "Plan a Trip",
      subtitle: "Create your perfect journey",
      icon: <Plane size={19} />,
    },
    {
      id: "transport",
      title: "Transport Booking",
      subtitle: "Travel comfortably with us",
      icon: <Bus size={19} />,
    },
    {
      id: "tours",
      title: "Tours & Packages",
      subtitle: "Explore amazing destinations",
      icon: <Map size={19} />,
    },
    {
      id: "support",
      title: "Quick Support",
      subtitle: "We're here to help",
      icon: <Headphones size={19} />,
    },
  ];

  const subMenus: Record<string, MenuItem[]> = {
    trip: [
      {
        id: "quote",
        title: "Request a Quote",
        subtitle: "Get a personalised travel quote",
        icon: <FileText size={18} />,
      },
      {
        id: "custom",
        title: "Customize My Trip",
        subtitle: "Tell us your travel requirements",
        icon: <Route size={18} />,
      },
      {
        id: "expert",
        title: "Talk to Travel Expert",
        subtitle: "Speak directly with our team",
        icon: <Phone size={18} />,
      },
    ],

    transport: [
      {
        id: "transport-booking",
        title: "Book Transport",
        subtitle: "Choose your preferred travel option",
        icon: <Bus size={18} />,
      },
      {
        id: "transport-enquiry",
        title: "Transport Enquiry",
        subtitle: "Ask about availability and pricing",
        icon: <FileText size={18} />,
      },
      {
        id: "call",
        title: "Call Travel Expert",
        subtitle: "Get immediate assistance",
        icon: <Phone size={18} />,
      },
    ],

    tours: [
      {
        id: "destinations",
        title: "Explore Destinations",
        subtitle: "Discover beautiful places",
        icon: <Map size={18} />,
      },
      {
        id: "packages",
        title: "View Tour Packages",
        subtitle: "Find your next perfect holiday",
        icon: <CalendarDays size={18} />,
      },
      {
        id: "custom-tour",
        title: "Custom Tour Package",
        subtitle: "Create a journey made for you",
        icon: <Sparkles size={18} />,
      },
    ],

    support: [
      {
        id: "whatsapp",
        title: "Chat on WhatsApp",
        subtitle: "Get a quick response",
        icon: <MessageCircle size={18} />,
      },
      {
        id: "contact",
        title: "Contact Our Team",
        subtitle: "Send us your enquiry",
        icon: <Send size={18} />,
      },
      {
        id: "call-support",
        title: "Call Us Now",
        subtitle: "Speak directly with us",
        icon: <Phone size={18} />,
      },
    ],
  };

  const handleAction = (id: string) => {
    switch (id) {
      case "quote":
        window.location.href = "/request-quote";
        break;

      case "custom":
        window.location.href = "/enquiry";
        break;

      case "expert":
      case "call":
      case "call-support":
        window.location.href = "tel:+917770069004";
        break;

      case "transport-booking":
      case "transport-enquiry":
        window.location.href = "/transport";
        break;

      case "destinations":
        window.location.href = "/destinations";
        break;

      case "packages":
      case "custom-tour":
        window.location.href = "/tours";
        break;

      case "whatsapp":
        window.open(
          "https://wa.me/917770069004?text=Hello%20Global%20Horizon%20Tours%20%26%20Travels%2C%20I%20need%20help%20with%20my%20travel%20plans.",
          "_blank"
        );
        break;

      case "contact":
        window.location.href = "/contact";
        break;

      default:
        break;
    }

    setIsOpen(false);
    setActiveMenu(null);
  };

  const currentItems = activeMenu
    ? subMenus[activeMenu]
    : mainMenu;

  const getTitle = () => {
    if (!activeMenu) return "How Can We Help?";

    const menu = mainMenu.find((item) => item.id === activeMenu);
    return menu?.title || "Quick Assistance";
  };

  const getSubtitle = () => {
    if (!activeMenu) {
      return "Choose an option and let us make your journey easier.";
    }

    return "Choose how you would like to continue.";
  };

  return (
    <>
      {/* =====================================================
          FLOATING BUTTONS
      ====================================================== */}

      <div className="fixed bottom-6 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">

        {/* WHATSAPP */}

        <a
          href="https://wa.me/917770069004?text=Hello%20Global%20Horizon%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[0_15px_40px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,211,102,0.38)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <MessageCircle size={21} />
          </div>

          <div className="hidden pr-1 text-left sm:block">
            <p className="text-[10px] font-bold tracking-[0.18em]">
              WHATSAPP US
            </p>

            <p className="mt-0.5 text-[9px] text-white/75">
              Quick response
            </p>
          </div>
        </a>

        {/* QUICK HELP BUTTON */}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);

            if (isOpen) {
              setActiveMenu(null);
            }
          }}
          className={`group flex items-center gap-3 rounded-full px-5 py-3.5 text-white shadow-[0_15px_40px_rgba(14,70,85,0.3)] transition-all duration-300 hover:-translate-y-1 ${
            isOpen
              ? "bg-[#123f55]"
              : "bg-[#14596a] hover:bg-[#123f55]"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            {isOpen ? <X size={20} /> : <Sparkles size={19} />}
          </div>

          <div className="hidden pr-1 text-left sm:block">
            <p className="text-[10px] font-bold tracking-[0.18em]">
              QUICK HELP
            </p>

            <p className="mt-0.5 text-[9px] text-white/65">
              Travel assistant
            </p>
          </div>
        </button>
      </div>


      {/* =====================================================
          ASSISTANT POPUP
      ====================================================== */}

      <div
        className={`fixed bottom-[150px] right-5 z-[99] w-[calc(100%-40px)] max-w-[380px] origin-bottom-right transition-all duration-300 sm:bottom-[165px] sm:right-7 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[26px] border border-white/70 bg-[#faf9f6]/95 shadow-[0_25px_70px_rgba(14,70,85,0.25)] backdrop-blur-xl">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="relative overflow-hidden border-b border-[#123f55]/10 px-5 pb-5 pt-5 sm:px-6">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#e7ae3c]/20" />

            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border border-[#e7ae3c]/15" />

            {/* Back Button */}

            {activeMenu && (
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                className="relative z-10 mb-4 flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] text-[#14596a] transition hover:text-[#e7ae3c]"
              >
                <ChevronLeft size={15} />
                BACK
              </button>
            )}

            <div className="relative z-10 flex items-start justify-between gap-4">

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#e7ae3c]" />

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#e7ae3c]">
                    GLOBAL HORIZON
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-[24px] font-bold leading-tight text-[#123f55]">
                  {getTitle()}
                </h3>

                <p className="mt-2 max-w-[270px] text-[12px] leading-5 text-gray-500">
                  {getSubtitle()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setActiveMenu(null);
                }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition hover:text-[#123f55]"
                aria-label="Close assistant"
              >
                <X size={17} />
              </button>
            </div>
          </div>


          {/* =====================================================
              OPTIONS
          ====================================================== */}

          <div className="p-3 sm:p-4">
            <div className="space-y-2">

              {currentItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (!activeMenu) {
                      setActiveMenu(item.id);
                    } else {
                      handleAction(item.id);
                    }
                  }}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-left transition-all duration-300 hover:border-[#123f55]/10 hover:bg-white hover:shadow-[0_8px_25px_rgba(18,63,85,0.07)]"
                >
                  {/* Icon */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7eef0] text-[#14596a] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#14596a] group-hover:text-white">
                    {item.icon}
                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-[#123f55]">
                      {item.title}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0f2f2] text-[#14596a] transition-all duration-300 group-hover:bg-[#e7ae3c] group-hover:text-white">
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>


          {/* =====================================================
              FOOTER
          ====================================================== */}

          <div className="border-t border-[#123f55]/10 bg-[#f5f4f0] px-5 py-3">
            <div className="flex items-center justify-center gap-2">
              <Sparkles size={12} className="text-[#e7ae3c]" />

              <span className="text-center text-[8px] font-bold tracking-[0.22em] text-[#123f55]/55">
                YOUR JOURNEY STARTS HERE
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}