import Image from "next/image";
import { trustBadges } from "@/data/site";
import {
  SmileIcon,
  DnaIcon,
  MapleLeafIcon,
  HandshakeIcon,
  MapPinIcon,
} from "@/components/icons";

const GOLD = "#c9a84c";

const trustIcons = [SmileIcon, DnaIcon, MapleLeafIcon, HandshakeIcon];

const avatars = [
  "/images/about/collage-1.jpg",
  "/images/about/collage-3.jpg",
  "/images/about/collage-2.jpg",
  "/images/about/collage-4.jpg",
];

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden lg:block lg:h-[793px]">
      {/* Photo: stacked below the text on mobile, full-bleed behind it on desktop */}
      <div className="relative order-2 h-[480px] w-full sm:h-[600px] lg:absolute lg:inset-0 lg:h-full">
        <Image
          src="/images/hero-desk.jpg"
          alt="Dr. Sofia Bouzian — YourHealthFirst Clinic, Harley Street London"
          fill
          priority
          quality={92}
          sizes="(min-width: 1024px) 2048px, 100vw"
          className="object-cover object-[68%_center] lg:object-right"
        />
        {/* Dark brown fade over the left side so the text sits on it */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #4a3826 0%, #1e1a14 16%, rgba(38,30,20,0.93) 28%, rgba(58,46,26,0.6) 40%, rgba(58,46,26,0.2) 50%, rgba(58,46,26,0) 58%)",
          }}
        />
      </div>

      {/* Text column */}
      <div className="relative z-10 order-1 flex w-full flex-col gap-[10px] bg-[linear-gradient(90deg,#4a3826_0%,#8f7355_100%)] px-5 pt-[150px] pb-16 sm:px-[60px] sm:pt-[160px] lg:w-[680px] lg:bg-none lg:pb-0 xl:px-[120px] xl:pt-[150px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[46px] leading-[46px] font-medium text-white uppercase lg:text-[52px] lg:leading-[52px]">
            AWARD WINNING
          </h2>
          <h2
            className="-mt-3 font-display text-[56px] leading-[56px] font-medium uppercase lg:text-[64px] lg:leading-[64px]"
            style={{ color: GOLD }}
          >
            Clinic
          </h2>

          <div className="flex h-6 items-center py-[2px]">
            <span className="flex w-[80%] items-center">
              <span className="h-px flex-1" style={{ backgroundColor: GOLD }} />
              <MapleLeafIcon className="mx-[10px] h-5 w-5 shrink-0" style={{ color: GOLD }} />
              <span className="h-px flex-1" style={{ backgroundColor: GOLD }} />
            </span>
          </div>

          <h2 className="font-display text-[22px] leading-[28px] font-medium text-white/85 uppercase lg:text-[24px]">
            Health, Dermatology, Hair Loss,<br />
            Anti-Aging &amp; Rejuvenation Clinic
          </h2>
        </div>

        <div className="flex flex-col gap-[14px] pt-2">
          <div className="flex gap-[11px]">
            <MapPinIcon className="h-[28px] w-[28px] shrink-0" style={{ color: GOLD }} />
            <div>
              <h3 className="font-display text-[18px] font-medium tracking-[0.5px] uppercase" style={{ color: GOLD }}>
                Harley Street, London
              </h3>
              <p className="text-[14px] leading-[22px] text-white/75">
                Since 2013 &amp; currently in 2 Wimpole Street W1G 0EB
              </p>
            </div>
          </div>

          <div>
            <a
              href="/about-us"
              className="inline-flex items-center gap-3 rounded-[8px] border-[2px] border-[#c9a84c] px-[28px] py-[14px] font-display text-[15px] font-semibold tracking-[1px] text-[#c9a84c] uppercase transition-all duration-200 hover:bg-[#c9a84c] hover:text-[#4a3826]"
            >
              Discover More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-y-3 sm:flex sm:gap-0">
            {trustBadges.map((badge, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center border-r px-2 text-center sm:w-[138px]"
                  style={{ borderColor: `${GOLD}55` }}
                >
                  <div className="h-[32px]">
                    <Icon className="h-[32px] w-[32px]" style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="mt-1 font-subheading text-[11px] font-semibold tracking-[0.5px] uppercase"
                    style={{ color: GOLD }}
                  >
                    {badge.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div
            className="flex w-full max-w-[400px] items-center gap-4 rounded-[8px] border px-4 py-4"
            style={{ borderColor: `${GOLD}66` }}
          >
            <div className="flex shrink-0">
              {avatars.map((src, index) => (
                <Image
                  key={src + index}
                  src={src}
                  alt=""
                  width={52}
                  height={52}
                  className={`h-[52px] w-[52px] rounded-full object-cover ring-2 ring-[#4a3826] ${
                    index > 0 ? "-ml-[28px]" : ""
                  }`}
                />
              ))}
            </div>
            <div>
              <p className="font-display text-[14px] font-medium text-white uppercase leading-[18px]">
                Trusted by 10K+<br />Happy Patients
              </p>
              <div className="mt-1 flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill={GOLD}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
