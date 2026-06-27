"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface AccordionBlockItem {
  value: string;
  title: string;
  content: ReactNode;
}

interface AccordionBlockProps {
  items: AccordionBlockItem[];
  /** Autorise plusieurs panneaux ouverts simultanément. */
  multiple?: boolean;
}

/**
 * Îlot client : accordéon réutilisable au-dessus de la primitive Radix. Le
 * contenu de chaque panneau est rendu côté serveur (ContentRenderer) puis passé
 * en `content`, ce qui évite toute dépendance circulaire client/serveur.
 */
export function AccordionBlock({ items, multiple = false }: AccordionBlockProps) {
  return multiple ? (
    <Accordion type="multiple" className="w-full max-w-[820px]">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <Accordion type="single" collapsible className="w-full max-w-[820px]">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
