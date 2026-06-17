import type { Localized } from "../types";

export interface HeroSlide {
  eyebrow: Localized;
  title: Localized;
  text: Localized;
  /** Description de l'image de fond attendue (placeholder). */
  image: Localized;
}

export interface Kpi {
  value: string;
  label: Localized;
}

export interface Pillar {
  key: string;
  title: Localized;
  text: Localized;
}

export interface FeatureItem {
  title: Localized;
  text: Localized;
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: { fr: "7–9 juin 2027 · Montréal", en: "June 7–9, 2027 · Montréal" },
    title: {
      fr: "Là où la richesse minérale africaine rencontre le capital canadien",
      en: "Where African mineral wealth meets Canadian capital",
    },
    text: {
      fr: "La plateforme nord-américaine de référence reliant les projets miniers africains aux investisseurs, aux marchés et à l'expertise du Canada.",
      en: "North America's premier platform connecting African mining projects with Canadian investors, markets and expertise.",
    },
    image: {
      fr: "Image de fond : mine / minéraux critiques africains",
      en: "Background image: African mine / critical minerals",
    },
  },
  {
    eyebrow: { fr: "1 500+ délégués · 35 pays", en: "1,500+ delegates · 35 countries" },
    title: {
      fr: "Trois jours pour investir, conclure et décider",
      en: "Three days to invest, deal and decide",
    },
    text: {
      fr: "Ministres, dirigeants miniers, investisseurs institutionnels et fournisseurs réunis pour bâtir les partenariats de demain.",
      en: "Ministers, mining executives, institutional investors and suppliers gather to build tomorrow's partnerships.",
    },
    image: {
      fr: "Image de fond : Montréal / Centre Mont-Royal (capital canadien)",
      en: "Background image: Montréal / Centre Mont-Royal (Canadian capital)",
    },
  },
  {
    eyebrow: { fr: "Minéraux critiques", en: "Critical minerals" },
    title: {
      fr: "Sécuriser les minéraux de la transition énergétique",
      en: "Securing the minerals of the energy transition",
    },
    text: {
      fr: "Cobalt, lithium, cuivre, terres rares : accédez aux ressources stratégiques de l'Afrique via le plus grand marché de financement minier au monde.",
      en: "Cobalt, lithium, copper, rare earths: access Africa's strategic resources through the world's leading mining finance market.",
    },
    image: {
      fr: "Image de fond : salle de conférence / réseautage B2B",
      en: "Background image: conference floor / B2B networking",
    },
  },
];

export const kpis: Kpi[] = [
  { value: "1 500+", label: { fr: "délégués", en: "delegates" } },
  { value: "30+", label: { fr: "ministres", en: "ministers" } },
  { value: "100+", label: { fr: "sociétés au TSX", en: "TSX companies" } },
  { value: "5 000+", label: { fr: "rencontres B2B", en: "B2B meetings" } },
];

export const pillars: Pillar[] = [
  {
    key: "invest",
    title: { fr: "Investir", en: "Invest" },
    text: {
      fr: "Rencontrez les sociétés minières et d'exploration africaines à la recherche de capitaux, du stade junior aux majors.",
      en: "Meet African mining and exploration companies seeking capital, from junior explorers to majors.",
    },
  },
  {
    key: "deal",
    title: { fr: "Conclure", en: "Deal" },
    text: {
      fr: "Plus de 5 000 rencontres B2B préprogrammées via une plateforme de maillage d'affaires propulsée par l'IA.",
      en: "Over 5,000 pre-scheduled B2B meetings through an AI-powered business matchmaking platform.",
    },
  },
  {
    key: "decide",
    title: { fr: "Décider", en: "Decide" },
    text: {
      fr: "Un dialogue de haut niveau avec plus de 30 ministres africains et les décideurs du secteur.",
      en: "High-level dialogue with 30+ African ministers and the sector's key decision-makers.",
    },
  },
];

export const whyDifferent: { canada: FeatureItem; africa: FeatureItem } = {
  canada: {
    title: { fr: "L'avantage canadien", en: "Canada's edge" },
    text: {
      fr: "Le TSX et le TSX-V financent près de la moitié des sociétés minières cotées au monde. Montréal offre un accès direct au capital, à l'expertise juridique et technique du secteur.",
      en: "The TSX and TSX-V finance close to half of the world's listed mining companies. Montréal offers direct access to capital and the sector's legal and technical expertise.",
    },
  },
  africa: {
    title: { fr: "La position africaine", en: "Africa's position" },
    text: {
      fr: "L'Afrique détient une part majeure des réserves mondiales de minéraux critiques. A2M ouvre la voie à des partenariats durables et créateurs de valeur partagée.",
      en: "Africa holds a major share of the world's critical-mineral reserves. A2M opens the way to sustainable partnerships that create shared value.",
    },
  },
};

export const topReasons: FeatureItem[] = [
  {
    title: { fr: "Accès au capital", en: "Access to capital" },
    text: {
      fr: "Connectez-vous aux investisseurs institutionnels et aux marchés de financement minier.",
      en: "Connect with institutional investors and mining finance markets.",
    },
  },
  {
    title: { fr: "Maillage d'affaires", en: "Business matchmaking" },
    text: {
      fr: "Un agenda de rencontres B2B confirmées, ciblées sur vos objectifs.",
      en: "A confirmed B2B meeting agenda targeted to your objectives.",
    },
  },
  {
    title: { fr: "Dialogue gouvernemental", en: "Government dialogue" },
    text: {
      fr: "Échangez avec les ministres et agences de promotion des investissements.",
      en: "Engage with ministers and investment-promotion agencies.",
    },
  },
  {
    title: { fr: "Visibilité de marque", en: "Brand visibility" },
    text: {
      fr: "Exposez et commanditez devant un public d'acheteurs et de décideurs qualifiés.",
      en: "Exhibit and sponsor before an audience of qualified buyers and decision-makers.",
    },
  },
  {
    title: { fr: "Intelligence de marché", en: "Market intelligence" },
    text: {
      fr: "Panels, keynotes et données sur les juridictions et minéraux critiques.",
      en: "Panels, keynotes and data on jurisdictions and critical minerals.",
    },
  },
  {
    title: { fr: "Réseautage ciblé", en: "Targeted networking" },
    text: {
      fr: "Réceptions, dîner de gala et événements sociaux à haute valeur ajoutée.",
      en: "Receptions, gala dinner and high-value social events.",
    },
  },
];
