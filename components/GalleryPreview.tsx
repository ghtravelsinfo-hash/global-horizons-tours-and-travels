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
      {/* ================= BACKGROUND ======================== */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-[-120px] h-[450px] w-[450px] rounded-full bg-[#d9a737]/[0.035] blur-3xl" />

      {/* ===================================================== */}
      {/* ================= MAIN CONTAINER ==================== */}
      {/* ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">

          {/* ================================================= */}
          {/* ================= LEFT CONTENT ================== */}
          {/* ================================================= */}

          <div className="relative z-10">

            {/* Eyebrow */}

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-9 bg-[#d9a737]" />

              <Camera
                size={16}
                strokeWidth={1.7}
                className="text-[#d9a737]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#14596a]">
                Moments We Remember
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-6 max-w-[560px] font-serif text-[42px] font-bold leading-[1.05] text-[#123f55] sm:text-5xl lg:text-[54px] xl:text-[58px]">

              Memories Beyond

              <span className="block italic font-medium text-[#c99420]">
                The Horizon.
              </span>

            </h2>

            {/* Description */}

            <p className="mt-7 max-w-[510px] text-[15px] leading-7 text-[#60696d] sm:text-[16px]">
              Every journey tells a story. Explore a collection of destinations,
              experiences and unforgettable moments from our travels.
            </p>

            <p className="mt-5 max-w-[510px] text-[15px] leading-7 text-[#60696d] sm:text-[16px]">
              From unforgettable landscapes to meaningful travel moments,
              discover the experiences that make every journey special.
            </p>

            {/* CTA */}

            <Link
              href="/gallery"
              className="group mt-9 inline-flex items-center gap-4 border-b-2 border-[#d9a737] pb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#123f55] transition-colors duration-300 hover:text-[#b9471e]"
            >
              Explore Gallery

              <ArrowUpRight
                size={19}
                strokeWidth={1.7}
                className="text-[#c99420] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* ================================================= */}
          {/* ================= IMAGE MATRIX ================== */}
          {/* ================================================= */}

          <div className="relative">

            {/* ================================================= */}
            {/* DECORATIVE GOLD CORNER                           */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -left-5 -top-5 z-0 h-24 w-24 border-l-2 border-t-2 border-[#d9a737]" />

            {/* ================================================= */}
            {/* MATRIX                                           */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* ================= IMAGE 1 ================= */}

              <GalleryImage
                src={galleryImages[0].image}
                alt={galleryImages[0].alt}
                position="top-left"
              />

              {/* ================= IMAGE 2 ================= */}

              <GalleryImage
                src={galleryImages[1].image}
                alt={galleryImages[1].alt}
                position="top-right"
              />

              {/* ================= IMAGE 3 ================= */}

              <GalleryImage
                src={galleryImages[2].image}
                alt={galleryImages[2].alt}
                position="bottom-left"
              />

              {/* ================= IMAGE 4 ================= */}

              <GalleryImage
                src={galleryImages[3].image}
                alt={galleryImages[3].alt}
                position="bottom-right"
              />

            </div>

            {/* ================================================= */}
            {/* DECORATIVE BOTTOM CORNER                        */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -bottom-5 -right-5 z-0 h-24 w-24 border-b-2 border-r-2 border-[#14596a]/30" />

          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================= */
/* ================= GALLERY IMAGE ============================== */
/* ============================================================= */

function GalleryImage({
  src,
  alt,
  position,
}: {
  src: string;
  alt: string;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}) {
  const radiusStyles = {
    "top-left": "rounded-tl-[70px] rounded-br-[8px]",
    "top-right": "rounded-tr-[70px] rounded-bl-[8px]",
    "bottom-left": "rounded-bl-[70px] rounded-tr-[8px]",
    "bottom-right": "rounded-br-[70px] rounded-tl-[8px]",
  };

  return (
    <div
      className={`group relative h-[245px] overflow-hidden bg-transparent sm:h-[230px] lg:h-[255px] xl:h-[270px] ${radiusStyles[position]}`}
    >

      {/* ================================================= */}
      {/* IMAGE                                             */}
      {/* ================================================= */}

      <Image
        src={src}
        alt={alt}
        fill
        priority={position === "top-left"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />

    </div>
  );
}