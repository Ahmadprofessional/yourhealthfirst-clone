"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightboxModal, { LightboxImage } from "@/components/ImageLightboxModal";

export interface ProcessDiagramItem {
  src: string;
  alt: string;
  maxWidth?: number;
  width?: number;
  height?: number;
  objectPosition?: string;
  fullWidth?: boolean;
}

interface ProcessDiagramsProps {
  diagrams: ProcessDiagramItem[];
  isRow?: boolean;
  howItWorks?: boolean;
}

export default function ProcessDiagrams({
  diagrams,
  isRow = true,
  howItWorks = true,
}: ProcessDiagramsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!diagrams || diagrams.length === 0) return null;

  const lightboxImages: LightboxImage[] = diagrams.map((d) => ({
    src: d.src,
    alt: d.alt,
    width: d.width,
    height: d.height,
  }));

  // Separate paired diagrams (side-by-side) from full-width individual rows
  const pairedDiagrams = diagrams.filter((d) => !d.fullWidth);
  const fullWidthDiagrams = diagrams.filter((d) => d.fullWidth);

  return (
    <>
      <section className={`w-full px-5 ${howItWorks ? "" : "bg-cream"}`}>
        <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
          {isRow ? (
            <div className="flex flex-col gap-6">
              {/* 1. Side-by-side row for paired diagrams */}
              {pairedDiagrams.length > 0 && (
                <div
                  className={`grid grid-cols-1 gap-6 items-stretch justify-center ${
                    pairedDiagrams.length === 2
                      ? "md:grid-cols-2"
                      : pairedDiagrams.length >= 3
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : "max-w-[1100px] mx-auto w-full"
                  }`}
                >
                  {pairedDiagrams.map((diagram) => {
                    const originalIndex = diagrams.findIndex((d) => d.src === diagram.src);
                    return (
                      <div
                        key={diagram.src}
                        onClick={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                        className="group relative w-full overflow-hidden rounded-[16px] border border-black/8 bg-white p-4 shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-tan/60 cursor-pointer"
                        title="Click to view and zoom in"
                      >
                        <Image
                          src={diagram.src}
                          alt={diagram.alt}
                          width={diagram.width ?? 1600}
                          height={diagram.height ?? 1000}
                          className="h-auto w-full object-contain rounded-[8px] transition-transform duration-300 group-hover:scale-[1.02]"
                        />

                        {/* Subtle expansion badge on hover */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-forest/85 px-3 py-1.5 text-[11px] font-medium text-cream shadow-md backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                          </svg>
                          <span>Click to zoom</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2. Full-width individual rows for each fullWidth diagram */}
              {fullWidthDiagrams.map((diagram) => {
                const originalIndex = diagrams.findIndex((d) => d.src === diagram.src);
                return (
                  <div
                    key={diagram.src}
                    onClick={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                    className="group relative w-full overflow-hidden rounded-[16px] border border-black/8 bg-white p-4 sm:p-6 shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-tan/60 cursor-pointer"
                    title="Click to view and zoom in"
                  >
                    <Image
                      src={diagram.src}
                      alt={diagram.alt}
                      width={diagram.width ?? 1600}
                      height={diagram.height ?? 800}
                      className="h-auto w-full object-contain rounded-[8px] transition-transform duration-300 group-hover:scale-[1.01]"
                    />

                    {/* Subtle expansion badge on hover */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-forest/85 px-3 py-1.5 text-[11px] font-medium text-cream shadow-md backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                      </svg>
                      <span>Click to zoom</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {diagrams.map((diagram, idx) => (
                <div
                  key={diagram.src}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative mx-auto w-full overflow-hidden rounded-[12px] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer"
                  style={{ maxWidth: diagram.maxWidth ?? 1100 }}
                  title="Click to view and zoom in"
                >
                  <Image
                    src={diagram.src}
                    alt={diagram.alt}
                    width={diagram.width ?? 1600}
                    height={diagram.height ?? 600}
                    className="h-auto w-full object-contain rounded-[8px] transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-forest/85 px-3 py-1.5 text-[11px] font-medium text-cream shadow-md backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                    <span>Click to zoom</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pop-out Lightbox with Zoom In, Zoom Out and Close controls */}
      {lightboxIndex !== null && (
        <ImageLightboxModal
          key={`${lightboxIndex}-${lightboxImages[lightboxIndex]?.src || ""}`}
          images={lightboxImages}
          currentIndex={lightboxIndex}
          isOpen={true}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
