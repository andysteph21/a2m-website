import type { PageContent } from "../types";

export const programPages: PageContent[] = [
  {
    slug: "program/ministerial-round-table",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
    lead: {
      fr: "Un dialogue de haut niveau réunissant plus de 30 ministres africains et des décideurs canadiens, sur invitation.",
      en: "A high-level dialogue gathering 30+ African ministers and Canadian decision-makers, by invitation.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "La table ronde ministérielle ouvre la conférence en posant le cadre politique et économique des partenariats à venir. Elle se tient à l'hôtel Fairmont Le Reine Elizabeth.",
          en: "The Ministerial Round Table opens the conference by setting the political and economic frame for the partnerships ahead. It is held at the Fairmont The Queen Elizabeth hotel.",
        },
      },
      {
        type: "callout",
        title: { fr: "Sur invitation", en: "By invitation" },
        text: {
          fr: "L'accès à cette session est réservé aux délégations officielles et aux partenaires stratégiques.",
          en: "Access to this session is reserved for official delegations and strategic partners.",
        },
      },
    ],
  },
  {
    slug: "program/women-in-mining",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
    lead: {
      fr: "Un espace dédié aux dirigeantes, ingénieures et entrepreneures qui façonnent l'avenir du secteur minier.",
      en: "A dedicated space for the women leaders, engineers and entrepreneurs shaping the future of mining.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Le Forum Femmes & Mines est inclus dans l'inscription à la conférence — aucun billet séparé n'est requis.",
          en: "The Women in Mining Forum is included with conference registration — no separate ticket is required.",
        },
      },
    ],
  },
  {
    slug: "program/investors-breakfast",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
    lead: {
      fr: "Une rencontre à huis clos, sur invitation, entre investisseurs institutionnels et projets sélectionnés.",
      en: "A closed-door, invitation-only gathering between institutional investors and selected projects.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Ce segment à haute valeur ajoutée favorise des échanges ciblés dans un cadre confidentiel.",
          en: "This high-value segment fosters focused conversations in a confidential setting.",
        },
      },
    ],
  },
  {
    slug: "program/networking",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Réseautage & événements sociaux", en: "Networking & Social Events" },
    lead: {
      fr: "Réception de bienvenue, cérémonie d'ouverture et dîner de gala : des moments forts pour bâtir des relations durables.",
      en: "Welcome reception, opening ceremony and gala dinner: key moments to build lasting relationships.",
    },
    blocks: [
      {
        type: "list",
        items: [
          { fr: "Réception de bienvenue", en: "Welcome reception" },
          { fr: "Cérémonie d'ouverture", en: "Opening ceremony" },
          { fr: "Dîner de gala", en: "Gala dinner" },
        ],
      },
    ],
  },
  {
    slug: "program/speakers",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Conférenciers & panélistes", en: "Speakers & Panellists" },
    lead: {
      fr: "La liste des conférenciers et panélistes confirmés sera dévoilée prochainement.",
      en: "The list of confirmed speakers and panellists will be unveiled soon.",
    },
    blocks: [
      {
        type: "image",
        label: {
          fr: "Photos d'identité des conférenciers (nom, organisation, sujet)",
          en: "Speaker headshots (name, organisation, topic)",
        },
        ratio: "1/1",
        columns: 3,
      },
      {
        type: "callout",
        title: { fr: "Bientôt disponible", en: "Coming soon" },
        text: {
          fr: "Vous souhaitez intervenir ? Soumettez votre candidature via « Devenir conférencier ».",
          en: 'Would you like to speak? Submit your proposal via "Become a Speaker".',
        },
      },
    ],
  },
];
