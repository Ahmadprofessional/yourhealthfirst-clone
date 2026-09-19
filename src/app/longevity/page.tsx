import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Longevity Programme | YourHealthFirst Clinic — Coming Soon",
  description:
    "Our comprehensive Longevity Programme is coming soon — personalised health optimisation, preventative medicine and advanced wellness protocols at YourHealthFirst Clinic, Harley Street London.",
};

export default function LongevityPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(90deg,#1c1813_0%,#2b2217_50%,#3a2e1a_100%)] px-5 pt-[111px]">
        {/* Background decorative rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full border border-tan/8" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full border border-tan/12" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[200px] w-[200px] rounded-full border border-tan/20" />
        </div>

        {/* Gold gradient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tan/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Coming soon badge */}
          <div className="flex items-center gap-2 rounded-full border border-tan/30 bg-tan/10 px-5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-tan" />
            <span className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
              Coming Soon
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-[52px] leading-[56px] font-bold tracking-[-2px] text-cream uppercase lg:text-[80px] lg:leading-[84px]">
              Longevity
            </h1>
            <h2 className="font-display text-[28px] leading-[34px] font-medium tracking-[-1px] text-tan uppercase lg:text-[40px] lg:leading-[46px]">
              Programme
            </h2>
          </div>

          {/* Tagline */}
          <p className="max-w-[540px] font-serif text-[18px] leading-[30px] text-white/60 italic">
            Advanced health optimisation, preventative medicine and personalised
            wellness protocols — designed to help you live longer and live better.
          </p>

          {/* Divider */}
          <div className="flex h-px w-[200px] items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-tan/40" />
            <svg className="mx-3 h-4 w-4 text-tan" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-tan/40" />
          </div>

          {/* What's coming */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[800px]">
            {[
              { title: "Health Optimisation", desc: "Comprehensive blood panels, biomarker testing and personalised health protocols" },
              { title: "Preventative Medicine", desc: "Early detection strategies and evidence-based interventions to delay biological ageing" },
              { title: "IV Therapy", desc: "High-dose vitamin, mineral and amino acid infusions tailored to your specific deficiencies" },
              { title: "Hormone Balancing", desc: "Precision hormone optimisation to restore vitality, mood and metabolic function" },
              { title: "Cellular Regeneration", desc: "Advanced peptide therapies, NAD+ and exosome protocols for cellular renewal" },
              { title: "Wellness Coaching", desc: "Personalised nutrition, sleep and lifestyle guidance from our medical team" },
            ].map((item) => (
              <div key={item.title} className="rounded-[10px] border border-white/10 bg-white/5 p-5 text-left">
                <h3 className="font-subheading text-[13px] font-semibold tracking-[1px] text-tan uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[21px] text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Notify CTA */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[14px] text-white/50">
              Be the first to know when we launch
            </p>
            <a
              href="mailto:info@yourhealthfirst.uk?subject=Longevity Programme — Notify Me"
              className="inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-10 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              Register Your Interest
            </a>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      <Footer />
    </div>
  );
}
