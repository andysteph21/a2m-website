import type { Localized } from "../types";

export interface PricingTier {
  name: Localized;
  price: string;
  period?: Localized;
  featured?: boolean;
  features: Localized[];
}

/** Inclus dans toutes les formules délégué (contenu V4). */
const includedAll: Localized[] = [
  { fr: "Accès complet au programme", en: "Full programme access" },
  { fr: "Accès au salon d'exposition", en: "Exhibition hall access" },
  { fr: "Événements de réseautage", en: "Networking events" },
  { fr: "Plateforme de maillage A2M", en: "A2M Matchmaking platform" },
  {
    fr: "Programme officiel + annuaire post-événement",
    en: "Official programme + post-event directory",
  },
];

/** Barème délégué A2M 2027 (CAD, hors taxes) — contenu V4. */
export const delegateTiers: PricingTier[] = [
  {
    name: { fr: "Early Bird 1", en: "Early Bird 1" },
    price: "1 050 $",
    period: { fr: "1 sept. – 31 déc. 2026", en: "Sep 1 – Dec 31, 2026" },
    features: includedAll,
  },
  {
    name: { fr: "Early Bird 2", en: "Early Bird 2" },
    price: "1 312 $",
    period: { fr: "1 janv. – 31 mars 2027", en: "Jan 1 – Mar 31, 2027" },
    featured: true,
    features: includedAll,
  },
  {
    name: { fr: "Early Bird 3", en: "Early Bird 3" },
    price: "1 640 $",
    period: { fr: "1 avr. – 31 mai 2027", en: "Apr 1 – May 31, 2027" },
    features: includedAll,
  },
  {
    name: { fr: "Plein tarif", en: "Full Price" },
    price: "2 050 $",
    period: { fr: "dès le 1 juin 2027", en: "From June 1, 2027" },
    features: includedAll,
  },
];
