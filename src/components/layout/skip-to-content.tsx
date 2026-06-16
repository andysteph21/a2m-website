"use client";

import { useTranslations } from "next-intl";

/** Lien d'évitement pour l'accessibilité clavier. */
export function SkipToContent() {
  const t = useTranslations("common");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-emerald-cta focus:px-4 focus:py-2 focus:font-semibold focus:text-[12px] focus:text-white focus:uppercase focus:tracking-[0.06em]"
    >
      {t("skipToContent")}
    </a>
  );
}
