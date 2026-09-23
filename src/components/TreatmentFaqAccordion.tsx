"use client";

import { useState } from "react";
import type { TreatmentFaq } from "@/data/treatments";

export default function TreatmentFaqAccordion({ items }: { items: TreatmentFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[10px] border border-black/8 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-subheading text-[15px] font-semibold leading-[22px] text-forest">
                {item.question}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-tan transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4 px-6 pb-5">
                  <p className="text-[14px] leading-[24px] text-body-text">{item.answer}</p>
                  {item.sections?.map((section) => (
                    <div key={section.heading} className="flex flex-col gap-2">
                      <h4 className="font-subheading text-[12px] font-semibold tracking-[1.5px] text-forest uppercase">
                        {section.heading}
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-[14px] leading-[22px] text-body-text">
                            <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
