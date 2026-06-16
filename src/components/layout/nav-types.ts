/** Lien de navigation résolu dans une locale (libellés déjà traduits). */
export interface ResolvedNavLink {
  title: string;
  href: string;
  external?: boolean;
}

export interface ResolvedNavSection extends ResolvedNavLink {
  children?: ResolvedNavLink[];
}
