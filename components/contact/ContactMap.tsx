import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section
      id="location"
      className="bg-[#f4f6f5] py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-6">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Info */}

          <div>

            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-[#d9a737]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#14596a]">
                Find Us
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[36px] font-bold text-[#123f55]">
              Visit Our

              <span className="block italic text-[#d9a737]">
                Travel Office.
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#748185]">
              Visit us and speak with our travel specialists personally. We
              would be happy to help you plan your next journey.
            </p>


            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#d9a737] bg-white p-5 shadow-sm">

              <MapPin
                size={20}
                className="mt-1 text-[#14596a]"
              />

              <p className="text-[14px] leading-7 text-[#536166]">
                Collector Office Road,
                <br />
                Ganesh Colony,
                <br />
                Chhatrapati Sambhajinagar,
                Maharashtra
              </p>

            </div>

          </div>


          {/* Map */}

          <div className="overflow-hidden border border-[#ded8ce] bg-white p-2 shadow-[0_20px_60px_rgba(18,63,85,0.10)]">

            <div className="relative h-[400px] overflow-hidden">

              <iframe
                src="https://www.google.com/maps?q=19.8952399,75.3417461&z=17&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 grayscale-[15%]"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}