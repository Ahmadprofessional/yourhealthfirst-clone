import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Skincare | YourHealthFirst Clinic — Coming Soon",
  description:
    "Home skincare is coming soon to YourHealthFirst Clinic, Wimpole Street, London. Register your interest to be the first to know.",
};

export default function HomeSkincarePage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5 pb-[80px] pt-[151px]">
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
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tan/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Coming soon badge */}
          <div className="flex items-center gap-3 rounded-full border-2 border-[#e3c79b] bg-forest px-8 py-3.5 shadow-[0_10px_30px_-8px_rgba(12,44,29,0.7)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#e3c79b]" />
            <span className="font-nav text-[16px] font-bold tracking-[4px] text-cream uppercase lg:text-[18px]">Coming Soon</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-[44px] leading-[50px] font-bold tracking-[-2px] text-cream uppercase lg:text-[72px] lg:leading-[78px]">
              Home
            </h1>
            <h2 className="font-display text-[28px] leading-[34px] font-medium tracking-[-1px] text-tan uppercase lg:text-[40px] lg:leading-[46px]">
              Skincare
            </h2>
          </div>

          <p className="max-w-[540px] font-serif text-[18px] leading-[30px] text-white/60 italic">
            Professional skincare for your home routine, recommended for your skin at YourHealthFirst Clinic, Wimpole Street. Our range is
            coming soon.
          </p>

          {/* Divider */}
          <div className="flex h-px w-[200px] items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-tan/40" />
            <svg className="mx-3 h-4 w-4 text-tan" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-tan/40" />
          </div>

          {/* Notify CTA */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[14px] text-white/50">Be the first to know when we launch</p>
            <a
              href="mailto:info@yourhealthfirst.uk?subject=Home Skincare — Notify Me"
              className="inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-10 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              Register Your Interest
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      <Footer />
    </div>
  );
}
