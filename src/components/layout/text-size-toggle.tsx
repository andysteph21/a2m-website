"use client";

import { ALargeSmall } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** Taille de texte : % appliqué à la racine (le type scale est en rem). */
const MIN = 90;
const MAX = 150;
const STEP = 5;
const DEFAULT = 100;
const STORAGE_KEY = "a2m-text-size";

/** Raccourcis de taille (le « A » illustre l'échelle ; valeur en %). */
const PRESETS: { value: number; label: string; glyph: string }[] = [
  { value: 100, label: "A", glyph: "text-[13px]" },
  { value: 120, label: "A+", glyph: "text-[17px]" },
  { value: 140, label: "A++", glyph: "text-[21px]" },
];

function applySize(size: number) {
  document.documentElement.style.fontSize = `${size}%`;
}

/**
 * Bouton d'accessibilité : ouvre une fenêtre expliquant la fonction et offrant
 * un curseur pour ajuster la taille de tout le texte du site. Préférence
 * persistée et appliquée en direct.
 */
export function TextSizeToggle({ className }: { className?: string }) {
  const t = useTranslations("common");
  const [size, setSize] = useState(DEFAULT);

  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved >= MIN && saved <= MAX) {
      setSize(saved);
      applySize(saved);
    }
  }, []);

  function update(next: number) {
    setSize(next);
    applySize(next);
    localStorage.setItem(STORAGE_KEY, String(next));
  }

  const active = size !== DEFAULT;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={t("textSize")}
          title={t("textSize")}
          className={cn(
            "inline-flex size-8 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
            active
              ? "bg-mist text-emerald-deep"
              : "text-muted hover:bg-anthracite/5 hover:text-anthracite",
            className,
          )}
        >
          <ALargeSmall className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent closeLabel={t("close")}>
        <DialogTitle>{t("textSize")}</DialogTitle>
        <DialogDescription>{t("textSizeDesc")}</DialogDescription>

        <div className="mt-3 flex items-center gap-4">
          <span aria-hidden className="font-display text-muted text-small leading-none">
            A
          </span>
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={size}
            onChange={(e) => update(Number(e.target.value))}
            aria-label={t("textSize")}
            aria-valuetext={`${size}%`}
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-mist accent-emerald-cta"
          />
          <span aria-hidden className="font-display text-[1.6rem] text-muted leading-none">
            A
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => update(preset.value)}
              aria-pressed={size === preset.value}
              aria-label={`${preset.label} · ${preset.value}%`}
              className={cn(
                "flex items-center justify-center gap-1 rounded-sm border py-2 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
                size === preset.value
                  ? "border-emerald-cta bg-emerald-cta/10 text-emerald-deep"
                  : "border-hairline text-muted hover:border-gold hover:text-ink",
              )}
            >
              <span className={cn("font-display font-semibold leading-none", preset.glyph)}>
                {preset.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="tnum font-semibold text-emerald-deep text-small">{size}%</span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => update(DEFAULT)}
              disabled={!active}
            >
              {t("textSizeReset")}
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary" size="sm">
                {t("close")}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
