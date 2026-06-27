import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface FeatureView {
  title: string;
  text: string;
  icon?: LucideIcon;
  /** Lien optionnel : rend la carte cliquable. */
  href?: string;
}

interface FeatureGridProps {
  items: FeatureView[];
  columns?: 2 | 3;
  numbered?: boolean;
  className?: string;
}

const columnClasses: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

/** Grille de cartes-fonctionnalités réutilisable (piliers, raisons, profils…). */
export function FeatureGrid({ items, columns = 3, numbered = false, className }: FeatureGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6", columnClasses[columns], className)}>
      {items.map((item, i) => {
        const card = (
          <Card key={item.title} interactive className="flex h-full flex-col gap-3 p-6">
            {numbered ? (
              <span className="tnum font-display font-bold text-data text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              item.icon && (
                <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                  <item.icon className="size-5" />
                </span>
              )
            )}
            <h3 className="font-display font-semibold text-h3 text-ink">{item.title}</h3>
            <p className="text-body text-muted">{item.text}</p>
          </Card>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="block h-full">
            {card}
          </Link>
        ) : (
          <div key={item.title} className="h-full">
            {card}
          </div>
        );
      })}
    </div>
  );
}
