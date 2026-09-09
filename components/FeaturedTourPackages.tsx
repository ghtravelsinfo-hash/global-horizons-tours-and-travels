"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    title: "Aurangabad",
    location: "Maharashtra, India",
    duration: "6 Days • 5 Nights",
    image: "/aurangabad.jpg",
    tag: "Most Popular",
  },
  {
    title: "Shirdi",
    location: "Maharashtra, India",
    duration: "5 Days • 4 Nights",
    image: "/shirdi.jpg",
    tag: "Heritage",
  },
  {
    title: "Western India",
    location: "Western India, India",
    duration: "7 Days • 6 Nights",
    image: "/western-india.jpg",
    tag: "Signature Journey",
  },
];

export default function FeaturedTourPackages() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d9a737]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a737]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
                Handpicked Experiences
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[40px] font-bold leading-[1.1] text-[#123f55] sm:text-5xl lg:text-[58px]">
              Journeys Worth
              <span className="italic font-medium text-[#d9a737]">
                {" "}
                Remembering.
              </span>
            </h2>
          </div>

          <Link
            href="/tour-packages"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55]"
          >
            View All Packages

            <ArrowUpRight
              size={17}
              className="text-[#d9a737] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* PACKAGES */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((tour) => (
            <article
              key={tour.title}
              className="group overflow-hidden border border-[#e2ddd4] bg-[#faf9f6] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(18,63,85,0.12)]"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4655]/80 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="border border-white/30 bg-[#123f55]/70 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {tour.tag}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-2 text-white/75">
                    <MapPin size={14} />

                    <span className="text-[10px]">{tour.location}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-[30px] font-bold text-white">
                    {tour.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-2 text-[#687276]">
                  <Clock3 size={15} className="text-[#d9a737]" />

                  <span className="text-[11px] font-medium">
                    {tour.duration}
                  </span>
                </div>

                <Link
                  href="/tour-packages"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123f55]/15 text-[#123f55] transition-all duration-300 hover:bg-[#123f55] hover:text-white"
                  aria-label={`View ${tour.title}`}
                >
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}

        <div className="mt-14 flex items-center justify-center gap-3">
          <Sparkles size={13} className="text-[#d9a737]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#879093]">
            Carefully Planned • Beautifully Experienced
          </p>
        </div>
      </div>
    </section>
  );
}