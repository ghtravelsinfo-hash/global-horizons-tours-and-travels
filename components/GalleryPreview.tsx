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

      {/* ===================================================== */}
      {/* ================= DECORATIVE BACKGROUND ============= */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#d9a737]/[0.035] blur-3xl" />

      {/* ===================================================== */}
      {/* ================= MAIN CONTAINER ==================== */}
      {/* ===================================================== */}

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
          {/* ================= PREMIUM GALLERY =============== */}
          {/* ================================================= */}

          <div className="relative mx-auto w-full max-w-[720px]">

            {/* ================================================= */}
            {/* DECORATIVE CORNERS                                */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -left-5 -top-5 z-0 h-28 w-28 border-l border-t border-[#d9a737]" />

            <div className="pointer-events-none absolute -bottom-5 -right-5 z-0 h-28 w-28 border-b border-r border-[#14596a]/30" />

            {/* ================================================= */}
            {/* GALLERY GRID                                      */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* ================================================= */}
              {/* ================= FEATURED IMAGE ================= */}
              {/* ================================================= */}

              <GalleryCard
                image={galleryImages[0]}
                className="sm:row-span-2"
                height="h-[360px] sm:h-[440px]"
                radius="rounded-tl-[90px] rounded-br-[22px]"
              />

              {/* ================================================= */}
              {/* ================= TOP RIGHT ====================== */}
              {/* ================================================= */}

              <GalleryCard
                image={galleryImages[1]}
                height="h-[210px] sm:h-[210px]"
                radius="rounded-tr-[55px] rounded-bl-[18px]"
              />

              {/* ================================================= */}
              {/* ================= BOTTOM RIGHT =================== */}
              {/* ================================================= */}

              <GalleryCard
                image={galleryImages[2]}
                height="h-[210px] sm:h-[210px]"
                radius="rounded-br-[55px] rounded-tl-[18px]"
              />

              {/* ================================================= */}
              {/* ================= WIDE BOTTOM ==================== */}
              {/* ================================================= */}

              <GalleryCard
                image={galleryImages[3]}
                className="sm:col-span-2"
                height="h-[190px] sm:h-[180px]"
                radius="rounded-bl-[65px] rounded-tr-[22px]"
              />

            </div>

            {/* ================================================= */}
            {/* PREMIUM FLOATING LABEL                            */}
            {/* ================================================= */}

            <div className="absolute -bottom-7 left-7 z-30">

              <div className="relative rounded-2xl border border-white/30 bg-[#123f55] px-6 py-4 shadow-[0_18px_45px_rgba(18,63,85,0.24)] sm:px-7 sm:py-5">

                {/* Gold Top Accent */}
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


/* ============================================================= */
/* ================= PREMIUM GALLERY CARD ====================== */
/* ============================================================= */

function GalleryCard({
  image,
  className = "",
  height,
  radius,
}: {
  image: {
    image: string;
    alt: string;
  };
  className?: string;
  height: string;
  radius: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-white bg-[#eeeae2] p-1.5 shadow-[0_16px_45px_rgba(18,63,85,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,63,85,0.15)] ${className} ${radius}`}
    >

      {/* ===================================================== */}
      {/* IMAGE CONTAINER                                       */}
      {/* ===================================================== */}

      <div
        className={`relative flex w-full items-center justify-center overflow-hidden bg-[#e9e6de] ${height} ${radius}`}
      >

        <Image
          src={image.image}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          className="object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />

        {/* ================================================= */}
        {/* SOFT OVERLAY                                       */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#123f55]/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

        {/* ================================================= */}
        {/* INNER FRAME                                        */}
        {/* ================================================= */}

        <div
          className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.045] ${radius}`}
        />

        {/* ================================================= */}
        {/* GOLD HOVER ACCENT                                  */}
        {/* ================================================= */}

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d9a737] transition-all duration-500 group-hover:w-full" />

      </div>

    </div>
  );
}