"use client";

interface Props {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = "/images/services/placeholder.png",
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = fallbackSrc;
      }}
    />
  );
}
