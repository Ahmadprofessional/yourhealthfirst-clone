"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface PriceItem {
  service: string;
  price: string;
  note?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  items: PriceItem[];
}

interface Props {
  categories: PriceCategory[];
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function PriceListClient({ categories }: Props) {
  const [open, setOpen] = useState<string | null>(categories[0]?.id ?? null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.items.some((i) => i.service.toLowerCase().includes(q))
    );
  }, [categories, search]);

  return (
    <section className="w-full bg-[#fafaf8] px-5 py-[80px] lg:py-[100px]">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading row */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 w-fit rounded-full border border-forest/20 px-4 py-2">
              <p className="font-nav text-[11px] font-semibold tracking-[3px] text-forest uppercase">
                Our Treatments
              </p>
            </div>
            <h2 className="font-display text-[32px] leading-[38px] font-bold tracking-[-1px] text-forest uppercase lg:text-[44px] lg:leading-[50px]">
              Explore Our Price List
            </h2>
            <p className="mt-2 text-[14px] leading-[22px] text-body-text/70">
              Select a category below to view our treatment prices.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full max-w-[280px]">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search treatments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-[8px] border border-black/12 bg-white py-3 pl-9 pr-4 font-nav text-[13px] text-forest placeholder:text-body-text/35 focus:border-tan focus:outline-none"
            />
          </div>
        </div>

        {/* Category card grid */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setOpen(open === cat.id ? null : cat.id)}
              className={`flex items-center gap-4 rounded-[10px] border bg-white px-4 py-3 text-left transition-all duration-200 hover:border-tan/50 hover:shadow-sm ${
                open === cat.id
                  ? "border-tan/60 shadow-sm ring-1 ring-tan/20"
                  : "border-black/8"
              }`}
            >
              <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-[8px] bg-cream">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-subheading text-[13px] font-bold leading-[18px] tracking-[-0.3px] text-forest uppercase">
                  {cat.title}
                </p>
                <p className="mt-1 text-[12px] leading-[18px] text-body-text/60 line-clamp-2">
                  {cat.description}
                </p>
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-tan transition-transform duration-200 ${
                  open === cat.id ? "rotate-180" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Accordion — expanded details */}
        <div className="flex flex-col gap-2">
          {filtered.map((cat) => (
            <div key={`acc-${cat.id}`} className="overflow-hidden rounded-[10px] border border-black/8">
              {/* Accordion header */}
              <button
                type="button"
                onClick={() => setOpen(open === cat.id ? null : cat.id)}
                className="flex w-full items-center gap-4 bg-forest px-5 py-4 text-left transition-opacity hover:opacity-90"
              >
                <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-[6px]">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                </div>
                <span className="flex-1 font-subheading text-[13px] font-semibold tracking-[1px] text-cream uppercase lg:text-[14px]">
                  {cat.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-tan transition-transform duration-200 ${
                    open === cat.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Price rows */}
              {open === cat.id && (
                <div className="divide-y divide-black/6 bg-white">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-[#fafaf8]"
                    >
                      <div>
                        <p className="text-[14px] leading-[21px] text-forest lg:text-[15px]">
                          {item.service}
                        </p>
                        {item.note && (
                          <p className="text-[12px] italic text-tan/80">{item.note}</p>
                        )}
                      </div>
                      <p className="shrink-0 font-subheading text-[15px] font-semibold tracking-[-0.3px] text-tan lg:text-[16px]">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-[13px] leading-[21px] text-body-text/55">
          * Prices are subject to change. A consultation fee may be deducted from the cost of treatment if booked on the same day.
          Certain procedures may be referred to our affiliated clinic, carried out by a registered CQC doctor where applicable.
          Please contact us for a personalised quote.
        </p>
      </div>
    </section>
  );
}
