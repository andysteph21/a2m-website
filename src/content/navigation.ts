import { type SubsectionDef, sections, subsectionTitle } from "./sections";
import type { NavLink, NavSection } from "./types";

/** Lien de nav pour une sous-section (récursif — menu à 3 niveaux). */
function navLink(sectionHref: string, sub: SubsectionDef): NavLink {
  return {
    title: subsectionTitle(sub),
    href: `${sectionHref}#${sub.id}`,
    children: sub.children?.map((child) => navLink(sectionHref, child)),
  };
}

/**
 * Arborescence de navigation dérivée des sections — source unique pour le header,
 * le footer et la page « Plan du site ». Les sous-sections pointent vers des ancres
 * (#id) sur la page de section ; les groupes imbriquent leurs sous-éléments.
 */
export const mainNav: NavSection[] = sections.map((section) => ({
  title: section.title,
  href: section.href,
  children: section.subsections.map((sub) => navLink(section.href, sub)),
}));
