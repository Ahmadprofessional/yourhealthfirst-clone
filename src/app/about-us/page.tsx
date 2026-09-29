import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "About Me — Sofia Bouzian | YourHealthFirst Clinic, Harley Street",
  description:
    "Meet Sofia Bouzian — MSc, PGDip, Level 7 Aesthetics. Over 25 years of medical experience, award-winning specialist in facial rejuvenation, hair restoration and body contouring at Harley Street, London.",
};


const expertise = [
  { title: "Facial Rejuvenation", desc: "Anti-wrinkle, fillers, Profhilo, Sunekos and advanced facial contouring treatments." },
  { title: "Hair Restoration", desc: "Specialist in PRP, A-PRP and exosome therapies for hair loss and scalp health." },
  { title: "Body Contouring", desc: "Fat-dissolving, skin tightening and non-surgical body reshaping treatments." },
  { title: "Regenerative Medicine", desc: "Innovative therapies to support cellular repair and long-term wellbeing." },
  { title: "Anti-Ageing Medicine", desc: "Preventative and corrective treatments tailored to your individual goals." },
  { title: "Skin Health & Wellness", desc: "Medical-grade skincare, skin boosters and personalised wellness programmes." },
];

const accreditations = [
  "Master of Science (MSc)",
  "Postgraduate Diploma in Aesthetic Medicine (PGDip Aes)",
  "Level 7 Qualification in Aesthetic Medicine",
  "University Diploma in Facial Aesthetics",
  "Associate Member — Royal Society of Medicine",
  "Member — British Association of Sclerotherapists",
  "Accredited — Royal Society for Public Health",
  "Affiliated — European Academy for Environmental Medicine",
];

const areasOfExpertise = [
  "Facial Rejuvenation & Anti-Ageing Treatments",
  "PRP Hair Restoration & Hair Loss Treatments",
  "Exosome Therapy for Hair & Skin Regeneration",
  "Body Rejuvenation & Skin Tightening",
  "Cryolipolysis (Fat Freezing) & Body Contouring",
  "Regenerative & Preventative Aesthetic Medicine",
  "Personalised Wellness & Longevity Treatments",
];

const stats = [
  {
    value: "25+",
    label: "Years Medical Experience",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    value: "2013",
    label: "Aesthetics Since",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    value: "10K+",
    label: "Patients Treated",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    value: "2019",
    label: "GHP Award Winner",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
  },
];

export default function AboutMePage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* ── HERO — SPLIT LAYOUT ── */}
      <section className="relative flex w-full flex-col overflow-hidden bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px] lg:flex-row lg:items-stretch">

        {/* Left — text */}
        <div className="relative z-10 flex w-full flex-col justify-start gap-6 px-5 py-12 lg:w-[52%] lg:shrink-0 lg:px-[60px] lg:py-[70px] xl:px-[80px]">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-tan/6 blur-[100px]" />

          <div className="relative flex flex-col gap-6">
            <div className="w-fit rounded-full border-[0.8px] border-white/25 px-4 py-2">
              <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                Our Practitioner
              </p>
            </div>

            <div>
              <h1 className="font-display text-[48px] leading-[52px] font-bold tracking-[-2px] text-cream uppercase lg:text-[62px] lg:leading-[66px]">
                Sofia<br />
                <span className="text-tan">Bouzian</span>
              </h1>
              <p className="mt-3 font-nav text-[13px] font-semibold tracking-[2px] text-white/60 uppercase">
                Aesthetic Practitioner &amp; Clinical Director
              </p>
              <p className="mt-2 max-w-[560px] text-[15px] leading-[24px] text-white/50">
                Master of Science (MSc), Postgraduate Diploma (PGDip), and a Level 7 Qualification in
                Aesthetic Medicine — Specialist in Facial, Hair &amp; Body Rejuvenation | PRP Hair
                Restoration &amp; Anti-Ageing Medicine.
              </p>
            </div>

            <div className="flex max-w-[560px] flex-col gap-4 text-[15px] leading-[25px] text-white/55">
              <p>
                <strong className="font-semibold text-cream">Sofia Bouzian</strong> is a highly experienced
                Aesthetic Practitioner based in London&apos;s prestigious Harley Street and Wimpole Street
                medical district since 2014. Holding a Master of Science (MSc), Postgraduate Diploma (PGDip),
                and a Level 7 Qualification in Aesthetic Medicine, Sofia has dedicated her career to delivering
                advanced, evidence-based aesthetic and regenerative treatments with a focus on natural,
                elegant and long-lasting results.
              </p>
              <p>
                With a medical career spanning more than 25 years, Sofia qualified in Spain in 1998 before
                continuing her professional journey in London, where{" "}
                <strong className="font-semibold text-tan">
                  she has worked within both the NHS and private healthcare sectors
                </strong>
                . Working alongside some of Harley Street&apos;s most respected medical professionals
                inspired her passion for aesthetic and regenerative medicine, leading her to specialise in
                non-surgical treatments from 2013 onwards.
              </p>
              <p>
                Sofia&apos;s expertise lies in facial rejuvenation, hair restoration, body contouring and
                anti-ageing medicine, offering bespoke treatment plans tailored to each patient&apos;s
                individual needs and goals. She is committed to enhancing natural beauty while preserving
                facial expressions and individuality, helping patients achieve refreshed, youthful results
                without looking over-treated.
              </p>
              <p>
                A recognised <strong className="font-semibold text-tan">PRP Hair Loss Specialist</strong>,
                Sofia has extensive experience treating male and female hair thinning and hair loss. By
                combining advanced regenerative therapies with personalised treatment protocols, she helps
                patients improve hair density, strengthen existing hair and support long-term scalp health —
                with expertise extending to exosome therapy and other non-surgical hair restoration solutions.
              </p>
              <p>
                Sofia is equally regarded for her expertise in{" "}
                <strong className="font-semibold text-tan">Cryolipolysis (Fat Freezing)</strong>, commonly
                known as CoolSculpting®. Having worked in one of the pioneering Harley Street clinics offering
                this treatment, she has over a decade of experience in non-surgical body contouring and fat
                reduction, and has treated thousands of patients since 2013 — earning her reputation through
                exceptional care and consistent, natural-looking results.
              </p>
            </div>

            <blockquote className="max-w-[560px] border-l-[3px] border-tan py-1 pl-5 font-serif text-[17px] leading-[27px] text-white/70 italic">
              &ldquo;My goal is to enhance and rejuvenate each patient&rsquo;s natural features through safe,
              personalised aesthetic treatments—creating subtle, harmonious results that restore confidence
              while preserving their look &amp; appearance.&rdquo;
              <span className="mt-2 block font-nav text-[12px] font-semibold tracking-[1px] text-tan not-italic uppercase">
                — Sofia Bouzian
              </span>
            </blockquote>

            <div>
              <Link
                href="/#book"
                className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-tan px-8 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Right — full-height photo, stretched to match the text column's own height */}
        <div className="relative h-[400px] w-full lg:h-auto lg:min-h-[560px] lg:w-auto lg:flex-1 lg:self-stretch">
          <Image
            src="/images/about-us-page-image-v2.jpg"
            alt="Sofia Bouzian — YourHealthFirst Clinic"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── RECOGNITION & EXPERTISE ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

            {/* Left — image card */}
            <div className="relative lg:w-[420px] lg:shrink-0">
              <div className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: "4/5" }}>
                <SafeImage
                  src="/images/about us second image.jpeg"
                  alt="Sofia Bouzian — YourHealthFirst Clinic"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right — recognition text */}
            <div className="flex flex-col gap-7 lg:flex-1">
              <div>
                <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                  <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">Recognition</p>
                </div>
                <h2 className="mt-4 font-subheading text-[26px] leading-[32px] font-bold tracking-[-1px] text-forest uppercase lg:text-[34px] lg:leading-[40px]">
                  Award-Winning Care &amp;<br />Professional Standing
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-[16px] leading-[28px] tracking-[-0.2px] text-body-text">
                <p>
                  In recognition of her commitment to excellence, Sofia was awarded{" "}
                  <strong className="font-semibold text-forest">
                    Best Non-Invasive Cosmetic &amp; Medical Clinic in London 2019
                  </strong>{" "}
                  by the Global Healthcare &amp; Pharmaceutical (GHP) Awards.
                </p>
                <p>
                  Sofia has extensive experience in phlebotomy, including blood sampling for vulnerable
                  patients and children. She provides a compassionate, patient-centred approach, with
                  particular care and sensitivity when supporting individuals with autism, cancer patients,
                  and those who may find blood tests challenging.
                </p>
                <p>
                  Sofia was also invited as a speaker on Alopecia and Hair Loss at{" "}
                  <strong className="font-semibold text-forest">Sharm Derma 2022</strong>, the American
                  Association of Continuing Medical Education, in collaboration with the Egyptian Society
                  of Aesthetic Dermatology and the International Society for Dermatologic Surgery, held in
                  Cairo, Egypt.
                </p>
                <p>
                  In addition, through our affiliated qualified First Contact Physician, we offer a range of
                  private healthcare services, including Health Screening and Medical Assessments,
                  Pre-employment Medicals for individuals and corporate clients, Ultrasound Scans, X-rays,
                  Saudi Arabia Work Medical Examinations and Visa Medical Services, as well as other
                  diagnostic and screening services.
                </p>
                <p>
                  Where appropriate, certain procedures and medical services may be referred to or carried
                  out by our affiliated clinic under the supervision of a registered medical practitioner
                  working within a CQC-regulated service.
                </p>
                <p>
                  Sofia is an associate member of the Royal Society of Medicine, a member of the British
                  Association of Sclerotherapists, and is accredited by the Royal Society for Public Health.
                  She also maintains professional affiliations with the European Academy for Environmental
                  Medicine, reflecting her ongoing commitment to professional excellence, patient safety, and
                  continuous education.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-subheading text-[16px] font-bold tracking-[-0.3px] text-forest uppercase">
                  Areas of Expertise
                </h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {areasOfExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[15px] leading-[24px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#book"
                className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-tan px-8 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 px-4 py-10 text-center">
                <span className="text-tan">{s.icon}</span>
                <span className="font-display text-[38px] leading-[44px] font-bold text-tan lg:text-[48px]">
                  {s.value}
                </span>
                <span className="font-nav text-[11px] font-semibold tracking-[1.5px] text-white/50 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">Areas of Expertise</p>
              </div>
              <h2 className="font-subheading text-[30px] leading-[36px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[42px] lg:leading-[48px]">
                Specialist Treatments
              </h2>
              <p className="max-w-[480px] text-[15px] leading-[25px] text-body-text">
                Advanced non-surgical treatments tailored to restore, rejuvenate and enhance
                your natural beauty — with a focus on safety, precision and natural-looking results.
              </p>
            </div>
            <Link
              href="/treatments"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[8px] border-[1.5px] border-forest/30 px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest transition-colors hover:border-[#b49b7d] hover:bg-[#b49b7d] hover:text-cream"
            >
              View All Treatments →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 rounded-[12px] border border-black/8 bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tan/12">
                    <svg className="h-5 w-5 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-forest/15 text-forest/30 transition-colors group-hover:border-tan group-hover:text-tan">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-subheading text-[16px] font-bold leading-[21px] tracking-[-0.5px] text-forest uppercase">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-body-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / QUOTE ── */}
      <section className="relative w-full overflow-hidden px-5">
        {/* Background image */}
        <div className="absolute inset-0">
          <SafeImage
            src="/images/promise-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#7a6248]/85" />
        </div>
        <div className="relative mx-auto max-w-[1400px] py-[100px] lg:py-[120px]">
          <div className="flex flex-col gap-6 lg:max-w-[680px]">
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">Our Philosophy</p>
            </div>
            <h2 className="font-display text-[40px] leading-[46px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[58px] lg:leading-[64px]">
              Natural Results,<br />
              <span className="text-tan">Lasting Confidence</span>
            </h2>
            <p className="text-[17px] leading-[29px] text-white/65">
              I believe in enhancing your natural beauty, not changing who you are.
              Every treatment plan is tailored to your unique needs, combining
              medical expertise with artistry — for results that look and feel like you.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-tan/50" />
              <p className="font-nav text-[13px] font-semibold tracking-[2px] text-tan uppercase">Sofia Bouzian</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GHP AWARD ── */}
      <section className="relative w-full overflow-hidden bg-[#061a10] px-5">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ec8cc]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-16 lg:text-left">
            <div className="flex shrink-0 flex-col items-center gap-3">
              <svg viewBox="0 0 120 140" className="h-[120px] w-[104px] drop-shadow-[0_0_30px_rgba(126,200,204,0.5)]" fill="#7ec8cc">
                <path d="M60 6L114 36v68L60 134 6 104V36z" />
                <text x="60" y="84" textAnchor="middle" fontSize="34" fontWeight="900" fill="white" fontFamily="Arial, sans-serif" letterSpacing="-1">ghp</text>
              </svg>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-[#7ec8cc]/40" />
                <span className="font-nav text-[10px] font-semibold tracking-[3px] text-[#7ec8cc] uppercase">2019</span>
                <div className="h-px w-8 bg-[#7ec8cc]/40" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-nav text-[12px] font-semibold tracking-[3px] text-[#7ec8cc] uppercase">
                Global Healthcare &amp; Pharmaceutical Awards
              </p>
              <h2 className="font-display text-[32px] leading-[38px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[48px] lg:leading-[54px]">
                Best Non-Invasive<br />
                <span className="text-tan">Cosmetic &amp; Medical</span><br />
                Treatments Clinic
              </h2>
              <p className="max-w-[460px] text-[15px] leading-[26px] text-white/50">
                Awarded to YourHealthFirst Clinic in recognition of outstanding patient outcomes,
                clinical excellence and commitment to the highest standard of non-surgical
                aesthetic and medical treatments in London.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-tan/40" />
                <p className="font-nav text-[12px] font-semibold tracking-[1.5px] text-tan/70 uppercase">
                  YourHealthFirst Clinic · London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS ── */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
              <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">Credentials</p>
            </div>
            <h2 className="font-subheading text-[30px] leading-[36px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[42px] lg:leading-[48px]">
              Qualifications &amp; Affiliations
            </h2>
            <p className="max-w-[480px] text-[15px] leading-[25px] text-body-text">
              Sofia holds an extensive portfolio of academic qualifications and professional
              memberships across aesthetic medicine, public health, and regenerative therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {accreditations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[12px] border border-black/8 bg-white px-6 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/12">
                  <svg className="h-5 w-5 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium leading-[21px] tracking-[-0.2px] text-body-text lg:text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE CLINIC ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

            {/* Left — text */}
            <div className="flex flex-col gap-6 lg:flex-1">
              <div>
                <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                  <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">The Clinic</p>
                </div>
                <h2 className="mt-4 font-subheading text-[28px] leading-[34px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[38px] lg:leading-[44px]">
                  YourHealthFirst Clinic
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-[16px] leading-[28px] tracking-[-0.2px] text-body-text">
                <p>
                  Since 2014, YourHealthFirst Clinic has provided a patient-centred, results-driven approach
                  to aesthetic and wellness treatments. Combining advanced technology with evidence-based
                  practices, we offer a comprehensive range of services tailored to meet the individual
                  needs and goals of every client.
                </p>
                <p>
                  Our treatments include Cryolipolysis, Anti-Wrinkle Injections, Dermal Fillers,
                  Bio-Stimulators, Hair Loss Solutions, Phlebotomy Services, Nutritional Support,
                  Micro-sclerotherapy, CryoPen, Vitamin B12, Aqualyx, PRP Therapy, Mesotherapy,
                  Profhilo, Sunekos, Polynucleotide treatments and more.
                </p>
                <p>
                  Our priority is you. Our doctors and specialists pledge honesty, integrity and a
                  commitment to finding the right treatment for you — using state-of-the-art technologies
                  and the most advanced techniques to achieve optimal results with minimal disruption to your life.
                </p>
              </div>
            </div>

            {/* Right — clinic image + info */}
            <div className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0">
              {/* Clinic photo */}
              <div className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: "4/3" }}>
                <SafeImage
                  src="/images/misc/promise-1.jpeg"
                  alt="YourHealthFirst Clinic interior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/60 to-transparent p-5">
                  <p className="font-display text-[13px] tracking-[2px] text-white/80 uppercase">YourHealthFirst Clinic</p>
                </div>
              </div>

              {/* Contact info cards */}
              {[
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "2 Wimpole Street, London W1G 0EB",
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: "Opening Hours",
                  value: "Mon–Fri 10am–6pm · Sat 12–2pm (by appointment only)",
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "0207 225 3582",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-[10px] border border-black/8 bg-white px-5 py-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tan/12 text-tan">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-nav text-[10px] font-semibold tracking-[1.5px] text-body-text/40 uppercase">{item.label}</p>
                    <p className="mt-0.5 text-[14px] leading-[20px] text-body-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 py-[80px] text-center lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">Get Started</p>
          </div>
          <h2 className="font-display text-[36px] leading-[42px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[52px] lg:leading-[58px]">
            Ready to Begin<br />Your Journey?
          </h2>
          <p className="max-w-[460px] text-[16px] leading-[27px] text-white/60">
            Book a consultation with Sofia to discuss your goals and create
            a personalised treatment plan designed just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#book"
              className="inline-flex h-13 items-center justify-center rounded-[8px] bg-tan px-10 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              Book a Consultation →
            </Link>
            <a
              href="mailto:info@yourhealthfirst.uk"
              className="inline-flex h-13 items-center justify-center rounded-[8px] border-[1.5px] border-tan/40 px-10 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
