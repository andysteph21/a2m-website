import { sections, subsectionTitle } from "./sections";
import type { NavSection } from "./types";

/**
 * Arborescence de navigation dérivée des sections — source unique pour le header,
 * le footer et la page « Plan du site ». Les sous-sections pointent vers des ancres
 * (#id) sur la page de section, puisque tout est désormais sur une seule page.
 */
export const mainNav: NavSection[] = sections.map((section) => ({
  title: section.title,
  href: section.href,
  children: section.subsections.map((sub) => ({
    title: subsectionTitle(sub),
    href: `${section.href}#${sub.id}`,
  })),
}));
