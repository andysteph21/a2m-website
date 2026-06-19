import type { PageContent } from "../types";

export const programPages: PageContent[] = [
  {
    slug: "program/honorary-patron",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Patron d'honneur", en: "Honorary Patron" },
    lead: {
      fr: "Chaque édition d'A2M met à l'honneur une personnalité de premier plan dont l'engagement incarne les valeurs de la conférence.",
      en: "Each A2M edition honours a leading figure whose commitment embodies the conference's values.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Bientôt dévoilé", en: "To be unveiled" },
        text: {
          fr: "Le patron d'honneur d'A2M 2027 sera annoncé prochainement.",
          en: "The Honorary Patron of A2M 2027 will be announced soon.",
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
    slug: "program/sessions",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Keynotes & panels", en: "Keynotes & Panels" },
    lead: {
      fr: "Thème 2027 — « L'Alliance pour les minéraux de demain : investir, transformer, partager la valeur ».",
      en: '2027 theme — "The Alliance for the Minerals of Tomorrow: Investing, Transforming, and Sharing Value."',
    },
    blocks: [
      { type: "heading", text: { fr: "Keynotes", en: "Keynotes" } },
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Afrique, Canada & ZLECAf", en: "Africa, Canada & AfCFTA" },
            text: {
              fr: "Une alliance pour les minéraux de demain : comment bâtir un partenariat équitable.",
              en: "An alliance for the minerals of tomorrow: building a truly equitable partnership.",
            },
          },
          {
            title: {
              fr: "De l'extraction à la transformation",
              en: "From extraction to transformation",
            },
            text: {
              fr: "Bâtir ensemble les chaînes de valeur (incl. l'Alliance de production de minéraux critiques de 18,5 G$).",
              en: "Building value chains together (incl. the $18.5B Critical Minerals Production Alliance).",
            },
          },
          {
            title: { fr: "Le Québec, partenaire stratégique", en: "Quebec, a strategic partner" },
            text: {
              fr: "Capital, expertise et savoir-faire : un écosystème minier complet pour l'Afrique.",
              en: "Capital, expertise and know-how: a complete mining ecosystem for Africa.",
            },
          },
        ],
      },
      { type: "heading", text: { fr: "Panels", en: "Panels" } },
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: {
              fr: "Investissement Canada-Afrique 2027",
              en: "Canada-Africa investment 2027",
            },
            text: {
              fr: "État des lieux : 120+ sociétés du TSX actives, 40 G$+ d'actifs.",
              en: "Current landscape: 120+ TSX companies active, CAD 40B+ in assets.",
            },
          },
          {
            title: { fr: "Minéraux critiques & transition", en: "Critical minerals & transition" },
            text: {
              fr: "70 % du cobalt, 40 % du platine : cartographie et valorisation locale.",
              en: "70% of cobalt, 40% of platinum: mapping and local value addition.",
            },
          },
          {
            title: { fr: "Financer les mines africaines", en: "Financing African mines" },
            text: {
              fr: "TSX, IFD et capital local : bâtir ensemble le bon modèle (blended finance, ESG).",
              en: "TSX, DFIs and local capital: building the right model together (blended finance, ESG).",
            },
          },
          {
            title: { fr: "ESG en Afrique", en: "ESG in Africa" },
            text: {
              fr: "Entre standards mondiaux et réalités de terrain : faire de l'ESG un avantage.",
              en: "Between global standards and on-the-ground realities: turning ESG into an advantage.",
            },
          },
          {
            title: { fr: "Codes miniers africains", en: "African mining codes" },
            text: {
              fr: "Stabilité, attractivité et souveraineté : trouver le bon équilibre.",
              en: "Stability, attractiveness and sovereignty: finding the right balance.",
            },
          },
          {
            title: { fr: "Du sous-traitant au partenaire", en: "From subcontractor to partner" },
            text: {
              fr: "Faire des entreprises locales africaines le moteur de votre compétitivité.",
              en: "Making African local enterprises the engine of your competitiveness.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "program/ministerial-round-table",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
    lead: {
      fr: "Le premier dialogue politique Canada-Afrique sur les minéraux critiques tenu en sol nord-américain.",
      en: "The first Canada-Africa political dialogue on critical minerals held on North American soil.",
    },
    blocks: [
      {
        type: "callout",
        title: {
          fr: "6 juin · sur invitation · Fairmont",
          en: "June 6 · by invitation · Fairmont",
        },
        text: {
          fr: "Dialogue à huis clos de trois heures, co-présidé par S.E. Issoufou Mahamadou et le ministre canadien des Ressources naturelles.",
          en: "Three-hour closed-door dialogue co-chaired by H.E. Issoufou Mahamadou and Canada's Minister of Natural Resources.",
        },
      },
      { type: "heading", text: { fr: "Axes du dialogue", en: "Focus areas" } },
      {
        type: "list",
        items: [
          {
            fr: "Certitude réglementaire et conditions fiscales",
            en: "Regulatory certainty and fiscal terms",
          },
          { fr: "Contenu local et valeur ajoutée", en: "Local content and value addition" },
          {
            fr: "Sécurité des chaînes d'approvisionnement en minéraux critiques",
            en: "Critical minerals supply chain security",
          },
          {
            fr: "Standards miniers responsables et dérisquage des projets",
            en: "Responsible mining standards and project de-risking",
          },
          {
            fr: "La ZLECAf comme plateforme de négociation collective",
            en: "The AfCFTA as a collective bargaining platform",
          },
        ],
      },
    ],
  },
  {
    slug: "program/women-in-mining",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
    lead: {
      fr: "« Autonomiser les femmes, transformer l'industrie » — un forum à fort impact inclus dans l'inscription.",
      en: '"Empowering Women, Reshaping the Industry" — a high-impact forum included with registration.',
    },
    blocks: [
      {
        type: "stats",
        items: [
          {
            value: "< 15 %",
            label: {
              fr: "des effectifs miniers sont des femmes",
              en: "of the mining workforce are women",
            },
          },
          {
            value: "30–40 %",
            label: { fr: "dans la mine artisanale", en: "in artisanal & small-scale mining" },
          },
        ],
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Leadership & inclusion", en: "Leadership & inclusion" },
            text: {
              fr: "Récits de femmes dirigeant mines, institutions financières et organismes miniers.",
              en: "Stories from women leading mines, financial institutions and mining bodies.",
            },
          },
          {
            title: { fr: "Briser les barrières", en: "Breaking barriers" },
            text: {
              fr: "Défis et solutions concrètes pour accroître la participation des femmes.",
              en: "Challenges and practical solutions to increase women's participation.",
            },
          },
          {
            title: { fr: "Impact communautaire", en: "Community impact" },
            text: {
              fr: "Le rôle clé des femmes dans une mine responsable et un développement durable.",
              en: "The pivotal role of women in responsible mining and sustainable development.",
            },
          },
          {
            title: { fr: "Réseautage", en: "Networking" },
            text: {
              fr: "Connexions stratégiques avec pairs, décideurs et mentors.",
              en: "Strategic connections with peers, decision-makers and mentors.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "program/investors-breakfast",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
    lead: {
      fr: "« Les 90 minutes les plus importantes de votre année d'investissement minier en Afrique. »",
      en: '"The most important 90 minutes of your Africa mining investment year."',
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Session fermée · 90 minutes", en: "Closed session · 90 minutes" },
        text: {
          fr: "Réservé aux institutions de capital (promoteurs et grand public exclus). Gratuit pour les investisseurs qualifiés.",
          en: "Reserved for capital institutions (promoters and general audience excluded). Complimentary for qualified investors.",
        },
      },
      { type: "heading", text: { fr: "Qui participe", en: "Who attends" } },
      {
        type: "list",
        items: [
          {
            fr: "Institutions de financement du développement (IFD)",
            en: "Development Finance Institutions (DFIs)",
          },
          {
            fr: "Fonds de pension, fonds souverains et fondations",
            en: "Pension funds, sovereign wealth funds & endowments",
          },
          { fr: "Sociétés de redevances et de streaming", en: "Royalty & streaming companies" },
          {
            fr: "Capital-investissement & fonds de capital-risque miniers",
            en: "Mining-focused private equity & venture funds",
          },
          {
            fr: "Banques d'investissement et conseillers financiers",
            en: "Investment banks and financial advisors",
          },
        ],
      },
    ],
  },
  {
    slug: "program/networking",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Réseautage & événements sociaux", en: "Networking & Social Events" },
    lead: {
      fr: "« C'est là que les vraies conversations ont lieu » — un programme social conçu pour accélérer les relations de confiance.",
      en: '"Where the real conversations happen" — a social programme designed to accelerate trusted relationships.',
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Réception de bienvenue", en: "Welcome reception" },
            text: {
              fr: "Lancez l'expérience A2M ; les suggestions de l'app de réseautage s'activent en temps réel.",
              en: "Kick off the A2M experience; the networking app's suggestions activate in real time.",
            },
          },
          {
            title: { fr: "Dîner de gala", en: "Gala dinner" },
            text: {
              fr: "Gastronomie et réseautage à haute valeur ; placement Canada/Afrique pensé pour l'affinité d'affaires.",
              en: "Fine dining and high-value networking; Canada/Africa seating curated for business affinity.",
            },
          },
          {
            title: { fr: "Soirée de réseautage", en: "Networking evening" },
            text: {
              fr: "Ambiance informelle, musique, sans agenda — les deals continuent.",
              en: "Informal atmosphere, music, no agenda — deals continue.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Le Marketplace comme hub", en: "The Marketplace as hub" },
        text: {
          fr: "Stands, espaces de discussion et stations café : un environnement de réseautage continu tout au long de l'événement.",
          en: "Stands, lounges and coffee stations: a continuous networking environment throughout the event.",
        },
      },
    ],
  },
  {
    slug: "program/speakers",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Conférenciers & panélistes", en: "Speakers & Panellists" },
    lead: {
      fr: "Des dirigeants et experts de premier plan, du Canada et d'Afrique. La liste sera dévoilée prochainement.",
      en: "Leading executives and experts from Canada and Africa. The line-up will be unveiled soon.",
    },
    blocks: [
      {
        type: "speakers",
        count: 8,
        label: {
          fr: "Conférenciers & panélistes — profils à venir",
          en: "Speakers & panellists — profiles to be announced",
        },
      },
      {
        type: "callout",
        title: { fr: "Devenir conférencier", en: "Become a speaker" },
        text: {
          fr: "Vous souhaitez intervenir ? Soumettez votre proposition à info@a2mevent.com.",
          en: "Would you like to speak? Submit your proposal to info@a2mevent.com.",
        },
      },
    ],
  },
];
