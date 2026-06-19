import type { PageContent } from "../types";
import { aboutPages } from "./about";
import { exhibitSponsorPages } from "./exhibit-sponsor";
import { partnerPages } from "./partner";
import { planYourVisitPages } from "./plan-your-visit";
import { programPages } from "./program";

/** Toutes les pages intérieures pilotées par le registre (hors pages spéciales). */
export const allPages: PageContent[] = [
  ...aboutPages,
  ...programPages,
  ...exhibitSponsorPages,
  ...planYourVisitPages,
  ...partnerPages,
];

const registry = new Map(allPages.map((page) => [page.slug, page]));

export function getPageContent(slug: string): PageContent | undefined {
  return registry.get(slug);
}

export const allSlugs: string[] = allPages.map((page) => page.slug);
