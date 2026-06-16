import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind de façon sûre (clsx + tailwind-merge).
 * Utilisé par toutes les primitives UI pour composer les variantes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
