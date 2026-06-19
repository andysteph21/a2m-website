"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export interface KpiView {
  value: string;
  label: string;
}

/**
 * Bandeau de chiffres-clés (KPI) — motif signature + « underline draw » validé
 * (variante C). Joué UNE FOIS au premier passage dans le viewport (one-shot via
 * IntersectionObserver), puis figé. Sous prefers-reduced-motion : tout est
 * visible d'emblée (états initiaux gardés derrière le media query, globals.css).
 */
export function KpiBandeau({ items }: { items: KpiView[] }) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealed]);

  return (
    <section
      ref={ref}
      className={cn(
        "a2m-motif relative overflow-hidden bg-emerald-deep text-ivory",
        revealed && "a2m-kpi-on",
      )}
    >
      <Container className="relative z-10 grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <span className="a2m-kpi-rule mb-3 h-0.5 w-8 bg-gold" aria-hidden="true" />
            <span className="a2m-kpi-num tnum font-display font-bold text-data-xl text-champagne">
              {item.value}
            </span>
            <span className="a2m-kpi-label mt-2 font-semibold text-[11px] text-ivory/80 uppercase tracking-[0.18em]">
              {item.label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
