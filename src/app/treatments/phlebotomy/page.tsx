import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreatmentFaqAccordion from "@/components/TreatmentFaqAccordion";
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
  { icon: "ban", title: "FedEx", description: "Same steps as above." },
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
    default:
      return null;
  }
}

export default function PhlebotomyPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-[111px]">
        <div className="absolute inset-0">
          <Image
            src="/images/treatments/phlebotomy/hero-banner.jpg"
            alt="Private phlebotomy blood draw at YourHealthFirst Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,44,29,0.94)_0%,rgba(12,44,29,0.55)_45%,rgba(12,44,29,0.15)_75%)]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[100px]">
          <div className="flex flex-col gap-5 lg:max-w-[560px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-tan/60" />
              <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                Phlebotomy &amp; Health Tests
              </span>
            </div>
            <h1 className="font-display text-[38px] font-bold leading-[42px] tracking-[-1px] text-cream uppercase lg:text-[52px] lg:leading-[56px]">
              Phlebotomy &amp; Blood Centrifugate
            </h1>
            <p className="text-[17px] leading-[27px] text-white/70">
              We offer private phlebotomy services for the comfort of our clients.
            </p>
            <div className="mt-3 flex flex-wrap gap-6">
              {heroBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-nav text-[13px] font-semibold tracking-[0.3px] text-white/85">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-[14px] shadow-sm" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/treatments/phlebotomy/blood-draw.jpg"
                  alt="Private blood draw appointment at YourHealthFirst Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 rounded-[10px] border border-black/8 bg-cream px-4 py-3">
                <div className="relative h-9 w-9 shrink-0">
                  <Image
                    src="/images/treatments/phlebotomy/npr-logo.png"
                    alt="National Phlebotomist Register"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] leading-[16px] text-body-text/70">
                  National Phlebotomist Register
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[34px] lg:leading-[40px]">
                  Phlebotomy (Blood Drawn)
                </h2>
                <span className="h-[3px] w-16 rounded-full bg-tan" />
              </div>
              <p className="text-[16px] leading-[27px] text-body-text">
                <strong className="text-forest">YourHealthFirst Clinic</strong> has been offering private blood draws and centrifugal services since 2014.
              </p>
              <p className="text-[16px] leading-[27px] text-body-text">
                YHF offers a &lsquo;walk-in&rsquo; service, however it is advised to book an appointment as patients of our clinic are given priority. Waiting times during clinical hours can reach up to 45 minutes or more if an appointment is not booked.
              </p>
              <p className="text-[16px] leading-[27px] text-body-text">
                At YourHealthFirst Clinic we offer phlebotomy service to both <strong className="text-forest">adults and children</strong>.
              </p>
              <p className="text-[16px] leading-[27px] text-body-text">
                We offer our services to different labs like Functional DX, Regenerus Labs, Cyrex, Genova, ArminLabs, Nordic Lab, Alletess Medical Laboratory, FRAT, Viva Health, Key Clinic, RGCC International and Religen USA, among others.
              </p>
              <p className="text-[16px] leading-[27px] text-body-text">
                For some cases, as per requisition form, <strong className="text-forest">we can also freeze the sample</strong> and keep it in the clinic until it is collected by DHL if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prior to your blood test / On the day */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-[16px] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                  <Icon name="clipboard" className="h-5 w-5" />
                </span>
                <h3 className="font-subheading text-[17px] font-semibold tracking-[0.5px] text-forest uppercase">
                  Prior to Your Blood Test
                </h3>
              </div>
              {priorSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest font-nav text-[13px] font-semibold text-cream">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] leading-[24px] text-body-text">{step.text}</p>
                    <p className="text-[14px] leading-[22px] text-body-text/70">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 rounded-[16px] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                  <Icon name="calendar" className="h-5 w-5" />
                </span>
                <h3 className="font-subheading text-[17px] font-semibold tracking-[0.5px] text-forest uppercase">
                  On the Day
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {onTheDaySteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest font-nav text-[13px] font-semibold text-cream">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-[24px] text-body-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
              <Icon name="drop" className="h-5 w-5" />
            </span>
            <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-forest lg:text-[30px] lg:leading-[36px]">
              Why It Matters
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyItMatters.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3 rounded-[14px] border border-black/8 bg-cream p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-tan shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-subheading text-[15px] font-semibold leading-[20px] text-forest uppercase">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-body-text">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Kids + Courier */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-[14px] border border-black/8 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                <Icon name="child" className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-[24px] text-body-text">
                <strong className="text-forest">5. For kids</strong> — please apply numbing cream in both arms 30 minutes before arrival.
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-[14px] border border-black/8 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
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
      <section className="relative w-full overflow-hidden bg-[#061a10] px-5">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-cream uppercase lg:text-[32px] lg:leading-[38px]">
                  Spinning Science: Unveiling the Power of Centrifugation
                </h2>
                <span className="h-[3px] w-16 rounded-full bg-tan" />
              </div>
              <p className="text-[15px] leading-[24px] text-white/70">
                At YHF, we specifically work with venous blood draws that have been centrifuged to ensure the biomarkers are safeguarded and to maintain complete accuracy within our complex and comprehensive reports.
              </p>
              <p className="text-[15px] leading-[24px] text-white/70">
                Centrifugation is a method of separating solids from liquids using rotational forces (spun). When blood is centrifuged, the red cell portion and plasma are separated, leaving the delicate biomarkers stable and intact, and suitable for transportation to the lab. Without centrifuging, many of the biomarkers become unstable and deteriorate over time, which can result in incorrect results.
              </p>
              <a
                href="#faqs"
                className="mt-1 inline-flex w-fit items-center gap-2 font-nav text-[14px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity hover:opacity-80"
              >
                Read More About Phlebotomy →
              </a>
            </div>
            <div className="relative w-full overflow-hidden rounded-[16px] shadow-lg" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/treatments/phlebotomy/centrifuge.jpg"
                alt="Blood sample being placed in the centrifuge at YourHealthFirst Clinic"
                fill
                className="object-cover"
              />
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

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section id="faqs" className="w-full px-5">
          <div className="mx-auto max-w-[900px] py-[80px] lg:py-[100px]">
            <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] leading-[24px] text-body-text">
              Everything you need to know about phlebotomy at YourHealthFirst Clinic.
            </p>
            <div className="mt-10">
              <TreatmentFaqAccordion items={treatment.faqs} />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
