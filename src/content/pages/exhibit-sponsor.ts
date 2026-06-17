import type { PageContent } from "../types";

export const exhibitSponsorPages: PageContent[] = [
  {
    slug: "exhibit-sponsor",
    section: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    title: { fr: "Pourquoi exposer", en: "Why Exhibit" },
    lead: {
      fr: "Présentez votre organisation devant un public qualifié d'investisseurs, d'acheteurs et de décideurs du secteur minier.",
      en: "Showcase your organisation before a qualified audience of investors, buyers and decision-makers in mining.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            fr: "Visibilité de marque auprès de 1 500+ délégués de 35 pays.",
            en: "Brand visibility before 1,500+ delegates from 35 countries.",
          },
          {
            fr: "Génération de prospects qualifiés et rencontres B2B.",
            en: "Qualified lead generation and B2B meetings.",
          },
          {
            fr: "Positionnement au cœur du marché des minéraux critiques.",
            en: "Positioning at the heart of the critical-minerals market.",
          },
        ],
      },
    ],
  },
  {
    slug: "exhibit-sponsor/exhibition",
    section: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    title: { fr: "Opportunités d'exposition", en: "Exhibition Opportunities" },
    lead: {
      fr: "Du salon professionnel au Village des explorateurs, choisissez le format adapté à vos objectifs.",
      en: "From the trade show to the Explorer Village, choose the format that fits your objectives.",
    },
    blocks: [
      {
        type: "heading",
        text: { fr: "Salon professionnel", en: "Trade Show" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Stands standards équipés (éclairage, comptoir d'accueil, mobilier, présentoir à brochures) au cœur des flux de la conférence.",
          en: "Equipped standard booths (lighting, reception counter, furniture, brochure holder) in the heart of the conference flow.",
        },
      },
      {
        type: "heading",
        text: { fr: "Village des explorateurs", en: "Explorer Village" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Un espace dédié aux sociétés juniors et en démarrage, à un format accessible pour maximiser la visibilité.",
          en: "A space dedicated to junior and early-stage companies, in an accessible format to maximise visibility.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Plan du salon / rendu d'un stand standard 2×3",
          en: "Trade-show floor plan / standard 2×3 booth render",
        },
        ratio: "16/9",
      },
    ],
  },
  {
    slug: "exhibit-sponsor/why-sponsor",
    section: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    title: { fr: "Pourquoi commanditer", en: "Why Sponsor" },
    lead: {
      fr: "Associez votre marque à l'événement minier de référence et démultipliez votre visibilité.",
      en: "Associate your brand with the flagship mining event and amplify your visibility.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Les commandites offrent une présence premium : keynotes, réceptions, signalétique, contenus et bien plus.",
          en: "Sponsorships offer a premium presence: keynotes, receptions, signage, content and much more.",
        },
      },
    ],
  },
  {
    slug: "exhibit-sponsor/associate-your-brand",
    section: "/exhibit-sponsor",
    eyebrow: { fr: "Exposer & Commanditer", en: "Exhibit & Sponsor" },
    title: { fr: "Associer votre marque", en: "Associate Your Brand" },
    lead: {
      fr: "Des opportunités sur mesure pour gouvernements, sociétés minières, fournisseurs et investisseurs.",
      en: "Tailored opportunities for governments, mining companies, suppliers and investors.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Discutons", en: "Let's talk" },
        text: {
          fr: "Contactez sales@a2m2027.com pour construire une offre adaptée à vos objectifs.",
          en: "Contact sales@a2m2027.com to build an offer tailored to your goals.",
        },
      },
    ],
  },
];
