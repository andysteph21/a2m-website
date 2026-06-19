import type { ReactNode } from "react";
import { MineralBackdrop } from "@/components/blocks/mineral-backdrop";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section";
import type { Localized } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Business pictos — Direction A « Ligne » (recommandée/validée, trait 1.5px). */
export type PictoName = "resources" | "connections" | "investment" | "impact" | "sustainability";

const PICTO_PATHS: Record<PictoName, ReactNode> = {
  resources: (
    <>
      <path d="M24 8l8 6v10l-8 6-8-6V14z" />
      <line x1="10" y1="38" x2="38" y2="38" />
      <line x1="24" y1="30" x2="24" y2="38" />
    </>
  ),
  connections: (
    <>
      <circle cx="12" cy="14" r="4" />
      <circle cx="36" cy="12" r="4" />
      <circle cx="24" cy="34" r="4" />
      <line x1="15" y1="17" x2="21" y2="31" />
      <line x1="33" y1="15" x2="27" y2="31" />
      <line x1="16" y1="14" x2="32" y2="12" />
    </>
  ),
  investment: (
    <>
      <polyline points="8 36 18 26 26 30 40 14" />
      <polyline points="32 14 40 14 40 22" />
    </>
  ),
  impact: (
    <>
      <circle cx="24" cy="24" r="5" />
      <circle cx="24" cy="24" r="12" />
      <circle cx="24" cy="24" r="19" />
    </>
  ),
  sustainability: (
    <>
      <path d="M24 40c-8 0-14-6-14-14 0-10 8-16 14-18 6 2 14 8 14 18 0 8-6 14-14 14z" />
      <line x1="24" y1="16" x2="24" y2="40" />
      <path d="M24 26c-3-1-6-4-6-8M24 22c3-1 6-4 6-8" />
    </>
  ),
};

/** Picto métier seul (SVG ligne, terminaisons square + miter). */
export function BusinessPicto({ name, className }: { name: PictoName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PICTO_PATHS[name]}
    </svg>
  );
}

interface ValueDef {
  name: PictoName;
  /** ★ : l'or est réservé aux pictos étoilés (règle brand book). */
  gold?: boolean;
  title: Localized;
  text: Localized;
}

const VALUES: ValueDef[] = [
  {
    name: "resources",
    title: { fr: "Ressources critiques", en: "Critical resources" },
    text: {
      fr: "Les minéraux qui alimentent la transition énergétique mondiale.",
      en: "The minerals powering the global energy transition.",
    },
  },
  {
    name: "connections",
    title: { fr: "Connexions", en: "Connections" },
    text: {
      fr: "Le bon interlocuteur, au bon moment — maillage d'affaires ciblé.",
      en: "The right counterpart, at the right time — targeted matchmaking.",
    },
  },
  {
    name: "investment",
    gold: true,
    title: { fr: "Investissement", en: "Investment" },
    text: {
      fr: "Du capital nord-américain orienté vers les projets africains.",
      en: "North American capital directed toward African projects.",
    },
  },
  {
    name: "impact",
    gold: true,
    title: { fr: "Impact", en: "Impact" },
    text: {
      fr: "Une valeur partagée et durable pour les communautés minières.",
      en: "Shared, lasting value for mining communities.",
    },
  },
  {
    name: "sustainability",
    title: { fr: "Durabilité", en: "Sustainability" },
    text: {
      fr: "Un secteur minier responsable, mesuré et transparent.",
      en: "A responsible, measured and transparent mining sector.",
    },
  },
];

const COPY = {
  fr: { eyebrow: "Nos valeurs", title: "Ce qui guide A2M" },
  en: { eyebrow: "Our values", title: "What guides A2M" },
} as const;

/** Bandeau « valeurs » illustré par les Business pictos, sur fond d'icônes minérales. */
export function ValuesBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="a2m-reveal relative overflow-hidden bg-surface">
      <MineralBackdrop />
      <Container className="relative z-10 py-16 lg:py-20">
        <SectionHeading align="center" eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {VALUES.map((v) => (
            <div key={v.name} className="flex flex-col items-center text-center">
              <span
                className={cn(
                  "inline-flex size-16 items-center justify-center rounded-sm border bg-card shadow-card",
                  v.gold ? "border-gold text-gold" : "border-hairline text-emerald-cta",
                )}
              >
                <BusinessPicto name={v.name} className="size-8" />
              </span>
              <h3 className="mt-4 font-display font-semibold text-[15px] text-ink">
                {pick(v.title, locale)}
              </h3>
              <p className="mt-1.5 text-small text-muted leading-[1.5]">{pick(v.text, locale)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
