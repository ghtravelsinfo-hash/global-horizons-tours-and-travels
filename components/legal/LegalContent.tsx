interface LegalSection {
  title: string;
  content?: string[];
  points?: string[];
}

interface LegalContentProps {
  lastUpdated?: string;
  sections: LegalSection[];
}

export default function LegalContent({
  lastUpdated = "September 2026",
  sections,
}: LegalContentProps) {
  return (
    <div className="rounded-[28px] border border-[#e5e1d9] bg-white p-6 shadow-[0_20px_60px_rgba(18,63,85,0.05)] sm:p-10 lg:p-12">
      {/* Updated */}

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e4dc] pb-7">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9a737]">
            Global Horizon Tours & Travels
          </p>

          <p className="mt-2 text-sm text-[#7b8588]">
            Please read this information carefully.
          </p>
        </div>

        <div className="rounded-full bg-[#f7f5f1] px-4 py-2 text-[11px] font-medium text-[#687276]">
          Last Updated: {lastUpdated}
        </div>
      </div>

      {/* Content */}

      <div className="mt-10 space-y-12">
        {sections.map((section, index) => (
          <section key={section.title}>
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf3f4] text-[12px] font-bold text-[#14596a]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-[26px] font-bold leading-tight text-[#123f55] sm:text-[30px]">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[15px] leading-8 text-[#687276]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.points && (
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 text-[15px] leading-7 text-[#687276]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9a737]" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact */}

      <div className="mt-12 rounded-[20px] border border-[#d9a737]/30 bg-[#fbf7ed] p-6 sm:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b98a2c]">
          Questions?
        </p>

        <h3 className="mt-3 font-serif text-[25px] font-bold text-[#123f55]">
          Need More Information?
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#687276]">
          If you have any questions regarding our policies, terms or services,
          please contact Global Horizon Tours & Travels.
        </p>

        <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a
            href="tel:+917770069004"
            className="font-medium text-[#14596a] transition hover:text-[#d9a737]"
          >
            +91 77700 69004
          </a>

          <a
            href="mailto:ghtravelsinfo@gmail.com"
            className="font-medium text-[#14596a] transition hover:text-[#d9a737]"
          >
            ghtravelsinfo@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}