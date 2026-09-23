import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreatmentFaqAccordion from "@/components/TreatmentFaqAccordion";
import { treatmentDetails } from "@/data/treatments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatmentDetails.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentDetails.find((t) => t.slug === slug);
  if (!treatment) return { title: "Treatment | YourHealthFirst Clinic" };
  return {
    title: `${treatment.title} | YourHealthFirst Clinic — Harley Street`,
    description: treatment.intro,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatmentDetails.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const relatedTreatments = treatmentDetails
    .filter((t) => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/treatments"
                className="font-nav text-[13px] tracking-[1px] text-white/40 uppercase transition-colors hover:text-tan"
              >
                Treatments
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">
                {treatment.category}
              </span>
            </div>
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
                {treatment.category}
              </p>
            </div>
            <h1 className="font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]">
              {treatment.title}
            </h1>
            <p className="max-w-[560px] font-serif text-[20px] leading-[30px] text-white/70 italic">
              {treatment.tagline}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Main content */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

            {/* Main text */}
            <div className="flex flex-col gap-8 lg:flex-1">
              {/* Intro */}
              <p className="text-[18px] leading-[30px] tracking-[-0.3px] text-forest font-medium">
                {treatment.intro}
              </p>

              {/* Explainer video */}
              {treatment.videoId && (
                <div className="relative w-full overflow-hidden rounded-[12px]" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${treatment.videoId}`}
                    title={`${treatment.title} — explainer video`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {treatment.videoUrl && (
                <video
                  src={treatment.videoUrl}
                  controls
                  playsInline
                  className="max-h-[480px] w-auto max-w-full rounded-[12px] bg-black"
                />
              )}

              {/* Body paragraphs */}
              <div className="flex flex-col gap-5">
                {treatment.body.map((para, i) => (
                  <p key={i} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                    {para}
                  </p>
                ))}
              </div>

              {/* Suitable for */}
              <div className="flex flex-col gap-4">
                <h2 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                  Suitable For
                </h2>
                <ul className="flex flex-col gap-3">
                  {treatment.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 lg:w-[340px] lg:shrink-0">

              {/* Key facts card */}
              <div className="rounded-[12px] bg-cream p-6">
                <h3 className="font-subheading text-[14px] font-semibold tracking-[2px] text-forest uppercase">
                  Key Facts
                </h3>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="border-b border-black/10 pb-4">
                    <p className="text-[12px] tracking-[1.5px] text-body-text/60 uppercase">Results</p>
                    <p className="mt-1 text-[15px] leading-[22px] text-forest">{treatment.results}</p>
                  </div>
                  {treatment.priceFrom && (
                    <div className="border-b border-black/10 pb-4">
                      <p className="text-[12px] tracking-[1.5px] text-body-text/60 uppercase">Starting From</p>
                      <p className="mt-1 font-subheading text-[18px] font-semibold text-tan">
                        {treatment.priceFrom}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[12px] tracking-[1.5px] text-body-text/60 uppercase">Location</p>
                    <p className="mt-1 text-[15px] leading-[22px] text-forest">
                      2 Wimpole Street, London W1G 0EB
                    </p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="rounded-[12px] bg-[linear-gradient(135deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] p-6">
                <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-cream uppercase">
                  Book a Consultation
                </h3>
                <p className="mt-2 text-[14px] leading-[22px] text-white/60">
                  Begin with a personal consultation with Sofia to discuss your goals and confirm suitability.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="tel:02072253582"
                    className="flex h-12 items-center justify-center rounded-[8px] bg-tan font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
                  >
                    Call 0207 225 3582
                  </a>
                  <a
                    href="/contact-us"
                    className="flex h-12 items-center justify-center rounded-[8px] border border-white/20 font-nav text-[14px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan/60"
                  >
                    Send an Enquiry
                  </a>
                </div>
              </div>

              {/* Benefits */}
              <div className="rounded-[12px] border border-black/8 p-6">
                <h3 className="font-subheading text-[14px] font-semibold tracking-[2px] text-forest uppercase">
                  Key Benefits
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {treatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[14px] leading-[22px] text-body-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care instructions — prominent before/aftercare */}
      {treatment.careInstructions && (
        <section className="relative w-full overflow-hidden bg-[#061a10] px-5">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
          <div className="relative mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-fit rounded-full border-[0.8px] border-tan/40 px-4 py-2">
                <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                  Important
                </p>
              </div>
              <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-cream uppercase lg:text-[38px] lg:leading-[44px]">
                {treatment.careInstructions.title}
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatment.careInstructions.groups.map((group) => (
                <div
                  key={group.heading}
                  className={`flex flex-col gap-3 rounded-[12px] p-6 ${
                    group.warning
                      ? "border-2 border-rust bg-rust/15"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {group.warning && (
                      <svg className="h-5 w-5 shrink-0 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                    )}
                    <h3
                      className={`font-subheading text-[14px] font-semibold tracking-[1.5px] uppercase ${
                        group.warning ? "text-rust" : "text-tan"
                      }`}
                    >
                      {group.heading}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[14px] leading-[22px] text-white/70">
                        <span className={`mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full ${group.warning ? "bg-rust" : "bg-tan"}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {treatment.howItWorks && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              {treatment.howItWorks.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[720px] text-center text-[15px] leading-[24px] text-body-text">
              {treatment.howItWorks.intro}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {treatment.howItWorks.steps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center gap-4 rounded-[12px] bg-white p-7 text-center shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tan/12">
                    <Image src={step.icon} alt={step.title} width={40} height={40} className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-subheading text-[14px] font-semibold tracking-[1px] text-forest uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-body-text">{step.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Process diagrams (standalone, independent of How It Works) */}
      {treatment.processDiagrams && treatment.processDiagrams.length > 0 && (
        <section className={`w-full px-5 ${treatment.howItWorks ? "" : "bg-cream"}`}>
          <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
            <div className="flex flex-col gap-6">
              {treatment.processDiagrams.map((diagram) => (
                <div
                  key={diagram.src}
                  className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[12px] bg-white p-4 shadow-sm"
                >
                  <Image
                    src={diagram.src}
                    alt={diagram.alt}
                    width={1600}
                    height={600}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantages */}
      {treatment.advantages && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              {treatment.advantages.title}
            </h2>
            {treatment.advantages.intro && (
              <p className="mx-auto mt-3 max-w-[720px] text-center text-[15px] leading-[24px] text-body-text">
                {treatment.advantages.intro}
              </p>
            )}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatment.advantages.items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-[12px] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                    <h3 className="font-subheading text-[14px] font-semibold tracking-[1.5px] text-forest uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[22px] text-body-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature images (2-up benefit cards with supporting image) */}
      {treatment.featureImages && treatment.featureImages.length > 0 && (
        <section className="w-full px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {treatment.featureImages.map((feature) => (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-[12px] border border-black/8 shadow-sm"
                >
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-subheading text-[16px] font-semibold leading-[22px] text-forest">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[22px] text-body-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before / After pairs */}
      {treatment.beforeAfterPairs && treatment.beforeAfterPairs.length > 0 && (
        <section className="w-full border-t border-black/8 bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              Before &amp; After
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {treatment.beforeAfterPairs.map((pair, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative overflow-hidden rounded-[10px]" style={{ aspectRatio: "1/1" }}>
                      <Image src={pair.before} alt={`${pair.label} — before`} fill className="object-cover" />
                      <span className="absolute left-2 top-2 rounded-[4px] bg-forest/80 px-2 py-1 text-[10px] font-semibold tracking-[1px] text-cream uppercase">
                        Before
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-[10px]" style={{ aspectRatio: "1/1" }}>
                      <Image src={pair.after} alt={`${pair.label} — after`} fill className="object-cover" />
                      <span className="absolute left-2 top-2 rounded-[4px] bg-tan px-2 py-1 text-[10px] font-semibold tracking-[1px] text-forest uppercase">
                        After
                      </span>
                    </div>
                  </div>
                  <p className="text-center font-subheading text-[13px] font-semibold tracking-[1px] text-forest uppercase">
                    {pair.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Supporting diagram (standalone, independent of How It Works) */}
      {treatment.diagramImage && (
        <section className={`w-full px-5 ${treatment.howItWorks || treatment.advantages ? "" : "bg-cream"}`}>
          <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
            <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-[12px] bg-white p-4 shadow-sm">
              <Image
                src={treatment.diagramImage.src}
                alt={treatment.diagramImage.alt}
                width={900}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* Comparison table */}
      {treatment.comparisonTable && (
        <section className="w-full border-t border-black/8 bg-cream px-5">
          <div className="mx-auto max-w-[1100px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              {treatment.comparisonTable.title}
            </h2>
            <div className="mt-10 overflow-hidden rounded-[12px] border border-black/8 bg-white">
              {/* Header row */}
              <div className="grid grid-cols-1 gap-px bg-black/8 sm:grid-cols-[160px_1fr_1fr]">
                <div className="hidden bg-forest px-5 py-4 sm:block" />
                <div className="bg-forest px-5 py-4">
                  <p className="font-subheading text-[13px] font-semibold tracking-[1px] text-cream uppercase">
                    {treatment.comparisonTable.columnLabels[0]}
                  </p>
                </div>
                <div className="bg-forest px-5 py-4">
                  <p className="font-subheading text-[13px] font-semibold tracking-[1px] text-tan uppercase">
                    {treatment.comparisonTable.columnLabels[1]}
                  </p>
                </div>
              </div>
              {/* Rows */}
              <div className="grid grid-cols-1 gap-px bg-black/8 sm:grid-cols-[160px_1fr_1fr]">
                {treatment.comparisonTable.rows.map((row) => (
                  <Fragment key={row.feature}>
                    <div className="bg-cream/60 px-5 py-4 sm:flex sm:items-center">
                      <p className="font-subheading text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                        {row.feature}
                      </p>
                    </div>
                    <div className="bg-white px-5 py-4">
                      <p className="text-[14px] leading-[22px] text-body-text">{row.a}</p>
                    </div>
                    <div className="bg-white px-5 py-4">
                      <p className="text-[14px] leading-[22px] text-body-text">{row.b}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Price list */}
      {treatment.priceList && treatment.priceList.length > 0 && (
        <section className="w-full border-t border-black/8 px-5">
          <div className="mx-auto max-w-[900px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              {treatment.title} Price List
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-center text-[15px] leading-[24px] text-body-text">
              Prices vary by treatment area and the amount of product used — confirmed exactly at your consultation.
            </p>
            <div className="mt-10 overflow-hidden rounded-[12px] border border-black/8">
              {treatment.priceList.map((item, i) => (
                <div
                  key={item.area}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${
                    i % 2 === 0 ? "bg-cream/50" : "bg-white"
                  }`}
                >
                  <span className="text-[15px] leading-[22px] text-forest">{item.area}</span>
                  <span className="shrink-0 font-subheading text-[15px] font-semibold text-tan">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[900px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] leading-[24px] text-body-text">
              Everything you need to know about {treatment.title.toLowerCase()} at YourHealthFirst Clinic.
            </p>
            <div className="mt-10">
              <TreatmentFaqAccordion items={treatment.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Real patient gallery */}
      {treatment.gallery && (
        <section className="w-full px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              Our Gallery
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] leading-[24px] text-body-text">
              Real before &amp; after results from patients treated at YourHealthFirst Clinic.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {Array.from({ length: Math.min(3, treatment.gallery.count) }, (_, i) => {
                const g = treatment.gallery!;
                const src = `${g.folder}/${g.prefix}-${i + 1}.${g.ext}`;
                return (
                  <div
                    key={src}
                    className="group relative overflow-hidden rounded-[12px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={src}
                        alt={`${treatment.title} before & after — result ${i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                        loading="eager"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#a8896a] px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
              >
                View Full Gallery →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Prices / Appointment / Opening hours */}
      <section className="w-full border-t border-black/8 bg-cream px-5">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 py-[60px] sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
              Our Prices
            </h3>
            <Link
              href="/price-list"
              className="text-[14px] text-tan underline-offset-4 hover:underline"
            >
              Check Our Price List
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
              Get an Appointment
            </h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              By phone: 0207 225 3582 / 078 1847 4041<br />
              By email: info@yourhealthfirst.uk
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
              Opening Hours
            </h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              Monday to Friday – 10am to 6pm<br />
              Saturday – 12pm to 2pm (doctor appointments only)<br />
              Sunday &amp; out of hours – by appointment only
            </p>
          </div>
        </div>
      </section>

      {/* Related treatments */}
      {relatedTreatments.length > 0 && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[80px]">
            <h2 className="font-subheading text-[28px] font-medium leading-[34px] tracking-[-1.2px] text-forest uppercase">
              Related Treatments
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTreatments.map((t) => (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group flex flex-col gap-3 rounded-[12px] bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <p className="font-subheading text-[14px] font-semibold tracking-[-0.5px] text-forest uppercase">
                    {t.title}
                  </p>
                  <p className="text-[14px] leading-[22px] text-body-text line-clamp-3">
                    {t.intro}
                  </p>
                  <span className="font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
