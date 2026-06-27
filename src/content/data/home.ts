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
      fr: "Là où la richesse minérale africaine rencontre le capital, l'expertise et le savoir-faire canadiens",
      en: "Where African mineral wealth meets Canadian capital, expertise and know how",
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
      fr: "Bâtissez les partenariats qui alimenteront la transition vers l'énergie propre",
      en: "Build the partnerships that will power the clean energy transition",
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
      fr: "Rejoignez la plateforme de conclusion d'affaires qui transforme le secteur minier africain",
      en: "Join the deal-making platform transforming African mining",
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

/** Sous-titre du hero (V4) — phrase de positionnement complète. */
export const heroSubHeadline: Localized = {
  fr: "A2M 2027 — African Mining in Montreal : la première plateforme internationale d'investissement d'Amérique du Nord exclusivement dédiée au secteur minier africain. Avec des conférences, des vitrines d'investissement, de la conclusion d'affaires, du dialogue ministériel et du réseautage à fort impact.",
  en: "A2M 2027 — African Mining in Montreal - North America's Premier International Investment Platform Exclusively Dedicated to African Mining. Featuring keynotes, investment showcases, deal-making, ministerial dialogue and high-impact networking.",
};

/** Bandeau de détails de l'événement (V4). */
export const eventDetails: { label: Localized; value: Localized }[] = [
  {
    label: { fr: "Dates", en: "Dates" },
    value: { fr: "7 – 9 juin 2027", en: "June 7 – 9, 2027" },
  },
  {
    label: { fr: "Lieu", en: "Venue" },
    value: {
      fr: "Centre Mont-Royal, Montréal, Québec, Canada",
      en: "Centre Mont-Royal, Montréal, Québec, Canada",
    },
  },
  {
    label: { fr: "Pays à l'honneur", en: "Honorary Country" },
    value: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
  },
];

/** Paragraphe d'introduction « Unlocking Africa's Mining Potential » (V4). */
export const introBand: { eyebrow: Localized; title: Localized; text: Localized } = {
  eyebrow: { fr: "Secteurs représentés", en: "Sectors represented" },
  title: {
    fr: "Libérer le potentiel minier de l'Afrique à Montréal",
    en: "Unlocking Africa's Mining Potential in Montreal",
  },
  text: {
    fr: "African Mining in Montreal (A2M) réunit à Montréal, au Canada, les figures de proue de l'industrie minière africaine — responsables gouvernementaux, visionnaires de l'industrie, financiers, investisseurs et fournisseurs de services — pour explorer le vaste potentiel minier de l'Afrique et débloquer des opportunités transformatrices. Cet événement phare propose des présentations magistrales de leaders d'opinion reconnus de l'industrie, des tables rondes interactives, des vitrines d'investissement et des occasions de réseautage exclusives.",
    en: "African Mining in Montreal (A2M) brings together the leading figures of the African mining industry in Montreal, Canada — government officials, industry visionaries, financiers, investors, and service providers — to explore Africa's vast mining potential and unlock transformative opportunities. This flagship event features keynote presentations from renowned industry thought leaders, interactive panel discussions, investment showcases and exclusive networking opportunities.",
  },
};

/** Paragraphe d'introduction de la page d'accueil (V4). */
export const homeIntro: { eyebrow: Localized; title: Localized; text: Localized } = {
  eyebrow: {
    fr: "La plateforme d'investissement minier africain de référence en Amérique du Nord",
    en: "North America's Premier African Mining Investment Platform",
  },
  title: {
    fr: "La plateforme d'investissement minier africain de référence en Amérique du Nord",
    en: "North America's Premier African Mining Investment Platform",
  },
  text: {
    fr: "Rejoignez la révolution minière à African Mining in Montreal (A2M) — là où la vaste richesse minérale de l'Afrique rencontre le capital, l'innovation et l'expertise du Canada. Forgez des partenariats à fort impact, débloquez de nouvelles opportunités d'affaires et participez à l'environnement de conclusion d'affaires qui façonne l'avenir de l'exploitation minière responsable de la région minière la plus dynamique au monde.",
    en: "Join the mining revolution at African Mining in Montreal (A2M) — where Africa's vast mineral wealth meets capital, innovation, and expertise in Canada. Forge high-impact partnerships, unlock new business opportunities, and be part of the deal-making environment shaping the future of responsible mining of the world's most dynamic mining region.",
  },
};

export const kpis: Kpi[] = [
  { value: "1 500+", label: { fr: "délégués · 35 pays", en: "delegates · 35 countries" } },
  { value: "30+", label: { fr: "ministres africains", en: "African Ministers" } },
  {
    value: "100+",
    label: {
      fr: "sociétés minières cotées au TSX, TSX-V et autres grandes bourses",
      en: "TSX, TSX-V and other major securities-listed mining companies",
    },
  },
  {
    value: "3 000+",
    label: { fr: "rencontres sur la plateforme B2B", en: "B2B Meetings Platform" },
  },
];

export const pillars: Pillar[] = [
  {
    key: "invest",
    title: { fr: "Investir", en: "Invest" },
    text: {
      fr: "Connectez-vous à des projets à fort potentiel, à des institutions de premier plan et à des décideurs gouvernementaux clés. Le tout sur une seule plateforme puissante. Accédez à un flux d'opportunités sélectionnées et préqualifiées.",
      en: "Connect with high-potential projects, leading institutions, and key government decision-makers. All in one powerful platform. Gain access to a curated deal flow of vetted opportunities.",
    },
  },
  {
    key: "deal",
    title: { fr: "Conclure", en: "Deal" },
    text: {
      fr: "Présentez vos projets, produits ou services au A2M Marketplace et au moyen de rencontres structurées à fort impact. A2M est conçu pour produire des résultats — repartez avec de vraies ententes et des partenariats concrets, pas seulement des cartes de visite.",
      en: "Showcase your projects, products or services at A2M Marketplace and through high-impact, structured meetings. A2M is engineered for results - Leave with real deals and concrete partnerships, not just business cards.",
    },
  },
  {
    key: "decide",
    title: { fr: "Décider", en: "Decide" },
    text: {
      fr: "Rencontrez les ministres des Mines africains et les responsables gouvernementaux canadiens. La délégation du Pays à l'honneur. Tous les décideurs critiques dans une même salle, au même moment.",
      en: "Meet African Mining Ministers. and Canadian government officials. The Honorary Country delegation. All the critical decision-makers in one room, at one time.",
    },
  },
];

export const whyDifferent: { canada: FeatureItem; africa: FeatureItem } = {
  canada: {
    title: { fr: "L'avantage concurrentiel du Canada", en: "Canada's competitive edge" },
    text: {
      fr: "Montréal est la capitale mondiale du financement minier junior. La Bourse de Toronto (TSX et TSX-V) cote la majorité des sociétés minières actives à travers l'Afrique. Plus de 100 sièges sociaux canadiens opèrent sur le continent, avec plus de 45 milliards de dollars canadiens d'actifs déployés. Lorsque vous venez à A2M, vous rencontrez le capital qui finance les mines de l'Afrique — sur son propre terrain.",
      en: "Montreal is the world's junior mining finance capital. The Toronto Stock Exchange (TSX and TSX-V) lists the majority of mining companies active across Africa. Over 100 Canadian head offices operate on the continent, with CAD 45+ billion in assets deployed. When you come to A2M, you are meeting the money that funds Africa's mines — on their home turf.",
    },
  },
  africa: {
    title: { fr: "La position stratégique de l'Afrique", en: "Africa's strategic position" },
    text: {
      fr: "L'Afrique détient 30 % des réserves minérales mondiales — dont 70 % du cobalt, 60 % du manganèse et 20 % de l'uranium. La transition vers l'énergie propre est impossible sans les minéraux africains. A2M positionne l'Afrique non pas comme un fournisseur passif, mais comme un partenaire stratégique disposant du levier nécessaire pour fixer les termes de l'alliance.",
      en: "Africa holds 30% of the world's mineral reserves — including 70% of cobalt, 60% of manganese and 20% of uranium. The clean energy transition is impossible without African minerals. A2M positions Africa not as a passive supplier, but as a strategic partner with the leverage to set the terms of the alliance.",
    },
  },
};

/** Qui participe — secteurs représentés (page d'accueil, V4 : 5 types). */
export const whoAttends: FeatureItem[] = [
  {
    title: {
      fr: "Gouvernements et organismes de réglementation",
      en: "Governments and regulatory bodies",
    },
    text: {
      fr: "Ministres des Mines, hauts fonctionnaires.",
      en: "Ministers of Mines, Senior officials.",
    },
  },
  {
    title: { fr: "Sociétés minières et d'exploration", en: "Mining and exploration companies" },
    text: {
      fr: "Sociétés cotées au TSX, TSX-V, CSE et autres grandes bourses de valeurs, ainsi que sociétés privées.",
      en: "TSX, TSX-V, CSE and other major securities-listed and private.",
    },
  },
  {
    title: {
      fr: "Institutions financières et investisseurs",
      en: "Financial institutions and investors",
    },
    text: {
      fr: "Banques, institutions de financement du développement (IFD), capital-investissement, family offices.",
      en: "Banks, DFIs, private equity, family offices.",
    },
  },
  {
    title: {
      fr: "Fournisseurs de technologies et de services",
      en: "Technology and service providers",
    },
    text: {
      fr: "Forage, ingénierie, équipements, exploration et logiciels.",
      en: "Drilling, engineering, equipment, exploration and software.",
    },
  },
  {
    title: {
      fr: "Cabinets juridiques, de conseil et d'advisory",
      en: "Legal, consulting and advisory firms",
    },
    text: {
      fr: "Conseillers juridiques, consultants et firmes d'advisory au service du secteur.",
      en: "Legal advisors, consultants and advisory firms serving the sector.",
    },
  },
];

/** Ce qu'ils viennent chercher (page d'accueil, V4 : 5 motifs). */
export const whatTheyComeFor: FeatureItem[] = [
  {
    title: {
      fr: "Nouveaux marchés et cibles d'investissement",
      en: "New markets and investment targets",
    },
    text: {
      fr: "Accès à de nouveaux marchés et à de nouvelles cibles d'investissement.",
      en: "Access to new markets and investment targets.",
    },
  },
  {
    title: { fr: "Décideurs gouvernementaux africains", en: "African government decision-makers" },
    text: {
      fr: "Rencontres directes avec les décideurs gouvernementaux africains.",
      en: "Direct meetings with African government decision makers.",
    },
  },
  {
    title: { fr: "Co-investissement avec les IFD", en: "Co-investment with DFIs" },
    text: {
      fr: "Opportunités de co-investissement avec le Canada et les institutions de financement du développement (IFD) africaines.",
      en: "Co-investment opportunities with Canada and African DFIs.",
    },
  },
  {
    title: {
      fr: "Partenariats technologiques et de services",
      en: "Technology and service partnerships",
    },
    text: {
      fr: "Transfert de technologie et partenariats de services.",
      en: "Technology transfer and service partnerships.",
    },
  },
  {
    title: {
      fr: "Cadres ESG et d'engagement communautaire",
      en: "ESG and community engagement frameworks",
    },
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
    fr: "Découvrez la Côte d'Ivoire — première destination de l'exploration aurifère en Afrique de l'Ouest. Plus de 20 sociétés minières canadiennes cotées au TSX y opèrent déjà. 58 tonnes d'or produites en 2024. Objectif : 100 tonnes par an d'ici 2030. La Côte d'Ivoire conduira une délégation de haut niveau à Montréal pour présenter ses projets phares aux investisseurs canadiens.",
    en: "Discover Côte d'Ivoire — the #1 gold exploration destination in West Africa. 20+ Canadian TSX mining companies already operating. 58 tonnes of gold produced in 2024. Target: 100 tonnes/year by 2030. Côte d'Ivoire will lead a high-level delegation to Montréal to present its flagship projects to Canadian investors.",
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

/** Principales raisons de participer (V4 : 6 raisons détaillées). */
export const topReasons: FeatureItem[] = [
  {
    title: { fr: "Rencontrez les décideurs", en: "Meet the Decision-Makers" },
    text: {
      fr: "Réseautez avec plus de 30 ministres des Mines africains, des responsables gouvernementaux canadiens, des PDG de sociétés minières cotées au TSX, TSX-V et autres grandes bourses de valeurs, ainsi que des dirigeants d'institutions de financement du développement.",
      en: "Network with 30+ African Mining Ministers, Canadian government officials, TSX, TSX-V, and other major securities-listed mining companies CEOs, and development finance institution leaders.",
    },
  },
  {
    title: { fr: "Constituez votre pipeline", en: "Build Your Pipeline" },
    text: {
      fr: "La Vitrine d'investissement présente aux investisseurs des projets africains présélectionnés. Le Salon des marchés financiers (Capital Markets Lounge) offre un espace de négociation privé. Le maillage propulsé par l'IA d'A2M génère votre agenda B2B stratégique.",
      en: "The Investment Showcase presents pre-screened African projects to investors. Capital Markets Lounge offers private negotiation space. A2M AI-powered matching generates your strategic B2B agenda.",
    },
  },
  {
    title: { fr: "Façonnez l'avenir", en: "Shape the Future" },
    text: {
      fr: "Co-créez le premier instrument politique bilatéral Canada-Afrique sur les minéraux critiques — aux côtés de 30 ministres africains et du gouvernement canadien.",
      en: "Co-create the first bilateral Canada-Africa political instrument on critical minerals — alongside 30 African ministers and the Canadian government.",
    },
  },
  {
    title: { fr: "Découvrez la Côte d'Ivoire", en: "Discover Côte d'Ivoire" },
    text: {
      fr: "Explorez la première destination de l'exploration aurifère en Afrique de l'Ouest. Plus de 20 sociétés minières canadiennes cotées au TSX y opèrent déjà. 58 tonnes d'or produites en 2024. Objectif : 100 tonnes par an d'ici 2030.",
      en: "Explore the #1 gold exploration destination in West Africa. 20+ Canadian TSX mining and companies already operating. 58 tonnes of gold produced in 2024. Target: 100 tonnes/year by 2030.",
    },
  },
  {
    title: { fr: "Accédez au capital africain", en: "Access African Capital" },
    text: {
      fr: "Rencontrez les principaux banquiers et financiers africains — les institutions qui co-financent la prochaine génération de mines de l'Afrique.",
      en: "Meet key African bankers and financiers — the institutions co-financing Africa's next generation of mines.",
    },
  },
  {
    title: {
      fr: "Tirez parti de la plateforme diplomatique",
      en: "Leverage the Diplomatic Platform",
    },
    text: {
      fr: "La structure ministérielle d'A2M signifie que vos conversations d'investissement se déroulent dans un cadre qui réduit le risque politique et réglementaire — des deux côtés de l'Atlantique.",
      en: "A2M's ministerial structure means your investment conversations happen within a framework that reduces political and regulatory risk — on both sides of the Atlantic.",
    },
  },
];
