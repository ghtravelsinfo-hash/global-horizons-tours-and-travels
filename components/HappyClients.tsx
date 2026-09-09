"use client";

const clients = [
  {
    image: "/5.png",
    alt: "Happy travelers enjoying their journey",
  },
  {
    image: "/2.png",
    alt: "Happy clients travel experience",
  },
  {
    image: "/4.png",
    alt: "Travel memories with our clients",
  },
  {
    image: "/1.png",
    alt: "Satisfied travelers",
  },
  {
    image: "/3.png",
    alt: "Memorable travel moments",
  },
];

export default function HappyClients() {
  return (
    <section className="relative overflow-hidden bg-[#14596a] px-6 py-20 md:px-10 md:py-24 lg:px-20 lg:py-28">

      {/* ===================================================== */}
      {/* ================= DECORATIVE BACKGROUND ============= */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-[-80px] h-[360px] w-[360px] rounded-full bg-[#efb83f]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[440px] w-[440px] rounded-full bg-black/[0.12] blur-3xl" />

      {/* Subtle center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-3xl" />

      {/* ===================================================== */}
      {/* ================= MAIN CONTAINER ==================== */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* =================================================== */}
        {/* ================= HEADER ========================== */}
        {/* =================================================== */}

        <div className="mb-14 text-center md:mb-18">

          {/* Premium Accent */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#efb83f]/70" />

            <span className="h-2 w-2 rotate-45 border border-[#efb83f] bg-[#efb83f]" />

            <span className="h-px w-10 bg-[#efb83f]/70" />

          </div>

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#efb83f] md:text-[12px]">
            MAKE YOUR TOUR MORE PLEASURE
          </p>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[52px]">
            Our Happy Clients
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/65 md:text-[15px]">
            Beautiful journeys, unforgettable experiences and memories shared
            with travelers who chose to explore with us.
          </p>

        </div>

        {/* =================================================== */}
        {/* ================= CLIENT GALLERY ================= */}
        {/* =================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.95fr_1.15fr_0.95fr] md:items-center md:gap-6 lg:gap-7">

          {/* ================================================= */}
          {/* ================= LEFT COLUMN =================== */}
          {/* ================================================= */}

          <div className="flex flex-col gap-5 md:gap-7">

            <GalleryImage
              src={clients[0].image}
              alt={clients[0].alt}
              height="h-[250px]"
              radius="rounded-tl-[65px] rounded-br-[18px]"
            />

            <GalleryImage
              src={clients[3].image}
              alt={clients[3].alt}
              height="h-[250px]"
              radius="rounded-bl-[65px] rounded-tr-[18px]"
            />

          </div>

          {/* ================================================= */}
          {/* ================= CENTER IMAGE ================== */}
          {/* ================================================= */}

          <div className="group relative">

            {/* Outer Frame */}
            <div className="relative rounded-[24px] border border-white/15 bg-white/[0.045] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">

              {/* Inner Image Container */}
              <div className="relative h-[500px] overflow-hidden rounded-[17px] bg-[#0f4b5b] md:h-[545px]">

                <img
                  src={clients[1].image}
                  alt={clients[1].alt}
                  className="h-full w-full object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Bottom Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                {/* Premium Label */}
                <div className="absolute bottom-6 left-6 right-6">

                  <div className="inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">

                    <span className="text-[10px] font-medium uppercase tracking-[1.8px] text-white/90">
                      Memories That Last Forever
                    </span>

                  </div>

                </div>

                {/* Inner Border */}
                <div className="pointer-events-none absolute inset-0 rounded-[17px] ring-1 ring-inset ring-white/[0.08]" />

              </div>

            </div>

            {/* Gold Decorative Corner */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 border-r border-t border-[#efb83f]/70" />

            <div className="pointer-events-none absolute -bottom-3 -left-3 h-14 w-14 border-b border-l border-[#efb83f]/40" />

          </div>

          {/* ================================================= */}
          {/* ================= RIGHT COLUMN ================== */}
          {/* ================================================= */}

          <div className="flex flex-col gap-5 md:gap-7">

            <GalleryImage
              src={clients[2].image}
              alt={clients[2].alt}
              height="h-[250px]"
              radius="rounded-tr-[65px] rounded-bl-[18px]"
            />

            <GalleryImage
              src={clients[4].image}
              alt={clients[4].alt}
              height="h-[250px]"
              radius="rounded-br-[65px] rounded-tl-[18px]"
            />

          </div>

        </div>

        {/* =================================================== */}
        {/* ================= BOTTOM STATEMENT ================= */}
        {/* =================================================== */}

        <div className="mt-14 text-center md:mt-16">

          <div className="mx-auto flex max-w-fit items-center gap-4">

            <span className="h-px w-8 bg-white/20" />

            <p className="font-serif text-lg italic text-white/80">
              Every journey becomes a memory.
            </p>

            <span className="h-px w-8 bg-white/20" />

          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================= */
/* ================= REUSABLE IMAGE COMPONENT ================= */
/* ============================================================= */

function GalleryImage({
  src,
  alt,
  height,
  radius,
}: {
  src: string;
  alt: string;
  height: string;
  radius: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.16)] ${radius}`}
    >

      {/* Image Frame */}
      <div
        className={`relative ${height} overflow-hidden bg-[#0f4b5b] ${radius}`}
      >

        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />

        {/* Soft Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Inner Border */}
        <div
          className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08] ${radius}`}
        />

        {/* Gold Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#efb83f] transition-all duration-500 group-hover:w-full" />

      </div>

    </div>
  );
}