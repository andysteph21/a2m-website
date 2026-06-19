import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Icônes « minerais critiques » (signature géométrique, trait 1.5px). */
const MINERAL_PATHS: Record<string, ReactNode> = {
  cobalt: (
    <>
      <path d="M12 3l6 4v10l-6 4-6-4V7z" />
      <path d="M12 3v18M6 7l12 10M18 7L6 17" />
    </>
  ),
  lithium: (
    <>
      <path d="M12 2l5 7-5 13L7 9z" />
      <line x1="7" y1="9" x2="17" y2="9" />
    </>
  ),
  copper: (
    <>
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  nickel: (
    <>
      <path d="M12 3 4 9v6l8 6 8-6V9z" />
      <path d="M4 9l8 6 8-6M12 21v-6" />
    </>
  ),
  ree: (
    <>
      <circle cx="8" cy="9" r="4" />
      <circle cx="16" cy="9" r="4" />
      <circle cx="12" cy="16" r="4" />
    </>
  ),
  manganese: (
    <>
      <path d="M4 16L12 4l8 12z" />
      <line x1="8" y1="16" x2="12" y2="10" />
      <line x1="16" y1="16" x2="12" y2="10" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </>
  ),
};

function MineralIcon({
  shape,
  className,
  style,
}: {
  shape: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {MINERAL_PATHS[shape]}
    </svg>
  );
}

interface Placement {
  shape: string;
  cls: string;
  dur: string;
  delay: string;
}

/** Dispersion fixe (déterministe — pas de Math.random côté SSR). */
const PLACEMENTS: Placement[] = [
  {
    shape: "cobalt",
    cls: "top-[16%] left-[6%] size-12 text-emerald-cta/10",
    dur: "9s",
    delay: "0s",
  },
  { shape: "lithium", cls: "top-[62%] left-[22%] size-10 text-gold/15", dur: "11s", delay: "1.2s" },
  {
    shape: "copper",
    cls: "top-[12%] left-[45%] size-14 text-emerald-cta/8",
    dur: "10s",
    delay: "0.6s",
  },
  {
    shape: "ree",
    cls: "top-[70%] left-[58%] size-11 text-emerald-cta/10",
    dur: "12s",
    delay: "2s",
  },
  { shape: "nickel", cls: "top-[22%] left-[80%] size-16 text-gold/12", dur: "13s", delay: "0.3s" },
  {
    shape: "manganese",
    cls: "top-[64%] left-[90%] size-10 text-emerald-cta/10",
    dur: "9.5s",
    delay: "1.6s",
  },
];

/** Fond décoratif d'icônes minérales en flottement doux (reduced-motion safe). */
export function MineralBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {PLACEMENTS.map((p) => (
        <MineralIcon
          key={`${p.shape}-${p.cls}`}
          shape={p.shape}
          className={cn("a2m-floaticon absolute", p.cls)}
          style={{ "--a2m-float-dur": p.dur, animationDelay: p.delay } as CSSProperties}
        />
      ))}
    </div>
  );
}
