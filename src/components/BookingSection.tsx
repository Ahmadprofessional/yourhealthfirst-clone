"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PhoneIcon, MobileIcon, EnvelopeIcon, MapPinIcon } from "@/components/icons";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";

const treatments = [
  "Anti-Wrinkle Injections",
  "Dermal Fillers",
  "Profhilo",
  "Polynucleotides",
  "Sculptra",
  "Sunekos",
  "PRP Face & Body",
  "PRP Hair Loss",
  "Exosome Therapy",
  "Cryolipolysis (Fat Freezing)",
  "Emsculpt Neo",
  "Aqualyx",
  "Mounjaro",
  "Microneedling / Mesotherapy",
  "Chemical Peels (Photodynamic Peel)",
  "Sclerotherapy",
  "CryoPen",
  "Phlebotomy",
  "Vitamin B12 Injections",
  "General Enquiry",
];

export default function BookingSection({ sanityData }: { sanityData?: any }) {
  const t = useTranslations("Booking");
  const heading = sanityData?.bookingHeading;
  const subtitle = sanityData?.bookingSubtitle || t("description");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatment: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send enquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const hours = [
    { day: t("monFri"), time: t("monFriTime") },
    { day: t("saturday"), time: t("saturdayTime"), note: t("saturdayNote") },
    { day: t("sunday"), time: t("sundayTime"), note: t("sundayNote") },
    { day: t("outOfHours"), time: t("outOfHoursTime") },
  ];

  return (
    <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5" id="book">
      <div className="mx-auto max-w-[1400px] py-[100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* ── Left column: info ── */}
          <div className="flex flex-col gap-10 lg:w-[440px] lg:shrink-0">

            {/* Badge */}
            <div className="w-fit rounded-full border-[0.8px] border-tan/40 px-3 py-2">
              <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-[#c9a84c] uppercase">
                {t("badge")}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {heading ? (
                <h2
                  data-sanity={getSanityAttribute("homePage", "homePage", "bookingHeading")}
                  className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-[#c9a84c] uppercase lg:text-[48px] lg:leading-[53px]"
                >
                  {heading}
                </h2>
              ) : (
                <>
                  <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-[#c9a84c] uppercase lg:text-[48px] lg:leading-[53px]">
                    {t("heading1")}
                  </h2>
                  <h2 className="-mt-2 font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-white uppercase lg:text-[48px] lg:leading-[53px]">
                    {t("heading2")}
                  </h2>
                </>
              )}
              <p
                data-sanity={getSanityAttribute("homePage", "homePage", "bookingSubtitle")}
                className="mt-2 text-[16px] leading-[27px] tracking-[-0.2px] text-white/80"
              >
                {subtitle}
              </p>
            </div>

            {/* Contact details */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <PhoneIcon className="h-4 w-4 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/65 uppercase">{t("telephone")}</p>
                  <a href="tel:02072253582" dir="ltr" className="text-[16px] font-bold text-white transition-colors hover:text-[#c9a84c]">
                    0207 225 3582
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <MobileIcon className="h-4 w-4 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/65 uppercase">{t("mobile")}</p>
                  <a href="tel:07818474041" dir="ltr" className="text-[16px] font-bold text-white transition-colors hover:text-[#c9a84c]">
                    078 1847 4041
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <EnvelopeIcon className="h-4 w-4 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/65 uppercase">{t("email")}</p>
                  <a href="mailto:info@yourhealthfirst.uk" className="text-[16px] font-bold text-white transition-colors hover:text-[#c9a84c]">
                    info@yourhealthfirst.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <MapPinIcon className="h-4 w-4 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/65 uppercase">{t("address")}</p>
                  <p className="text-[16px] font-medium leading-[24px] text-white">
                    2 Wimpole Street, 2nd Floor, London W1G 0EB
                  </p>
                </div>
              </li>
            </ul>

            {/* Opening hours */}
            <div className="flex flex-col gap-4 rounded-[12px] border border-white/10 p-6">
              <h3 className="font-subheading text-[13px] font-semibold tracking-[2px] text-[#c9a84c] uppercase">
                {t("openingHours")}
              </h3>
              <ul className="flex flex-col gap-3">
                {hours.map(({ day, time, note }) => (
                  <li key={day} className="flex items-start justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-[14px] font-medium text-white">{day}</p>
                      {note && <p className="text-[12px] text-white/65 italic">{note}</p>}
                    </div>
                    <p className="shrink-0 text-[14px] text-[#c9a84c]">{time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="flex flex-1 flex-col gap-6 rounded-[16px] bg-black p-8 lg:p-10 border border-white/10">
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tan/20">
                  <svg className="h-8 w-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-subheading text-[24px] font-medium tracking-[-1px] text-white uppercase">
                  {t("enquirySent")}
                </h3>
                <p className="max-w-[340px] text-[15px] leading-[24px] text-white/80">
                  {t("thankYou")}
                </p>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-1px] text-white uppercase">
                    {t("formTitle")}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[22px] text-white/85">
                    {t("formSubtitle")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {errorMessage && (
                    <div className="rounded-[8px] bg-red-500/10 border border-red-500/30 p-3 text-[14px] text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                        {t("firstName")} <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Jane"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white placeholder:text-white/60 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                        {t("lastName")}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white placeholder:text-white/60 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                        {t("email")} <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white placeholder:text-white/60 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                        {t("phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 000000"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white placeholder:text-white/60 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                      {t("treatmentOfInterest")}
                    </label>
                    <select
                      name="treatment"
                      aria-label={t("treatmentOfInterest")}
                      value={formData.treatment}
                      onChange={handleChange}
                      className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white focus:border-tan/60 focus:outline-none"
                    >
                      <option value="" className="bg-white text-forest">{t("selectTreatment")}</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment} className="bg-white text-forest">{treatment}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                      {t("howHeard")}
                    </label>
                    <select
                      name="source"
                      aria-label={t("howHeard")}
                      value={formData.source}
                      onChange={handleChange}
                      className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-white focus:border-tan/60 focus:outline-none"
                    >
                      <option value="" className="bg-white text-forest">{t("pleaseSelect")}</option>
                      <option value="Google Search" className="bg-white text-forest">{t("googleSearch")}</option>
                      <option value="Google Maps" className="bg-white text-forest">{t("googleMaps")}</option>
                      <option value="Instagram" className="bg-white text-forest">{t("instagram")}</option>
                      <option value="Facebook" className="bg-white text-forest">{t("facebook")}</option>
                      <option value="Friend Referral" className="bg-white text-forest">{t("friendReferral")}</option>
                      <option value="Returning Patient" className="bg-white text-forest">{t("returningPatient")}</option>
                      <option value="Other" className="bg-white text-forest">{t("other")}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/85 uppercase">
                      {t("message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t("messagePlaceholder")}
                      className="resize-none rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-white/60 focus:border-tan/60 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : t("sendEnquiry")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
