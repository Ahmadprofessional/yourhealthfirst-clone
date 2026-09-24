import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { treatmentDetails } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Phlebotomy (Blood Drawn) & Centrifugal | YourHealthFirst Clinic — Harley Street",
  description:
    "Private phlebotomy (blood draw) and centrifugal services for adults and children at YourHealthFirst Clinic, London — since 2014.",
};

const treatment = treatmentDetails.find((t) => t.slug === "phlebotomy")!;

const heroBadges = [
  { icon: "user", label: "Private Service" },
  { icon: "shield", label: "Professional Care" },
  { icon: "bolt", label: "Fast & Convenient" },
];

const priorSteps = [
  {
    text: "Please ensure you have received your test kit and carefully read all enclosed instructions before attending your appointment.",
    note: "To arrange your clinic appointment, please contact us on 0207 225 3582 or via WhatsApp on 07818 474041.",
  },
];

const onTheDaySteps = [
  "Please drink plenty of water, and bring all the information in your test kit as these provide vital information needed for the test to proceed and produce viable results.",
  "Bring your test kit and all of its contents. Private blood test kits contain a requisition form (the test cannot proceed if you do not have your requisition form). Check the contents of your test kit.",
  "Stay well-hydrated with plain water to make your veins plump and easier to find (for adults at minimum 2L, and kids minimum 1L).",
  "Avoid other liquids: don't drink coffee, tea, juice, soda, or other sugary drinks, as they can interfere with test results. Confirm fasting requirements — for some tests, you may need to fast and can only drink water.",
];

const whyItMatters = [
  {
    icon: "drop",
    title: "Easier Vein Access",
    description: "Hydration increases blood flow and makes your veins more prominent, ensuring a smoother blood draw.",
  },
  {
    icon: "target",
    title: "Accurate Results",
    description: "Other beverages contain compounds or sugars that can alter your test results, while plain water does not.",
  },
  {
    icon: "ban",
    title: "Avoid Retests",
    description: "Following proper instructions for fasting and hydration can prevent the need to repeat the blood test.",
  },
];

const postageOptions = [
  { icon: "building", title: "Post Office", description: "The nearest one from the clinic is less than a 10 minute walk from the clinic." },
  { icon: "pin", title: "UPS", description: "UPS dropping location just 5 minutes from the clinic." },
  { icon: "truck", title: "DHL", description: "Once we have confirmed your appointment, please call DHL and ask them to come and collect the kit from your home address or our clinic, between 3pm and 5pm." },
  { icon: "truck", title: "FedEx", description: "Once we have confirmed your appointment, please call FedEx and ask them to come and collect the kit from your home address or our clinic, between 3pm and 5pm." },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "user":
      return (
        <svg className={className} {...common}>
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} {...common}>
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9.5 12 2 2 3.5-4" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={className} {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={className} {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
          <path d="M9 11h6M9 15h6" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={className} {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      );
    case "child":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21v-6a6 6 0 0 1 12 0v6" />
        </svg>
      );
    case "truck":
      return (
        <svg className={className} {...common}>
          <rect x="2" y="7" width="13" height="10" rx="1" />
          <path d="M15 10h4l3 3v4h-7z" />
          <circle cx="7" cy="19" r="1.6" />
          <circle cx="18" cy="19" r="1.6" />
        </svg>
      );
    case "drop":
      return (
        <svg className={className} {...common}>
          <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
        </svg>
      );
    case "target":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "ban":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m6.5 6.5 11 11" />
        </svg>
      );
    case "building":
      return (
        <svg className={className} {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 21v-4h6v4M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01" />
        </svg>
      );
    case "pin":
      return (
        <svg className={className} {...common}>
          <path d="M12 21s7-6.5 7-11.5a7 7 0 0 0-14 0C5 14.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "box":
      return (
        <svg className={className} {...common}>
          <path d="M21 8 12 3 3 8l9 5 9-5Z" />
          <path d="M3 8v9l9 5 9-5V8M12 13v9" />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} {...common}>
          <path d="M5 4h3.5l1.5 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z" />
        </svg>
      );
    case "tubes":
      return (
        <svg className={className} {...common}>
          <path d="M7 3v14a2 2 0 0 0 4 0V3M7 8h4" />
          <path d="M13 6v9a1.7 1.7 0 0 0 3.4 0V6M13 9.5h3.4" />
          <path d="M18 9v6a1.3 1.3 0 0 0 2.6 0V9M18 11.5h2.6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PhlebotomyPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero */}
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
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {heroBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-tan">
                    <Icon name={b.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-nav text-[18px] font-semibold tracking-[0.3px] text-white">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Intro — image left, text right */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
            <div className="relative w-full max-w-[380px]">
              <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full rounded-[18px] border border-tan/40" />
              <div className="relative w-full overflow-hidden rounded-[14px] shadow-md" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/treatments/phlebotomy/blood-draw.jpg"
                  alt="Private blood draw appointment at YourHealthFirst Clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row xl:gap-10">
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[34px] lg:leading-[40px]">
                    Phlebotomy <span className="text-tan">(Blood Drawn)</span>
                  </h2>
                  <span className="h-[3px] w-16 rounded-full bg-tan" />
                </div>
                <p className="text-[16px] leading-[27px] text-body-text">
                  <strong className="text-forest">YourHealthFirst Clinic</strong> has been offering private blood draws and centrifugal since 2014.
                </p>
                <p className="text-[16px] leading-[27px] text-body-text">
                  YHF offers a &lsquo;walk-in&rsquo; service, however it is advised to book an appointment as patients of our clinic are given priority. Waiting times during clinical hours can reach up to 45 minutes or more if an appointment is not booked.
                </p>
                <p className="text-[16px] leading-[27px] text-body-text">
                  At YourHealthFirst Clinic we offer phlebotomy service to both <strong className="text-forest">adults and children</strong>.
                </p>
                <p className="text-[16px] leading-[27px] text-body-text">
                  We offer our services to different labs like <strong className="text-forest">Functional DX, Regenerus Labs, Cyrex, Genova, ArminLabs, Nordic Lab, Alletess Medical Laboratory, FRAT, Viva Health, Key Clinic, RGCC International and Religen USA</strong>, among others.
                </p>
                <p className="text-[16px] leading-[27px] text-body-text">
                  For some cases, as per requisition form, <strong className="text-forest">we can also freeze the sample</strong> and keep it in the clinic until it is collected by DHL if needed.
                </p>
              </div>
              <div className="flex h-fit w-full shrink-0 flex-col items-center gap-4 rounded-[14px] border border-tan/30 bg-cream px-6 py-8 text-center shadow-sm xl:w-[280px]">
                <div className="relative h-24 w-full">
                  <Image src="/images/treatments/phlebotomy/npr-logo.png" alt="National Phlebotomist Register" fill className="object-contain" />
                </div>
                <span className="text-[16px] font-semibold leading-[22px] text-forest">National Phlebotomist Register</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prior to your blood test + On the day — one box */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
        <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-tan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-[10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-white/40 blur-[110px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="relative overflow-hidden rounded-[24px] border border-tan/25 bg-white/70 shadow-lg backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] lg:block">
              <Image
                src="/images/treatments/phlebotomy/hero-banner.jpg"
                alt=""
                fill
                className="object-cover object-[70%_50%] opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#faf4ea_0%,rgba(250,244,234,0.55)_45%,rgba(250,244,234,0)_100%)]" />
            </div>

            <div className="relative flex flex-col gap-10 p-8 lg:max-w-[66%] lg:p-12">
              {/* Prior */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tan text-white shadow-sm">
                    <Icon name="clipboard" className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="h-[3px] w-12 rounded-full bg-tan" />
                    <h3 className="font-display text-[26px] font-bold leading-[30px] tracking-[-0.5px] text-forest uppercase lg:text-[30px] lg:leading-[34px]">
                      Prior to Your <span className="text-tan">Blood Test</span>
                    </h3>
                  </div>
                </div>
                {priorSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tan font-nav text-[13px] font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-[24px] text-body-text">{step.text}</p>
                  </div>
                ))}
                <div className="flex items-start gap-3 rounded-[12px] bg-white/80 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  <p className="text-[13px] leading-[21px] text-body-text">
                    To arrange your clinic appointment, please contact us on{" "}
                    <strong className="text-tan">0207 225 3582</strong> or via WhatsApp on{" "}
                    <strong className="text-tan">07818 474041</strong>.
                  </p>
                </div>
              </div>

              <span className="h-px w-full bg-tan/30" />

              {/* On the day */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tan text-white shadow-sm">
                    <Icon name="calendar" className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="h-[3px] w-12 rounded-full bg-tan" />
                    <h3 className="font-display text-[26px] font-bold leading-[30px] tracking-[-0.5px] text-forest uppercase lg:text-[30px] lg:leading-[34px]">
                      On the <span className="text-tan">Day</span>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col">
                  {onTheDaySteps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tan font-nav text-[13px] font-semibold text-white">
                          {i + 1}
                        </span>
                        {i < onTheDaySteps.length - 1 && (
                          <span className="my-1 w-px flex-1 bg-tan/30" />
                        )}
                      </div>
                      <p className="pb-5 text-[15px] leading-[24px] text-body-text">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
        <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[450px] w-[450px] rounded-full bg-tan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -left-[10%] bottom-[-15%] h-[450px] w-[450px] rounded-full bg-white/40 blur-[110px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-2">
              <span className="h-[3px] w-12 rounded-full bg-tan" />
              <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-1px] text-forest uppercase lg:text-[36px] lg:leading-[42px]">
                Why It <span className="text-tan">Matters</span>
              </h2>
              <span className="h-[3px] w-12 rounded-full bg-tan" />
            </div>
            <p className="max-w-[420px] text-[15px] leading-[24px] text-body-text lg:text-right">
              Following a few simple guidelines helps ensure a smoother blood draw and more reliable test results.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-3 rounded-[20px] border border-tan/25 bg-white/70 p-7 shadow-sm backdrop-blur-sm"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tan text-white shadow-sm">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[18px] font-bold leading-[22px] text-forest uppercase">
                    {item.title}
                  </h3>
                  <span className="h-[2px] w-8 rounded-full bg-tan/50" />
                </div>
                <p className="text-[14px] leading-[22px] text-body-text">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Kids + Courier */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-[20px] border border-tan/25 bg-white/70 p-7 shadow-sm backdrop-blur-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                <Icon name="child" className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-[24px] text-body-text">
                <strong className="text-forest">5. For kids</strong> — please apply numbing cream in both arms 30 minutes before arrival.
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-[20px] border border-tan/25 bg-white/70 p-7 shadow-sm backdrop-blur-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                <Icon name="truck" className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-[24px] text-body-text">
                <strong className="text-forest">6. If your test requires a courier</strong> to an overseas laboratory, please book a morning appointment (Monday to Thursday) and arrange for the courier to pick up from YourHealthFirst Clinic the same afternoon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Postage */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
              <Icon name="box" className="h-5 w-5" />
            </span>
            <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-forest lg:text-[30px] lg:leading-[36px]">
              Postage
            </h2>
          </div>
          <p className="mt-3 max-w-[720px] text-[15px] leading-[24px] text-body-text">
            Inside your test kit you will find 4 options, depending on the laboratory you are using you will have to choose one of them:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {postageOptions.map((option) => (
              <div key={option.title} className="flex flex-col gap-3 rounded-[14px] bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                  <Icon name={option.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-subheading text-[14px] font-semibold tracking-[0.5px] text-forest uppercase">
                  {option.title}
                </h3>
                <p className="text-[13px] leading-[20px] text-body-text">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spinning Science — dark CTA band */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#3a2c1a_0%,#241a0f_100%)] px-5">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                  Phlebotomy
                </span>
                <span className="h-px w-16 bg-tan/40" />
              </div>
              <h2 className="font-display text-[32px] font-bold leading-[38px] tracking-[-1px] text-cream uppercase lg:text-[42px] lg:leading-[48px]">
                Spinning Science:{" "}
                <span className="text-tan">Unveiling the Power of Centrifugation</span>
              </h2>
              <p className="text-[15px] leading-[25px] text-white/70">
                At YHF, we specifically work with venous blood draws that have been centrifuged to ensure the biomarkers are safeguarded and to maintain complete accuracy within our complex and comprehensive reports.
              </p>
              <p className="text-[15px] leading-[25px] text-white/70">
                Centrifugation is a method of separating solids from liquids using rotational forces (spun). When blood is centrifuged, the red cell portion and plasma are separated, leaving the delicate biomarkers stable and intact, and suitable for transportation to the lab. Without centrifuging, many of the biomarkers become unstable and deteriorate over time, which can result in incorrect results.
              </p>
              <a
                href="https://www.webmd.com/a-to-z-guides/what-is-phlebotomy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-14 w-fit items-center gap-3 rounded-[10px] bg-tan px-7 font-nav text-[14px] font-semibold tracking-[0.5px] text-forest uppercase transition-opacity hover:opacity-90"
              >
                Read More About Phlebotomy
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="pointer-events-none absolute -right-8 -top-8 h-full w-full rounded-full border border-tan/30" />
              <div className="relative w-full overflow-hidden rounded-[24px] shadow-xl" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/treatments/phlebotomy/centrifuge-machine.jpg"
                  alt="Blood sample being placed in the centrifuge at YourHealthFirst Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute -left-6 -top-6 flex h-16 w-16 items-center justify-center rounded-full bg-tan text-forest shadow-lg">
                <Icon name="drop" className="h-7 w-7" />
              </span>
              <span className="absolute -right-6 -bottom-6 flex h-16 w-16 items-center justify-center rounded-full bg-tan text-forest shadow-lg">
                <Icon name="tubes" className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Prices / Opening hours / Appointment */}
      <section className="w-full border-t border-black/8 bg-cream px-5">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 py-[60px] sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
              <Icon name="target" className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
                Our Prices
              </h3>
              <Link href="/price-list" className="text-[14px] text-tan underline-offset-4 hover:underline">
                Check Our Price List
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
              <Icon name="calendar" className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
                Opening Hours
              </h3>
              <p className="text-[14px] leading-[22px] text-body-text">
                Monday to Friday – 10am to 6:30pm<br />
                Saturday – 12pm to 4pm<br />
                Sunday &amp; out of hours – by appointment only
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
              <Icon name="user" className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">
                Get an Appointment
              </h3>
              <p className="text-[14px] leading-[22px] text-body-text">
                By phone: 0207 225 3582 / 078 1847 4041<br />
                By email: info@yourhealthfirst.uk
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
