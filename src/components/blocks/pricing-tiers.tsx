import { Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface PricingTierView {
  name: string;
  price: string;
  period?: string;
  featured?: boolean;
  features: string[];
}

interface PricingTiersProps {
  tiers: PricingTierView[];
  ctaLabel: string;
  ctaUrl: string;
  popularLabel: string;
}

/** Grille de paliers tarifaires (cartes empilées sur mobile). */
export function PricingTiers({ tiers, ctaLabel, ctaUrl, popularLabel }: PricingTiersProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          variant={tier.featured ? "featured" : "default"}
          className="flex flex-col gap-5 p-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-h3 text-ink">{tier.name}</h3>
            {tier.featured && <Badge variant="gold">{popularLabel}</Badge>}
          </div>
          <div>
            <span className="tnum font-display font-bold text-data-xl text-emerald-deep">
              {tier.price}
            </span>
            {tier.period && (
              <span className="mt-1 block text-[12px] text-subtle uppercase tracking-[0.1em]">
                {tier.period}
              </span>
            )}
          </div>
          <ul className="flex flex-1 flex-col gap-2.5">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-small text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-cta" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant={tier.featured ? "primary" : "secondary"} className="w-full">
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
              <ExternalLink />
            </a>
          </Button>
        </Card>
      ))}
    </div>
  );
}
