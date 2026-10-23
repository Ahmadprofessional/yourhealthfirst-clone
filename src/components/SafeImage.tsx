"use client";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  "data-sanity"?: string;
}

export default function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = "/images/hero-desk.jpg",
  ...props
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = fallbackSrc;
      }}
      {...props}
    />
  );
}
