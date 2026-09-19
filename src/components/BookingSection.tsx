"use client";

import { useState } from "react";
import { PhoneIcon, MobileIcon, EnvelopeIcon, MapPinIcon } from "@/components/icons";

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
  "Lemon Bottle",
  "Mounjaro",
  "Microneedling / Mesotherapy",
  "Photo-Aging / Skinox",
  "Sclerotherapy",
  "CryoPen",
  "Phlebotomy",
  "Vitamin B12 Injections",
  "General Enquiry",
];

const hours = [
  { day: "Monday – Friday", time: "10:00am – 6:00pm" },
  { day: "Saturday", time: "12:00pm – 2:00pm", note: "Doctor appointments only" },
  { day: "Sunday", time: "Closed", note: "By appointment or email only" },
  { day: "Out of hours", time: "By appointment or email" },
];

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-[linear-gradient(90deg,#1c1813_0%,#2b2217_50%,#3a2e1a_100%)] px-5" id="book">
      <div className="mx-auto max-w-[1400px] py-[100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* ── Left column: info ── */}
          <div className="flex flex-col gap-10 lg:w-[440px] lg:shrink-0">

            {/* Badge */}
            <div className="w-fit rounded-full border-[0.8px] border-tan/40 px-3 py-2">
              <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
                book an appointment
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[48px] lg:leading-[53px]">
                Begin Your
              </h2>
              <h2 className="-mt-2 font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[48px] lg:leading-[53px]">
                Journey Today
              </h2>
              <p className="mt-2 text-[16px] leading-[27px] tracking-[-0.2px] text-white/60">
                Book a consultation with Sofia Bouzian to discuss your
                goals and create a personalised treatment plan. No pressure —
                just expert, honest guidance.
              </p>
            </div>

            {/* Contact details */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <PhoneIcon className="h-4 w-4 text-tan" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/40 uppercase">Telephone</p>
                  <a href="tel:02072253582" className="text-[16px] font-medium text-cream transition-colors hover:text-tan">
                    0207 225 3582
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <MobileIcon className="h-4 w-4 text-tan" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/40 uppercase">Mobile</p>
                  <a href="tel:07818474041" className="text-[16px] font-medium text-cream transition-colors hover:text-tan">
                    078 1847 4041
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <EnvelopeIcon className="h-4 w-4 text-tan" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/40 uppercase">Email</p>
                  <a href="mailto:info@yourhealthfirst.uk" className="text-[16px] font-medium text-cream transition-colors hover:text-tan">
                    info@yourhealthfirst.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/10">
                  <MapPinIcon className="h-4 w-4 text-tan" />
                </div>
                <div>
                  <p className="text-[12px] tracking-[1px] text-white/40 uppercase">Address</p>
                  <p className="text-[16px] font-medium leading-[24px] text-cream">
                    2 Wimpole Street, London W1G 0EB
                  </p>
                </div>
              </li>
            </ul>

            {/* Opening hours */}
            <div className="flex flex-col gap-4 rounded-[12px] border border-white/10 p-6">
              <h3 className="font-subheading text-[13px] font-semibold tracking-[2px] text-tan uppercase">
                Opening Hours
              </h3>
              <ul className="flex flex-col gap-3">
                {hours.map(({ day, time, note }) => (
                  <li key={day} className="flex items-start justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-[14px] font-medium text-cream">{day}</p>
                      {note && <p className="text-[12px] text-white/40 italic">{note}</p>}
                    </div>
                    <p className="shrink-0 text-[14px] text-tan">{time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="flex flex-1 flex-col gap-6 rounded-[16px] bg-white/5 p-8 lg:p-10 border border-white/10">
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tan/20">
                  <svg className="h-8 w-8 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-subheading text-[24px] font-medium tracking-[-1px] text-cream uppercase">
                  Enquiry Sent
                </h3>
                <p className="max-w-[340px] text-[15px] leading-[24px] text-white/60">
                  Thank you — we will be in touch shortly to confirm your
                  appointment. You can also call us on 0207 225 3582.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-1px] text-cream uppercase">
                    Request a Consultation
                  </h3>
                  <p className="mt-1 text-[14px] leading-[22px] text-white/50">
                    Fill in the form and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                        First Name <span className="text-tan">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-cream placeholder:text-white/20 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-cream placeholder:text-white/20 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                        Email <span className="text-tan">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-cream placeholder:text-white/20 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7700 000000"
                        className="h-12 rounded-[8px] border border-white/10 bg-white/5 px-4 text-[15px] text-cream placeholder:text-white/20 focus:border-tan/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                      Treatment of Interest
                    </label>
                    <select className="h-12 rounded-[8px] border border-white/10 bg-[#0c2c1d] px-4 text-[15px] text-cream focus:border-tan/60 focus:outline-none">
                      <option value="">Select a treatment...</option>
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                      How did you hear about us?
                    </label>
                    <select className="h-12 rounded-[8px] border border-white/10 bg-[#0c2c1d] px-4 text-[15px] text-cream focus:border-tan/60 focus:outline-none">
                      <option value="">Please select...</option>
                      <option>Google Search</option>
                      <option>Google Maps</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Friend / Family Referral</option>
                      <option>Returning Patient</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[1px] text-white/50 uppercase">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your concerns or questions..."
                      className="resize-none rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-cream placeholder:text-white/20 focus:border-tan/60 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
                  >
                    Send Enquiry
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
