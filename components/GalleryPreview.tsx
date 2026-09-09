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
  },
  {
    image: "/beautiful-destination.png",
    alt: "Beautiful destination",
  },
  {
    image: "/journey-memories.png",
    alt: "Journey memories",
  },
  {
    image: "/travel-moments.png",
    alt: "Travel moments",
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-20 sm:py-24 lg:py-28 xl:py-32">

      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#d9a737]/[0.035] blur-3xl" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">

          {/* ================================================= */}
          {/* ================= LEFT CONTENT ================== */}
          {/* ================================================= */}

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

          {/* ================================================= */}
          {/* ================= GALLERY ======================== */}
          {/* ================================================= */}

          <div className="relative mx-auto w-full max-w-[760px]">

            {/* Decorative Gold Corner */}
            <div className="pointer-events-none absolute -left-5 -top-5 z-0 h-24 w-24 border-l border-t border-[#d9a737]" />

            {/* Decorative Teal Corner */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 z-0 h-24 w-24 border-b border-r border-[#14596a]/30" />

            {/* ================================================= */}
            {/* ================= 2 x 2 MATRIX ================== */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {galleryImages.map((item, index) => (
                <div
                  key={item.image}
                  className="group relative overflow-hidden rounded-[22px] bg-white shadow-[0_12px_35px_rgba(18,63,85,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,63,85,0.13)]"
                >

                  {/* ================= IMAGE ================= */}

                  <div
                    className={`relative flex h-[260px] w-full items-center justify-center overflow-hidden sm:h-[230px] lg:h-[250px] ${
                      index === 0
                        ? "rounded-tl-[60px]"
                        : index === 1
                          ? "rounded-tr-[60px]"
                          : index === 2
                            ? "rounded-bl-[60px]"
                            : "rounded-br-[60px]"
                    }`}
                  >

                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />

                  </div>

                </div>
              ))}

            </div>

            {/* ================================================= */}
            {/* ================= FLOATING LABEL ================= */}
            {/* ================================================= */}

            <div className="absolute -bottom-7 left-7 z-30">

              <div className="relative rounded-2xl bg-[#123f55] px-6 py-4 shadow-[0_18px_45px_rgba(18,63,85,0.24)] sm:px-7 sm:py-5">

                {/* Gold Accent */}
                <div className="absolute left-1/2 top-0 h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#d9a737]" />

                <p className="font-serif text-xl font-bold text-[#d9a737] sm:text-2xl">
                  Travel Memories
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-[2.5px] text-white/65 sm:text-[9px]">
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