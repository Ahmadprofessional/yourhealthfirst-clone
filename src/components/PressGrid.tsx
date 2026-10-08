"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PressImage {
  src: string;
  alt: string;
}

function columnsFor(width: number) {
  if (width >= 1024) return 4;
  if (width >= 640) return 3;
  return 2;
}

export default function PressGrid({ images }: { images: PressImage[] }) {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const update = () => setCols(columnsFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Deal images across columns left-to-right so the reading order matches the sequence supplied
  const columns: { img: PressImage; index: number }[][] = Array.from({ length: cols }, () => []);
  images.forEach((img, index) => columns[index % cols].push({ img, index }));

  return (
    <div className="flex items-start gap-4">
      {columns.map((col, c) => (
        <div key={c} className="flex min-w-0 flex-1 flex-col gap-4">
          {col.map(({ img, index }) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-[10px] border border-black/8 bg-cream shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full object-cover"
                loading={index < 8 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
