/** Constantes globales du site A2M (non traduites / structurelles). */
export const siteConfig = {
  name: "A2M 2027",
  fullName: "Africa Mining in Montréal",
  url: "https://a2m2027.com",
  eventStart: "2027-06-07",
  eventEnd: "2027-06-09",
  venue: "Centre Mont-Royal, Montréal",
  /** Les inscriptions ne sont pas encore ouvertes : la CTA affiche un message. */
  registrationOpen: false,
  /** Plateforme d'inscription externe (lien sortant, utilisé une fois ouvert). */
  registerUrl: "https://example.com/a2m-2027/register",
  /** Programme téléchargeable (placeholder à remplacer). */
  programPdf: "/program/a2m-2027-program.pdf",
  emails: {
    sales: "sales@a2m2027.com",
    partners: "partners@a2m2027.com",
    programming: "programming@a2m2027.com",
    media: "media@a2m2027.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/a2m2027",
    x: "https://x.com/a2m2027",
  },
} as const;

export type SiteConfig = typeof siteConfig;
