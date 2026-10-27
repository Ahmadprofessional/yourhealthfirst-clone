"use client";

import React, { useState, useRef, useId } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "next-intl";

const treatmentItemKeys = [
  "antiWrinkles",
  "dermalFillers",
  "profhilo",
  "polynucleotides",
  "sculptra",
  "sunekos",
  "prpFaceBody",
  "prpHairLoss",
  "exosomeTherapy",
  "cryolipolysis",
  "emsculptNeo",
  "aqualyx",
  "mounjaro",
  "microneedling",
  "mesotherapy",
  "chemicalPeels",
  "sclerotherapy",
  "cryoPen",
  "phlebotomy",
  "vitaminB12",
] as const;

export default function ContactForm() {
  const tBooking = useTranslations("Booking");
  const uid = useId();
  const tContact = useTranslations("ContactPage");
  const tItems = useTranslations("Header.items");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage("");

    const formData = new FormData(formElement);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      treatment: formData.get("treatment"),
      source: formData.get("source"),
      message: formData.get("message"),
      recaptchaToken: recaptchaRef.current?.getValue(),
    };

    if (!data.recaptchaToken) {
      setErrorMessage(tContact("recaptchaError"));
      setIsSubmitting(false);
      return;
    }

    let response;
    let result;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      result = await response.json();
    } catch {
      setErrorMessage(tContact("errorMessage"));
      setIsSubmitting(false);
      return;
    }

    if (response.ok) {
      setIsSuccess(true);
      formElement.reset();
      try {
        recaptchaRef.current?.reset();
      } catch {
        // Ignore recaptcha reset errors if widget failed to load
      }
    } else {
      setErrorMessage(result?.error || tContact("errorMessage"));
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-[14px] bg-cream p-8 lg:p-10">
      <div>
        <h2 className="font-subheading text-[28px] font-medium leading-[34px] tracking-[-1.2px] text-forest uppercase">
          {tBooking("formTitle")}
        </h2>
        <p className="mt-2 text-[15px] leading-[24px] text-body-text">
          {tBooking("formSubtitle")}
        </p>
      </div>

      {isSuccess && (
        <div className="rounded-[8px] bg-[#eaf6ec] p-5 border border-[#a6d8b3]">
          <h3 className="font-semibold text-forest text-[16px]">
            {tBooking("enquirySent")}
          </h3>
          <p className="mt-1 text-[14px] text-forest/80">
            {tBooking("thankYou")}
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="rounded-[8px] bg-[#fdf0f0] p-4 border border-[#e8a3a3]">
          <p className="text-[14px] text-[#b33a3a]">{errorMessage}</p>
        </div>
      )}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
              {tBooking("firstName")} <span className="text-rust">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Jane"
              className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
              {tBooking("lastName")}
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Smith"
              className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
            {tBooking("email")} <span className="text-rust">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
            {tBooking("phone")}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+44 7700 000000"
            className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-treatment`} className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
            {tBooking("treatmentOfInterest")}
          </label>
          <select
            id={`${uid}-treatment`}
            name="treatment"
            className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest focus:border-tan focus:outline-none bg-none"
          >
            <option value="">{tBooking("selectTreatment")}</option>
            {treatmentItemKeys.map((key) => (
              <option key={key} value={tItems(key)}>
                {tItems(key)}
              </option>
            ))}
            <option value={tContact("generalEnquiry")}>
              {tContact("generalEnquiry")}
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-source`} className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
            {tBooking("howHeard")}
          </label>
          <select
            id={`${uid}-source`}
            name="source"
            className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest focus:border-tan focus:outline-none"
          >
            <option value="">{tBooking("pleaseSelect")}</option>
            <option value={tBooking("googleSearch")}>{tBooking("googleSearch")}</option>
            <option value={tBooking("googleMaps")}>{tBooking("googleMaps")}</option>
            <option value={tBooking("instagram")}>{tBooking("instagram")}</option>
            <option value={tBooking("facebook")}>{tBooking("facebook")}</option>
            <option value={tBooking("friendReferral")}>{tBooking("friendReferral")}</option>
            <option value={tBooking("returningPatient")}>{tBooking("returningPatient")}</option>
            <option value={tBooking("other")}>{tBooking("other")}</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
            {tBooking("message")}
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder={tBooking("messagePlaceholder")}
            className="resize-none rounded-[8px] border border-body-text/20 bg-white px-4 py-3 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
          />
        </div>

        <div className="mt-2 w-full max-w-full overflow-hidden">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_SITE_KEY_HERE"}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex h-14 items-center justify-center rounded-[8px] bg-[#a8896a] px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? tContact("submitting") : tBooking("sendEnquiry")}
        </button>
      </form>
    </div>
  );
}
