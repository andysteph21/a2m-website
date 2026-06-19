import type { PageContent } from "../types";

export const aboutPages: PageContent[] = [
  {
    slug: "about",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "La conférence A2M", en: "The A2M Conference" },
    lead: {
      fr: "A2M 2027 est la première plateforme nord-américaine dédiée exclusivement à l'investissement, au deal-making et au dialogue politique de haut niveau entre le Canada et l'Afrique dans les minéraux critiques.",
      en: "A2M 2027 is the first North American platform dedicated exclusively to investment, deal-making and high-level political dialogue between Canada and Africa in critical minerals.",
    },
    blocks: [
      {
        type: "stats",
        items: [
          { value: "1 500+", label: { fr: "délégués · 35 pays", en: "delegates · 35 countries" } },
          { value: "30+", label: { fr: "ministres africains", en: "African ministers" } },
          {
            value: "100+",
            label: { fr: "sociétés cotées (TSX/TSX-V)", en: "listed companies (TSX/TSX-V)" },
          },
          { value: "3 000+", label: { fr: "rencontres B2B", en: "B2B meetings" } },
        ],
      },
      {
        type: "paragraph",
        text: {
          fr: "Trois jours, une ville, un objectif commun : forger le partenariat stratégique que le Canada et l'Afrique bâtissent séparément depuis des années — un partenariat qu'aucun des deux ne peut pleinement réaliser seul.",
          en: "Three days, one city, one shared purpose: to forge the strategic partnership that Canada and Africa have been building separately for years — one neither can fully realize alone.",
        },
      },
      {
        type: "heading",
        text: { fr: "Notre mission", en: "Our mission" },
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Connecter", en: "Connect" },
            text: {
              fr: "Identifier précisément qui doit se rencontrer et créer les moments propices à ces conversations.",
              en: "Identify precisely who needs to meet and engineer the right moments for those conversations.",
            },
          },
          {
            title: { fr: "Faciliter", en: "Facilitate" },
            text: {
              fr: "Structurer sessions, tables rondes et salles de deals pour passer de l'introduction à la négociation concrète.",
              en: "Structure sessions, roundtables and deal rooms to move from introduction to concrete negotiation.",
            },
          },
          {
            title: { fr: "Légitimer", en: "Legitimise" },
            text: {
              fr: "Le succès commercial exige un cadre politique : la table ronde ministérielle aligne les politiques au plus haut niveau.",
              en: "Commercial success requires political enablement: the Ministerial Roundtable aligns policy at the highest level.",
            },
          },
          {
            title: { fr: "Inscrire dans la durée", en: "Build continuity" },
            text: {
              fr: "A2M est une plateforme pérenne : suivi des projets, bilans annuels, mesure des résultats.",
              en: "A2M is an enduring platform: project tracking, annual reporting, measured outcomes.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "about/why-participate",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Pourquoi participer ?", en: "Why Participate?" },
    lead: {
      fr: "Quel que soit votre profil, A2M offre un accès direct aux décideurs, au capital et aux opportunités du secteur minier africain.",
      en: "Whatever your profile, A2M offers direct access to the decision-makers, capital and opportunities of the African mining sector.",
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Majors & mid-tiers", en: "Majors & mid-tier" },
            text: {
              fr: "Vos opérations africaines reposent sur des relations — gérez-les au plus haut niveau (ministres, IFD, intelligence réglementaire).",
              en: "Your African operations run on relationships — manage them at the highest level (ministers, DFIs, regulatory intelligence).",
            },
          },
          {
            title: { fr: "Juniors & exploration", en: "Juniors & exploration" },
            text: {
              fr: "Investment Showcase, Capital Markets Lounge et Deal Flow Package diffusé à 40+ investisseurs qualifiés avant l'événement.",
              en: "Investment Showcase, Capital Markets Lounge and a Deal Flow Package shared with 40+ qualified investors before the event.",
            },
          },
          {
            title: { fr: "Investisseurs & IFD", en: "Investors & DFIs" },
            text: {
              fr: "Projets pré-sélectionnés, Déjeuner des investisseurs à huis clos et inscription gratuite pour les investisseurs qualifiés.",
              en: "Pre-screened projects, closed-door Investors' Breakfast and complimentary registration for qualified investors.",
            },
          },
          {
            title: { fr: "Fournisseurs & technologies", en: "Service providers & tech" },
            text: {
              fr: "Les contrats qui financeront votre croissance africaine s'attribuent ici : rencontres ciblées et stand au cœur des flux.",
              en: "The contracts that will fund your Africa growth are awarded here: targeted meetings and a stand at the heart of the flow.",
            },
          },
          {
            title: { fr: "Gouvernements & ministères", en: "Governments & ministries" },
            text: {
              fr: "Rencontrez les dirigeants du TSX qui ont votre pays sur leur liste et devenez membre fondateur du cadre Canada-Afrique.",
              en: "Meet the TSX executives with your country on their shortlist and become a founding member of the Canada-Africa framework.",
            },
          },
          {
            title: { fr: "Acheteurs & négociants", en: "Buyers & traders" },
            text: {
              fr: "Réunissez les trois parties d'une négociation d'offtake au même endroit, au même moment.",
              en: "Assemble all three parties to an offtake negotiation in one place, at one time.",
            },
          },
        ],
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
        type: "speakers",
        count: 8,
        label: {
          fr: "Membres du comité consultatif — profils à venir",
          en: "Advisory board members — profiles to be announced",
        },
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
        type: "logos",
        count: 8,
        label: {
          fr: "Partenaires & soutiens — logos à venir",
          en: "Partners & endorsements — logos coming soon",
        },
      },
      {
        type: "callout",
        title: { fr: "Devenir partenaire", en: "Become a partner" },
        text: {
          fr: "Votre organisation souhaite s'associer à A2M ? Écrivez-nous à info@a2mevent.com.",
          en: "Would your organisation like to partner with A2M? Write to us at info@a2mevent.com.",
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
      fr: "Un événement d'investissement minier responsable a le devoir de créer une valeur durable pour les communautés africaines et l'industrie.",
      en: "A responsible mining investment event has a duty to deliver lasting value to African communities and the industry.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Jusqu'à 10 % des revenus", en: "Up to 10% of revenues" },
        text: {
          fr: "À chaque édition, A2M s'engage à allouer jusqu'à 10 % des revenus à des programmes à fort impact en Afrique.",
          en: "With each edition, A2M commits up to 10% of revenues to high-impact programmes across Africa.",
        },
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Éducation des enfants", en: "Children's education" },
            text: {
              fr: "Soutien aux organisations communautaires locales et aux programmes de formation technique.",
              en: "Support for local community organisations and technical training programmes.",
            },
          },
          {
            title: { fr: "Autonomisation des femmes", en: "Women's empowerment" },
            text: {
              fr: "Programmes de développement des compétences minières, en cohérence avec le Forum Femmes & Mines.",
              en: "Mining skills development programmes, in line with the Women in Mining Forum.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Rejoignez la cause", en: "Join the cause" },
        text: {
          fr: "Associez-vous à nous pour bâtir un avenir plus durable et inclusif pour les communautés minières d'Afrique.",
          en: "Partner with us to build a more sustainable and inclusive future for Africa's mining communities.",
        },
      },
    ],
  },
];
