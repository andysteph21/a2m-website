"use client";

import { List, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export interface SectionNavItem {
  id: string;
  label: string;
  /** Niveau d'imbrication (0 = top, 1 = sous-élément d'un groupe). */
  depth?: number;
}

/**
 * Navigation de sous-sections avec scrollspy. Deux présentations selon l'écran :
 * - desktop (lg+) : sous-barre horizontale collante sous l'en-tête principal ;
 * - mobile/tablette (< lg) : widget flottant en bas à droite.
 */
export function SectionNav({ items, label }: { items: SectionNavItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scrollspy : la sous-section active est la dernière dont le haut est passé
    // sous l'en-tête (+ sous-barre). Robuste pour les sections courtes ou longues.
    const onScroll = () => {
      const threshold = 150;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  // Garde la puce active visible dans la sous-barre horizontale (desktop).
  useEffect(() => {
    barRef.current
      ?.querySelector(`[data-nav-id="${active}"]`)
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  const activeLabel = items.find((i) => i.id === active)?.label ?? label;

  return (
    <>
      {/* Desktop : sous-barre collante sous l'en-tête principal. L'offset suit la
          hauteur de l'en-tête (logo responsive) : 127px en lg, 157px en xl. */}
      <div className="sticky top-24 z-30 hidden border-hairline border-b bg-ivory/95 backdrop-blur lg:top-[127px] lg:block xl:top-[157px]">
        <Container className="flex items-center gap-4">
          <span className="shrink-0 font-semibold text-[10px] text-taupe uppercase tracking-[0.18em]">
            {label} :
          </span>
          <nav
            ref={barRef}
            aria-label={label}
            className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-nav-id={item.id}
                aria-current={item.id === active ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-small transition-colors",
                  item.id === active
                    ? "bg-mist text-emerald-deep"
                    : "text-muted hover:bg-anthracite/5 hover:text-anthracite",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Mobile/tablette : widget flottant */}
      <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6 lg:hidden print:hidden">
        {open && (
          <nav
            aria-labelledby="section-nav-title"
            className="max-h-[60vh] w-[min(80vw,264px)] overflow-y-auto rounded-sm border border-hairline bg-card/95 p-2 shadow-card-hover backdrop-blur"
          >
            <p
              id="section-nav-title"
              className="px-3 py-2 font-semibold text-[10px] text-taupe uppercase tracking-[0.18em]"
            >
              {label}
            </p>
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={item.id === active ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-sm py-2 pr-3 text-small transition-colors",
                      item.depth ? "pl-8" : "pl-3",
                      item.id === active
                        ? "bg-mist font-semibold text-emerald-deep"
                        : "text-muted hover:bg-anthracite/5 hover:text-anthracite",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 shrink-0 rounded-full",
                        item.id === active ? "bg-emerald-cta" : "bg-hairline",
                      )}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={label}
          className="inline-flex h-12 items-center gap-2 rounded-sm bg-emerald-cta px-4 text-white shadow-emerald transition-colors hover:bg-emerald-deep focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2"
        >
          {open ? <X className="size-5" /> : <List className="size-5" />}
          <span className="hidden max-w-[170px] truncate font-semibold text-[12px] uppercase tracking-[0.06em] sm:inline">
            {open ? label : activeLabel}
          </span>
        </button>
      </div>
    </>
  );
}
