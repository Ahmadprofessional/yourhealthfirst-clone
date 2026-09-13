import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PhoneIcon,
  MobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | YourHealthFirst Clinic — Harley Street, London",
  description:
    "Book an appointment at YourHealthFirst Clinic — 2 Wimpole Street, London W1G 0EB. Call 0207 225 3582 or email info@yourhealthfirst.uk.",
};

const hours = [
  { day: "Monday – Friday", time: "10:00am – 6:00pm" },
  { day: "Saturday", time: "12:00pm – 2:00pm (Doctor appointments only)" },
  { day: "Sunday", time: "Closed — by appointment or email only" },
  { day: "Out of hours", time: "By appointment or email enquiries only" },
];

const transport = [
  {
    mode: "By Tube",
    detail:
      "Oxford Circus (Central, Bakerloo, Victoria) — 5 min walk. Bond Street (Central, Jubilee) — 6 min walk.",
  },
  {
    mode: "By Car",
    detail:
      "Metered street parking on Wimpole Street and Harley Street. Car park directly in front of the clinic behind John Lewis. After 6:30pm, free parking on single yellow lines.",
  },
  {
    mode: "Location",
    detail:
      "First floor — same building as Wimpole Therapeutics, at the far end of The Royal Society of Medicine, just behind John Lewis on Oxford Street.",
  },
];

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

export default function ContactUsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-forest pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              get in touch
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            Contact Us
          </h1>
          <p className="mt-3 max-w-[500px] font-nav text-[16px] leading-[26px] text-white/60">
            Speak with our team to book a consultation or ask any questions
            about treatments at our Wimpole Street clinic.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Contact info + form */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

            {/* Left — details */}
            <div className="flex flex-col gap-10 lg:w-[400px] lg:shrink-0">

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  Clinic Details
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">Telephone</p>
                      <a href="tel:02072253582" className="text-[16px] font-medium text-forest hover:text-tan transition-colors">
                        0207 225 3582
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MobileIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">Mobile</p>
                      <a href="tel:07818474041" className="text-[16px] font-medium text-forest hover:text-tan transition-colors">
                        078 1847 4041
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <EnvelopeIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">Email</p>
                      <a href="mailto:info@yourhealthfirst.uk" className="text-[16px] font-medium text-forest hover:text-tan transition-colors">
                        info@yourhealthfirst.uk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">Address</p>
                      <p className="text-[16px] font-medium leading-[24px] text-forest">
                        2 Wimpole Street<br />
                        London W1G 0EB<br />
                        Harley Street District
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Opening hours */}
              <div className="flex flex-col gap-4">
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  Opening Hours
                </h2>
                <ul className="flex flex-col gap-3">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                      <span className="text-[13px] font-semibold tracking-[0.5px] text-forest">{day}</span>
                      <span className="text-[15px] leading-[22px] text-body-text">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transport */}
              <div className="flex flex-col gap-4">
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  How to Find Us
                </h2>
                <ul className="flex flex-col gap-4">
                  {transport.map(({ mode, detail }) => (
                    <li key={mode}>
                      <p className="text-[13px] font-semibold tracking-[0.5px] text-tan uppercase">{mode}</p>
                      <p className="mt-1 text-[15px] leading-[24px] text-body-text">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="flex flex-1 flex-col gap-6 rounded-[14px] bg-cream p-8 lg:p-10">
              <div>
                <h2 className="font-subheading text-[28px] font-medium leading-[34px] tracking-[-1.2px] text-forest uppercase">
                  Book a Consultation
                </h2>
                <p className="mt-2 text-[15px] leading-[24px] text-body-text">
                  Fill in the form below and we will get back to you as soon as possible.
                </p>
              </div>

              <form className="flex flex-col gap-5" action="mailto:info@yourhealthfirst.uk" method="get">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                      First Name <span className="text-rust">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                    Email Address <span className="text-rust">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7700 000000"
                    className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                    Treatment of Interest
                  </label>
                  <select className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest focus:border-tan focus:outline-none">
                    <option value="">Select a treatment...</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                    How did you hear about us?
                  </label>
                  <select className="h-12 rounded-[8px] border border-body-text/20 bg-white px-4 text-[15px] text-forest focus:border-tan focus:outline-none">
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
                  <label className="text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your concerns or questions..."
                    className="resize-none rounded-[8px] border border-body-text/20 bg-white px-4 py-3 text-[15px] text-forest placeholder:text-body-text/40 focus:border-tan focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-14 items-center justify-center rounded-[8px] bg-forest px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
