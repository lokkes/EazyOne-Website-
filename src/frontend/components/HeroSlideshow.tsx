"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

const slides = [
  {
    alt: "Eazyone benefits and metrics",
    src: "/images/hero/eazyone-slide-2.png"
  },
  {
    alt: "Eazyone buying, customization and sourcing services",
    src: "/images/hero/eazyone-slide-3.png"
  }
] as const;

const SLIDE_COUNT = slides.length + 1;
const ROTATION_DELAY = 8_000;

export function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<number[]>([]);
  const [manualReset, setManualReset] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % SLIDE_COUNT);
    }, ROTATION_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeSlide, manualReset, reducedMotion]);

  function selectSlide(index: number) {
    setActiveSlide(index);
    setManualReset((current) => current + 1);
  }

  function markSlideFailed(index: number) {
    setFailedSlides((current) =>
      current.includes(index) ? current : [...current, index]
    );
  }

  return (
    <div className="relative min-h-[460px] overflow-hidden bg-[#d8d0c4] lg:min-h-[690px]">
      <PremiumImage
        alt="Eazyone hero product and manufacturing"
        label="HERO IMAGE PLACEHOLDER"
        priority
        src="/images/hero/homepage.jpg"
      />

      {slides.map((slide, slideIndex) => {
        const index = slideIndex + 1;

        if (failedSlides.includes(index)) {
          return null;
        }

        return (
          <div
            aria-hidden={activeSlide !== index}
            className={`absolute inset-0 bg-[#f4f1eb] transition-opacity duration-700 motion-reduce:transition-none ${
              activeSlide === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            key={slide.src}
          >
            <Image
              alt={slide.alt}
              className="object-contain"
              fill
              loading="eager"
              onError={() => markSlideFailed(index)}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={slide.src}
            />
          </div>
        );
      })}

      <div
        aria-label="Hero slides"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="group"
      >
        {Array.from({ length: SLIDE_COUNT }, (_, index) => (
          <button
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={activeSlide === index}
            className={`h-2.5 w-2.5 rounded-full border border-black/60 transition-colors motion-reduce:transition-none ${
              activeSlide === index ? "bg-black" : "bg-[#f4f1eb]/90"
            }`}
            key={index}
            onClick={() => selectSlide(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
