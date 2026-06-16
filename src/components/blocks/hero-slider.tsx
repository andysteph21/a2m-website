"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSlideView {
  eyebrow: string;
  title: string;
  text: string;
}

interface HeroSliderProps {
  slides: HeroSlideView[];
  registerLabel: string;
  registerUrl: string;
  programLabel: string;
  programUrl: string;
  prevLabel: string;
  nextLabel: string;
}

export function HeroSlider({
  slides,
  registerLabel,
  registerUrl,
  programLabel,
  programUrl,
  prevLabel,
  nextLabel,
}: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const id = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      className="relative overflow-hidden bg-emerald-deep text-ivory"
      aria-roledescription="carousel"
      aria-label="A2M 2027"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
            >
              <Container className="flex min-h-[460px] flex-col justify-center py-20 lg:min-h-[560px]">
                <span className="font-semibold text-[11px] text-champagne uppercase tracking-[0.28em]">
                  {slide.eyebrow}
                </span>
                <h1 className="mt-5 max-w-[860px] font-display font-bold text-[2.25rem] text-ivory leading-[1.1] tracking-[-0.015em] sm:text-[2.75rem] lg:text-display">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-[620px] text-lead text-champagne/85">{slide.text}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild variant="prestige" size="lg">
                    <a href={registerUrl} target="_blank" rel="noopener noreferrer">
                      {registerLabel}
                      <ExternalLink />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="border-champagne text-champagne hover:bg-champagne hover:text-emerald-deep"
                  >
                    <a href={programUrl}>{programLabel}</a>
                  </Button>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <Container className="pointer-events-none absolute inset-x-0 bottom-8 flex items-center justify-between">
        <div className="pointer-events-auto flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`${i + 1}`}
              aria-current={i === selected}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === selected ? "w-8 bg-champagne" : "w-4 bg-champagne/40 hover:bg-champagne/70",
              )}
            />
          ))}
        </div>
        <div className="pointer-events-auto hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label={prevLabel}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-emerald-deep"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label={nextLabel}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-emerald-deep"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
