"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function TreatmentFaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="font-subheading text-[16px] font-medium leading-[22px] tracking-[-0.4px] text-cream uppercase lg:text-[17px]">
              {item.q}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-tan transition-transform duration-200" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="pb-6 pr-12">
              <p className="text-[15px] leading-[26px] tracking-[-0.2px] text-white/60">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
