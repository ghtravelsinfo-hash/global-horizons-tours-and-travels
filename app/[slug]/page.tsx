import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { getLandingPage, landingPages } from "@/lib/landing-pages";
import { SITE, SITE_URL, absoluteUrl, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const quoteHref =
    page.serviceType === "transport" ? "/transport-request-quote" : "/request-quote";
  const url = absoluteUrl(`/${page.slug}`);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${page.h1} ${page.h1Accent}`,
    serviceType: page.serviceType === "transport" ? "Taxi and transport service" : "Tour package",
    description: page.metaDescription,
    url,
    image: absoluteUrl(page.heroImage),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Chhatrapati Sambhajinagar" },
      { "@type": "State", name: "Maharashtra" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const related = page.related
    .map((s) => getLandingPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: page.seoTitle, path: `/${page.slug}` },
        ])}
      />

      <Navbar />

      <main className="bg-[#faf9f5]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0e4655] py-24 sm:py-28 lg:py-32">
          <Image
            src={page.heroImage}
            alt={`${page.h1} ${page.h1Accent} – ${SITE.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d4a] via-[#0e4655]/85 to-[#0e4655]/40" />

          <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="text-[12px] text-[#b8cbd0]">
              <Link href="/" className="hover:text-[#e7ae3c]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{page.h1}</span>
            </nav>

            <span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#e7ae3c]">
              {page.eyebrow}
            </span>

            <h1 className="mt-5 max-w-[820px] font-serif text-[38px] font-bold leading-[1.1] text-white sm:text-5xl lg:text-[58px]">
              {page.h1}{" "}
              <span className="italic font-medium text-[#e7ae3c]">{page.h1Accent}</span>
            </h1>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#c9dade] sm:text-[16px]">
              {page.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={quoteHref}
                className="inline-flex min-h-[50px] items-center gap-3 bg-[#e7ae3c] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0e4655] transition hover:bg-white"
              >
                Request Free Quote <ArrowUpRight size={16} />
              </Link>
              <a
                href={whatsappLink(page.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-3 border border-white/40 px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#e7ae3c] hover:text-[#e7ae3c]"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex min-h-[50px] items-center gap-3 border border-white/40 px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#e7ae3c] hover:text-[#e7ae3c]"
              >
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1100px] gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {page.highlights.map((item) => (
              <div key={item.title} className="border border-[#e6dfd3] bg-white p-6">
                <h2 className="font-serif text-[20px] font-bold text-[#123f55]">{item.title}</h2>
                <p className="mt-3 text-[14px] leading-6 text-[#687276]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BODY */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              {page.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-serif text-[28px] font-bold text-[#123f55] sm:text-[34px]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-4 text-[15px] leading-7 text-[#4d5a5e]">
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>

            <aside className="h-fit border border-[#e6dfd3] bg-white p-7">
              <h2 className="font-serif text-[22px] font-bold text-[#123f55]">Good to know</h2>
              <ul className="mt-5 space-y-3">
                {page.goodToKnow.map((tip) => (
                  <li key={tip} className="flex gap-3 text-[14px] leading-6 text-[#4d5a5e]">
                    <Check size={16} className="mt-1 shrink-0 text-[#d9a737]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f5f1] py-16 sm:py-20">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <h2 className="text-center font-serif text-[32px] font-bold text-[#123f55] sm:text-[40px]">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="border border-[#e6dfd3] bg-white p-5">
                  <summary className="cursor-pointer font-serif text-[18px] font-bold text-[#123f55]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-[14px] leading-7 text-[#4d5a5e]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED + CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <h2 className="font-serif text-[28px] font-bold text-[#123f55]">You may also need</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="border border-[#e6dfd3] bg-white p-6 transition hover:border-[#d9a737]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9a737]">
                    {r.eyebrow}
                  </span>
                  <p className="mt-3 font-serif text-[19px] font-bold leading-snug text-[#123f55]">
                    {r.seoTitle}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-14 bg-[#0e4655] p-8 text-center sm:p-12">
              <h2 className="font-serif text-[28px] font-bold text-white sm:text-[36px]">
                Ready to plan your journey?
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#b8cbd0]">
                Share your dates and group size and our team in Chhatrapati Sambhajinagar will reply with a customised quote.
              </p>
              <Link
                href={quoteHref}
                className="mt-7 inline-flex min-h-[50px] items-center gap-3 bg-[#e7ae3c] px-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0e4655] transition hover:bg-white"
              >
                Request A Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
