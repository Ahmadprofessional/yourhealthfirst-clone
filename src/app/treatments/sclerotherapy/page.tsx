import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreatmentFaqAccordion from "@/components/TreatmentFaqAccordion";
import { treatmentDetails } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Sclerotherapy — Non-Invasive Spider Vein Removal | YourHealthFirst Clinic",
  description:
    "Sclerotherapy and microsclerotherapy for spider veins and small varicose veins at YourHealthFirst Clinic, London. Dr Sofia is a member of the British Association of Sclerotherapists.",
};

const treatment = treatmentDetails.find((t) => t.slug === "sclerotherapy")!;

const benefitCards = [
  { icon: "target", title: "Proven Results", description: "Targets and fades spider veins effectively" },
  { icon: "clock", title: "Quick Treatment", description: "Usually completed in a short session" },
  { icon: "heart", title: "Minimal Downtime", description: "Most normal activities resume within 24 hours" },
  { icon: "leaf", title: "Improves Appearance", description: "Helps your skin look smoother and clearer" },
];

const recommendedIf = [
  "Self-care treatment is not successful",
  "The appearance of your leg is causing you distress",
  "You experience pain or cramping",
  "Blood clots form frequently",
  "Phlebitis occurs",
  "Ulcers or sores form",
  "The fatty tissue under your skin hardens due to blood pressure from the vein (lipodermatosclerosis)",
];

const afterProcedure = [
  { icon: "walk", text: "Take a 10-minute walk immediately after treatment" },
  { icon: "sock", text: "Wear your graduated medical compression stockings for up to 3 weeks (as advised)" },
  { icon: "moon", text: "Stockings may be taken off at night or for showers/baths" },
  { icon: "alert", text: "Do not be alarmed if treated veins look worse initially — this is normal and improves over time" },
  { icon: "calendar", text: "You may require further treatment sessions for full results" },
];

const tips = [
  { icon: "walk", text: "Maintain a healthy weight" },
  { icon: "standing", text: "Avoid standing or sitting for long periods" },
  { icon: "sock", text: "Wear compression stockings as advised" },
  { icon: "ban", text: "Give up smoking" },
];

const galleryPairs = [
  { before: "/images/treatments/sclerotherapy/before-after/pair3-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair3-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair4-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair4-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair2-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair2-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair1-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair1-after.jpg" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "target":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} {...common}>
          <path d="M12 20s-7-4.35-9.5-8.5C.8 8 2.5 4.5 6 4.5c2 0 3.5 1.2 6 4 2.5-2.8 4-4 6-4 3.5 0 5.2 3.5 3.5 7C19 15.65 12 20 12 20Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={className} {...common}>
          <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
          <path d="M4 20 11 13" />
        </svg>
      );
    case "walk":
      return (
        <svg className={className} {...common}>
          <circle cx="13" cy="4" r="1.8" />
          <path d="M9 21l2-6 2 2 3 4M8 13l2-4 3 1 2-3M6 21l2-4" />
        </svg>
      );
    case "sock":
      return (
        <svg className={className} {...common}>
          <path d="M9 3v9l-4 4v3a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3v-4l4-1V3H9Z" />
          <path d="M9 8h9" />
        </svg>
      );
    case "moon":
      return (
        <svg className={className} {...common}>
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        </svg>
      );
    case "alert":
      return (
        <svg className={className} {...common}>
          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={className} {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      );
    case "standing":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="5" r="1.8" />
          <path d="M12 8v6M9 10l3-2 3 2M9 21l3-7 3 7" />
        </svg>
      );
    case "ban":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m6.5 6.5 11 11" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} {...common}>
          <path d="m5 13 4 4L19 7" />
        </svg>
      );
    case "arrow":
      return (
        <svg className={className} {...common}>
          <path d="M4.5 12h15m0 0-6-6m6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SclerotherapyPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Standard treatment hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/treatments" className="font-nav text-[13px] tracking-[1px] text-white/40 uppercase transition-colors hover:text-tan">
                Treatments
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">{treatment.category}</span>
            </div>
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">{treatment.category}</p>
            </div>
            <h1 className="font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]">
              {treatment.title}
            </h1>
            <p className="max-w-[560px] font-serif text-[20px] leading-[30px] text-white/70 italic">{treatment.tagline}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* What is Sclerotherapy? */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative w-full overflow-hidden rounded-[16px] shadow-lg" style={{ aspectRatio: "4/3" }}>
              <Image src="/images/treatments/sclerotherapy/intro.jpg" alt="Sclerotherapy injection being administered to a spider vein on the leg" fill className="object-cover" />
              <div className="pointer-events-none absolute left-[18%] top-[30%] h-[130px] w-[130px] rounded-full border-2 border-white/80 shadow-[0_0_0_3px_rgba(209,174,131,0.5)]" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">Overview</span>
                <span className="h-px w-16 bg-tan/40" />
              </div>
              <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-1px] text-forest lg:text-[36px] lg:leading-[42px]">
                What Is Sclerotherapy?
              </h2>
              <p className="text-[15px] leading-[25px] text-body-text">
                Sclerotherapy is one of the most effective treatments for spider veins on the legs. It involves injecting a solution (sclerosant) into the affected veins, which irritates the vein lining and causes it to collapse. The blood is then redirected to healthier veins, and the treated veins gradually fade over a few weeks.
              </p>
              <p className="text-[15px] leading-[25px] text-body-text">
                High-compression stockings are worn for up to three days to help reduce bruising. Normal activities can usually be resumed after 24 hours, including swimming.
              </p>
              <p className="text-[15px] leading-[25px] text-body-text">
                A travel interval may be required, and patients are advised to drink plenty of water and wear class 2 medical compression stockings when flying.
              </p>
              <p className="text-[15px] leading-[25px] text-body-text">
                Sclerotherapy is generally well tolerated, though some areas may feel tender. Photographs may be taken before and after treatment to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-up benefit cards */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[50px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((b) => (
              <div key={b.title} className="flex flex-col items-center gap-3 rounded-[16px] border border-tan/20 bg-white/70 p-7 text-center shadow-sm">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-subheading text-[14px] font-semibold tracking-[1px] text-forest uppercase">{b.title}</h3>
                <p className="text-[13px] leading-[20px] text-body-text">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does Sclerotherapy Work? — text + before/after pair */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                  How Does Sclerotherapy Work?
                </h2>
                <span className="h-[3px] w-14 rounded-full bg-tan" />
              </div>
              <p className="text-[15px] leading-[25px] text-body-text">
                The solution (sclerosant) is injected into the vein, causing the vein walls to collapse and the blood to be redirected to nearby healthy veins. Over time, the treated veins fade and are reabsorbed by the body, improving the appearance of the skin on the legs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-[14px] shadow-sm" style={{ aspectRatio: "1/1" }}>
                <Image src="/images/treatments/sclerotherapy/before-after/pair3-before.jpg" alt="Leg with visible spider veins before sclerotherapy treatment" fill className="object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[6px] bg-forest/80 px-3 py-1 text-[11px] font-semibold tracking-[1px] text-cream uppercase">
                  Before
                </span>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/20 text-tan">
                <Icon name="arrow" className="h-5 w-5" />
              </span>
              <div className="relative w-full overflow-hidden rounded-[14px] shadow-sm" style={{ aspectRatio: "1/1" }}>
                <Image src="/images/treatments/sclerotherapy/before-after/pair3-after.jpg" alt="Leg with faded spider veins after sclerotherapy treatment" fill className="object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[6px] bg-tan px-3 py-1 text-[11px] font-semibold tracking-[1px] text-forest uppercase">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Treatment Process — dark band */}
      <section className="relative w-full overflow-hidden bg-[#061a10] px-5">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative w-full overflow-hidden rounded-[16px] shadow-lg" style={{ aspectRatio: "4/3" }}>
              <Image src="/images/treatments/sclerotherapy/treatment.jpg" alt="Sclerotherapy injection being administered to the leg" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">The Treatment Process</span>
                <span className="h-px w-16 bg-tan/40" />
              </div>
              <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-cream lg:text-[32px] lg:leading-[38px]">
                What Happens During a Microsclerotherapy Treatment?
              </h2>
              <p className="text-[15px] leading-[25px] text-white/70">
                Your practitioner will assess the affected veins and explain the expected cosmetic outcome. A fine needle is used to inject the sclerosant, superficially into the veins. You may feel a mild stinging sensation. Compression is then applied to close the vein.
              </p>
              <p className="text-[15px] leading-[25px] text-white/70">
                The procedure is usually quick and well tolerated. Most patients can return to normal activities the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended if / Recommendations after */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[16px] bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[22px] font-bold leading-[28px] text-forest">
                  Noninvasive Treatment May Be Recommended if You:
                </h3>
                <span className="h-[3px] w-12 rounded-full bg-tan" />
              </div>
              <ul className="mt-6 flex flex-col gap-4">
                {recommendedIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[14px] leading-[22px] text-body-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[22px] font-bold leading-[28px] text-forest">
                  Recommendations After the Procedure
                </h3>
                <span className="h-[3px] w-12 rounded-full bg-tan" />
              </div>
              <ul className="mt-6 flex flex-col gap-4">
                {afterProcedure.map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="mt-2 text-[14px] leading-[22px] text-body-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional tips */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-[320px] font-display text-[26px] font-bold leading-[32px] text-forest lg:text-[28px] lg:leading-[34px]">
              Additional Tips to Help Avoid the Reappearance of Veins
            </h2>
            <div className="grid flex-1 grid-cols-2 gap-5 lg:grid-cols-4">
              {tips.map((tip) => (
                <div key={tip.text} className="flex flex-col items-center gap-3 rounded-[14px] border border-tan/20 bg-cream p-6 text-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                    <Icon name={tip.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-[13px] leading-[19px] text-body-text">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[900px] py-[80px] lg:py-[100px]">
            <div className="flex items-center gap-4">
              <h2 className="font-display text-[26px] font-bold leading-[32px] text-forest lg:text-[30px] lg:leading-[36px]">
                FAQ&apos;s
              </h2>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="mt-8">
              <TreatmentFaqAccordion items={treatment.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Gallery — before/after pairs */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-[26px] font-bold leading-[32px] text-forest lg:text-[30px] lg:leading-[36px]">
              Our Gallery
            </h2>
            <span className="h-px flex-1 bg-black/10" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPairs.map((pair, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="relative overflow-hidden rounded-[10px]" style={{ aspectRatio: "1/1" }}>
                    <Image src={pair.before} alt={`Sclerotherapy before — result ${i + 1}`} fill className="object-cover" />
                    <span className="absolute left-1.5 top-1.5 rounded-[4px] bg-forest/80 px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.5px] text-cream uppercase">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[10px]" style={{ aspectRatio: "1/1" }}>
                    <Image src={pair.after} alt={`Sclerotherapy after — result ${i + 1}`} fill className="object-cover" />
                    <span className="absolute left-1.5 top-1.5 rounded-[4px] bg-tan px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.5px] text-forest uppercase">
                      After
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices / Opening hours / Appointment */}
      <section className="w-full border-t border-black/8 bg-cream px-5">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 py-[60px] sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">Our Prices</h3>
            <Link href="/price-list" className="text-[14px] text-tan underline-offset-4 hover:underline">
              Check Our Price List
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">Opening Hours</h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              Monday to Friday – 10am to 7pm<br />
              Saturday – 12pm to 4pm<br />
              Sunday &amp; out of hours – by appointment only
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">Get an Appointment</h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              By phone: 0207 225 3582 / 078 1847 4041<br />
              By email: info@yourhealthfirst.uk
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] pb-10">
          <p className="text-[13px] italic leading-[20px] text-body-text/70">
            Total treatment cost depends on the extent and number of veins treated, and the number of sessions required for improvement — normally around 80% disappearance is expected, depending on the size of the veins.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
