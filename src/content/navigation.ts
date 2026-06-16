import type { NavSection } from "./types";

/**
 * Arborescence de navigation (sitemap v3) — source unique pour le header,
 * le footer et la page « Plan du site ». Titres bilingues colocalisés.
 */
export const mainNav: NavSection[] = [
  {
    title: { fr: "À propos", en: "About" },
    href: "/about",
    children: [
      { title: { fr: "La conférence A2M", en: "A2M Conference" }, href: "/about" },
      { title: { fr: "Patron d'honneur", en: "Honorary Patron" }, href: "/about/honorary-patron" },
      { title: { fr: "Comité consultatif", en: "Advisory Board" }, href: "/about/advisory-board" },
      {
        title: { fr: "Partenaires stratégiques", en: "Strategic Partners" },
        href: "/about/strategic-partners",
      },
      {
        title: { fr: "Programme de durabilité", en: "Sustainability Programme" },
        href: "/about/sustainability",
      },
      { title: { fr: "Nous joindre", en: "Contact Us" }, href: "/about/contact" },
    ],
  },
  {
    title: { fr: "Programme", en: "Program" },
    href: "/program",
    children: [
      { title: { fr: "Aperçu du programme", en: "Program Overview" }, href: "/program" },
      {
        title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
        href: "/program/ministerial-round-table",
      },
      {
        title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
        href: "/program/women-in-mining",
      },
      {
        title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
        href: "/program/investors-breakfast",
      },
      {
        title: { fr: "Réseautage & événements", en: "Networking & Social Events" },
        href: "/program/networking",
      },
      {
        title: { fr: "Conférenciers & panélistes", en: "Speakers & Panellists" },
        href: "/program/speakers",
      },
    ],
  },
  {
    title: { fr: "Participer", en: "Attend" },
    href: "/attend",
    children: [
      { title: { fr: "Pourquoi participer ?", en: "Why Participate?" }, href: "/attend" },
      {
        title: { fr: "Maillage d'affaires", en: "Business Matchmaking" },
        href: "/attend/matchmaking",
      },
      {
        title: { fr: "S'inscrire comme délégué", en: "Register as a Delegate" },
        href: "/attend/register",
      },
    ],
  },
  {
    title: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    href: "/exhibit-sponsor",
    children: [
      { title: { fr: "Pourquoi exposer", en: "Why Exhibit" }, href: "/exhibit-sponsor" },
      {
        title: { fr: "Opportunités d'exposition", en: "Exhibition Opportunities" },
        href: "/exhibit-sponsor/exhibition",
      },
      {
        title: { fr: "Pourquoi commanditer", en: "Why Sponsor" },
        href: "/exhibit-sponsor/why-sponsor",
      },
      {
        title: { fr: "Opportunités de commandite", en: "Sponsorship Opportunities" },
        href: "/exhibit-sponsor/sponsorship",
      },
      {
        title: { fr: "Associer votre marque", en: "Associate Your Brand" },
        href: "/exhibit-sponsor/associate-your-brand",
      },
    ],
  },
  {
    title: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    href: "/plan-your-visit",
    children: [
      {
        title: { fr: "Lieu & accessibilité", en: "Venue & Accessibility" },
        href: "/plan-your-visit",
      },
      { title: { fr: "Où loger", en: "Where to Stay" }, href: "/plan-your-visit/where-to-stay" },
      {
        title: { fr: "Découvrir Montréal", en: "Discover Montréal" },
        href: "/plan-your-visit/discover-montreal",
      },
      {
        title: { fr: "Délégués internationaux — visa", en: "International Delegates — Visa" },
        href: "/plan-your-visit/visa",
      },
      {
        title: { fr: "Informations utiles", en: "Useful Information" },
        href: "/plan-your-visit/useful-info",
      },
    ],
  },
  {
    title: { fr: "Devenir partenaire", en: "Partner with us" },
    href: "/partner",
    children: [
      { title: { fr: "Devenir conférencier", en: "Become a Speaker" }, href: "/partner/speaker" },
      {
        title: { fr: "Devenir partenaire stratégique", en: "Become a Strategic Partner" },
        href: "/partner/strategic",
      },
      {
        title: { fr: "Devenir partenaire média", en: "Become a Media Partner" },
        href: "/partner/media",
      },
    ],
  },
];
