import type { ReactNode } from "react";

/**
 * Template de route : re-monté à chaque navigation, il rejoue l'entrée
 * « cinéma » M1 en fondu (opacité seule — pas de transform, pour ne pas
 * créer de bloc conteneur autour des éléments fixes). Neutralisé sous
 * prefers-reduced-motion (voir globals.css).
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="a2m-page-enter">{children}</div>;
}
