import type { Locale } from "@/i18n/routing";

/** Valeur traduite dans chaque locale supportée. */
export type Localized<T = string> = Record<Locale, T>;

/** Lien de navigation simple. */
export interface NavLink {
  title: Localized;
  href: string;
  /** Lien externe (ouvre dans un nouvel onglet). */
  external?: boolean;
}

/** Section de navigation avec sous-liens optionnels. */
export interface NavSection extends NavLink {
  children?: NavLink[];
}

/** Format d'image attendu (ratio d'aspect du placeholder). */
export type ImageRatio = "16/9" | "21/9" | "4/5" | "1/1" | "3/2";

/** Blocs de contenu éditorial pour les pages intérieures (rendu par ContentRenderer). */
export type ContentBlock =
  | { type: "paragraph"; text: Localized }
  | { type: "heading"; text: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "callout"; title?: Localized; text: Localized }
  | { type: "image"; label: Localized; ratio?: ImageRatio; columns?: 1 | 2 | 3 };

/** Contenu d'une page intérieure pilotée par le registre. */
export interface PageContent {
  /** Chemin sans locale, ex. "about/sustainability". */
  slug: string;
  /** Section parente (href top-niveau) pour le fil d'Ariane, ex. "/about". */
  section: string;
  eyebrow?: Localized;
  title: Localized;
  lead?: Localized;
  blocks: ContentBlock[];
  /** Note de traduction (FR à compléter, etc.). */
  todo?: string;
}
