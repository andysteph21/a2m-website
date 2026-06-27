import type { Localized } from "../types";

export interface HeroSlide {
  eyebrow: Localized;
  title: Localized;
  text: Localized;
  /** Description de l'image de fond attendue (placeholder). */
  image: Localized;
  /** Source réelle de l'image de fond (chemin /public). */
  src?: string;
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
    src: "/images/hero/slide-1.jpg",
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
    src: "/images/hero/slide-2.jpg",
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
    src: "/images/hero/slide-3.jpg",
  },
];

export const kpis: Kpi[] = [
  { value: "1 500+", label: { fr: "délégués", en: "delegates" } },
  { value: "30+", label: { fr: "ministres", en: "ministers" } },
  { value: "100+", label: { fr: "sociétés au TSX", en: "TSX companies" } },
  { value: "3 000+", label: { fr: "rencontres B2B", en: "B2B meetings" } },
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
    title: { fr: "L'avantage canadien", en: "Canada's competitive edge" },
    text: {
      fr: "Montréal est la capitale mondiale du financement minier junior. Le TSX et le TSX-V cotent la majorité des sociétés minières actives en Afrique, avec 100+ sièges canadiens sur le continent et plus de 45 G$ CA d'actifs déployés. À A2M, vous rencontrez le capital qui finance les mines africaines — sur son propre terrain.",
      en: "Montréal is the world's junior mining finance capital. The TSX and TSX-V list the majority of mining companies active across Africa, with 100+ Canadian head offices on the continent and CAD 45B+ in assets deployed. At A2M, you meet the money that funds Africa's mines — on its home turf.",
    },
  },
  africa: {
    title: { fr: "La position stratégique de l'Afrique", en: "Africa's strategic position" },
    text: {
      fr: "L'Afrique détient 30 % des réserves minérales mondiales — dont 70 % du cobalt, 60 % du manganèse et 20 % de l'uranium. La transition énergétique est impossible sans les minéraux africains. A2M positionne l'Afrique non comme un fournisseur passif, mais comme un partenaire stratégique qui fixe les termes de l'alliance.",
      en: "Africa holds 30% of the world's mineral reserves — including 70% of cobalt, 60% of manganese and 20% of uranium. The clean-energy transition is impossible without African minerals. A2M positions Africa not as a passive supplier, but as a strategic partner that sets the terms of the alliance.",
    },
  },
};

/** Qui participe — secteurs représentés (page d'accueil). */
export const whoAttends: FeatureItem[] = [
  {
    title: { fr: "Gouvernements & régulateurs", en: "Governments & regulators" },
    text: {
      fr: "Ministres des Mines et hauts fonctionnaires des juridictions minières africaines.",
      en: "Ministers of Mines and senior officials from African mining jurisdictions.",
    },
  },
  {
    title: { fr: "Sociétés minières & d'exploration", en: "Mining & exploration companies" },
    text: {
      fr: "Sociétés cotées (TSX, TSX-V, CSE) et privées, des juniors aux majors.",
      en: "Listed (TSX, TSX-V, CSE) and private companies, from juniors to majors.",
    },
  },
  {
    title: {
      fr: "Institutions financières & investisseurs",
      en: "Financial institutions & investors",
    },
    text: {
      fr: "Banques, IFD, capital-investissement et family offices.",
      en: "Banks, DFIs, private equity and family offices.",
    },
  },
  {
    title: { fr: "Technologies & fournisseurs", en: "Technology & service providers" },
    text: {
      fr: "Forage, ingénierie, équipements, exploration et logiciels.",
      en: "Drilling, engineering, equipment, exploration and software.",
    },
  },
  {
    title: { fr: "Cabinets juridiques & conseil", en: "Legal, consulting & advisory firms" },
    text: {
      fr: "Conseillers juridiques, consultants et firmes d'advisory du secteur.",
      en: "Legal advisors, consultants and advisory firms serving the sector.",
    },
  },
];

/** Ce qu'ils viennent chercher (page d'accueil). */
export const whatTheyComeFor: FeatureItem[] = [
  {
    title: { fr: "Nouveaux marchés & cibles", en: "New markets & targets" },
    text: {
      fr: "Accès à de nouveaux marchés et cibles d'investissement.",
      en: "Access to new markets and investment targets.",
    },
  },
  {
    title: { fr: "Décideurs gouvernementaux", en: "Government decision-makers" },
    text: {
      fr: "Rencontres directes avec les décideurs gouvernementaux africains.",
      en: "Direct meetings with African government decision-makers.",
    },
  },
  {
    title: { fr: "Co-investissement", en: "Co-investment" },
    text: {
      fr: "Opportunités de co-investissement avec les IFD canadiennes et africaines.",
      en: "Co-investment opportunities with Canadian and African DFIs.",
    },
  },
  {
    title: { fr: "Partenariats technologiques", en: "Technology partnerships" },
    text: {
      fr: "Transfert de technologie et partenariats de services.",
      en: "Technology transfer and service partnerships.",
    },
  },
  {
    title: { fr: "Cadres ESG & communautés", en: "ESG & community frameworks" },
    text: {
      fr: "Bonnes pratiques ESG et cadres d'engagement communautaire.",
      en: "ESG best practices and community engagement frameworks.",
    },
  },
];

/** Pays à l'honneur 2027 — mise en avant en page d'accueil. */
export const honoraryCountry = {
  eyebrow: { fr: "Pays à l'honneur 2027", en: "Honorary Country 2027" },
  title: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
  text: {
    fr: "Première destination de l'exploration aurifère en Afrique de l'Ouest, la Côte d'Ivoire conduira une délégation de haut niveau à Montréal pour présenter ses projets phares aux investisseurs canadiens.",
    en: "The #1 gold exploration destination in West Africa, Côte d'Ivoire will lead a high-level delegation to Montréal to present its flagship projects to Canadian investors.",
  },
  stats: [
    {
      value: "N° 1",
      label: {
        fr: "exploration aurifère en Afrique de l'Ouest",
        en: "gold exploration in West Africa",
      },
    },
    { value: "20+", label: { fr: "sociétés canadiennes (TSX)", en: "Canadian TSX companies" } },
    { value: "58 t", label: { fr: "d'or produites en 2024", en: "of gold produced in 2024" } },
    { value: "100 t/an", label: { fr: "objectif 2030", en: "target by 2030" } },
  ] as Kpi[],
  cta: { fr: "Découvrir le Pays à l'honneur", en: "Discover the Honorary Country" },
  href: "/program#honorary-country",
  image: {
    src: "/images/home/cote-divoire.jpg" as string | undefined,
    alt: {
      fr: "Exploitation minière aurifère en Afrique de l'Ouest (illustration)",
      en: "West African gold mining (illustrative)",
    },
    label: {
      fr: "Secteur minier ouest-africain (illustration)",
      en: "West African mining sector (illustrative)",
    },
    credit: {
      label: "Will Dossett — Wikimedia Commons",
      license: "CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Chegga_Artisanal_Mining.jpg",
    },
  },
};

/** Aperçu du programme (3 keynotes) — page d'accueil. */
export const programPreview: FeatureItem[] = [
  {
    title: { fr: "Afrique, Canada & ZLECAf", en: "Africa, Canada & AfCFTA" },
    text: {
      fr: "Une alliance pour les minéraux de demain : bâtir un partenariat équitable.",
      en: "An alliance for the minerals of tomorrow: building a truly equitable partnership.",
    },
  },
  {
    title: { fr: "De l'extraction à la transformation", en: "From extraction to transformation" },
    text: {
      fr: "Bâtir ensemble les chaînes de valeur, de la mine au produit fini.",
      en: "Building value chains together, from mine to finished product.",
    },
  },
  {
    title: { fr: "Le Québec, partenaire stratégique", en: "Quebec, a strategic partner" },
    text: {
      fr: "Capital, expertise et savoir-faire : un écosystème minier complet pour l'Afrique.",
      en: "Capital, expertise and know-how: a complete mining ecosystem for Africa.",
    },
  },
];

/** Aperçu des opportunités d'exposition (2 formats) — page d'accueil. */
export const exhibitionPreview: FeatureItem[] = [
  {
    title: { fr: "A2M Marketplace", en: "A2M Marketplace" },
    text: {
      fr: "Stand 2 × 3 m équipé, profil au magazine officiel et passes délégués inclus.",
      en: "Furnished 2 × 3 m stand, official-magazine profile and delegate passes included.",
    },
  },
  {
    title: { fr: "Village des explorateurs", en: "Explorer Village" },
    text: {
      fr: "Stand 1 × 1 m pour juniors et sociétés non cotées. Places limitées.",
      en: "1 × 1 m booth for juniors and unlisted companies. Limited spaces.",
    },
  },
];

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
