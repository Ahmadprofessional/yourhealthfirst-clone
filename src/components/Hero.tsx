import Image from "next/image";
import { trustBadges } from "@/data/site";
import {
  SmileIcon,
  DnaIcon,
  MapleLeafIcon,
  HandshakeIcon,
  MapPinIcon,
} from "@/components/icons";

const trustIcons = [SmileIcon, DnaIcon, MapleLeafIcon, HandshakeIcon];

const avatars = [
  "/images/about/collage-1.jpg",
  "/images/about/collage-3.jpg",
  "/images/about/collage-2.jpg",
  "/images/about/collage-4.jpg",
];

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden lg:h-[857px] lg:flex-row">
      {/* ── LEFT: warm gradient panel ── */}
      <div className="relative z-10 flex w-full flex-col gap-[10px] bg-[linear-gradient(90deg,#061a10_0%,#0c2c1d_50%,#17452f_100%)] px-5 pt-[150px] pb-16 sm:pt-[160px] sm:pr-[50px] sm:pb-[150px] lg:w-[600px] lg:shrink-0">

        {/* Heading block */}
        <div className="relative flex flex-col gap-4 pr-[30px]">
          <h2 className="font-display text-[46px] leading-[46px] font-medium text-white uppercase lg:text-[52px] lg:leading-[52px]">
            AWARD WINNING
          </h2>
          <h2 className="-mt-3 font-display text-[56px] leading-[56px] font-medium uppercase lg:text-[64px] lg:leading-[64px]" style={{ color: "#c9a84c" }}>
            Clinic
          </h2>

          {/* Gold divider */}
          <div className="flex h-6 items-center py-[2px]">
            <span className="flex w-[70%] items-center">
              <span className="h-px flex-1" style={{ backgroundColor: "#c9a84c" }} />
              <MapleLeafIcon className="mx-[10px] h-5 w-5 shrink-0" style={{ color: "#c9a84c" }} />
              <span className="h-px flex-1" style={{ backgroundColor: "#c9a84c" }} />
            </span>
          </div>

          <h2 className="font-display text-[22px] leading-[28px] font-medium text-white/85 uppercase lg:text-[24px]">
            Health, Dermatology, Hair Loss,<br />
            Anti-Aging &amp; Rejuvenation Clinic
          </h2>
        </div>

        {/* Details block */}
        <div className="relative flex flex-col gap-[14px] pt-2">
          <div className="flex gap-[11px]">
            <MapPinIcon className="h-[28px] w-[28px] shrink-0" style={{ color: "#c9a84c" }} />
            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[0.5px] uppercase" style={{ color: "#c9a84c" }}>
                Harley Street, London
              </h3>
              <p className="text-[14px] leading-[22px] text-white/70">
                Since 2013 &mdash; currently at 2 Wimpole Street W1G 0EB
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div>
            <a
              href="/about-us"
              className="inline-flex items-center gap-3 rounded-[6px] border-[2px] border-[#c9a84c] px-[28px] py-[14px] font-display text-[15px] font-semibold tracking-[1px] text-[#c9a84c] uppercase transition-all duration-200 hover:bg-[#c9a84c] hover:text-[#0c0a07]"
            >
              Discover More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-y-3 sm:flex sm:gap-0">
            {trustBadges.map((badge, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center border-r border-white/15 px-2 text-center sm:w-[138px]"
                >
                  <div className="h-[32px]">
                    <Icon className="h-[32px] w-[32px]" style={{ color: "#c9a84c" }} />
                  </div>
                  <h3 className="mt-1 font-subheading text-[11px] font-semibold tracking-[0.5px] text-white/80 uppercase">
                    {badge.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Patient trust badge */}
          <div className="flex w-full max-w-[380px] items-center gap-4 rounded-[8px] border px-4 py-4" style={{ borderColor: "#c9a84c33" }}>
            <div className="flex shrink-0">
              {avatars.map((src, index) => (
                <Image
                  key={src + index}
                  src={src}
                  alt=""
                  width={52}
                  height={52}
                  className={`h-[52px] w-[52px] rounded-full object-cover ring-2 ${
                    index > 0 ? "-ml-[28px]" : ""
                  }`}
                />
              ))}
            </div>
            <div>
              <p className="font-display text-[14px] font-medium text-white uppercase leading-[18px]">
                Trusted by 10K+<br />Happy Patients
              </p>
              {/* Stars */}
              <div className="mt-1 flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="#c9a84c">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Sofia at desk photo ── */}
      <div className="relative h-[560px] w-full sm:h-[680px] lg:h-auto lg:flex-1">
        <Image
          src="/images/hero-desk.jpg"
          alt="Dr. Sofia Bouzian — YourHealthFirst Clinic, Harley Street London"
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[68%_center] lg:object-[85%_center]"
        />

        {/* Dark overlay on left edge to blend with panel */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#17452f] to-transparent lg:block"
        />

        {/* "Your Health Our Priority" cursive overlay */}
        <div className="absolute right-8 top-1/3 hidden flex-col items-end lg:flex" aria-hidden="true">
          <p
            className="font-serif text-[32px] leading-[1.3] italic xl:text-[38px]"
            style={{ color: "#c9a84c", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Your Health
          </p>
          <p
            className="font-serif text-[32px] leading-[1.3] italic xl:text-[38px]"
            style={{ color: "#c9a84c", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Our Priority
          </p>
          {/* Heart */}
          <svg className="mt-1 h-7 w-7" viewBox="0 0 24 24" fill="#c9a84c">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
