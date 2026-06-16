import type { PageContent } from "../types";

export const planYourVisitPages: PageContent[] = [
  {
    slug: "plan-your-visit",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Lieu & accessibilité", en: "Venue & Accessibility" },
    lead: {
      fr: "A2M 2027 se tient au Centre Mont-Royal, au cœur du centre-ville de Montréal, facilement accessible en transport en commun.",
      en: "A2M 2027 takes place at the Centre Mont-Royal, in the heart of downtown Montréal, easily reachable by public transit.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            fr: "À quelques minutes des principales stations de métro.",
            en: "Minutes from major metro stations.",
          },
          {
            fr: "Infrastructure entièrement accessible.",
            en: "Fully accessible venue.",
          },
          {
            fr: "À proximité immédiate des hôtels partenaires.",
            en: "Within immediate reach of partner hotels.",
          },
        ],
      },
    ],
  },
  {
    slug: "plan-your-visit/where-to-stay",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Où loger", en: "Where to Stay" },
    lead: {
      fr: "L'hôtel officiel d'A2M 2027 est le Fairmont Le Reine Elizabeth, hôte de la table ronde ministérielle et du dîner de gala.",
      en: "The official hotel of A2M 2027 is the Fairmont The Queen Elizabeth, host of the Ministerial Round Table and gala dinner.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Des tarifs préférentiels seront proposés aux délégués. Détails à venir.",
          en: "Preferential rates will be offered to delegates. Details to come.",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/discover-montreal",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Découvrir Montréal", en: "Discover Montréal" },
    lead: {
      fr: "Métropole bilingue et créative, Montréal allie effervescence culturelle, gastronomie et qualité de vie.",
      en: "A bilingual, creative metropolis, Montréal combines cultural energy, gastronomy and quality of life.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Profitez de votre séjour pour explorer les quartiers, festivals et restaurants qui font la réputation de la ville.",
          en: "Make the most of your stay to explore the neighbourhoods, festivals and restaurants the city is known for.",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/visa",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Délégués internationaux — visa", en: "International Delegates — Visa" },
    lead: {
      fr: "Informations pratiques pour les délégués internationaux : visa, AVE (eTA) et lettres d'invitation officielles.",
      en: "Practical information for international delegates: visas, eTA and official invitation letters.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Lettre d'invitation", en: "Invitation letter" },
        text: {
          fr: "Une lettre d'invitation officielle peut être fournie sur demande aux délégués inscrits pour appuyer une demande de visa.",
          en: "An official invitation letter can be provided on request to registered delegates to support a visa application.",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/useful-info",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Informations utiles", en: "Useful Information" },
    lead: {
      fr: "Météo, devise, fuseau horaire et contacts d'urgence pour préparer sereinement votre déplacement.",
      en: "Weather, currency, time zone and emergency contacts to plan your trip with peace of mind.",
    },
    blocks: [
      {
        type: "list",
        items: [
          { fr: "Devise : dollar canadien (CAD).", en: "Currency: Canadian dollar (CAD)." },
          { fr: "Fuseau horaire : heure de l'Est (ET).", en: "Time zone: Eastern Time (ET)." },
          {
            fr: "Météo de juin : douce et agréable (15–25 °C).",
            en: "June weather: mild and pleasant (15–25 °C).",
          },
        ],
      },
    ],
  },
];
