/** Lien de navigation résolu dans une locale (libellés déjà traduits). */
export interface ResolvedNavLink {
  title: string;
  href: string;
  external?: boolean;
  /** Sous-liens imbriqués (menu à 3 niveaux). */
  children?: ResolvedNavLink[];
}

export interface ResolvedNavSection extends ResolvedNavLink {
  children?: ResolvedNavLink[];
}
