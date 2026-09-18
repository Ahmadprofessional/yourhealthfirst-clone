import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceListClient, { type PriceCategory } from "@/components/PriceListClient";

export const metadata: Metadata = {
  title: "Price List | YourHealthFirst Clinic — Harley Street, London",
  description:
    "Full treatment price list for YourHealthFirst Clinic — anti-wrinkle, dermal fillers, cryolipolysis, PRP, Profhilo, Sunekos and more. Based at 2 Wimpole Street, London.",
};

const categories: PriceCategory[] = [
  {
    id: "anti-wrinkle",
    title: "Anti-Wrinkle Injections",
    image: "/images/treatments/anti-wrinkle.jpg",
    description: "Soften fine lines and restore a youthful appearance.",
    items: [
      { service: "Consultation", price: "£50" },
      { service: "Forehead", price: "£250" },
      { service: "Frown lines", price: "£160" },
      { service: "Crow's feet", price: "£200" },
      { service: "Brow lift", price: "£150" },
      { service: "Bunny lines", price: "£120" },
      { service: "3 areas (to choose)", price: "£400" },
      { service: "4 areas (to choose)", price: "£499" },
      { service: "5 areas combination", price: "£550" },
      { service: "Jawline / Masseter (jaw slimming)", price: "£375" },
      { service: "Gummy smile", price: "£175" },
      { service: "Teeth grinding / Clenching (TMJ)", price: "£800" },
      { service: "Calf reduction", price: "£1,000" },
      { service: "Excessive sweating — under both arms", price: "£450–£600" },
      { service: "Excessive sweating — palms of both hands", price: "£450–£600" },
      { service: "Excessive sweating — soles of both feet", price: "£450–£600" },
    ],
  },
  {
    id: "dermal-fillers",
    title: "Dermal Fillers",
    image: "/images/treatments/dermal-fillers.jpg",
    description: "Enhance, restore and contour with precision.",
    items: [
      { service: "Lip enhancement / Russian lips", price: "£250–£350 (1ml) / £550 (2ml)" },
      { service: "Nasolabial folds / Marionette lines", price: "£375 (1ml) / £700 (2ml)" },
      { service: "Chin enhancement", price: "£500 (1ml) / £700 (2ml)" },
      { service: "Cheeks / Mid-face", price: "£500 (1ml) / £700 (2ml)" },
      { service: "Non-surgical rhinoplasty (nose job)", price: "£500" },
      { service: "Glabellar lines (frown)", price: "£350" },
      { service: "Tear trough / Under eyes / Dark circles", price: "£550" },
      { service: "Jawline", price: "£450" },
      { service: "Hand fillers", price: "£600" },
      { service: "Dissolving fillers — Hyaluronidase (new patient)", price: "£150" },
      { service: "Reverse filler from another consultant", price: "£325" },
      { service: "Reverse filler administered at YHF", price: "£150", note: "No consultation fee" },
    ],
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    image: "/images/treatments/skin-rejuvenation.jpg",
    description: "Reveal brighter, healthier and more radiant skin.",
    items: [
      { service: "Single MesoOx treatment (any type)", price: "£250" },
      { service: "Course of 4 MesoOx treatments", price: "£800", note: "Save £200" },
      { service: "Course of 6 MesoOx treatments", price: "£900", note: "Save £300" },
      { service: "Photo-Aging / Skinox — 1 treatment", price: "£250" },
      { service: "Photo-Aging / Skinox — course of 4", price: "£600" },
    ],
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration",
    image: "/images/treatments/hair-restoration.jpg",
    description: "Advanced solutions for stronger, healthier hair.",
    items: [
      { service: "Consultation", price: "£50", note: "Free if treatment booked" },
      { service: "Standard PRP", price: "£399" },
      { service: "Advanced RegenKit-BCT", price: "£599" },
    ],
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    image: "/images/treatments/body-contouring.jpg",
    description: "Target stubborn fat and reshape your silhouette.",
    items: [
      { service: "Cryolipolysis Consultation", price: "£50" },
      { service: "Cryolipolysis — 1 area", price: "£400" },
      { service: "Cryolipolysis — 2 areas", price: "£800" },
      { service: "Cryolipolysis — 3 areas", price: "£1,100" },
      { service: "Cryolipolysis — 4 areas", price: "£1,300" },
      { service: "Aqualyx — Chin", price: "£350", note: "Free consultation with treatment" },
      { service: "Aqualyx — Jaws", price: "£350" },
      { service: "Aqualyx — Lower abdomen", price: "From £450" },
      { service: "Aqualyx — Upper abdomen", price: "From £350" },
      { service: "Aqualyx — Upper + lower abdomen", price: "From £500" },
    ],
  },
  {
    id: "iv-vitamin",
    title: "IV Vitamin Therapy",
    image: "/images/treatments/iv-vitamin.jpg",
    description: "Boost energy, immunity and overall wellbeing.",
    items: [
      { service: "Consultation", price: "£50", note: "Free with treatment" },
      { service: "Single injection booster shot", price: "£50" },
      { service: "Course of 4 injections", price: "£190" },
      { service: "Course of 6 injections", price: "£260" },
    ],
  },
  {
    id: "facial-treatments",
    title: "Facial Treatments",
    image: "/images/treatments/facial-treatments.jpg",
    description: "Professional treatments for healthy, glowing skin.",
    items: [
      { service: "PRP Face Consultation", price: "£50", note: "Free if treatment booked" },
      { service: "PRP Face — Standard", price: "£399" },
      { service: "PRP Face — A-PRP HA Cellular Matrix", price: "£599" },
      { service: "CryoPen Consultation", price: "£20" },
      { service: "CryoPen — Skin tags", price: "From £20" },
      { service: "CryoPen — Age spots / Solar lentigo", price: "From £35" },
      { service: "CryoPen — Milia", price: "£20–£30" },
      { service: "CryoPen — Warts", price: "£25–£35" },
      { service: "CryoPen — Cherry angioma", price: "From £20" },
      { service: "CryoPen — Viral verrucae", price: "From £40" },
    ],
  },
  {
    id: "skin-boosters",
    title: "Skin Boosters",
    image: "/images/treatments/skin-boosters.jpg",
    description: "Deep hydration for smoother, firmer and brighter skin.",
    items: [
      { service: "Profhilo Consultation", price: "£50", note: "Free with treatment" },
      { service: "Profhilo — Course of 2 treatments (face)", price: "£700" },
      { service: "Profhilo — Course of 2 treatments (neck)", price: "£800" },
      { service: "Sunekos Consultation", price: "£50", note: "Free with treatment" },
      { service: "Sunekos — Single treatment", price: "£200" },
      { service: "Sunekos — Course of 4 (face)", price: "£600 (£150 each)" },
      { service: "Sunekos — Course of 4 (neck)", price: "£600 (£175 each)" },
    ],
  },
  {
    id: "medical-wellness",
    title: "Medical & Wellness",
    image: "/images/treatments/medical-wellness.jpg",
    description: "Personalised treatments for long-term health.",
    items: [
      { service: "Sclerotherapy Consultation", price: "£50" },
      { service: "Sclerotherapy — per session (up to 4–5 veins)", price: "£350" },
    ],
  },
  {
    id: "phlebotomy",
    title: "Phlebotomy & Health Tests",
    image: "/images/treatments/phlebotomy.jpg",
    description: "Essential health checks for peace of mind.",
    items: [
      { service: "Blood draw", price: "From £80" },
      { service: "Blood centrifugal (per tube)", price: "£10" },
    ],
  },
];

const features = [
  {
    label: "Expert Practitioners",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    label: "Safe & Ethical Treatments",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "Natural Results",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 1 1.528-.68l1.39-.417A12.001 12.001 0 0 0 2.25 2.25c0 5.385 3.823 9.88 8.963 10.875l-.013.025Z" />
      </svg>
    ),
  },
  {
    label: "Personalised Care Plans",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

export default function PriceListPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-forest pt-[111px]">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-tan/6 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[90px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left */}
            <div className="flex flex-col gap-5 lg:max-w-[560px]">
              <div className="w-fit rounded-full border border-white/20 px-4 py-2">
                <p className="font-nav text-[11px] font-semibold tracking-[3px] text-tan uppercase">
                  Our Pricing
                </p>
              </div>
              <h1 className="font-display text-[52px] leading-[56px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[72px] lg:leading-[76px]">
                Price List
              </h1>
              <p className="max-w-[460px] text-[15px] leading-[26px] text-white/60">
                Advanced aesthetic and wellness treatments, delivered with expertise,
                care and natural-looking results. Explore our treatment prices below.
              </p>
            </div>

            {/* Right — tagline */}
            <div className="hidden flex-col items-end justify-start gap-1 lg:flex">
              {["Look Good", "Feel Confident", "Be Yourself"].map((line, i) => (
                <p
                  key={line}
                  className="font-serif text-[22px] leading-[32px] tracking-[-0.5px] text-white/80 italic lg:text-[26px] lg:leading-[36px]"
                  style={{ opacity: 1 - i * 0.15 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Feature badges strip */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-5">
            <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 px-4 py-5 lg:px-8">
                  <span className="text-tan">{f.icon}</span>
                  <span className="font-nav text-[11px] font-semibold tracking-[1px] text-white/70 uppercase">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PRICE LIST ── */}
      <PriceListClient categories={categories} />

      {/* ── BOOKING / CANCELLATION & REFUND POLICY ── */}
      <section className="w-full bg-cream px-5 py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-[900px]">
          <div className="w-fit rounded-full border border-forest/20 px-4 py-2">
            <p className="font-nav text-[11px] font-semibold tracking-[3px] text-forest uppercase">
              Client Information
            </p>
          </div>
          <h2 className="mt-4 font-display text-[30px] leading-[36px] font-bold tracking-[-1px] text-forest uppercase lg:text-[38px] lg:leading-[44px]">
            Booking, Cancellation &amp; Refund Policy
          </h2>
          <p className="mt-4 text-[15px] leading-[26px] text-body-text">
            To discuss your treatment plans, book in for a consultation — there is no obligation to
            proceed with treatment. Please state your main interest when booking, and arrive ten
            minutes early so you feel relaxed.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Procedure Refunds
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                All treatments and procedures are carried out to the highest possible standard.
                However, as with any non-invasive procedure, there is no guarantee of outcome, and
                treatment is undertaken at the patient&apos;s own risk. YourHealthFirst Clinic does
                not offer refunds on this basis. The only exception is a serious or long-term
                illness that contra-indicates the treatment, confirmed by a medical certificate.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Complaints Procedure
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                We aim to exceed our clients&apos; expectations with first-class service, before,
                during and after treatment. If for any reason you are unhappy with your experience,
                we welcome your feedback and will do our best to put things right as soon as
                possible.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Consultation Deposits
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                Bookings require a deposit of up to £50, payable at the point of booking or over the
                phone. This deposit is fully redeemable against the cost of your treatment should
                you go ahead. You will be informed of this when booking your initial consultation.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Cancellations
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                Please give at least 24 hours&apos; notice if you need to cancel. Cancellations with
                less than 24 hours&apos; notice will incur a charge of 50% of the total treatment
                cost, added to your next appointment. No-shows will be charged in full. This notice
                allows us to offer your slot to clients on our waiting list.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Late For Your Appointment
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                If you are running late, we will do our best to accommodate your full treatment, but
                this is not always possible. If we are unavoidably running late for your appointment,
                we apologise — this is sometimes outside of our control — and will make this up to
                you should it cause any inconvenience.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Payment
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                All major credit and debit cards are accepted.
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                Gift Vouchers
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                Gift vouchers can be arranged, paid for and posted to you or the recipient. Vouchers
                are valid for 6 months only. Please quote your voucher number when booking to secure
                your appointment — the same cancellation charges apply to voucher holders, and a
                no-show will void the voucher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full overflow-hidden bg-cream px-5 py-[80px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full border border-forest/20 px-4 py-2">
            <p className="font-nav text-[11px] font-semibold tracking-[3px] text-forest uppercase">
              Get Started
            </p>
          </div>
          <h2 className="font-display text-[36px] leading-[42px] font-bold tracking-[-1.5px] text-forest uppercase lg:text-[52px] lg:leading-[58px]">
            Book Your Consultation Today
          </h2>
          <p className="max-w-[460px] text-[15px] leading-[26px] text-body-text">
            Let&apos;s create a personalised treatment plan designed just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#book"
              className="inline-flex h-14 items-center gap-2 rounded-[8px] bg-tan px-8 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              Book a Consultation →
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-14 items-center gap-2 rounded-[8px] border-[1.5px] border-forest/30 px-8 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
