"use client";

import { ALargeSmall } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Niveaux de taille de texte (% appliqué à la racine, le type scale est en rem). */
const SIZES = [100, 112.5, 125];
const STORAGE_KEY = "a2m-text-size";

/**
 * Bouton d'accessibilité : augmente la taille du texte du site en cyclant
 * 100 % → 112,5 % → 125 % (puis retour). Préférence persistée.
 */
export function TextSizeToggle({ className }: { className?: string }) {
  const t = useTranslations("common");
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    const i = SIZES.indexOf(saved);
    if (i > 0) {
      setLevel(i);
      document.documentElement.style.fontSize = `${saved}%`;
    }
  }, []);

  function cycle() {
    const next = (level + 1) % SIZES.length;
    setLevel(next);
    document.documentElement.style.fontSize = `${SIZES[next]}%`;
    localStorage.setItem(STORAGE_KEY, String(SIZES[next]));
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={t("textSize")}
      title={t("textSize")}
      aria-pressed={level > 0}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
        level > 0
          ? "bg-mist text-emerald-deep"
          : "text-muted hover:bg-anthracite/5 hover:text-anthracite",
        className,
      )}
    >
      <ALargeSmall className="size-5" />
    </button>
  );
}
