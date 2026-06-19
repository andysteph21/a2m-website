import type { Localized } from "../types";

/** Tracks de session (palette dédiée v1.0 — zéro collision avec les rôles). */
export type TrackKind = "policy" | "dealflow" | "esg" | "networking";

export interface ScheduleSession {
  time: string;
  endTime?: string;
  track: TrackKind;
  title: Localized;
  tag?: Localized;
  room?: Localized;
}

export interface ScheduleDay {
  date: Localized;
  location: Localized;
  sessions: ScheduleSession[];
}

/** Programme prévisionnel d'A2M 2027 — 6 au 9 juin (le 6 = ministériel, sur invitation). */
export const schedule: ScheduleDay[] = [
  {
    date: { fr: "Dim. 6 juin", en: "Sun. June 6" },
    location: { fr: "Fairmont Le Reine Elizabeth", en: "Fairmont The Queen Elizabeth" },
    sessions: [
      {
        time: "09:00",
        endTime: "12:00",
        track: "policy",
        title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
        tag: { fr: "Sur invitation", en: "By invitation" },
        room: { fr: "Salle de table ronde", en: "Roundtable" },
      },
      {
        time: "18:00",
        endTime: "20:00",
        track: "networking",
        title: { fr: "Réception de bienvenue", en: "Welcome reception" },
        room: { fr: "Terrasse", en: "Terrace" },
      },
    ],
  },
  {
    date: { fr: "Lun. 7 juin", en: "Mon. June 7" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "08:00",
        endTime: "09:15",
        track: "dealflow",
        title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
        tag: { fr: "Sur invitation", en: "By invitation" },
        room: { fr: "Salon privé", en: "Private lounge" },
      },
      {
        time: "09:30",
        endTime: "11:00",
        track: "policy",
        title: { fr: "Cérémonie d'ouverture & keynotes", en: "Opening ceremony & keynotes" },
        room: { fr: "Plénière", en: "Plenary" },
      },
      {
        time: "11:00",
        endTime: "18:00",
        track: "dealflow",
        title: {
          fr: "Ouverture du salon & maillage B2B",
          en: "Exhibition opens & B2B matchmaking",
        },
        room: { fr: "Marketplace", en: "Marketplace" },
      },
      {
        time: "19:00",
        endTime: "22:00",
        track: "networking",
        title: { fr: "Dîner de gala", en: "Gala dinner" },
        room: { fr: "Grande salle", en: "Grand Hall" },
      },
    ],
  },
  {
    date: { fr: "Mar. 8 juin", en: "Tue. June 8" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "09:00",
        endTime: "12:30",
        track: "esg",
        title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
        room: { fr: "Forum Hall", en: "Forum Hall" },
      },
      {
        time: "10:30",
        endTime: "17:00",
        track: "dealflow",
        title: { fr: "Panels sectoriels & juridictions", en: "Sector & jurisdiction panels" },
        room: { fr: "Plénière", en: "Plenary" },
      },
      {
        time: "18:00",
        endTime: "20:00",
        track: "networking",
        title: { fr: "Réception de réseautage", en: "Networking reception" },
        room: { fr: "Terrasse", en: "Terrace" },
      },
    ],
  },
  {
    date: { fr: "Mer. 9 juin", en: "Wed. June 9" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "09:00",
        endTime: "14:30",
        track: "dealflow",
        title: { fr: "Rencontres B2B & showcases projets", en: "B2B meetings & project showcases" },
        room: { fr: "Deal Rooms", en: "Deal Rooms" },
      },
      {
        time: "15:00",
        endTime: "16:30",
        track: "policy",
        title: { fr: "Séance de clôture", en: "Closing session" },
        room: { fr: "Plénière", en: "Plenary" },
      },
    ],
  },
];
