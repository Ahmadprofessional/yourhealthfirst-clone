import type { Metadata } from "next";
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
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#d9c4a5_50%,#7a6248_100%)] pt-[111px]">
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
              <div className="rounded-[12px] bg-[linear-gradient(135deg,#7a6248_0%,#d9c4a5_50%,#7a6248_100%)] p-6">
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
