import type { PageContent } from "../types";

export const aboutPages: PageContent[] = [
  {
    slug: "about",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "La conférence A2M", en: "The A2M Conference" },
    lead: {
      fr: "A2M (Africa Mining in Montréal) est la plateforme nord-américaine de référence pour l'investissement minier en Afrique : un pont entre les ressources africaines et le capital, l'expertise et l'innovation du Canada.",
      en: "A2M (Africa Mining in Montréal) is North America's premier platform for mining investment in Africa — a bridge between African resources and Canadian capital, expertise and innovation.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Du 7 au 9 juin 2027, au Centre Mont-Royal de Montréal, A2M réunit ministres, dirigeants miniers, investisseurs institutionnels, fournisseurs et acheteurs autour d'un objectif commun : accélérer le développement responsable des minéraux de demain.",
          en: "From June 7 to 9, 2027, at the Centre Mont-Royal in Montréal, A2M brings together ministers, mining executives, institutional investors, suppliers and buyers around a shared goal: accelerating the responsible development of tomorrow's minerals.",
        },
      },
      {
        type: "heading",
        text: { fr: "Notre mission", en: "Our mission" },
      },
      {
        type: "list",
        items: [
          {
            fr: "Connecter les projets miniers africains aux marchés de financement nord-américains.",
            en: "Connect African mining projects with North American financing markets.",
          },
          {
            fr: "Faciliter des partenariats durables et créateurs de valeur partagée.",
            en: "Facilitate sustainable partnerships that create shared value.",
          },
          {
            fr: "Sécuriser l'accès aux minéraux critiques de la transition énergétique.",
            en: "Secure access to the critical minerals of the energy transition.",
          },
        ],
      },
    ],
  },
  {
    slug: "about/honorary-patron",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Patron d'honneur", en: "Honorary Patron" },
    lead: {
      fr: "Chaque édition d'A2M met à l'honneur une personnalité de premier plan dont l'engagement incarne les valeurs de la conférence.",
      en: "Each A2M edition honours a leading figure whose commitment embodies the conference's values.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Le patron d'honneur d'A2M 2027 sera annoncé prochainement. Ce rôle prestigieux remplace le concept de « pays d'honneur » et reflète la dimension humaine et diplomatique de l'événement.",
          en: 'The Honorary Patron of A2M 2027 will be announced soon. This prestigious role replaces the former "honorary country" concept and reflects the human and diplomatic dimension of the event.',
        },
      },
      {
        type: "image",
        label: {
          fr: "Portrait officiel du patron d'honneur (nom + titre)",
          en: "Official portrait of the Honorary Patron (name + title)",
        },
        ratio: "4/5",
      },
    ],
  },
  {
    slug: "about/advisory-board",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Comité consultatif", en: "Advisory Board" },
    lead: {
      fr: "Un comité de personnalités reconnues du secteur minier, financier et institutionnel oriente la programmation et la portée stratégique d'A2M.",
      en: "A board of recognised figures from the mining, finance and institutional worlds guides A2M's programming and strategic reach.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "La composition du comité consultatif sera publiée à mesure des confirmations.",
          en: "The composition of the advisory board will be published as members are confirmed.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Photos d'identité des membres (fond neutre uniforme)",
          en: "Member headshots (uniform neutral background)",
        },
        ratio: "1/1",
        columns: 3,
      },
    ],
  },
  {
    slug: "about/strategic-partners",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Partenaires stratégiques", en: "Strategic Partners" },
    lead: {
      fr: "A2M s'appuie sur un réseau de partenaires institutionnels, financiers et industriels qui partagent sa vision d'un secteur minier responsable.",
      en: "A2M is built on a network of institutional, financial and industrial partners who share its vision of a responsible mining sector.",
    },
    blocks: [
      {
        type: "image",
        label: {
          fr: "Logos des partenaires (versions sur fond clair)",
          en: "Partner logos (light-background versions)",
        },
        ratio: "3/2",
        columns: 3,
      },
      {
        type: "callout",
        title: { fr: "Devenir partenaire", en: "Become a partner" },
        text: {
          fr: "Votre organisation souhaite s'associer à A2M ? Écrivez-nous à partners@a2m2027.com.",
          en: "Would your organisation like to partner with A2M? Write to us at partners@a2m2027.com.",
        },
      },
    ],
  },
  {
    slug: "about/sustainability",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Programme de durabilité", en: "Sustainability Programme" },
    lead: {
      fr: "La durabilité est au cœur d'A2M, du contenu de la programmation jusqu'à l'organisation de l'événement.",
      en: "Sustainability is at the heart of A2M, from the programming content to the way the event itself is run.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "A2M consacre une part de ses revenus à des initiatives à fort impact, notamment l'éducation des femmes en Afrique, en cohérence avec le Forum Femmes & Mines.",
          en: "A2M dedicates a share of its revenues to high-impact initiatives, notably women's education in Africa, in line with the Women in Mining Forum.",
        },
      },
      {
        type: "list",
        items: [
          {
            fr: "Engagement environnemental dans l'organisation de l'événement.",
            en: "Environmental commitment in how the event is organised.",
          },
          {
            fr: "Promotion de pratiques minières responsables (ESG).",
            en: "Promotion of responsible mining practices (ESG).",
          },
          {
            fr: "Soutien à l'inclusion et à la diversité dans le secteur.",
            en: "Support for inclusion and diversity in the sector.",
          },
        ],
      },
    ],
  },
];
