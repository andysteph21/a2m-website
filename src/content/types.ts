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

/** Élément de carte (titre + texte) pour les blocs « features » / « steps ». */
export interface CardItem {
  title: Localized;
  text: Localized;
}

/**
 * Blocs de contenu éditorial pour les pages intérieures (rendu par ContentRenderer).
 * Les blocs « riches » (stats/features/steps/logos/speakers/image) privilégient un
 * rendu en cartes/icônes plutôt qu'un mur de texte.
 */
export type ContentBlock =
  | { type: "paragraph"; text: Localized }
  | { type: "heading"; text: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "callout"; title?: Localized; text: Localized }
  | { type: "image"; label: Localized; ratio?: ImageRatio; columns?: 1 | 2 | 3 }
  | { type: "stats"; items: { value: string; label: Localized }[] }
  | { type: "features"; columns?: 2 | 3; numbered?: boolean; items: CardItem[] }
  | { type: "steps"; items: CardItem[] }
  | { type: "logos"; label?: Localized; count?: number }
  | { type: "speakers"; label?: Localized; count?: number };

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
