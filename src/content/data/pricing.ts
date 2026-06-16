import type { Localized } from "../types";

export interface PricingTier {
  name: Localized;
  price: string;
  period?: Localized;
  featured?: boolean;
  features: Localized[];
}

/** Tarifs délégué A2M 2027 (CAD, hors taxes) — barème indicatif à confirmer. */
export const delegateTiers: PricingTier[] = [
  {
    name: { fr: "Early Bird 1", en: "Early Bird 1" },
    price: "1 050 $",
    period: { fr: "CAD · hors taxes", en: "CAD · excl. taxes" },
    features: [
      { fr: "Accès complet à la conférence", en: "Full conference access" },
      { fr: "Maillage d'affaires B2B", en: "B2B business matchmaking" },
      { fr: "Réceptions de réseautage", en: "Networking receptions" },
    ],
  },
  {
    name: { fr: "Early Bird 2", en: "Early Bird 2" },
    price: "1 450 $",
    period: { fr: "CAD · hors taxes", en: "CAD · excl. taxes" },
    featured: true,
    features: [
      { fr: "Accès complet à la conférence", en: "Full conference access" },
      { fr: "Maillage d'affaires B2B", en: "B2B business matchmaking" },
      { fr: "Réceptions de réseautage", en: "Networking receptions" },
      { fr: "Forum Femmes & Mines inclus", en: "Women in Mining Forum included" },
    ],
  },
  {
    name: { fr: "Early Bird 3", en: "Early Bird 3" },
    price: "1 750 $",
    period: { fr: "CAD · hors taxes", en: "CAD · excl. taxes" },
    features: [
      { fr: "Accès complet à la conférence", en: "Full conference access" },
      { fr: "Maillage d'affaires B2B", en: "B2B business matchmaking" },
      { fr: "Réceptions de réseautage", en: "Networking receptions" },
    ],
  },
  {
    name: { fr: "Plein tarif", en: "Full Price" },
    price: "2 050 $",
    period: { fr: "CAD · hors taxes", en: "CAD · excl. taxes" },
    features: [
      { fr: "Accès complet à la conférence", en: "Full conference access" },
      { fr: "Maillage d'affaires B2B", en: "B2B business matchmaking" },
      { fr: "Réceptions de réseautage", en: "Networking receptions" },
    ],
  },
];
