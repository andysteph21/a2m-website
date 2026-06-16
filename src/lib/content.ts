import type { Localized } from "@/content/types";
import type { Locale } from "@/i18n/routing";

/** Sélectionne la valeur d'un champ localisé pour la locale courante. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
