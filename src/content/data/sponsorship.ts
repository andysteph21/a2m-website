import type { Localized } from "../types";

export interface SponsorshipTier {
  name: Localized;
  tagline: Localized;
  featured?: boolean;
  benefits: Localized[];
}

/** Paliers de commandite (avantages indicatifs, tarifs sur demande). */
export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: { fr: "Platine", en: "Platinum" },
    tagline: { fr: "Visibilité maximale", en: "Maximum visibility" },
    featured: true,
    benefits: [
      {
        fr: "Logo en première position sur tous les supports",
        en: "Top-position logo on all materials",
      },
      { fr: "Intervention keynote", en: "Keynote speaking slot" },
      { fr: "Stand premium au salon", en: "Premium exhibition booth" },
      { fr: "Lot de passes délégués", en: "Bundle of delegate passes" },
    ],
  },
  {
    name: { fr: "Or", en: "Gold" },
    tagline: { fr: "Forte présence", en: "Strong presence" },
    benefits: [
      { fr: "Logo bien visible sur les supports", en: "Prominent logo on materials" },
      { fr: "Stand au salon", en: "Exhibition booth" },
      { fr: "Passes délégués", en: "Delegate passes" },
    ],
  },
  {
    name: { fr: "Argent", en: "Silver" },
    tagline: { fr: "Présence ciblée", en: "Targeted presence" },
    benefits: [
      { fr: "Logo sur les supports", en: "Logo on materials" },
      { fr: "Présence au salon", en: "Exhibition presence" },
    ],
  },
  {
    name: { fr: "Bronze", en: "Bronze" },
    tagline: { fr: "Soutien", en: "Supporter" },
    benefits: [
      { fr: "Mention sur le site et la signalétique", en: "Mention on website and signage" },
      { fr: "Passe délégué", en: "Delegate pass" },
    ],
  },
];
