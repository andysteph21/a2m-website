import { defineRouting } from "next-intl/routing";

/** Configuration de routage i18n : FR par défaut, EN secondaire. */
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
