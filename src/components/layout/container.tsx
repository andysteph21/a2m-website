import type * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Conteneur centré, largeur max 1280px, marges responsives
 * (16/24px mobile → 32px tablette → 64px desktop) — d'après le brand book.
 */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16", className)}
      {...props}
    />
  );
}
