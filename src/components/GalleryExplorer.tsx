"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { galleryGroups, gallerySections, type GalleryImage } from "@/data/gallery";

function BeforeAfterGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <div
          key={img.src}
          className="group relative overflow-hidden rounded-[12px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-center font-subheading text-[12px] font-semibold tracking-[1px] text-cream uppercase">
              Result {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComingSoonPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-dashed border-[#a8896a]/20 bg-cream/60 px-8 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8896a]/8">
        <svg className="h-6 w-6 text-[#a8896a]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M9 9.75h.008v.008H9V9.75zm6.75 0h.008v.008h-.008V9.75z" />
        </svg>
      </div>
      <p className="font-subheading text-[13px] font-semibold tracking-[1px] text-[#a8896a]/50 uppercase">{title}</p>
      <p className="text-[13px] leading-[20px] text-body-text/50">Photos coming soon</p>
    </div>
  );
}

const photoCount = (groupId: string) =>
  gallerySections.filter((s) => s.group === groupId).reduce((sum, s) => sum + s.images.length, 0);

export default function GalleryExplorer({ initialGroup }: { initialGroup?: string }) {
  const validInitial = galleryGroups.some((g) => g.id === initialGroup) ? (initialGroup as string) : null;
  const [selected, setSelected] = useState<string | null>(validInitial);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return galleryGroups;
    return galleryGroups.filter(
      (g) => g.label.toLowerCase().includes(q) || g.keywords.some((k) => k.toLowerCase().includes(q)),
    );
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onPop = () => {
      const t = new URLSearchParams(window.location.search).get("treatment");
      setSelected(galleryGroups.some((g) => g.id === t) ? t : null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const choose = (id: string | null) => {
    setSelected(id);
    setQuery("");
    setOpen(false);
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("treatment", id);
    else url.searchParams.delete("treatment");
    window.history.pushState(null, "", url.toString());
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const selectedGroup = galleryGroups.find((g) => g.id === selected) ?? null;
  const visible = selected ? gallerySections.filter((s) => s.group === selected) : gallerySections;

  return (
    <>
      {/* Treatment finder */}
      <section className="relative z-20 w-full border-b border-black/8 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="font-subheading text-[18px] font-semibold leading-[24px] tracking-[-0.3px] text-forest uppercase">
              Find your treatment
            </h2>
            <p className="text-[14px] text-body-text">
              Search or choose a treatment to see only its before &amp; after results.
            </p>
          </div>

          <div ref={wrapRef} className="relative max-w-[640px]">
            <div className="flex h-14 items-center gap-3 rounded-[12px] border border-tan/40 bg-white px-4 shadow-sm focus-within:border-tan focus-within:shadow-md">
              <svg className="h-5 w-5 shrink-0 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
              <input
                type="text"
                role="combobox"
                aria-expanded={open}
                aria-controls="gallery-treatment-list"
                aria-label="Search treatments"
                value={query}
                placeholder={selectedGroup ? `Showing: ${selectedGroup.label} — search to change` : "Search treatments, e.g. botox, hair loss, fillers…"}
                onFocus={() => setOpen(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && matches[0]) {
                    e.preventDefault();
                    choose(matches[0].id);
                  }
                  if (e.key === "Escape") setOpen(false);
                }}
                className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-forest outline-none placeholder:text-body-text/60"
              />
              {(query || selected) && (
                <button
                  type="button"
                  onClick={() => (query ? setQuery("") : choose(null))}
                  aria-label={query ? "Clear search" : "Show all treatments"}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-body-text transition-colors hover:bg-tan/30"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              )}
            </div>

            {open && (
              <ul
                id="gallery-treatment-list"
                role="listbox"
                className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-[340px] overflow-auto rounded-[12px] border border-tan/30 bg-white p-2 shadow-xl"
              >
                <li>
                  <button
                    type="button"
                    onClick={() => choose(null)}
                    className="flex w-full items-center justify-between rounded-[8px] px-3 py-2.5 text-left text-[14px] font-semibold text-forest transition-colors hover:bg-cream"
                  >
                    All treatments
                    <span className="text-[12px] font-normal text-body-text/70">
                      {gallerySections.reduce((n, s) => n + s.images.length, 0)} photos
                    </span>
                  </button>
                </li>
                {matches.length === 0 && (
                  <li className="px-3 py-3 text-[14px] text-body-text">No treatments match “{query}”.</li>
                )}
                {matches.map((g) => (
                  <li key={g.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected === g.id}
                      onClick={() => choose(g.id)}
                      className={`flex w-full items-center justify-between rounded-[8px] px-3 py-2.5 text-left text-[14px] transition-colors hover:bg-cream ${
                        selected === g.id ? "bg-cream font-semibold text-forest" : "text-body-text"
                      }`}
                    >
                      {g.label}
                      <span className="text-[12px] text-body-text/70">{photoCount(g.id)} photos</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quick-pick chips */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose(null)}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                !selected ? "border-forest bg-forest text-cream" : "border-tan/40 text-forest hover:bg-cream"
              }`}
            >
              All
            </button>
            {galleryGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => choose(g.id)}
                className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                  selected === g.id ? "border-forest bg-forest text-cream" : "border-tan/40 text-forest hover:bg-cream"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <div ref={resultsRef} className="scroll-mt-[100px]">
        {selectedGroup && (
          <section className="w-full border-b border-black/8 bg-cream/60 px-5 py-5">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] text-body-text">
                Showing <strong className="text-forest">{selectedGroup.label}</strong> — {photoCount(selectedGroup.id)} photos
              </p>
              <button
                type="button"
                onClick={() => choose(null)}
                className="rounded-full border border-forest/30 px-4 py-1.5 text-[13px] font-semibold text-forest transition-colors hover:border-forest"
              >
                ← Show all treatments
              </button>
            </div>
          </section>
        )}

        {visible.map((section, i) => (
          <section
            key={section.title}
            className={`w-full px-5 ${i > 0 ? "border-t border-black/8" : ""} ${i % 2 === 1 ? "bg-cream/40" : ""}`}
          >
            <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
              <div className="mb-10 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                    {section.title} — Before &amp; After
                  </h2>
                  <div className="flex-1 border-t border-black/8" />
                </div>
                <p className="text-[15px] text-body-text">{section.description}</p>
              </div>
              <BeforeAfterGrid images={section.images} />
            </div>
          </section>
        ))}

        {!selected && (
          <section className="w-full border-t border-black/8 bg-cream/40 px-5">
            <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
              <div className="mb-10 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                    Other Treatments — Before &amp; After
                  </h2>
                  <div className="flex-1 border-t border-black/8" />
                </div>
                <p className="text-[15px] text-body-text">Alopecia and additional treatment results.</p>
              </div>
              <ComingSoonPlaceholder title="Other Treatment Before & After Photos" />
            </div>
          </section>
        )}
      </div>
    </>
  );
}
