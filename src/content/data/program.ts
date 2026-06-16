import type { Localized } from "../types";

export interface ScheduleSession {
  time: string;
  title: Localized;
  tag?: Localized;
}

export interface ScheduleDay {
  date: Localized;
  location: Localized;
  sessions: ScheduleSession[];
}

/** Programme prévisionnel d'A2M 2027 (à confirmer). */
export const schedule: ScheduleDay[] = [
  {
    date: { fr: "Dim. 6 juin", en: "Sun. June 6" },
    location: { fr: "Fairmont Le Reine Elizabeth", en: "Fairmont The Queen Elizabeth" },
    sessions: [
      {
        time: "09:00",
        title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
        tag: { fr: "Sur invitation", en: "By invitation" },
      },
      {
        time: "19:00",
        title: { fr: "Dîner de gala", en: "Gala dinner" },
      },
    ],
  },
  {
    date: { fr: "Lun. 7 juin", en: "Mon. June 7" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "08:00",
        title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
        tag: { fr: "Sur invitation", en: "By invitation" },
      },
      {
        time: "09:30",
        title: { fr: "Cérémonie d'ouverture & keynotes", en: "Opening ceremony & keynotes" },
      },
      {
        time: "11:00",
        title: {
          fr: "Ouverture du salon & maillage B2B",
          en: "Exhibition opens & B2B matchmaking",
        },
      },
    ],
  },
  {
    date: { fr: "Mar. 8 juin", en: "Tue. June 8" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "09:00",
        title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
      },
      {
        time: "10:30",
        title: { fr: "Panels sectoriels & juridictions", en: "Sector & jurisdiction panels" },
      },
      {
        time: "18:00",
        title: { fr: "Réception de réseautage", en: "Networking reception" },
      },
    ],
  },
  {
    date: { fr: "Mer. 9 juin", en: "Wed. June 9" },
    location: { fr: "Centre Mont-Royal", en: "Centre Mont-Royal" },
    sessions: [
      {
        time: "09:00",
        title: { fr: "Rencontres B2B & showcases projets", en: "B2B meetings & project showcases" },
      },
      {
        time: "15:00",
        title: { fr: "Séance de clôture", en: "Closing session" },
      },
    ],
  },
];
