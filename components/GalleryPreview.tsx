"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
} from "lucide-react";

const galleryImages = [
  {
    image: "/service-travel-assistance.jpg",
    alt: "Travel experience",
    className: "md:col-span-2 md:row-span-2",
    radius: "rounded-tl-[80px] rounded-br-2xl",
  },
  {
    image: "/beautiful-destination.png",
    alt: "Beautiful destination",
    className: "",
    radius: "rounded-tr-[45px] rounded-bl-xl",
  },
  {
    image: "/journey-memories.png",
    alt: "Journey memories",
    className: "",
    radius: "rounded-br-[45px] rounded-tl-xl",
  },
  {
    image: "/travel-moments.png",
    alt: "Travel moments",
    className: "md:col-span-2",
    radius: "rounded-bl-[55px] rounded-tr-2xl",
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-20 sm:py-24 lg:py-28 xl:py-32">

      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#d9a737]/[0.035] blur-3xl" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">

          {/* ===================================================== */}
          {/* ================= CONTENT =========================== */}
          {/* ===================================================== */}

          <div>

            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a737]" />

              <Camera
                size={14}
                strokeWidth={1.8}
                className="text-[#d9a737]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
                Moments We Remember
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-6 max-w-[520px] font-serif text-[42px] font-bold leading-[1.08] text-[#123f55] sm:text-5xl lg:text-[52px]">

              Memories Beyond

              <span className="block italic font-medium text-[#d9a737]">
                The Horizon.
              </span>

            </h2>

            {/* Description */}

            <p className="mt-6 max-w-md text-[14px] leading-7 text-[#687276]">
              Every journey tells a story. Explore a collection of destinations,
              experiences and unforgettable moments from our travels.
            </p>

            {/* Secondary Description */}

            <p className="mt-4 max-w-md text-[14px] leading-7 text-[#687276]/80">
              From unforgettable landscapes to meaningful travel moments,
              discover the experiences that make every journey special.
            </p>

            {/* CTA */}

            <Link
              href="/gallery"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#d9a737] pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55] transition-colors duration-300 hover:text-[#b9471e]"
            >
              Explore Gallery

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="text-[#d9a737] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* ===================================================== */}
          {/* ================= PREMIUM GALLERY ================== */}
          {/* ===================================================== */}

          <div className="relative">

            {/* Decorative Gold Corner */}

            <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#d9a737]" />

            <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-[#14596a]/30" />

            {/* Gallery Grid */}

            <div className="relative grid auto-rows-[170px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[165px]">

              {galleryImages.map((item, index) => (
                <div
                  key={item.image}
                  className={`group relative overflow-hidden border border-white bg-[#f1eee7] shadow-[0_14px_40px_rgba(18,63,85,0.09)] ${item.className} ${item.radius}`}
                >

                  {/* Image Frame */}

                  <div className="relative flex h-full w-full items-center justify-center p-1.5">

                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        40vw
                      "
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />

                  </div>

                  {/* Soft Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-[#123f55]/0 transition-all duration-500 group-hover:bg-[#123f55]/10" />

                  {/* Inner Frame */}

                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.035]" />

                  {/* Gold Hover Accent */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d9a737] transition-all duration-500 group-hover:w-full" />

                </div>
              ))}

            </div>

            {/* ================================================= */}
            {/* PREMIUM FLOATING LABEL */}
            {/* ================================================= */}

            <div className="absolute -bottom-6 left-8 z-20 hidden sm:block">

              <div className="rounded-xl border border-white/30 bg-[#123f55] px-6 py-4 shadow-[0_16px_40px_rgba(18,63,85,0.22)]">

                <p className="font-serif text-xl font-bold text-[#d9a737]">
                  Travel Memories
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[2.5px] text-white/65">
                  Stories Worth Remembering
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}