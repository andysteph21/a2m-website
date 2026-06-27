import type { ImageCredit, Localized } from "../types";

export type ArticleCategory = "internal" | "external";

export interface Article {
  id: string;
  category: ArticleCategory;
  /** Thème éditorial (alimente les onglets de filtre « par sujet »). */
  topic: Localized;
  /** Date ISO (YYYY-MM-DD). */
  date: string;
  title: Localized;
  excerpt: Localized;
  /** Lien de l'article (placeholder « # » pour les articles internes à venir). */
  href: string;
  /** Ouvre dans un nouvel onglet (articles externes). */
  external: boolean;
  image?: {
    src?: string;
    alt?: Localized;
    label: Localized;
    credit?: ImageCredit;
  };
}

/**
 * Articles d'actualité — internes (A2M) et externes (presse, partenaires).
 * Placeholders pour la v1 : les liens internes pointent vers « # ».
 */
export const articles: Article[] = [
  {
    id: "cote-divoire-honorary-country",
    category: "internal",
    topic: { fr: "Événement", en: "Event" },
    date: "2026-09-15",
    title: {
      fr: "La Côte d'Ivoire désignée Pays à l'honneur d'A2M 2027",
      en: "Côte d'Ivoire named Honorary Country for A2M 2027",
    },
    excerpt: {
      fr: "Première destination de l'exploration aurifère en Afrique de l'Ouest, la Côte d'Ivoire conduira une délégation de haut niveau à Montréal.",
      en: "The #1 gold exploration destination in West Africa will lead a high-level delegation to Montréal.",
    },
    href: "#",
    external: false,
    image: {
      label: {
        fr: "Visuel : Côte d'Ivoire / secteur minier",
        en: "Visual: Côte d'Ivoire / mining sector",
      },
    },
  },
  {
    id: "ministerial-round-table-agenda",
    category: "internal",
    topic: { fr: "Politique", en: "Policy" },
    date: "2026-10-02",
    title: {
      fr: "L'ordre du jour de la Table ronde ministérielle dévoilé",
      en: "Ministerial Round Table agenda revealed",
    },
    excerpt: {
      fr: "Le premier dialogue politique Canada-Afrique sur les minéraux critiques en sol nord-américain précisera ses axes de travail.",
      en: "The first Canada-Africa political dialogue on critical minerals on North American soil sets out its focus areas.",
    },
    href: "#",
    external: false,
    image: {
      label: { fr: "Visuel : dialogue ministériel", en: "Visual: ministerial dialogue" },
    },
  },
  {
    id: "investment-showcase-call",
    category: "internal",
    topic: { fr: "Investissement", en: "Investment" },
    date: "2026-10-20",
    title: {
      fr: "L'Investment Showcase ouvre son appel à projets",
      en: "Investment Showcase opens its call for projects",
    },
    excerpt: {
      fr: "Les projets miniers africains pré-sélectionnés seront présentés à un public d'investisseurs institutionnels et d'IFD.",
      en: "Pre-screened African mining projects will be presented to institutional investors and DFIs.",
    },
    href: "#",
    external: false,
    image: {
      label: { fr: "Visuel : présentation de projets", en: "Visual: project showcase" },
    },
  },
  {
    id: "women-in-mining-programme",
    category: "internal",
    topic: { fr: "Événement", en: "Event" },
    date: "2026-11-05",
    title: {
      fr: "Le programme du Forum Femmes & Mines annoncé",
      en: "Women in Mining Forum programme announced",
    },
    excerpt: {
      fr: "Keynotes, panels et réseautage dédiés au leadership des femmes dans le secteur minier au Canada et en Afrique.",
      en: "Keynotes, panels and networking dedicated to women's leadership in mining across Canada and Africa.",
    },
    href: "#",
    external: false,
    image: {
      label: { fr: "Visuel : Forum Femmes & Mines", en: "Visual: Women in Mining Forum" },
    },
  },
  {
    id: "sustainability-pledge",
    category: "internal",
    topic: { fr: "ESG", en: "ESG" },
    date: "2026-11-18",
    title: {
      fr: "Programme de durabilité : jusqu'à 10 % des revenus engagés",
      en: "Sustainability Programme: up to 10% of revenues pledged",
    },
    excerpt: {
      fr: "A2M dirige une part de ses revenus vers l'éducation des enfants et l'autonomisation des femmes en Afrique.",
      en: "A2M directs a share of its revenues to children's education and women's empowerment across Africa.",
    },
    href: "#",
    external: false,
    image: {
      label: { fr: "Visuel : impact communautaire", en: "Visual: community impact" },
    },
  },
  {
    id: "early-bird-open",
    category: "internal",
    topic: { fr: "Événement", en: "Event" },
    date: "2026-09-01",
    title: {
      fr: "Les inscriptions Early Bird sont ouvertes",
      en: "Early Bird registration now open",
    },
    excerpt: {
      fr: "Profitez du tarif préférentiel pour réserver votre place à A2M 2027 avant le 31 décembre 2026.",
      en: "Take advantage of the preferential rate to secure your place at A2M 2027 before December 31, 2026.",
    },
    href: "#",
    external: false,
    image: {
      label: { fr: "Visuel : inscription des délégués", en: "Visual: delegate registration" },
    },
  },
  {
    id: "canada-africa-strategy",
    category: "external",
    topic: { fr: "Politique", en: "Policy" },
    date: "2025-03-06",
    title: {
      fr: "Stratégie du Canada pour l'Afrique : ce que cela signifie pour la mine",
      en: "Canada's Africa Strategy: what it means for mining",
    },
    excerpt: {
      fr: "Lancée en mars 2025, la première stratégie globale du Canada pour l'Afrique pose les bases d'une coopération économique renforcée.",
      en: "Launched in March 2025, Canada's first comprehensive Africa Strategy sets the foundation for deeper economic cooperation.",
    },
    href: "https://www.canada.ca",
    external: true,
    image: {
      label: { fr: "Visuel : politique Canada-Afrique", en: "Visual: Canada-Africa policy" },
    },
  },
  {
    id: "tsx-mining-finance",
    category: "external",
    topic: { fr: "Investissement", en: "Investment" },
    date: "2026-02-12",
    title: {
      fr: "Le TSX, moteur du financement minier mondial",
      en: "TSX remains the engine of global mining finance",
    },
    excerpt: {
      fr: "Montréal et le TSX/TSX-V demeurent au cœur du financement des sociétés minières actives en Afrique.",
      en: "Montréal and the TSX/TSX-V remain central to financing mining companies active across Africa.",
    },
    href: "https://www.pdac.ca",
    external: true,
    image: {
      label: { fr: "Visuel : marchés de financement minier", en: "Visual: mining finance markets" },
    },
  },
  {
    id: "afcfta-critical-minerals",
    category: "external",
    topic: { fr: "ESG", en: "ESG" },
    date: "2026-01-22",
    title: {
      fr: "La ZLECAf et l'avenir des minéraux critiques africains",
      en: "AfCFTA and the future of African critical minerals",
    },
    excerpt: {
      fr: "Le cadre continental accélère la transformation locale avant export — un enjeu stratégique pour les chaînes d'approvisionnement.",
      en: "The continental framework accelerates local processing before export — a strategic issue for supply chains.",
    },
    href: "https://miningindaba.com/home",
    external: true,
    image: {
      label: { fr: "Visuel : minéraux critiques", en: "Visual: critical minerals" },
    },
  },
];
