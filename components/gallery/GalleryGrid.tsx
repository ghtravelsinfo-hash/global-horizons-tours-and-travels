"use client";

import { useState } from "react";
import { X, ZoomIn, Camera } from "lucide-react";

const images = [
  {
    src: "/gallery/gallery-1.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-2.jpeg",
    title: "",
  },
  {
    src: "/gallery/gallery-3.jpeg",
    title: "",
  },
  {
    src: "/gallery/gallery-4.jpeg",
    title: "",
  },
  {
    src: "/gallery/gallery-5.jpeg",
    title: "",
  },
  {
    src: "/gallery/gallery-6.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-7.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-8.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-9.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-10.jpg",
    title: "",
  },
  {
    src: "/gallery/gallery-11.jpg",
    title: "",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    title: "Explore More",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] =
    useState<(typeof images)[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-20 sm:py-24 lg:py-28 xl:py-32">

      {/* ===================================================== */}
      {/* ================= BACKGROUND ======================== */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-[#d9a737]/[0.035] blur-3xl" />

      {/* ===================================================== */}
      {/* ================= CONTAINER ========================= */}
      {/* ===================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* =================================================== */}
        {/* ================= HEADER ========================== */}
        {/* =================================================== */}

        <div className="mb-14 text-center md:mb-18">

          {/* Accent */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#d9a737]" />

            <Camera
              size={15}
              strokeWidth={1.7}
              className="text-[#d9a737]"
            />

            <span className="h-px w-10 bg-[#d9a737]" />

          </div>

          {/* Eyebrow */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
            Travel Gallery
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.1] text-[#123f55] sm:text-5xl lg:text-[52px]">

            Every Journey Leaves A{" "}

            <span className="italic font-medium text-[#d9a737]">
              Memory.
            </span>

          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-[#687276] md:text-[15px]">
            A collection of beautiful destinations, unforgettable experiences
            and moments captured along the way.
          </p>

        </div>

        {/* =================================================== */}
        {/* ================= GALLERY ========================= */}
        {/* =================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {images.map((image, index) => {
            const isFeatured = index === 0;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.title}`}
                className={`group relative overflow-hidden rounded-[24px] border border-white bg-[#f0eee8] p-1.5 text-left shadow-[0_15px_45px_rgba(18,63,85,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,63,85,0.14)] ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >

                {/* ================================================= */}
                {/* ================= IMAGE FRAME =================== */}
                {/* ================================================= */}

                <div
                  className={`relative overflow-hidden rounded-[18px] bg-[#e9e7e0] ${
                    isFeatured
                      ? "h-[420px] sm:h-[500px]"
                      : "h-[280px] sm:h-[300px]"
                  }`}
                >

                  {/* Full Image - NO CROPPING */}
                  <img
                    src={image.src}
                    alt={image.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* ================================================= */}
                  {/* ================= OVERLAY ======================= */}
                  {/* ================================================= */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e4655]/75 via-[#0e4655]/5 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />

                  {/* Inner Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-black/[0.04]" />

                  {/* Gold Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d9a737] transition-all duration-500 group-hover:w-full" />

                  {/* ================================================= */}
                  {/* ================= CONTENT ======================= */}
                  {/* ================================================= */}

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">

                    {/* Title */}
                    <div>

                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[2.5px] text-[#d9a737]">
                        Travel Moment
                      </p>

                      <span className="font-serif text-xl font-bold leading-tight text-white sm:text-[22px]">
                        {image.title}
                      </span>

                    </div>

                    {/* Zoom Button */}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#d9a737] text-[#0e4655] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                      <ZoomIn
                        size={18}
                        strokeWidth={1.8}
                      />

                    </span>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* =================================================== */}
        {/* ================= BOTTOM STATEMENT ================= */}
        {/* =================================================== */}

        <div className="mt-14 text-center">

          <div className="mx-auto flex max-w-fit items-center gap-4">

            <span className="h-px w-8 bg-[#14596a]/20" />

            <p className="font-serif text-lg italic text-[#123f55]/70">
              Stories worth remembering.
            </p>

            <span className="h-px w-8 bg-[#14596a]/20" />

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* ================= LIGHTBOX ========================== */}
      {/* ===================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071f26]/95 p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >

          {/* Close Button */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:rotate-90"
          >
            <X size={20} strokeWidth={1.7} />
          </button>

          {/* Lightbox Content */}

          <div
            className="relative flex max-h-[92vh] max-w-[1200px] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Image Frame */}

            <div className="relative flex max-h-[82vh] max-w-full items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[78vh] max-w-full rounded-[16px] object-contain"
              />

            </div>

            {/* Caption */}

            <div className="mt-5 text-center">

              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#d9a737]">
                Travel Gallery
              </p>

              <p className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                {selectedImage.title}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}