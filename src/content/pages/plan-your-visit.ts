import type { PageContent } from "../types";

export const planYourVisitPages: PageContent[] = [
  {
    slug: "plan-your-visit",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Lieu & accessibilité", en: "Venue & Accessibility" },
    lead: {
      fr: "A2M 2027 se tient au Centre Mont-Royal, au cœur du centre-ville de Montréal, à quelques pas des hôtels, restaurants et sites culturels.",
      en: "A2M 2027 takes place at the Centre Mont-Royal, in the heart of downtown Montréal, steps from hotels, restaurants and cultural sites.",
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "En métro", en: "By metro" },
            text: {
              fr: "À courte distance de la station Peel (ligne verte) ; lignes de bus 144 et 150.",
              en: "A short walk from Peel Station (Green Line); bus routes 144 and 150.",
            },
          },
          {
            title: { fr: "En voiture", en: "By car" },
            text: {
              fr: "Depuis l'autoroute 40, sortie boul. René-Lévesque ; stationnement avec valet à l'hôtel.",
              en: "From Highway 40, René-Lévesque Blvd exit; valet parking at the hotel.",
            },
          },
          {
            title: { fr: "En avion", en: "By air" },
            text: {
              fr: "Aéroport Montréal-Trudeau (YUL) à ≈ 20 km ; taxi et navette disponibles.",
              en: "Montréal-Trudeau Airport (YUL) ≈ 20 km away; taxi and shuttle available.",
            },
          },
        ],
      },
      {
        type: "image",
        label: {
          fr: "Photo du Centre Mont-Royal + plan d'accès / transports",
          en: "Centre Mont-Royal photo + access map / transit",
        },
        ratio: "16/9",
        columns: 2,
      },
    ],
  },
  {
    slug: "plan-your-visit/where-to-stay",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Où loger", en: "Where to Stay" },
    lead: {
      fr: "L'hôtel recommandé est le Fairmont Le Reine Elizabeth — hôtel emblématique du centre-ville qui accueille dirigeants et délégations internationales depuis 1958.",
      en: "The recommended hotel is the Fairmont The Queen Elizabeth — a landmark downtown hotel welcoming leaders and international delegations since 1958.",
    },
    blocks: [
      {
        type: "image",
        label: {
          fr: "Photo du Fairmont Le Reine Elizabeth (façade ou hall)",
          en: "Fairmont The Queen Elizabeth photo (façade or lobby)",
        },
        ratio: "16/9",
      },
      {
        type: "callout",
        title: { fr: "Tarifs préférentiels", en: "Preferential rates" },
        text: {
          fr: "Des tarifs préférentiels seront proposés aux délégués — lien de réservation à venir.",
          en: "Preferential rates will be offered to delegates — booking link to come.",
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
      fr: "Métropole bilingue et créative, Montréal allie charme européen, énergie nord-américaine et joie de vivre québécoise. Juin marque le début de la saison des festivals.",
      en: "A bilingual, creative metropolis, Montréal blends European charm, North American energy and Quebecois joie de vivre. June kicks off festival season.",
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Quartiers", en: "Neighbourhoods" },
            text: {
              fr: "Vieux-Montréal, Plateau Mont-Royal et Quartier des Spectacles.",
              en: "Old Montréal, Plateau Mont-Royal and the Quartier des Spectacles.",
            },
          },
          {
            title: { fr: "Festivals de juin", en: "June festivals" },
            text: {
              fr: "Francofolies, Festival international de jazz, MURAL (art urbain).",
              en: "Francofolies, Montréal International Jazz Festival, MURAL (street art).",
            },
          },
          {
            title: { fr: "Plein air & gastronomie", en: "Outdoors & food" },
            text: {
              fr: "Parc du Mont-Royal, canal de Lachine, marchés publics et scène gastronomique.",
              en: "Mount Royal Park, Lachine Canal, public markets and a vibrant food scene.",
            },
          },
        ],
      },
      {
        type: "image",
        label: {
          fr: "Visuels de Montréal (skyline, Vieux-Montréal, gastronomie, festivals)",
          en: "Montréal visuals (skyline, Old Montréal, food, festivals)",
        },
        ratio: "3/2",
        columns: 3,
      },
    ],
  },
  {
    slug: "plan-your-visit/visa",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Délégués internationaux — visa", en: "International Delegates — Visa" },
    lead: {
      fr: "La plupart des visiteurs ont besoin d'un visa de résident temporaire (VRT) ou d'une AVE (eTA). Vérifiez vos exigences sur le site officiel du gouvernement du Canada (IRCC) bien à l'avance.",
      en: "Most visitors need a Temporary Resident Visa (TRV) or an eTA. Verify your requirements on the official Government of Canada (IRCC) website well in advance.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Lettre d'invitation", en: "Invitation letter" },
        text: {
          fr: "Une lettre d'invitation officielle peut être fournie sur demande aux délégués inscrits. A2M ne peut garantir l'obtention des visas.",
          en: "An official invitation letter can be provided on request to registered delegates. A2M cannot guarantee visa issuance.",
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
      fr: "Devise, fuseau horaire et météo pour préparer sereinement votre déplacement.",
      en: "Currency, time zone and weather to plan your trip with peace of mind.",
    },
    blocks: [
      {
        type: "stats",
        items: [
          { value: "CAD", label: { fr: "dollar canadien", en: "Canadian dollar" } },
          { value: "ET", label: { fr: "heure de l'Est", en: "Eastern Time" } },
          { value: "15–25 °C", label: { fr: "météo de juin", en: "June weather" } },
          { value: "FR / EN", label: { fr: "langues", en: "languages" } },
        ],
      },
    ],
  },
];
