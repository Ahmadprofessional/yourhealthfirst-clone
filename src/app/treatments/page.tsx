import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Treatments | YourHealthFirst Clinic — Harley Street, London",
  description:
    "Explore all 20 aesthetic and medical treatments at YourHealthFirst Clinic — anti-wrinkle, fillers, Profhilo, cryolipolysis, PRP hair loss, Emsculpt Neo and more.",
};

const categories = [
  {
    label: "Face & Anti-Aging",
    slugs: ["anti-wrinkles", "dermal-fillers", "sunekos", "profhilo", "polynucleotides", "sculptra", "prp-ha"],
  },
  {
    label: "Hair Restoration",
    slugs: ["prp-hair-loss", "exosome"],
  },
  {
    label: "Body Contouring",
    slugs: ["cryolipolysis", "emsculpt-neo", "aqualyx", "lemon-bottle", "mounjaro"],
  },
  {
    label: "Skin & Health",
    slugs: ["microneedling", "photo-aging", "sclerotherapy", "cryopen", "phlebotomy", "vitamin-b12"],
  },
];

const slugToHref: Record<string, string> = {
  "prp-ha": "/treatments/prp-face-body",
  "microneedling": "/treatments/mesotherapy",
  "photo-aging": "/treatments/photo-aging",
};

function getHref(slug: string) {
  return slugToHref[slug] ?? `/treatments/${slug}`;
}

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#1c1813_0%,#2b2217_50%,#3a2e1a_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              our services
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            Treatments
          </h1>
          <p className="mt-3 max-w-[560px] font-nav text-[16px] leading-[26px] text-white/60">
            From facial rejuvenation and hair restoration to body contouring and
            skin health — all treatments are tailored to your individual goals by
            Sofia Bouzian.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Treatment categories */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-16">
            {categories.map((cat) => {
              const catServices = services.filter((s) => cat.slugs.includes(s.slug));
              return (
                <div key={cat.label} className="flex flex-col gap-8">
                  {/* Category header */}
                  <div className="flex items-center gap-4">
                    <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                      <h2 className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-forest uppercase">
                        {cat.label}
                      </h2>
                    </div>
                    <div className="flex-1 border-t border-black/8" />
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {catServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={getHref(service.slug)}
                        className="group flex flex-col overflow-hidden rounded-[12px] border border-black/8 bg-white transition-shadow hover:shadow-lg"
                      >
                        {/* Image */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                          <SafeImage
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          <h3 className="font-subheading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-forest uppercase">
                            {service.title}
                          </h3>
                          <p className="flex-1 text-[14px] leading-[22px] text-body-text line-clamp-3">
                            {service.description.map((seg) => seg.text).join("")}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1 font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                            Learn more →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Longevity — Coming Soon */}
      <section className="w-full bg-forest px-5">
        <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <h2 className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
                Coming Soon
              </h2>
            </div>
            <div className="flex-1 border-t border-white/10" />
          </div>
          <Link
            href="/longevity"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[16px] border border-tan/20 bg-white/5 p-8 transition-colors hover:border-tan/40 lg:flex-row lg:items-center lg:gap-12 lg:p-10"
          >
            {/* Animated pulse */}
            <div className="pointer-events-none absolute top-6 right-6 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-tan" />
              <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">Coming Soon</span>
            </div>
            {/* Icon */}
            <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full border border-tan/30 bg-tan/10">
              <svg className="h-10 w-10 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h-1M6.3 6.3l-.7-.7m13.1.7l.7-.7M6.3 17.7l-.7.7m13.1-.7l.7.7M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[28px] leading-[34px] font-bold tracking-[-1px] text-cream uppercase lg:text-[36px] lg:leading-[42px]">
                Longevity Programme
              </h3>
              <p className="max-w-[600px] text-[16px] leading-[27px] text-white/60">
                Advanced health optimisation, preventative medicine and personalised wellness protocols — designed to help you live longer and live better. Register your interest to be notified at launch.
              </p>
              <span className="font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                Learn More & Register Interest →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-forest px-5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 py-[80px] text-center">
          <h2 className="font-subheading text-[32px] font-medium leading-[38px] tracking-[-1.5px] text-cream uppercase lg:text-[40px] lg:leading-[46px]">
            Not sure which treatment is right for you?
          </h2>
          <p className="max-w-[480px] text-[16px] leading-[27px] text-white/60">
            Book a consultation with Sofia to discuss your concerns and design a
            personalised treatment plan — no pressure, just expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02072253582"
              className="inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              Call 0207 225 3582
            </a>
            <a
              href="/contact-us"
              className="inline-flex h-14 items-center justify-center rounded-[8px] border-[1.5px] border-tan/40 px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
