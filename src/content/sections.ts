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
  | "news"
  | "newsletter";

export interface SubsectionDef {
  /** Ancre (#id) au sein de la page de section. */
  id: string;
  /** Type de rendu. Absent = groupe pur (en-tête + enfants, sans corps propre). */
  kind?: SubsectionKind;
  /** Slug du registre de contenu (kind « content »). */
  contentSlug?: string;
  /** Titre explicite (requis pour les groupes et sous-sections spéciales). */
  title?: Localized;
  /** Sous-éléments imbriqués (menu à 3 niveaux). */
  children?: SubsectionDef[];
  /** Variante (ex. catégorie « news » : internal | external). */
  variant?: string;
}

export interface SectionDef {
  href: string;
  eyebrow: Localized;
  title: Localized;
  lead: Localized;
  subsections: SubsectionDef[];
}

/**
 * Définition des sections, alignée sur Menu.pdf (Menu.md). Chaque section est
 * rendue sur une seule page regroupant ses sous-sections (ancrées), avec un
 * widget de navigation flottant. Source unique pour les pages ET la navigation
 * (jusqu'à 3 niveaux : section › groupe › sous-élément).
 */
export const sections: SectionDef[] = [
  {
    href: "/about",
    eyebrow: { fr: "Aperçu", en: "Overview" },
    title: { fr: "Aperçu d'A2M", en: "A2M Overview" },
    lead: {
      fr: "La conférence, sa gouvernance et son engagement pour un secteur minier responsable.",
      en: "The conference, its governance and its commitment to a responsible mining sector.",
    },
    subsections: [
      {
        id: "conference",
        kind: "content",
        contentSlug: "about",
        title: { fr: "A2M 2027", en: "A2M 2027" },
      },
      { id: "why-participate", kind: "content", contentSlug: "about/why-participate" },
      {
        id: "strategic-partners",
        kind: "content",
        contentSlug: "about/strategic-partners",
        title: { fr: "Reconnaissances institutionnelles", en: "Institutional Endorsements" },
      },
      { id: "advisory-board", kind: "content", contentSlug: "about/advisory-board" },
      { id: "meet-the-team", kind: "content", contentSlug: "about/meet-the-team" },
      { id: "sustainability", kind: "content", contentSlug: "about/sustainability" },
      { id: "contact", kind: "contact", title: { fr: "Nous joindre", en: "Contact Us" } },
    ],
  },
  {
    href: "/program",
    eyebrow: { fr: "Programme", en: "Features" },
    title: { fr: "Programme", en: "Features" },
    lead: {
      fr: "Trois jours de keynotes, panels, rencontres B2B et événements de réseautage (7–9 juin 2027).",
      en: "Three days of keynotes, panels, B2B meetings and networking events (June 7–9, 2027).",
    },
    subsections: [
      {
        id: "sessions",
        kind: "content",
        contentSlug: "program/sessions",
        title: { fr: "Aperçu du programme", en: "Program overview" },
      },
      { id: "speakers", kind: "content", contentSlug: "program/speakers" },
      {
        id: "ministerial-roundtable",
        title: { fr: "Table ronde ministérielle", en: "Ministerial Roundtable" },
        children: [
          {
            id: "ministerial-round-table",
            kind: "content",
            contentSlug: "program/ministerial-round-table",
            title: { fr: "Vue d'ensemble", en: "Overview" },
          },
          {
            id: "canada-africa-strategy",
            kind: "content",
            contentSlug: "program/canada-africa-strategy",
          },
          { id: "honorary-patron", kind: "content", contentSlug: "program/honorary-patron" },
        ],
      },
      { id: "honorary-country", kind: "content", contentSlug: "program/honorary-country" },
      { id: "women-in-mining", kind: "content", contentSlug: "program/women-in-mining" },
      { id: "investors-breakfast", kind: "content", contentSlug: "program/investors-breakfast" },
      {
        id: "matchmaking",
        kind: "matchmaking",
        title: { fr: "Maillage d'affaires", en: "Business Matchmaking" },
      },
      { id: "networking", kind: "content", contentSlug: "program/networking" },
      { id: "schedule", kind: "schedule", title: { fr: "Calendrier", en: "Schedule" } },
    ],
  },
  {
    href: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer ou commanditer", en: "Exhibit or Sponsor" },
    title: { fr: "Exposer ou commanditer", en: "Exhibit or Sponsor" },
    lead: {
      fr: "Présentez votre organisation et associez votre marque à l'événement minier de référence.",
      en: "Showcase your organisation and align your brand with the flagship mining event.",
    },
    subsections: [
      { id: "why-exhibit", kind: "content", contentSlug: "exhibit-sponsor" },
      {
        id: "exhibition",
        kind: "content",
        contentSlug: "exhibit-sponsor/exhibition",
        title: { fr: "Opportunités d'exposition", en: "Exhibition opportunities" },
        children: [
          {
            id: "marketplace",
            kind: "content",
            contentSlug: "exhibit-sponsor/marketplace",
            title: { fr: "A2M Marketplace", en: "A2M Marketplace" },
          },
          {
            id: "explorers-village",
            kind: "content",
            contentSlug: "exhibit-sponsor/explorers-village",
            title: { fr: "Village des explorateurs", en: "Explorers' Village" },
          },
        ],
      },
      { id: "why-sponsor", kind: "content", contentSlug: "exhibit-sponsor/why-sponsor" },
      {
        id: "sponsorship",
        kind: "sponsorship",
        title: { fr: "Opportunités de commandite", en: "Sponsorship Opportunities" },
      },
      {
        id: "exhibitors-sponsors",
        kind: "content",
        contentSlug: "exhibit-sponsor/exhibitors-sponsors",
        title: { fr: "Exposants & commanditaires", en: "Exhibitors & Sponsors" },
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
    subsections: [
      {
        id: "speaker",
        kind: "content",
        contentSlug: "partner/speaker",
        title: { fr: "Devenir conférencier", en: "Become a speaker" },
      },
      {
        id: "strategic",
        kind: "content",
        contentSlug: "partner/strategic",
        title: { fr: "Devenir partenaire stratégique", en: "Become a Strategic Partner" },
      },
      {
        id: "media",
        kind: "content",
        contentSlug: "partner/media",
        title: { fr: "Devenir partenaire média", en: "Become a Media Partner" },
      },
    ],
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
      {
        id: "where-to-stay",
        kind: "content",
        contentSlug: "plan-your-visit/where-to-stay",
        title: { fr: "Hébergement", en: "Book Accommodation" },
      },
      {
        id: "visa",
        kind: "content",
        contentSlug: "plan-your-visit/visa",
        title: { fr: "Demande de lettre d'invitation", en: "Request invitation letter" },
      },
      {
        id: "discover-montreal",
        kind: "content",
        contentSlug: "plan-your-visit/discover-montreal",
      },
      {
        id: "venue",
        kind: "content",
        contentSlug: "plan-your-visit",
        title: { fr: "Lieu & accessibilité", en: "Venue & Accessibility" },
      },
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
    subsections: [
      {
        id: "news-release",
        kind: "news",
        variant: "internal",
        title: { fr: "Communiqués", en: "News Release" },
      },
      {
        id: "market-news",
        kind: "news",
        variant: "external",
        title: { fr: "Actualités du marché", en: "Market News" },
      },
      { id: "sign-up", kind: "newsletter", title: { fr: "S'abonner", en: "Sign up" } },
    ],
  },
];

export const sectionHrefs: string[] = sections.map((s) => s.href);

export function getSection(href: string): SectionDef | undefined {
  return sections.find((s) => s.href === href);
}

/** Titre d'une sous-section (explicite, sinon depuis le registre, sinon l'id). */
export function subsectionTitle(sub: SubsectionDef): Localized {
  if (sub.title) return sub.title;
  if (sub.contentSlug) {
    const content = getPageContent(sub.contentSlug);
    if (content) return content.title;
  }
  return { fr: sub.id, en: sub.id };
}

export interface FlatSubsection {
  sub: SubsectionDef;
  depth: number;
}

/** Aplatit l'arborescence des sous-sections (groupes → enfants) en ordre de rendu. */
export function flattenSubsections(subs: SubsectionDef[], depth = 0): FlatSubsection[] {
  const out: FlatSubsection[] = [];
  for (const sub of subs) {
    out.push({ sub, depth });
    if (sub.children?.length) out.push(...flattenSubsections(sub.children, depth + 1));
  }
  return out;
}
