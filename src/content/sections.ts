import { getPageContent } from "./pages";
import type { Localized } from "./types";

/** Type de rendu d'une sous-section. */
export type SubsectionKind =
  | "content"
  | "register"
  | "matchmaking"
  | "contact"
  | "sponsorship"
  | "schedule"
  | "news";

export interface SubsectionDef {
  /** Ancre (#id) au sein de la page de section. */
  id: string;
  kind: SubsectionKind;
  /** Slug du registre de contenu (kind « content »). */
  contentSlug?: string;
  /** Titre explicite (requis pour les sous-sections spéciales). */
  title?: Localized;
}

export interface SectionDef {
  href: string;
  eyebrow: Localized;
  title: Localized;
  lead: Localized;
  subsections: SubsectionDef[];
}

/**
 * Définition des six sections. Chaque section est rendue sur une seule page
 * regroupant toutes ses sous-sections (ancrées), avec un widget de navigation
 * flottant. Source unique pour les pages de section ET la navigation.
 */
export const sections: SectionDef[] = [
  {
    href: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "À propos d'A2M", en: "About A2M" },
    lead: {
      fr: "La conférence, sa gouvernance et son engagement pour un secteur minier responsable.",
      en: "The conference, its governance and its commitment to a responsible mining sector.",
    },
    subsections: [
      { id: "conference", kind: "content", contentSlug: "about" },
      { id: "why-participate", kind: "content", contentSlug: "about/why-participate" },
      { id: "advisory-board", kind: "content", contentSlug: "about/advisory-board" },
      { id: "meet-the-team", kind: "content", contentSlug: "about/meet-the-team" },
      { id: "strategic-partners", kind: "content", contentSlug: "about/strategic-partners" },
      { id: "sustainability", kind: "content", contentSlug: "about/sustainability" },
      { id: "contact", kind: "contact", title: { fr: "Nous joindre", en: "Contact Us" } },
    ],
  },
  {
    href: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Programme", en: "Program" },
    lead: {
      fr: "Trois jours de keynotes, panels, rencontres B2B et événements de réseautage (7–9 juin 2027).",
      en: "Three days of keynotes, panels, B2B meetings and networking events (June 7–9, 2027).",
    },
    subsections: [
      { id: "schedule", kind: "schedule", title: { fr: "Calendrier", en: "Schedule" } },
      { id: "honorary-patron", kind: "content", contentSlug: "program/honorary-patron" },
      { id: "honorary-country", kind: "content", contentSlug: "program/honorary-country" },
      { id: "sessions", kind: "content", contentSlug: "program/sessions" },
      {
        id: "ministerial-round-table",
        kind: "content",
        contentSlug: "program/ministerial-round-table",
      },
      {
        id: "canada-africa-strategy",
        kind: "content",
        contentSlug: "program/canada-africa-strategy",
      },
      { id: "women-in-mining", kind: "content", contentSlug: "program/women-in-mining" },
      { id: "investors-breakfast", kind: "content", contentSlug: "program/investors-breakfast" },
      { id: "networking", kind: "content", contentSlug: "program/networking" },
      {
        id: "matchmaking",
        kind: "matchmaking",
        title: { fr: "Maillage d'affaires", en: "Business Matchmaking" },
      },
      { id: "speakers", kind: "content", contentSlug: "program/speakers" },
    ],
  },
  {
    href: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    title: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    lead: {
      fr: "Présentez votre organisation et associez votre marque à l'événement minier de référence.",
      en: "Showcase your organisation and align your brand with the flagship mining event.",
    },
    subsections: [
      { id: "why-exhibit", kind: "content", contentSlug: "exhibit-sponsor" },
      { id: "exhibition", kind: "content", contentSlug: "exhibit-sponsor/exhibition" },
      { id: "why-sponsor", kind: "content", contentSlug: "exhibit-sponsor/why-sponsor" },
      {
        id: "sponsorship",
        kind: "sponsorship",
        title: { fr: "Opportunités de commandite", en: "Sponsorship Opportunities" },
      },
      { id: "associate", kind: "content", contentSlug: "exhibit-sponsor/associate-your-brand" },
    ],
  },
  {
    href: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir partenaire", en: "Partner with us" },
    lead: {
      fr: "Conférencier, partenaire stratégique ou média : contribuez à A2M 2027.",
      en: "Speaker, strategic partner or media: contribute to A2M 2027.",
    },
    subsections: [{ id: "overview", kind: "content", contentSlug: "partner" }],
  },
  {
    href: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    lead: {
      fr: "Lieu, hébergement, découverte de Montréal et informations pratiques pour les délégués.",
      en: "Venue, accommodation, discovering Montréal and practical information for delegates.",
    },
    subsections: [
      {
        id: "register",
        kind: "register",
        title: { fr: "S'inscrire comme délégué", en: "Register as a Delegate" },
      },
      { id: "venue", kind: "content", contentSlug: "plan-your-visit" },
      { id: "where-to-stay", kind: "content", contentSlug: "plan-your-visit/where-to-stay" },
      {
        id: "discover-montreal",
        kind: "content",
        contentSlug: "plan-your-visit/discover-montreal",
      },
      { id: "visa", kind: "content", contentSlug: "plan-your-visit/visa" },
      { id: "useful-info", kind: "content", contentSlug: "plan-your-visit/useful-info" },
    ],
  },
  {
    href: "/news",
    eyebrow: { fr: "Actualités", en: "News" },
    title: { fr: "Actualités", en: "News" },
    lead: {
      fr: "Annonces, articles et couverture médiatique autour d'A2M 2027.",
      en: "Announcements, articles and media coverage around A2M 2027.",
    },
    subsections: [{ id: "articles", kind: "news", title: { fr: "Actualités", en: "News" } }],
  },
];

export const sectionHrefs: string[] = sections.map((s) => s.href);

export function getSection(href: string): SectionDef | undefined {
  return sections.find((s) => s.href === href);
}

/** Titre d'une sous-section (depuis le registre pour « content », sinon explicite). */
export function subsectionTitle(sub: SubsectionDef): Localized {
  if (sub.title) return sub.title;
  if (sub.contentSlug) {
    const content = getPageContent(sub.contentSlug);
    if (content) return content.title;
  }
  return { fr: sub.id, en: sub.id };
}
