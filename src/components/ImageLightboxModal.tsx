"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
}

interface ImageLightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export default function ImageLightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxModalProps) {
  const [index, setIndex] = useState(currentIndex);
  const [prevProps, setPrevProps] = useState({ currentIndex, isOpen });
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const posStartRef = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Sync state synchronously during render when props change
  if (prevProps.currentIndex !== currentIndex || prevProps.isOpen !== isOpen) {
    setPrevProps({ currentIndex, isOpen });
    setIndex(currentIndex);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }

  const currentImage = images[index];

  // Reset zoom & pan when image changes
  const changeImage = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= images.length) return;
      setIndex(newIndex);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      onNavigate?.(newIndex);
    },
    [images.length, onNavigate],
  );

  const handlePrev = useCallback(() => {
    changeImage((index - 1 + images.length) % images.length);
  }, [changeImage, index, images.length]);

  const handleNext = useCallback(() => {
    changeImage((index + 1) % images.length);
  }, [changeImage, index, images.length]);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Keyboard navigation & controls
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        zoomOut();
      } else if (e.key === "0") {
        resetZoom();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext, zoomIn, zoomOut, resetZoom]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Mouse wheel zoom
  useEffect(() => {
    if (!isOpen) return;
    const container = imageContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((prev) => Math.min(prev + 0.25, 4));
      } else {
        setZoom((prev) => {
          const next = Math.max(prev - 0.25, 1);
          if (next === 1) setPosition({ x: 0, y: 0 });
          return next;
        });
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isOpen]);

  // Mouse drag to pan when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    posStartRef.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: posStartRef.current.x + dx,
      y: posStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Click image to toggle zoom
  const handleImageClick = (e: React.MouseEvent) => {
    // If was dragging significantly, ignore click
    if (isDragging) return;
    if (zoom === 1) {
      setZoom(2);
    } else {
      resetZoom();
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/92 backdrop-blur-md select-none transition-all duration-300"
      onClick={(e) => {
        // If clicked on backdrop, close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar: Title/Counter + Zoom Controls + Close Button */}
      <header className="relative z-10 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-b from-black/80 to-transparent">
        {/* Left: Counter & Title */}
        <div className="flex items-center gap-3">
          {images.length > 1 && (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
              {index + 1} / {images.length}
            </span>
          )}
          {currentImage.alt && (
            <p className="hidden sm:block max-w-[400px] truncate text-xs text-white/70">
              {currentImage.alt}
            </p>
          )}
        </div>

        {/* Right: Zoom Controls & Close Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zoom Out */}
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 1}
            aria-label="Zoom out"
            title="Zoom out (-)"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>

          {/* Zoom Level Indicator / Reset */}
          <button
            type="button"
            onClick={resetZoom}
            aria-label="Reset zoom"
            title="Reset zoom to 100% (0)"
            className="flex h-9 min-w-[54px] items-center justify-center rounded-full bg-white/10 px-2.5 text-xs font-semibold text-white transition-all hover:bg-white/20"
          >
            {Math.round(zoom * 100)}%
          </button>

          {/* Zoom In */}
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 4}
            aria-label="Zoom in"
            title="Zoom in (+)"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Divider */}
          <div className="h-5 w-[1px] bg-white/20 mx-1" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            title="Close (Esc)"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition-all hover:bg-red-500/80 hover:rotate-90 active:scale-95 cursor-pointer"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Image Viewport */}
      <div
        ref={imageContainerRef}
        className="relative flex-1 flex items-center justify-center overflow-hidden px-4 py-2 cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          onClick={handleImageClick}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transition: isDragging ? "none" : "transform 0.25s ease-out",
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          className="relative max-h-[82vh] max-w-[92vw] flex items-center justify-center"
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || "Treatment Diagram"}
            className="max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl pointer-events-none select-none"
            draggable={false}
          />
        </div>

        {/* Previous Image Arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Image Arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom Bar: Instructions & Caption */}
      <footer className="relative z-10 flex flex-col items-center justify-center px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-center gap-1">
        {currentImage.alt && (
          <p className="text-xs sm:text-sm font-medium text-white/90 max-w-[800px]">
            {currentImage.alt}
          </p>
        )}
        <p className="text-[11px] text-white/50">
          Click image or scroll to zoom · Click &amp; drag to pan · Press Esc or ✕ to close
        </p>
      </footer>
    </div>
  );
}
