"use client";

import { useState } from "react";
import { faqs, contact } from "@/data/site";
import { PhoneIcon, EnvelopeIcon } from "@/components/icons";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 py-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-full border-[0.8px] border-[rgba(11,23,4,0.2)] px-3 py-2">
            <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-forest uppercase">
              faqs
            </h2>
          </div>
          <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-forest uppercase lg:text-[50px] lg:leading-[55px]">
            frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Accordion */}
          <div className="flex flex-col lg:w-[953px] lg:shrink-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="mb-[10px]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between rounded-[8px] border-[0.8px] border-transparent bg-[linear-gradient(90deg,#1c1813_0%,#2b2217_50%,#3a2e1a_100%)] px-[30px] py-[14px] text-left font-serif text-[21px] leading-[25.2px] text-white uppercase"
                  >
                    <span className="pr-[10px]">{faq.question}</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-8 text-[16px] leading-6 font-medium tracking-[-0.2px] text-body-text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image card with contact details */}
          <div className="relative flex min-h-[300px] flex-col justify-end gap-6 overflow-hidden rounded-[8px] bg-[url('/images/faq-card.jpg')] bg-cover bg-center p-4 lg:h-[491px] lg:w-[391px] lg:shrink-0">
            {/* Scrim so the contact details stay legible over the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent"
            />
            <ul className="relative">
              <li className="flex items-center">
                <a
                  href={`tel:${contact.phone2.replace(/\s/g, "")}`}
                  className="flex items-center text-[20px] leading-8 font-medium tracking-[-0.2px] text-white"
                >
                  <PhoneIcon className="mr-[3.5px] h-[14px] w-[14px]" />
                  {contact.phone2}
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center text-[20px] leading-8 font-medium tracking-[-0.2px] text-white"
                >
                  <EnvelopeIcon className="mr-[3.5px] h-[14px] w-[14px]" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
