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

function contraindicationIcon(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("smok") || t.includes("alcohol") || t.includes("drug")) return "ban";
  if (t.includes("platelet") || t.includes("thrombocytopenia")) return "drop";
  if (t.includes("fibrinogen")) return "drop";
  if (t.includes("haemodynamic") || t.includes("hemodynamic")) return "pulse";
  if (t.includes("sepsis") || t.includes("infection")) return "virus";
  if (t.includes("liver")) return "liver";
  if (t.includes("coagulation")) return "pill";
  if (t.includes("cancer") || t.includes("skin disease")) return "user";
  if (t.includes("metabolic") || t.includes("systemic")) return "gear";
  return "shield";
}

const ICON_PALETTE = [
  { bg: "bg-rust/15", text: "text-rust" },
  { bg: "bg-[#7c8a5c]/15", text: "text-[#7c8a5c]" },
  { bg: "bg-tan/25", text: "text-tan" },
  { bg: "bg-[#5b7c99]/15", text: "text-[#5b7c99]" },
  { bg: "bg-[#c1666b]/15", text: "text-[#c1666b]" },
  { bg: "bg-forest/10", text: "text-forest" },
  { bg: "bg-[#c98a3e]/15", text: "text-[#c98a3e]" },
];

function iconPaletteColor(i: number) {
  return ICON_PALETTE[i % ICON_PALETTE.length];
}

const VIVID_ICON_PALETTE = [
  { bg: "bg-rust", text: "text-white" },
  { bg: "bg-[#7c8a5c]", text: "text-white" },
  { bg: "bg-[#c98a3e]", text: "text-white" },
  { bg: "bg-[#5b7c99]", text: "text-white" },
  { bg: "bg-[#c1666b]", text: "text-white" },
  { bg: "bg-forest", text: "text-white" },
  { bg: "bg-tan", text: "text-white" },
];

function AreaIcon({ name, className }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "sparkle":
      return (
        <svg className={className} {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "eye":
      return (
        <svg className={className} {...common}>
          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.8" />
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
    case "face":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9.5 10.5h.01M14.5 10.5h.01M9 15c1 1 5 1 6 0" />
        </svg>
      );
    case "neck":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="6" r="3" />
          <path d="M9 8.5v3a3 3 0 0 0 6 0v-3M8 21c0-2.5 1.8-4 4-4s4 1.5 4 4" />
        </svg>
      );
    case "jaw":
      return (
        <svg className={className} {...common}>
          <path d="M6 5c-1 3-1 6 0 8 1.5 3.5 4.5 6 6 6s4.5-2.5 6-6c1-2 1-5 0-8" />
          <path d="M9 15c1 1 5 1 6 0" />
        </svg>
      );
    case "chest":
      return (
        <svg className={className} {...common}>
          <path d="M12 20s-7-4.35-9.5-8.5C.8 8 2.5 4.5 6 4.5c2 0 3.5 1.2 6 4 2.5-2.8 4-4 6-4 3.5 0 5.2 3.5 3.5 7C19 15.65 12 20 12 20Z" />
        </svg>
      );
    case "hand":
      return (
        <svg className={className} {...common}>
          <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 12V4a1.5 1.5 0 0 1 3 0v8M14 12.5V5.5a1.5 1.5 0 0 1 3 0V13M17 8.5a1.5 1.5 0 0 1 3 0V15c0 3.5-2 7-6.5 7h-1C9 22 7 20 6 18l-2.5-4.5c-.5-1 0-2 1-2.2 1-.2 1.7.2 2.2 1L8 14" />
        </svg>
      );
    case "body":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="4.5" r="2.2" />
          <path d="M7 21l1.5-9L6 10l1-3c.5-1.5 1.5-2 2.5-2h5c1 0 2 .5 2.5 2l1 3-2.5 2 1.5 9" />
        </svg>
      );
    case "bandage":
      return (
        <svg className={className} {...common}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-15 12 12)" />
          <circle cx="9.5" cy="10.5" r="0.6" fill="currentColor" transform="rotate(-15 12 12)" />
          <circle cx="14.5" cy="13.5" r="0.6" fill="currentColor" transform="rotate(-15 12 12)" />
        </svg>
      );
    case "wave":
      return (
        <svg className={className} {...common}>
          <path d="M3 9c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
          <path d="M3 15c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
        </svg>
      );
    case "dots":
      return (
        <svg className={className} {...common}>
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="8" r="1" fill="currentColor" />
          <circle cx="11" cy="13" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
          <circle cx="8" cy="16" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
    case "hair":
      return (
        <svg className={className} {...common}>
          <path d="M5 12c0-4 3-7.5 7-7.5s7 3.5 7 7.5c0 1.5-.3 2.5-1 4" />
          <path d="M7 11v6M10 10v8M14 10v8M17 11v5" />
        </svg>
      );
    case "bone":
      return (
        <svg className={className} {...common}>
          <path d="M6.5 6.5a2 2 0 1 0-2.83 2.83L14 19.67a2 2 0 1 0 2.83-2.83L6.5 6.5Z" />
          <path d="M17.5 6.5a2 2 0 1 1 2.83 2.83M6.5 17.5a2 2 0 1 1-2.83-2.83" />
        </svg>
      );
    case "user":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
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
    case "shield":
      return (
        <svg className={className} {...common}>
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9.5 12 2 2 3.5-4" />
        </svg>
      );
    case "clock":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "arrow":
      return (
        <svg className={className} {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
        </svg>
      );
    case "ban":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m6.5 6.5 11 11" />
        </svg>
      );
    case "drop":
      return (
        <svg className={className} {...common}>
          <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
        </svg>
      );
    case "pulse":
      return (
        <svg className={className} {...common}>
          <path d="M3 12h4l2-6 4 12 2-6h6" />
        </svg>
      );
    case "virus":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2" />
        </svg>
      );
    case "liver":
      return (
        <svg className={className} {...common}>
          <path d="M4 13c0-4 3-8 8-8 4 0 8 2 8 6 0 4-3 7-8 7-2 0-3.5-.5-4.5-1.5-1.5 1-3.5.5-3.5-1.5Z" />
        </svg>
      );
    case "pill":
      return (
        <svg className={className} {...common}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)" />
          <path d="M12 12 8.5 15.5" strokeWidth={1.2} />
        </svg>
      );
    case "gear":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.36 5.64l-1.77 1.77M7.41 16.59l-1.77 1.77M18.36 18.36l-1.77-1.77M7.41 7.41 5.64 5.64" />
        </svg>
      );
    case "alert":
      return (
        <svg className={className} {...common}>
          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      );
    case "lips":
      return (
        <svg className={className} {...common}>
          <path d="M4 12c2-2.5 4.5-3 8-3s6 .5 8 3c-2 .5-3 2-8 2s-6-1.5-8-2Z" />
          <path d="M6.5 12.2c1.5 1.3 3 1.8 5.5 1.8s4-.5 5.5-1.8" />
        </svg>
      );
    default:
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export async function generateStaticParams() {
  return treatmentDetails.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentDetails.find((t) => t.slug === slug);
  if (!treatment) return { title: "Treatment | YourHealthFirst Clinic" };
  return {
    title: treatment.metaTitle ?? `${treatment.title} | YourHealthFirst Clinic — Harley Street`,
    description: treatment.metaDescription ?? treatment.intro,
  };
}

function renderBold(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-forest">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatmentDetails.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const relatedTreatments = treatmentDetails
    .filter((t) => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 3);

  const contraChips = treatment.contraindications ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {treatment.contraindications.items.map((item) => (
        <div key={item} className="flex items-center gap-4 rounded-[14px] border border-tan/20 bg-white/70 p-5 backdrop-blur-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
            <AreaIcon name={contraindicationIcon(item)} className="h-5 w-5" />
          </span>
          <span className="text-[14px] leading-[19px] text-body-text">{item}</span>
        </div>
      ))}
    </div>
  ) : null;

  const processDiagramsSection = (
    <>
      {treatment.processDiagrams && treatment.processDiagrams.length > 0 && (
        <section className={`w-full px-5 ${treatment.howItWorks ? "" : "bg-cream"}`}>
          <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
            {treatment.processDiagramsRow ? (
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center">
                {treatment.processDiagrams.map((diagram) => {
                  const w = diagram.width ?? 1600;
                  const h = diagram.height ?? 1000;
                  return (
                    <div
                      key={diagram.src}
                      className={
                        treatment.processDiagramsEqualSize
                          ? "relative aspect-square w-full overflow-hidden rounded-[12px] border border-black/8 bg-white shadow-sm lg:flex-1"
                          : "relative w-full overflow-hidden rounded-[12px] border border-black/8 bg-white shadow-sm lg:[flex:var(--g)_1_0]"
                      }
                      style={treatment.processDiagramsEqualSize ? undefined : { aspectRatio: `${w} / ${h}`, ["--g" as string]: w / h }}
                    >
                      <Image
                        src={diagram.src}
                        alt={diagram.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        style={diagram.objectPosition ? { objectPosition: diagram.objectPosition } : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
            <div className="flex flex-col gap-6">
              {treatment.processDiagrams.map((diagram) => (
                <div
                  key={diagram.src}
                  className="relative mx-auto w-full overflow-hidden rounded-[12px] bg-white p-4 shadow-sm"
                  style={{ maxWidth: diagram.maxWidth ?? 1100 }}
                >
                  <Image
                    src={diagram.src}
                    alt={diagram.alt}
                    width={diagram.width ?? 1600}
                    height={diagram.height ?? 600}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
            )}
          </div>
        </section>
      )}</>
  );

  const premiumFeaturesSection = (
    <>
        {treatment.premiumFeatures && treatment.premiumFeatures.items.length > 0 && (
          <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
            <div className="pointer-events-none absolute -right-[6%] -top-[20%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
            <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
            <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
              {treatment.premiumFeatures.image ? (
                <div
                  className="relative mx-auto w-full overflow-hidden rounded-[12px] shadow-sm"
                  style={{
                    aspectRatio: treatment.premiumFeatures.imageAspect ?? "1969/799",
                    maxWidth: treatment.premiumFeatures.imageMaxWidth ?? 1100,
                  }}
                >
                  <Image
                    src={treatment.premiumFeatures.image.src}
                    alt={treatment.premiumFeatures.image.alt}
                    fill
                    sizes="(min-width: 1100px) 1100px, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <>
                  <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-[30px] bg-tan/40" />
                      <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">
                        {treatment.premiumFeatures.eyebrow}
                      </span>
                      <span className="h-px w-[30px] bg-tan/40" />
                    </div>
                    <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-1px] text-forest lg:text-[36px] lg:leading-[42px]">
                      {treatment.premiumFeatures.main} <span className="text-tan">{treatment.premiumFeatures.accent}</span>
                    </h2>
                    {treatment.premiumFeatures.subtitle && (
                      <p className="text-[15px] leading-[24px] text-body-text">{treatment.premiumFeatures.subtitle}</p>
                    )}
                  </div>

                  <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {treatment.premiumFeatures.items.map((item, i) => {
                      const color = iconPaletteColor(i);
                      return (
                        <div
                          key={item.title}
                          className="flex flex-col gap-4 rounded-[20px] border border-tan/25 bg-white/70 p-7 shadow-sm backdrop-blur-sm"
                        >
                          <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                            <svg className="pointer-events-none absolute -inset-2" viewBox="0 0 72 72" fill="none">
                              <path d="M6 40A30 30 0 0 1 40 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="opacity-30" />
                            </svg>
                            <AreaIcon name={item.icon} className="h-6 w-6" />
                          </span>
                          <h3 className="font-subheading text-[16px] font-semibold leading-[22px] text-forest">{item.title}</h3>
                          <p className="text-[14px] leading-[22px] text-body-text">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </section>
        )}
    </>
  );

  const areaSizeGuideSection = (
    <>
      {treatment.areaSizeGuide && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
          <div className="pointer-events-none absolute -right-[6%] -top-[20%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
          <svg className="pointer-events-none absolute left-8 top-8 h-20 w-20 text-tan/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
            <path d="M4 20 11 13" />
          </svg>

          <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
              <div className="w-fit rounded-full border-[0.8px] border-tan/40 px-4 py-2">
                <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                  {treatment.areaSizeGuide.eyebrow}
                </p>
              </div>
              <h2 className="font-display text-[32px] font-bold leading-[38px] tracking-[-1px] text-forest lg:text-[40px] lg:leading-[46px]">
                {treatment.areaSizeGuide.title}
              </h2>
              <span className="h-[3px] w-14 rounded-full bg-tan" />
              {treatment.areaSizeGuide.subtitle && (
                <p className="text-[15px] leading-[24px] text-body-text">
                  {treatment.areaSizeGuide.subtitle}
                </p>
              )}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {treatment.areaSizeGuide.groups.map((group) => (
                <div
                  key={group.heading}
                  className="flex overflow-hidden rounded-[20px] border border-tan/25 bg-white/70 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-3 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                      <AreaIcon name={group.icon} className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-display text-[18px] font-bold leading-[22px] text-forest">
                        {group.heading}
                      </h3>
                      <span className="font-nav text-[11px] font-semibold tracking-[1px] text-tan uppercase">
                        ({group.subheading})
                      </span>
                    </div>
                    <p className="text-[13px] leading-[20px] text-body-text">{group.description}</p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-3 border-t border-tan/20 pt-3">
                      {group.chips.map((chip) => (
                        <div key={chip.label} className="flex flex-col items-center gap-1.5" style={{ width: "calc(33% - 8px)" }}>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                            <AreaIcon name={chip.icon} className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-center text-[10px] leading-[12px] text-body-text">{chip.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-[34%] shrink-0">
                    <Image src={group.image} alt={group.imageAlt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );

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
              {treatment.taglineInHeading && treatment.tagline ? (
                treatment.taglineHeadingAccent && treatment.tagline.endsWith(treatment.taglineHeadingAccent) ? (
                  <>
                    {" " + treatment.tagline.slice(0, treatment.tagline.length - treatment.taglineHeadingAccent.length)}
                    <span className="text-black">{treatment.taglineHeadingAccent}</span>
                  </>
                ) : (
                  ` ${treatment.tagline}`
                )
              ) : (
                ""
              )}
            </h1>
            {treatment.tagline && !treatment.taglineInHeading && (
              <p className="max-w-[560px] font-serif text-[20px] leading-[30px] text-white/70 italic">
                {treatment.tagline}
              </p>
            )}
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
              {!treatment.introInBody && (
                <p className="text-[18px] leading-[30px] tracking-[-0.3px] text-forest font-medium">
                  {treatment.intro}
                </p>
              )}

              {/* Explainer video(s) — side by side when both are present */}
              {(treatment.videoId || treatment.videoId2) && (
                <div
                  className={
                    treatment.videoId && treatment.videoId2 ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : undefined
                  }
                >
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
                  {treatment.videoId2 && (
                    <div className="relative w-full overflow-hidden rounded-[12px]" style={{ aspectRatio: "16/9" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${treatment.videoId2}`}
                        title={`${treatment.title} — explainer video 2`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
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

              {/* Body paragraphs (image, when present, floats alongside the text) */}
              {!treatment.introRows && (treatment.bodyImages && treatment.bodyImages.length > 0 && treatment.bodyImagesLayout === "float" ? (
                <div className="flow-root">
                  <div
                    className={`relative mb-4 w-[220px] overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:w-[var(--fw,340px)] ${
                      treatment.bodyImages[0].float === "left" ? "float-left mr-8" : "float-right ml-8"
                    }`}
                    style={{ aspectRatio: treatment.bodyImages[0].aspect ?? "883/1214", ...(treatment.bodyImages[0].width ? ({ "--fw": `${treatment.bodyImages[0].width}px` } as React.CSSProperties) : {}) }}
                  >
                    <Image
                      src={treatment.bodyImages[0].src}
                      alt={treatment.bodyImages[0].alt}
                      fill
                      className="object-cover"
                      style={treatment.bodyImages[0].position ? { objectPosition: treatment.bodyImages[0].position } : undefined}
                    />
                  </div>
                  {treatment.introInBody && (
                    <p className="mb-5 text-[18px] leading-[30px] tracking-[-0.3px] text-forest font-medium">
                      {treatment.intro}
                    </p>
                  )}
                  {treatment.body.map((para, j) => (
                    <p key={j} className="mb-5 text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                      {para}
                    </p>
                  ))}
                  {!treatment.treatmentAreas && !treatment.suitableImage && (
                    <div className="mt-2 flex flex-col gap-4">
                      <h2 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                        Suitable For
                      </h2>
                      <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                        {treatment.suitableFor.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                            <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {treatment.treatmentAreasInline && (
                    <div className={`mt-2 clear-both ${treatment.treatmentAreasInlineImage ? "lg:grid lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-10" : ""}`}>
                      <div className="flex flex-col gap-4 lg:order-2 lg:self-center">
                        <div className="flex flex-col gap-4 rounded-[14px] border border-tan/25 bg-cream/40 p-6">
                          <h2 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                            What Areas Can Be Treated?
                          </h2>
                          <div className="flex flex-wrap gap-3">
                            {treatment.treatmentAreas!.map((area) => (
                              <span
                                key={area}
                                className="inline-flex items-center gap-2 rounded-full border border-tan/40 bg-white px-4 py-2 text-[14px] leading-[18px] text-body-text whitespace-nowrap"
                              >
                                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-[14px] border border-tan/50 bg-tan/20 p-6">
                          <h2 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                            Who Is It For?
                          </h2>
                          <div className="flex flex-col gap-4">
                            {treatment.suitableFor.map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-forest" />
                                <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {treatment.treatmentAreasInlineImage && (
                        <div className="relative mt-8 aspect-square w-full overflow-hidden rounded-[14px] border border-black/8 shadow-md lg:order-1 lg:mt-0">
                          <Image
                            src={treatment.treatmentAreasInlineImage.src}
                            alt={treatment.treatmentAreasInlineImage.alt}
                            fill
                            sizes="(min-width: 1024px) 65vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {treatment.extendedGuide && (
                    <div className="mt-10 flex flex-col gap-10 clear-both">
                      <div className="flex flex-col gap-3">
                        <h2 className="font-subheading text-[24px] font-bold leading-[30px] tracking-[-0.8px] text-forest uppercase">
                          {treatment.extendedGuide.heading}
                        </h2>
                        <p className="text-[15px] leading-[24px] text-body-text/80 italic">
                          {treatment.extendedGuide.subheading}
                        </p>
                        <p className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                          {treatment.extendedGuide.intro}
                        </p>
                      </div>

                      <div
                        className={`flex flex-col gap-4 ${
                          treatment.extendedGuide.bestForImage ? "lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-stretch lg:gap-10" : ""
                        }`}
                      >
                        <div className="flex flex-col gap-4">
                          <h3 className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase">
                            {treatment.extendedGuide.bestForHeading}
                          </h3>
                          <p className="text-[15px] leading-[24px] text-body-text">{treatment.extendedGuide.bestForIntro}</p>
                          <ul className="flex flex-col gap-4">
                            {treatment.extendedGuide.bestForItems.map((item) => (
                              <li key={item.title} className="flex items-start gap-3">
                                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                                <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">
                                  <strong className="font-semibold text-forest">{item.title}:</strong> {item.description}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {treatment.extendedGuide.bestForImage && (
                          <div className="relative mt-2 min-h-[280px] w-full overflow-hidden rounded-[14px] border border-black/8 shadow-md lg:mt-0 lg:h-full">
                            <Image
                              src={treatment.extendedGuide.bestForImage.src}
                              alt={treatment.extendedGuide.bestForImage.alt}
                              fill
                              sizes="(min-width: 1024px) 45vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-4">
                        <h3 className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase">
                          {treatment.extendedGuide.notRightHeading}
                        </h3>
                        <p className="text-[15px] leading-[24px] text-body-text">{treatment.extendedGuide.notRightIntro}</p>
                        <div className="flex flex-col gap-5">
                          {treatment.extendedGuide.notRightItems.map((item, i) => (
                            <div key={item.title} className="flex flex-col gap-1.5">
                              <h4 className="text-[16px] font-semibold leading-[22px] text-forest">
                                {i + 1}. {item.title}
                              </h4>
                              <p className="text-[15px] leading-[24px] text-body-text">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase">
                          {treatment.extendedGuide.resultsHeading}
                        </h3>
                        <p className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                          {treatment.extendedGuide.resultsBody}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 rounded-[14px] border border-tan/25 bg-cream/50 p-6">
                        <h3 className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase">
                          {treatment.extendedGuide.ctaHeading}
                        </h3>
                        <p className="text-[15px] leading-[24px] text-body-text">{treatment.extendedGuide.ctaBody}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : treatment.bodyImages && treatment.bodyImages.length > 0 && treatment.bodyImagesLayout === "stacked" ? (
                <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-10">
                  <div className="flex-1">
                    {(() => {
                      const floated = treatment.bodyImages!.find((im) => im.float === "left");
                      const floatAt = treatment.treatmentAreas ? Math.min(1, treatment.body.length - 1) : -1;
                      return treatment.body.map((para, j) => (
                        <Fragment key={j}>
                          {floated && j === floatAt && (
                            <div className="relative float-left mb-4 mr-6 aspect-[4/5] w-[180px] overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:w-[210px]">
                              <Image src={floated.src} alt={floated.alt} fill className="object-cover" style={floated.position ? { objectPosition: floated.position } : undefined} />
                            </div>
                          )}
                          <p className="mb-5 text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">{para}</p>
                        </Fragment>
                      ));
                    })()}
                    {!treatment.treatmentAreas && !treatment.benefitsInline && (
                      <div className="mt-2 clear-both flow-root">
                        {(() => {
                          const floated = treatment.bodyImages!.find((im) => im.float === "left");
                          return floated ? (
                            <div className="relative float-left mb-2 mr-8 aspect-[4/5] w-[180px] overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:w-[220px]">
                              <Image src={floated.src} alt={floated.alt} fill className="object-cover" style={floated.position ? { objectPosition: floated.position } : undefined} />
                            </div>
                          ) : null;
                        })()}
                        <h2 className="mb-4 font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                          Suitable For
                        </h2>
                        <ul className="flex flex-col gap-3">
                          {treatment.suitableFor.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                              <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex w-full flex-col gap-4 sm:w-[300px] sm:shrink-0">
                    {treatment.bodyImages.filter((im) => im.float !== "left").map((img) => (
                      <div
                        key={img.src}
                        className={`relative aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:aspect-auto sm:h-auto sm:min-h-[324px] sm:flex-1 ${treatment.bodyImages!.length > 1 ? "sm:max-h-[440px]" : ""}`}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-cover" style={img.position ? { objectPosition: img.position } : undefined} />
                      </div>
                    ))}
                  </div>
                </div>
        {!treatment.treatmentAreas && treatment.benefitsInline && treatment.bodyImages!.some((im) => im.float === "left") && (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
            {(() => {
              const floated = treatment.bodyImages!.find((im) => im.float === "left")!;
              return (
                <div className="relative aspect-[4/5] w-full max-w-[280px] shrink-0 overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:aspect-auto sm:w-[200px]">
                  <Image src={floated.src} alt={floated.alt} fill className="object-cover" style={floated.position ? { objectPosition: floated.position } : undefined} />
                </div>
              );
            })()}
            <div className="flex flex-1 flex-col gap-4">
              <div className="rounded-[14px] border border-tan/30 bg-cream p-6">
                <h2 className="mb-4 font-subheading text-[18px] font-semibold leading-[24px] tracking-[-0.5px] text-forest uppercase">
                  Suitable For
                </h2>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                  {treatment.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[15px] leading-[24px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] bg-[linear-gradient(135deg,#b8925a_0%,#d1ae83_50%,#b8925a_100%)] p-6 shadow-md">
                <h2 className="mb-4 font-subheading text-[18px] font-semibold leading-[24px] tracking-[2px] text-forest uppercase">
                  Key Benefits
                </h2>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                  {treatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-forest" />
                      <span className="text-[15px] font-medium leading-[24px] text-forest">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
                </div>
              ) : treatment.bodyImages && treatment.bodyImages.length > 0 ? (
                <div className="flex flex-col gap-10">
                  {(() => {
                    const imgs = treatment.bodyImages!;
                    const rows: { src: string; alt: string; position?: string }[][] = [];
                    const rowKeys: number[] = [];
                    imgs.forEach((img, i) => {
                      const key = img.row ?? i;
                      const at = rowKeys.indexOf(key);
                      if (at === -1) {
                        rowKeys.push(key);
                        rows.push([img]);
                      } else {
                        rows[at].push(img);
                      }
                    });
                    const size = Math.ceil(treatment.body.length / rows.length);
                    const renderImage = (img: { src: string; alt: string; position?: string }, narrow: boolean) => (
                      <div
                        key={img.src}
                        className={`relative aspect-[4/5] w-full max-w-[280px] shrink-0 overflow-hidden rounded-[14px] border border-black/8 shadow-md sm:aspect-auto sm:min-h-[200px] ${narrow ? "sm:w-[190px]" : "sm:w-[260px]"}`}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-cover" style={img.position ? { objectPosition: img.position } : undefined} />
                      </div>
                    );
                    return rows.map((row, i) => {
                      const paras = treatment.body.slice(i * size, (i + 1) * size);
                      const isLast = i === rows.length - 1;
                      const showSuitable = isLast && !treatment.treatmentAreas;
                      if (paras.length === 0 && !showSuitable) return null;
                      const narrow = row.length > 1;
                      return (
                        <div
                          key={row[0].src}
                          className={`flex flex-col items-start gap-6 sm:flex-row sm:items-stretch sm:gap-8 ${!narrow && i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
                        >
                          {renderImage(row[0], narrow)}
                          <div className="flex flex-1 flex-col gap-5">
                            {paras.map((para, j) => (
                              <p key={j} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                                {para}
                              </p>
                            ))}
                            {showSuitable && (
                              <div className={`flex flex-col gap-4 ${paras.length ? "mt-2" : ""}`}>
                                <h2 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
                                  Suitable For
                                </h2>
                                <ul className="flex flex-col gap-3">
                                  {treatment.suitableFor.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                                      <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          {row[1] && renderImage(row[1], true)}
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                <div className="flow-root">
                  {treatment.introImageLeft && (
                    <div
                      className={`relative float-left mr-6 mb-4 overflow-hidden rounded-[12px] border border-black/8 ${
                        treatment.introImage ? "mt-16 sm:mt-24" : ""
                      } ${
                        treatment.introImageSize
                          ? "h-[var(--mh)] w-[160px] sm:h-[var(--ih)] sm:w-[var(--iw)]"
                          : "h-[260px] w-[190px] bg-cream sm:h-[300px] sm:w-[220px]"
                      }`}
                      style={
                        treatment.introImageSize
                          ? ({
                              "--iw": `${treatment.introImageSize.width}px`,
                              "--ih": `${treatment.introImageSize.height}px`,
                              "--mh": `${Math.round((160 * treatment.introImageSize.height) / treatment.introImageSize.width)}px`,
                            } as React.CSSProperties)
                          : undefined
                      }
                    >
                      <Image
                        src={treatment.introImageLeft.src}
                        alt={treatment.introImageLeft.alt}
                        fill
                        className={treatment.introImageSize ? "object-cover" : "object-contain p-4"}
                      />
                    </div>
                  )}
                  {treatment.introImage && (
                    <div
                      className={`relative float-right ml-6 mb-4 overflow-hidden rounded-[12px] border border-black/8 ${
                        treatment.introImageSize
                          ? "h-[var(--mh)] w-[160px] sm:h-[var(--ih)] sm:w-[var(--iw)]"
                          : "h-[260px] w-[190px] bg-cream sm:h-[300px] sm:w-[220px]"
                      }`}
                      style={
                        treatment.introImageSize
                          ? ({
                              "--iw": `${treatment.introImageSize.width}px`,
                              "--ih": `${treatment.introImageSize.height}px`,
                              "--mh": `${Math.round((160 * treatment.introImageSize.height) / treatment.introImageSize.width)}px`,
                            } as React.CSSProperties)
                          : undefined
                      }
                    >
                      <Image
                        src={treatment.introImage.src}
                        alt={treatment.introImage.alt}
                        fill
                        className={treatment.introImageSize ? "object-cover" : "object-contain p-4"}
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-5">
                    {treatment.introInBody && (
                      <p className="text-[18px] leading-[30px] tracking-[-0.3px] text-forest font-medium">
                        {treatment.intro}
                      </p>
                    )}
                    {treatment.body.map((para, i) => (
                      <p key={i} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {treatment.introRows && treatment.introRows.length > 0 && treatment.introRowsShowLegacyBody && (
                <div className="flex flex-col gap-5">
                  {treatment.body.map((para, i) => (
                    <p key={i} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {treatment.introRows && treatment.introRows.length > 0 && (
                <div className="flex flex-col gap-12">
                  {treatment.introRows.map((row, i) => {
                    const content = (
                      <>
                        {row.heading &&
                          (i === 0 ? (
                            <div className="flex flex-col gap-2">
                              <span className="h-[3px] w-12 rounded-full bg-tan" />
                              <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-0.5px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                                {row.heading}
                              </h2>
                            </div>
                          ) : (
                            <h3 className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase">
                              {row.heading}
                            </h3>
                          ))}
                        {row.subheading && (
                          <p className="text-[15px] leading-[24px] text-body-text/80 italic">{row.subheading}</p>
                        )}
                        {(row.body ?? row.text)?.map((para, j) => (
                          <p key={j} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                            {renderBold(para)}
                          </p>
                        ))}
                        {row.items && row.itemsLayout === "boxes" && (
                          <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${row.image ? "lg:flex-1 lg:auto-rows-fr" : ""}`}>
                            {row.items.map((item, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-3 rounded-[10px] border border-tan/25 bg-cream px-4 py-3"
                              >
                                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-tan" />
                                <span className="text-[14px] font-medium leading-[20px] text-forest">
                                  {typeof item === "string" ? (
                                    item
                                  ) : (
                                    <>
                                      <strong className="font-semibold">{item.title}:</strong> {item.description}
                                    </>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {row.items && row.itemsLayout !== "boxes" && (
                          <ul className={row.itemsColumns === 2 ? "grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2" : "flex flex-col gap-3"}>
                            {row.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                                <span className="text-[16px] leading-[26px] tracking-[-0.2px] text-body-text">
                                  {typeof item === "string" ? (
                                    item
                                  ) : (
                                    <>
                                      <strong className="font-semibold text-forest">{item.title}:</strong> {item.description}
                                    </>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {row.outro &&
                          (Array.isArray(row.outro) ? row.outro : [row.outro]).map((para, j) => (
                            <p key={j} className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                              {para}
                            </p>
                          ))}
                        {row.link && (
                          <a
                            href={row.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-nav text-[15px] font-semibold text-tan underline decoration-tan/40 underline-offset-4 transition-colors hover:text-forest"
                          >
                            {row.link.text}
                          </a>
                        )}
                      </>
                    );

                    if (row.fullImage) {
                      return (
                        <div
                          key={i}
                          className="relative w-full overflow-hidden rounded-[14px] border border-black/8 shadow-md"
                          style={{
                            aspectRatio: row.fullImage.aspectRatio,
                            maxWidth: row.fullImage.maxWidth ? `${row.fullImage.maxWidth}px` : undefined,
                          }}
                        >
                          <Image
                            src={row.fullImage.src}
                            alt={row.fullImage.alt}
                            fill
                            sizes={row.fullImage.maxWidth ? `${row.fullImage.maxWidth}px` : "100vw"}
                            className="object-cover"
                          />
                        </div>
                      );
                    }

                    if (!row.image && !row.video) {
                      return (
                        <div key={i} className="flex flex-col gap-4">
                          {content}
                        </div>
                      );
                    }

                    return (
                      <div key={i} className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-12">
                        {row.video ? (
                          <div
                            className={`relative w-full overflow-hidden rounded-[14px] border border-black/8 bg-black shadow-md lg:self-center ${row.imageMaxWidth ? "mx-auto" : ""} ${row.imageSide === "left" ? "lg:order-1" : "lg:order-2"}`}
                            style={{
                              aspectRatio: row.imageAspect ?? "16/9",
                              maxWidth: row.imageMaxWidth ? `${row.imageMaxWidth}px` : undefined,
                            }}
                          >
                            {row.video.src ? (
                              <video
                                src={row.video.src}
                                controls
                                playsInline
                                preload="metadata"
                                title={row.video.title}
                                className="absolute inset-0 h-full w-full object-contain"
                              />
                            ) : (
                              <iframe
                                src={`https://www.youtube.com/embed/${row.video.id}`}
                                title={row.video.title}
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            )}
                          </div>
                        ) : (
                          <div
                            className={`relative w-full overflow-hidden rounded-[14px] border border-black/8 shadow-md ${
                              row.imageContain ? "bg-black " : ""
                            }${
                              row.imageAspect
                                ? `lg:self-center ${row.imageMaxWidth ? "mx-auto" : ""}`
                                : row.imageMaxWidth
                                  ? "mx-auto aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[300px]"
                                  : "aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[300px]"
                            } ${row.imageSide === "left" ? "lg:order-1" : "lg:order-2"}`}
                            style={{
                              aspectRatio: row.imageAspect ?? undefined,
                              maxWidth: row.imageMaxWidth ? `${row.imageMaxWidth}px` : undefined,
                            }}
                          >
                            <Image
                              src={row.image!.src}
                              alt={row.image!.alt}
                              fill
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className={row.imageContain ? "object-contain" : "object-cover"}
                            />
                          </div>
                        )}
                        <div className={`flex flex-col justify-center gap-4 ${row.imageSide === "left" ? "lg:order-2" : "lg:order-1"}`}>
                          {content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Suitable for (shown here only when there's no dedicated treatment-areas list) */}
              {!treatment.treatmentAreas && !treatment.bodyImages && (
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
              )}
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
              {!treatment.bookCTAHorizontal && (
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
              )}

              {/* Sidebar image */}
              {treatment.sidebarImage && (
                <a
                  href={treatment.sidebarImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-[12px] border border-black/8 shadow-md"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image src={treatment.sidebarImage.src} alt={treatment.sidebarImage.alt} fill sizes="340px" className="object-cover" />
                </a>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Picture + Suitable For + Key Benefits — three equal boxes across the full page */}
      {treatment.suitableImage && !treatment.treatmentAreas && (
        <section className="w-full px-5">
          <div className="mx-auto max-w-[1400px] pb-[70px] lg:pb-[90px]">
            <div className={`grid grid-cols-1 gap-6 md:items-stretch ${treatment.benefitsInline ? "md:grid-cols-3" : "md:grid-cols-[2fr_1fr]"}`}>
              <div
                className="relative w-full overflow-hidden rounded-[16px] border border-tan/30 bg-cream shadow-md"
                style={{ aspectRatio: `${treatment.suitableImage.width} / ${treatment.suitableImage.height}` }}
              >
                <Image src={treatment.suitableImage.src} alt={treatment.suitableImage.alt} fill sizes={treatment.benefitsInline ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 1000px, 100vw"} quality={90} className="object-cover" />
              </div>
              <div className="flex min-w-0 flex-col justify-center rounded-[16px] border border-tan/30 bg-cream p-8 lg:p-10">
                <h2 className="mb-7 font-subheading text-[26px] font-semibold leading-[32px] tracking-[-0.8px] text-forest uppercase">
                  Suitable For
                </h2>
                <ul className="flex flex-col gap-6">
                  {treatment.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[11px] h-[8px] w-[8px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[18px] leading-[28px] tracking-[-0.2px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {treatment.benefitsInline && (
                <div className="flex min-w-0 flex-col justify-center rounded-[16px] bg-[linear-gradient(135deg,#b8925a_0%,#d1ae83_50%,#b8925a_100%)] p-8 shadow-md lg:p-10">
                  <h2 className="mb-7 font-subheading text-[26px] font-semibold leading-[32px] tracking-[2px] text-forest uppercase">
                    Key Benefits
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {treatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-[10px] h-[7px] w-[7px] shrink-0 rounded-full bg-forest" />
                        <span className="text-[16px] font-medium leading-[24px] text-forest">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Book a Consultation — horizontal banner (replaces the sidebar CTA on this page) */}
      {treatment.bookCTAHorizontal && (
        <section className="w-full px-5">
          <div className="mx-auto max-w-[1400px] pb-[70px] lg:pb-[90px]">
            <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] p-8 shadow-lg lg:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-[260px] w-[260px] rounded-full bg-white/10 blur-[60px]" />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-2">
                  <span className="h-[3px] w-12 rounded-full bg-cream" />
                  <h2 className="font-subheading text-[24px] font-semibold tracking-[2px] text-cream uppercase lg:text-[28px]">
                    Book a Consultation
                  </h2>
                  <p className="max-w-[480px] text-[15px] leading-[24px] text-white/70">
                    Begin with a personal consultation with Sofia to discuss your goals and confirm suitability.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a
                    href="tel:02072253582"
                    className="flex h-12 items-center justify-center rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
                  >
                    Call 0207 225 3582
                  </a>
                  <a
                    href="/contact-us"
                    className="flex h-12 items-center justify-center rounded-[8px] border border-white/20 px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan/60"
                  >
                    Send an Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison table */}
      {treatment.comparisonTable && (
        <section className="w-full border-t border-black/8 bg-cream px-5">
          <div className="mx-auto max-w-[1100px] py-[80px] lg:py-[100px]">
            {treatment.comparisonTable.intro && (
              <div className="mb-8 rounded-[14px] bg-black p-6 shadow-md lg:p-8">
                <p className="text-center font-subheading text-[22px] font-bold leading-[30px] tracking-[-0.5px] text-tan lg:text-[26px] lg:leading-[34px]">
                  {treatment.comparisonTable.intro}
                </p>
              </div>
            )}
            {treatment.comparisonTable.image ? (
              <div
                className="relative w-full overflow-hidden rounded-[12px] shadow-sm"
                style={{ aspectRatio: treatment.comparisonTable.imageAspect ?? "1727/910" }}
              >
                <Image
                  src={treatment.comparisonTable.image.src}
                  alt={treatment.comparisonTable.image.alt}
                  fill
                  sizes="(min-width: 1100px) 1100px, 100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>
      )}

      {treatment.processDiagramsBeforeBenefits && processDiagramsSection}

      {/* Key benefits banner — mid-page gold box */}
      {treatment.benefits.length > 0 && !treatment.benefitsInline && (
        <section className="w-full px-5">
          <div className="mx-auto max-w-[1400px] pb-[70px] lg:pb-[90px]">
            <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#b8925a_0%,#d1ae83_50%,#b8925a_100%)] p-8 shadow-lg lg:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-[260px] w-[260px] rounded-full bg-white/25 blur-[60px]" />
              <div className="relative flex flex-col gap-2">
                <span className="h-[3px] w-12 rounded-full bg-forest" />
                <h2 className="font-subheading text-[24px] font-semibold tracking-[2px] text-forest uppercase lg:text-[28px]">
                  Key Benefits
                </h2>
              </div>
              <ul className="relative mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-forest" />
                    <span className="text-[15px] font-medium leading-[24px] text-forest">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {treatment.processDiagramsAfterBenefits && processDiagramsSection}

      {treatment.premiumFeaturesAfterBenefits && premiumFeaturesSection}

      {/* Related links — supporting technology / explainer pages */}
      {treatment.relatedLinks && treatment.relatedLinks.length > 0 && (
        <section className="w-full border-t border-black/8 bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[44px] lg:py-[56px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-nav text-[12px] font-semibold tracking-[2px] text-tan uppercase">Discover more</span>
              <span className="h-px max-w-[80px] flex-1 bg-tan/40" />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {treatment.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-[88px] items-center justify-between gap-5 rounded-[16px] border border-[#a37f4a]/40 bg-[linear-gradient(135deg,#b8925a_0%,#d9b98c_50%,#b8925a_100%)] px-7 py-5 shadow-[0_10px_28px_-10px_rgba(120,90,40,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-10px_rgba(120,90,40,0.7)]"
                >
                  <span className="flex flex-col">
                    <span className="font-nav text-[12px] font-semibold tracking-[1.5px] text-forest/70 uppercase">Click here for</span>
                    <span className="mt-1 font-subheading text-[19px] font-semibold leading-[25px] text-forest lg:text-[22px] lg:leading-[28px]">
                      {link.label}
                    </span>
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition-transform duration-300 group-hover:translate-x-1">
                    <AreaIcon name="arrow" className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment areas + Who is it for — icon card variant */}
      {treatment.treatmentAreas && treatment.treatmentAreas.length > 0 && treatment.treatmentAreaIcons && !treatment.treatmentAreasInline && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
          <div className="pointer-events-none absolute -right-[6%] -top-[20%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
          <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Treatment areas */}
              {!treatment.hideTreatmentAreasCard && (
              <div className="rounded-[24px] border border-tan/25 bg-white/60 p-8 shadow-lg backdrop-blur-sm lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">Treatment Areas</span>
                  <span className="h-px flex-1 max-w-[60px] bg-tan/40" />
                </div>
                <h2 className="mt-3 font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                  What Areas Can Be Treated?
                </h2>
                <p className="mt-3 text-[14px] leading-[22px] text-body-text">
                  {treatment.title} can be used on various areas of the face and body to rejuvenate the skin, improve texture and stimulate natural healing.
                </p>
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {treatment.treatmentAreas.map((area, i) => {
                    const color = iconPaletteColor(i);
                    return (
                      <div key={area} className="flex items-center gap-3 rounded-[10px] bg-white/70 px-4 py-3">
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                          <AreaIcon name={treatment.treatmentAreaIcons![area] ?? "sparkle"} className="h-4.5 w-4.5" />
                        </span>
                        <span className="flex-1 text-[13px] leading-[18px] text-body-text">{area}</span>
                        <AreaIcon name="arrow" className="h-4 w-4 shrink-0 text-tan/50" />
                      </div>
                    );
                  })}
                </div>
              </div>
              )}

              {/* Who is it for */}
              <div className="flex flex-col gap-6 rounded-[24px] border border-tan/25 bg-white/60 p-8 shadow-lg backdrop-blur-sm lg:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">Ideal Candidates</span>
                    <span className="h-px flex-1 max-w-[60px] bg-tan/40" />
                  </div>
                  <h2 className="mt-3 font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                    Who Is It For?
                  </h2>
                  <p className="mt-3 text-[13px] tracking-[0.5px] text-body-text/60 uppercase">
                    {treatment.title} is ideal for:
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {treatment.suitableFor.map((item, i) => {
                    const color = iconPaletteColor(i + 2);
                    return (
                      <div key={item} className="flex items-start gap-4 rounded-[12px] bg-white/70 p-4">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                          <AreaIcon name="sparkle" className="h-5 w-5" />
                        </span>
                        <span className="mt-2 text-[14px] leading-[21px] text-body-text">{item}</span>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/contact-us"
                  className="inline-flex h-12 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest uppercase transition-opacity hover:opacity-90"
                >
                  Book a Consultation Now
                  <AreaIcon name="arrow" className="h-4 w-4" />
                </Link>
                {treatment.trustBadges && treatment.trustBadges.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-6 border-t border-tan/20 pt-5">
                    {treatment.trustBadges.map((badge, i) => {
                      const color = iconPaletteColor(i + 4);
                      return (
                      <div key={badge.label} className="flex items-center gap-2">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                          <AreaIcon name={badge.icon} className="h-4 w-4" />
                        </span>
                        <span className="font-nav text-[11px] font-semibold leading-[14px] tracking-[0.5px] text-forest uppercase">
                          {badge.label}
                        </span>
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Advantages / journey — boxed card on the right */}
              {treatment.advantagesInAreasSection && treatment.advantages && (
                <div className="flex flex-col gap-6 rounded-[24px] border border-tan/25 bg-white/60 p-8 shadow-lg backdrop-blur-sm lg:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">Our Approach</span>
                      <span className="h-px flex-1 max-w-[60px] bg-tan/40" />
                    </div>
                    <h2 className="mt-3 font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                      {treatment.advantages.title}
                    </h2>
                    {treatment.advantages.intro && (
                      <p className="mt-3 text-[14px] leading-[22px] text-body-text">{treatment.advantages.intro}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    {treatment.advantages.items.map((item, i) => {
                      const color = iconPaletteColor(i);
                      return (
                        <div key={item.title} className="flex items-start gap-4 rounded-[12px] bg-white/70 p-4">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                            <AreaIcon name="sparkle" className="h-5 w-5" />
                          </span>
                          <div className="flex flex-col gap-1">
                            <h3 className="font-subheading text-[14px] font-semibold leading-[20px] text-forest">{item.title}</h3>
                            <p className="text-[13px] leading-[20px] text-body-text">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Treatment areas + Who is it for — hero card layout (with photo + floating cards) */}
      {treatment.treatmentAreas && treatment.treatmentAreas.length > 0 && !treatment.treatmentAreaIcons && treatment.treatmentAreasImage && treatment.treatmentAreasHeading && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#f8f2e8_0%,#ecdcc3_100%)] px-5">
          <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.45fr] lg:items-stretch">
              <div className="relative min-h-[320px] w-full overflow-hidden rounded-[20px] shadow-lg">
                <Image
                  src={treatment.treatmentAreasImage.src}
                  alt={treatment.treatmentAreasImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                      {treatment.title}
                    </span>
                    <span className="h-px w-full max-w-[100px] bg-tan/40" />
                  </div>
                  <h2 className="font-display text-[32px] font-bold leading-[38px] tracking-[-1px] text-forest uppercase lg:text-[42px] lg:leading-[46px]">
                    {treatment.treatmentAreasHeading.main}{" "}
                    <span className="text-tan">{treatment.treatmentAreasHeading.accent}</span>
                  </h2>
                  <p className="text-[15px] leading-[24px] text-body-text">
                    {treatment.treatmentAreasHeading.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Treatment areas card */}
                  <div className="flex flex-col gap-4 rounded-[16px] border border-tan/25 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">
                        Treatment Areas
                      </span>
                      <span className="h-px flex-1 bg-tan/30" />
                    </div>
                    <h3 className="font-subheading text-[19px] font-semibold leading-[24px] text-forest">
                      Where {treatment.title} Can Be Used
                    </h3>
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                      {treatment.treatmentAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                            </svg>
                          </span>
                          <span className="text-[14px] leading-[20px] text-body-text">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who is it for card */}
                  <div className="flex flex-col gap-4 rounded-[16px] border border-tan/25 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">
                        Is {treatment.title} Right For You?
                      </span>
                      <span className="h-px flex-1 bg-tan/30" />
                    </div>
                    <h3 className="font-subheading text-[19px] font-semibold leading-[24px] text-forest">
                      Who Is It For?
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {treatment.suitableFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                            </svg>
                          </span>
                          <span className="text-[14px] leading-[20px] text-body-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact-us"
                      className="mt-1 flex h-11 w-full items-center justify-center rounded-[8px] bg-tan px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest uppercase transition-opacity hover:opacity-90"
                    >
                      Book a Consultation Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fallback plain layout for treatments with areas but no hero image/heading/icons */}
      {treatment.treatmentAreas && treatment.treatmentAreas.length > 0 && !treatment.treatmentAreaIcons && !(treatment.treatmentAreasImage && treatment.treatmentAreasHeading) && (
        <section className="w-full border-t border-black/8 px-5">
          <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-forest lg:text-[30px] lg:leading-[36px]">
                  What Areas Can Be Treated?
                </h2>
                <ul className="flex flex-col gap-3">
                  {treatment.treatmentAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                        </svg>
                      </span>
                      <span className="text-[16px] leading-[24px] text-body-text">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-forest lg:text-[30px] lg:leading-[36px]">
                  Who Is It For?
                </h2>
                <p className="text-[14px] tracking-[1px] text-body-text/60 uppercase">
                  {treatment.title} is ideal for:
                </p>
                <ul className="flex flex-col gap-3">
                  {treatment.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                        </svg>
                      </span>
                      <span className="text-[16px] leading-[24px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact-us"
                  className="mt-2 flex h-12 w-fit items-center justify-center rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
                >
                  Book Consultation Now
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contraindications — who should NOT have this treatment */}
      {treatment.contraindications && treatment.contraindications.items.length > 0 && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
          <div className="pointer-events-none absolute -right-[6%] -top-[20%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
          <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div
              className={`grid grid-cols-1 items-start gap-10 ${
                treatment.contraindications.imageMaxWidth
                  ? "lg:grid-cols-[minmax(0,1fr)_var(--ci-w)]"
                  : "lg:grid-cols-[0.85fr_1.4fr]"
              }`}
              style={
                treatment.contraindications.imageMaxWidth
                  ? ({ "--ci-w": `${treatment.contraindications.imageMaxWidth}px` } as React.CSSProperties)
                  : undefined
              }
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">Important Information</span>
                  <span className="h-px flex-1 max-w-[60px] bg-tan/40" />
                </div>
                <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-1px] text-forest lg:text-[34px] lg:leading-[40px]">
                  {(() => {
                    const parts = treatment.contraindications!.title.split(" Have ");
                    if (parts.length < 2) return treatment.contraindications!.title;
                    return (
                      <>
                        {parts[0]} <span className="text-tan">Have {parts.slice(1).join(" Have ")}</span>
                      </>
                    );
                  })()}
                </h2>
                <p className="text-[15px] leading-[24px] text-body-text">
                  This treatment may not be suitable for everyone. It is not recommended for individuals with the following conditions, to ensure your safety and the best possible results.
                </p>
                {treatment.contraindications.imageMaxWidth && contraChips}
                <div className="mt-2 flex flex-col gap-3 rounded-[16px] border border-tan/25 bg-white/70 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                    <AreaIcon name="alert" className="h-5 w-5" />
                  </span>
                  <h3 className="font-subheading text-[16px] font-semibold text-forest">Not sure if you&apos;re suitable?</h3>
                  <p className="text-[13px] leading-[20px] text-body-text">
                    Book a consultation with our specialist to discuss your medical history and find out if this treatment is right for you.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-[8px] bg-tan px-5 font-nav text-[13px] font-semibold tracking-[0.3px] text-forest uppercase transition-opacity hover:opacity-90"
                  >
                    Book a Consultation
                    <AreaIcon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {treatment.contraindications.image && (
                  <div
                    className="relative w-full overflow-hidden rounded-[16px] border border-tan/20 bg-white shadow-sm"
                    style={{ aspectRatio: treatment.contraindications.imageAspect ?? "16/9" }}
                  >
                    <Image
                      src={treatment.contraindications.image.src}
                      alt={treatment.contraindications.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {!treatment.contraindications.imageMaxWidth && contraChips}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image / text split sections */}
      {treatment.imageTextSections && treatment.imageTextSections.length > 0 && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-16 py-[80px] lg:gap-20 lg:py-[100px]">
            {treatment.imageTextSections.map((item) => (
              <div
                key={item.heading}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
                  item.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full overflow-hidden rounded-[12px] shadow-sm lg:w-1/2" style={{ aspectRatio: "4/3" }}>
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="flex w-full flex-col gap-4 lg:w-1/2">
                  <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                    {item.heading}
                  </h2>
                  {item.body.map((paragraph, i) => (
                    <p key={i} className="text-[15px] leading-[24px] text-body-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {treatment.processDiagramsFirst && !treatment.processDiagramsAfterBenefits && !treatment.processDiagramsBeforeBenefits && processDiagramsSection}

      {/* Care instructions — prominent before/aftercare */}
      {treatment.careInstructions && (
        <section
          className={`relative w-full overflow-hidden px-5 ${
            treatment.careInstructionsCompact
              ? "bg-[linear-gradient(135deg,#b8925a_0%,#d1ae83_50%,#b8925a_100%)]"
              : "bg-[#061a10]"
          }`}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
          {treatment.careInstructionsCompact && (
            <>
              <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full bg-white/25 blur-[70px]" />
              <div className="pointer-events-none absolute -left-16 bottom-0 h-[320px] w-[320px] rounded-full bg-white/20 blur-[80px]" />
            </>
          )}
          <div className="relative mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className={`w-fit rounded-full border-[0.8px] px-4 py-2 ${
                  treatment.careInstructionsCompact ? "border-forest/40" : "border-tan/40"
                }`}
              >
                <p
                  className={`font-nav text-[12px] font-semibold tracking-[3px] uppercase ${
                    treatment.careInstructionsCompact ? "text-forest" : "text-tan"
                  }`}
                >
                  Important
                </p>
              </div>
              <h2
                className={`font-display text-[28px] font-bold leading-[34px] tracking-[-1px] uppercase lg:text-[38px] lg:leading-[44px] ${
                  treatment.careInstructionsCompact ? "text-forest" : "text-cream"
                }`}
              >
                {treatment.careInstructions.title}
              </h2>
              {treatment.careInstructions.intro && (
                <p
                  className={`max-w-[720px] text-[15px] leading-[24px] ${
                    treatment.careInstructionsCompact ? "font-medium text-forest/85" : "text-white/70"
                  }`}
                >
                  {treatment.careInstructions.intro}
                </p>
              )}
            </div>

            {treatment.careInstructionsCompact ? (
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {treatment.careInstructions.groups.map((group, gi) => (
                  <div key={group.heading} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-[3px] w-8 shrink-0 rounded-full bg-forest" />
                      <h3 className="font-subheading text-[14px] font-semibold tracking-[1.5px] text-forest uppercase">
                        {group.heading}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {group.points.map((point, pi) => {
                        const color = group.warning
                          ? { bg: "bg-rust", text: "text-white" }
                          : VIVID_ICON_PALETTE[(gi * 3 + pi + 1) % VIVID_ICON_PALETTE.length];
                        return (
                          <div
                            key={point}
                            className={`flex items-start gap-3 rounded-[12px] bg-white/90 p-4 shadow-md ${
                              group.warning ? "border-2 border-rust/60" : "border border-white/70"
                            }`}
                          >
                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                              <AreaIcon name={group.icons?.[pi] ?? (group.warning ? "alert" : "sparkle")} className="h-5 w-5" />
                            </span>
                            <span className="mt-[2px] text-[13px] leading-[20px] text-body-text">{point}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </section>
      )}

      {!treatment.areaSizeGuideAfterFeatures && areaSizeGuideSection}

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
      {!treatment.processDiagramsFirst && !treatment.processDiagramsAfterBenefits && !treatment.processDiagramsBeforeBenefits && processDiagramsSection}

      {/* Advantages */}
      {treatment.advantages && !treatment.advantagesInAreasSection && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
            {treatment.advantages.image ? (
              <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[12px] shadow-sm" style={{ aspectRatio: treatment.advantages.imageAspect ?? "1774/887" }}>
                <Image
                  src={treatment.advantages.image.src}
                  alt={treatment.advantages.image.alt}
                  fill
                  sizes="(min-width: 1100px) 1100px, 100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>
      )}

      {/* Technology / product showcase — large photo with ring, badge, feature icons and CTA */}
      {treatment.technologyShowcase && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
          <div className="pointer-events-none absolute -right-[6%] -top-[20%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
          <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">{treatment.technologyShowcase.eyebrow}</span>
                  <span className="h-px w-16 bg-tan/40" />
                </div>
                <h2 className="font-display text-[36px] font-bold leading-[42px] tracking-[-1px] text-forest lg:text-[44px] lg:leading-[50px]">
                  {treatment.technologyShowcase.heading.main}
                  <br />
                  <span className="text-tan">{treatment.technologyShowcase.heading.accent}</span>
                </h2>
                <p className="max-w-[440px] text-[16px] leading-[26px] text-body-text">
                  {treatment.technologyShowcase.description}
                </p>
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                  {treatment.technologyShowcase.features.map((feature) => (
                    <div key={feature.label} className="flex flex-col items-start gap-2">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                        <AreaIcon name={feature.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-[13px] font-semibold leading-[18px] text-forest">{feature.label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact-us"
                  className="mt-2 inline-flex h-14 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest uppercase transition-opacity hover:opacity-90"
                >
                  Book a Consultation
                  <AreaIcon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[560px] py-10">
                <div className="pointer-events-none absolute -left-8 -top-8 h-full w-full rounded-full border border-tan/30" />
                {/* Podium */}
                <div
                  className="pointer-events-none absolute bottom-6 left-1/2 h-[60px] w-[85%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,#e8d9c2_0%,rgba(232,217,194,0)_70%)]"
                />
                <div
                  className="pointer-events-none absolute bottom-8 left-1/2 h-[36px] w-[70%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-[10px]"
                />
                {/* Tilted 3D product shot */}
                <div style={{ perspective: "1400px" }}>
                  <div
                    className="relative mx-auto w-[82%] overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_35px_45px_-15px_rgba(60,40,15,0.35)]"
                    style={{
                      aspectRatio: "3/2",
                      transform: "rotateY(-16deg) rotateX(4deg) rotateZ(1deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image src={treatment.technologyShowcase.image.src} alt={treatment.technologyShowcase.image.alt} fill className="object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_35%)]" />
                  </div>
                </div>
                {treatment.technologyShowcase.badge && (
                  <div className="absolute -bottom-2 -right-2 flex h-32 w-32 items-center justify-center rounded-full border border-tan/30 bg-cream shadow-lg">
                    <div className="relative h-20 w-20">
                      <Image src={treatment.technologyShowcase.badge.src} alt={treatment.technologyShowcase.badge.alt} fill className="object-contain" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Premium feature cards — gradient bg, icon circles, no photos */}
      {!treatment.premiumFeaturesAfterBenefits && premiumFeaturesSection}

      {/* Feature images (2-up benefit cards with supporting image) */}
      {treatment.featureImages && treatment.featureImages.length > 0 && (
        <section className="w-full px-5">
          <div className={`mx-auto max-w-[1400px] ${treatment.featureImagesHeading ? "pb-[80px] pt-[40px] lg:pb-[100px] lg:pt-[48px]" : "py-[80px] lg:py-[100px]"}`}>
            {treatment.featureImagesHeading && (
              <div className="mb-10 flex items-center gap-4">
                <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                  {treatment.featureImagesHeading}
                </h2>
                <div className="flex-1 border-t border-black/8" />
              </div>
            )}
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${treatment.featureImagesFourUp ? "lg:grid-cols-4" : ""}`}>
              {treatment.featureImages.filter((f) => !f.premiumGroup).map((feature) => (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-[12px] border border-black/8 shadow-sm"
                >
                  <div
                    className={`relative w-full ${treatment.featureImagesContain ? "bg-white" : ""}`}
                    style={{ aspectRatio: treatment.featureImagesContain ? "16/10" : "4/3" }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes={treatment.featureImagesFourUp ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                      className={treatment.featureImagesContain ? "object-contain" : "object-cover"}
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
              {treatment.featureImages.some((f) => f.premiumGroup) && (
                <div className="relative overflow-hidden rounded-[18px] border border-[#a37f4a]/40 bg-[linear-gradient(135deg,#b8925a_0%,#dcbf93_50%,#b8925a_100%)] p-5 shadow-[0_20px_50px_-20px_rgba(120,90,40,0.6)] sm:col-span-2 lg:col-span-4 lg:p-8">
                  <div className="pointer-events-none absolute -right-[8%] -top-[40%] h-[320px] w-[320px] rounded-full bg-white/30 blur-[100px]" />
                  <div className="relative mb-6 flex items-center gap-4">
                    <span className="font-subheading text-[18px] font-semibold tracking-[3px] text-forest uppercase lg:text-[22px]">Our Most Popular Treatments</span>
                    <span className="h-px flex-1 bg-forest/25" />
                  </div>
                  <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
                    {treatment.featureImages
                      .filter((f) => f.premiumGroup)
                      .map((feature) => (
                        <div
                          key={feature.title}
                          className="overflow-hidden rounded-[14px] border border-white/60 bg-white shadow-md"
                        >
                          <div className="relative w-full bg-white" style={{ aspectRatio: "16/10" }}>
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                              className="object-contain"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="font-subheading text-[17px] font-semibold leading-[23px] text-forest">
                              {feature.title}
                            </h3>
                            <p className="mt-2 text-[14px] leading-[22px] text-body-text">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {treatment.areaSizeGuideAfterFeatures && areaSizeGuideSection}

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

      {/* Coming soon launch section */}
      {treatment.comingSoon && (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-tan/15 blur-[110px]" />
          <div className="relative mx-auto max-w-[1100px] py-[80px] lg:py-[100px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="flex flex-col gap-5">
                <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-4 py-2">
                  <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">
                    {treatment.comingSoon.badge}
                  </p>
                </div>
                <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-1px] text-forest uppercase lg:text-[40px] lg:leading-[46px]">
                  {treatment.comingSoon.heading}
                </h2>
                {treatment.comingSoon.subheading && (
                  <p className="font-subheading text-[18px] italic text-rust">{treatment.comingSoon.subheading}</p>
                )}
                {treatment.comingSoon.paragraphs.map((para, i) => (
                  <p key={i} className="text-[16px] leading-[27px] text-body-text">
                    {para}
                  </p>
                ))}
              </div>
              {treatment.comingSoon.image && (
                <div className="overflow-hidden rounded-[16px] border border-tan/25 shadow-lg">
                  <Image
                    src={treatment.comingSoon.image.src}
                    alt={treatment.comingSoon.image.alt}
                    width={treatment.comingSoon.image.width}
                    height={treatment.comingSoon.image.height}
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Coming soon — FAQs (kept as its own section, separate from the launch intro above) */}
      {treatment.comingSoon && (
        <section className="relative w-full overflow-hidden border-t border-tan/20 bg-cream px-5">
          <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] translate-x-1/3 rounded-full bg-rust/10 blur-[110px]" />
          <div className="relative mx-auto max-w-[900px] py-[70px] lg:py-[90px]">
            <h3 className="mb-6 text-center font-subheading text-[20px] font-medium leading-[26px] tracking-[-0.5px] text-forest uppercase lg:text-[24px]">
              {treatment.comingSoon.faqsHeading}
            </h3>
            <TreatmentFaqAccordion items={treatment.comingSoon.faqs} />
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
            {(() => {
              const shown = Math.min(3, treatment.gallery.count);
              const gridClass =
                shown === 1
                  ? "grid-cols-1 max-w-[560px]"
                  : shown === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-3";
              return (
                <div className={`mx-auto mt-10 grid gap-5 ${gridClass}`}>
                  {Array.from({ length: shown }, (_, i) => {
                    const g = treatment.gallery!;
                    const src = `${g.folder}/${g.prefix}-${i + 1}.${g.ext}`;
                    return (
                      <div
                        key={src}
                        className="group relative overflow-hidden rounded-[12px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div
                          className={`relative w-full ${treatment.gallery!.aspect ? "" : "aspect-square"}`}
                          style={treatment.gallery!.aspect ? { aspectRatio: treatment.gallery!.aspect } : undefined}
                        >
                          <Image
                            src={src}
                            alt={`${treatment.title} before & after — result ${i + 1}`}
                            fill
                            sizes={shown === 2 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                            className={treatment.gallery!.aspect ? "object-contain" : "object-cover object-top"}
                            loading="eager"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
            <div className="mt-8 text-center">
              <Link
                href={`/gallery?treatment=${treatment.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#a8896a] px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
              >
                View All Results in Our Gallery →
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
