import { services } from "@/data/services";
import { ArrowRightIcon } from "@/components/icons";

/* ── Unique SVG icon per treatment type ── */
function ServiceIcon({ icon, bg }: { icon?: string; bg?: string }) {
  const color = bg ?? "#d1ae83";
  const paths: Record<string, React.ReactNode> = {
    face: (
      /* Abstract face with sparkle dots */
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="5" />
        <path d="M9.5 9.5a1 1 0 0 1 1-1M14.5 9.5a1 1 0 0 0-1-1" />
        <path d="M9.5 11.5c.7.8 1.5 1.2 2.5 1.2s1.8-.4 2.5-1.2" />
        <path d="M7 20c1-2 2.5-3 5-3s4 1 5 3" />
        <circle cx="19" cy="4" r="1" fill="white" stroke="none" />
        <circle cx="5" cy="5" r="0.8" fill="white" stroke="none" />
      </svg>
    ),
    snowflake: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
        <circle cx="12" cy="12" r="1.5" fill="white" />
        <circle cx="12" cy="4" r="1" fill="white" stroke="none" />
        <circle cx="12" cy="20" r="1" fill="white" stroke="none" />
        <circle cx="4" cy="12" r="1" fill="white" stroke="none" />
        <circle cx="20" cy="12" r="1" fill="white" stroke="none" />
      </svg>
    ),
    drop: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z" opacity="0.9" />
        <path d="M12 20a5 5 0 0 1-4-2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l2-8z" />
      </svg>
    ),
    vein: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M3 12c2-4 4-6 6-4s3 5 5 5 4-3 7-5" />
        <path d="M3 17c2-3 4-4 6-2s3 4 5 4 4-2 7-4" />
        <circle cx="12" cy="7" r="2" fill="white" stroke="none" />
      </svg>
    ),
    cell: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.5" fill="white" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2" strokeWidth="2" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M2 8c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        <path d="M2 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        <path d="M2 20c2-3 4-3 6 0s4 3 6 0" />
      </svg>
    ),
    molecule: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
        <line x1="7" y1="8" x2="10" y2="10.5" stroke="white" strokeWidth="1.5" />
        <line x1="17" y1="8" x2="14" y2="10.5" stroke="white" strokeWidth="1.5" />
        <line x1="7" y1="16" x2="10" y2="13.5" stroke="white" strokeWidth="1.5" />
        <line x1="17" y1="16" x2="14" y2="13.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <path d="M12 2l1.5 6L20 12l-6.5 4L12 22l-1.5-6L4 12l6.5-4L12 2z" />
        <circle cx="5" cy="5" r="1.2" opacity="0.7" />
        <circle cx="19" cy="4" r="1" opacity="0.7" />
        <circle cx="20" cy="18" r="1.2" opacity="0.7" />
      </svg>
    ),
    dna: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 3c4 3 10 3 14 6s0 6-4 9-10 3-14 6" />
        <path d="M19 3c-4 3-10 3-14 6s0 6 4 9 10 3 14 6" />
        <line x1="7" y1="8.5" x2="17" y2="8.5" strokeWidth="1.2" />
        <line x1="7" y1="15.5" x2="17" y2="15.5" strokeWidth="1.2" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 1-5 7" opacity="0.9" />
        <path d="M4 20l8-10" stroke="rgba(0,0,0,0.2)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    needle: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="15" y2="9" />
        <path d="M15 9l2-2a2 2 0 0 1 3 3l-2 2" />
        <path d="M9 15l-3 3" strokeWidth="1.2" />
        <circle cx="18" cy="6" r="1.5" fill="white" />
        <circle cx="6" cy="18" r="1" fill="white" />
        <circle cx="9" cy="9" r="1" fill="white" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    syringe: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="19" x2="19" y2="5" />
        <path d="M17 3l4 4-2 2-4-4" />
        <path d="M9 15l-4 4" />
        <path d="M14 4l6 6" strokeWidth="1" />
        <path d="M8 10l6 6" strokeWidth="3" strokeOpacity="0.3" />
        <path d="M10 8l4 4" />
        <path d="M12 6l4 4" />
      </svg>
    ),
    pill: (
      <svg viewBox="0 0 24 24" fill="white" className="h-[22px] w-[22px]">
        <rect x="3" y="10" width="10" height="4" rx="2" opacity="0.9" />
        <rect x="11" y="10" width="10" height="4" rx="2" opacity="0.6" />
        <circle cx="6" cy="7" r="2.5" opacity="0.8" />
        <circle cx="18" cy="17" r="2" opacity="0.7" />
      </svg>
    ),
    scale: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M5 8l7-5 7 5" />
        <path d="M3 14c0 2 2 4 4 4s4-2 4-4L7 8" fill="white" fillOpacity="0.3" />
        <path d="M13 14c0 2 2 4 4 4s4-2 4-4L17 8" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  };

  return (
    <div
      className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full shadow-md"
      style={{ backgroundColor: color }}
    >
      {paths[icon ?? "face"] ?? paths["face"]}
    </div>
  );
}

/* ── GHP Award Badge (real certificate design) ── */
function GhpBadge() {
  return (
    <a
      href="https://ghpnews.digital/winners/yourhealthfirst-clinic/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-[8px] border border-tan/30 px-5 py-4 transition-opacity hover:opacity-90"
      style={{ background: "linear-gradient(135deg, #7a6248 0%, #b49b7d 50%, #7a6248 100%)" }}
    >
      {/* Hexagon */}
      <svg viewBox="0 0 60 70" className="h-[64px] w-[55px] shrink-0" fill="#7ec8cc">
        <path d="M30 2L58 17v36L30 68 2 53V17z" />
        <text x="30" y="40" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="sans-serif">ghp</text>
      </svg>
      <div className="min-w-0">
        <p className="font-nav text-[10px] font-semibold tracking-[2px] text-forest/80 uppercase">Healthcare &amp; Pharmaceutical Awards</p>
        <p className="font-subheading text-[14px] font-semibold leading-[18px] tracking-[-0.3px] text-forest">
          Best Non-Invasive Cosmetic &amp; Medical Clinic
        </p>
        <p className="font-nav text-[11px] text-forest/60">London 2019</p>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section className="w-full px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 pt-[50px] pb-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-fit rounded-full border-[0.8px] border-[rgba(11,23,4,0.2)] px-3 py-2">
            <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-forest uppercase">
              services
            </h2>
          </div>
          <h2 className="max-w-[760px] text-center font-subheading text-[26px] leading-[30px] font-medium tracking-[-1.2px] text-forest uppercase lg:text-[36px] lg:leading-[40px]">
            Discover personalised skin care solutions
          </h2>
          <GhpBadge />
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between gap-7 rounded-[10px] border-[1.6px] border-tan bg-[rgba(209,174,131,0.12)] p-7 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-[25px] leading-[30px] font-medium text-forest uppercase">
                  {service.title}
                </h3>
                <ServiceIcon icon={service.icon} bg={service.iconBg} />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[16px] leading-[26px] font-medium tracking-[-0.2px] text-body-text">
                  {service.description.map((segment, index) =>
                    segment.bold ? (
                      <strong key={index} className="font-semibold text-forest">
                        {segment.text}
                      </strong>
                    ) : (
                      <span key={index}>{segment.text}</span>
                    ),
                  )}
                </p>
                <div className="mt-2">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-[5px] rounded-[8px] border-[1.6px] border-tan p-[10px] font-display text-[13px] leading-[13px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
                  >
                    learn more
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
