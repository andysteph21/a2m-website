import type { PageContent } from "../types";

export const attendPages: PageContent[] = [
  {
    slug: "attend",
    section: "/attend",
    eyebrow: { fr: "Participer", en: "Attend" },
    title: { fr: "Pourquoi participer ?", en: "Why Participate?" },
    lead: {
      fr: "Quel que soit votre profil, A2M offre un accès direct aux décideurs, au capital et aux opportunités du secteur minier africain.",
      en: "Whatever your profile, A2M offers direct access to the decision-makers, capital and opportunities of the African mining sector.",
    },
    blocks: [
      {
        type: "heading",
        text: { fr: "Un événement pour chaque profil", en: "An event for every profile" },
      },
      {
        type: "list",
        items: [
          {
            fr: "Majors miniers — sécuriser l'accès aux ressources et aux partenariats.",
            en: "Mining majors — secure access to resources and partnerships.",
          },
          {
            fr: "Juniors & explorateurs — lever du capital et gagner en visibilité.",
            en: "Juniors & explorers — raise capital and gain visibility.",
          },
          {
            fr: "Investisseurs — accéder à un flux de projets qualifiés.",
            en: "Investors — access a qualified deal flow.",
          },
          {
            fr: "Fournisseurs & services — rencontrer des acheteurs ciblés.",
            en: "Suppliers & services — meet targeted buyers.",
          },
          {
            fr: "Gouvernements — promouvoir les juridictions et attirer l'investissement.",
            en: "Governments — promote jurisdictions and attract investment.",
          },
          {
            fr: "Acheteurs & off-takers — sécuriser l'approvisionnement à long terme.",
            en: "Buyers & off-takers — secure long-term supply.",
          },
        ],
      },
    ],
  },
];
