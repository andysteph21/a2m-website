import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface SponsorshipTierView {
  name: string;
  tagline: string;
  featured?: boolean;
  benefits: string[];
}

/** Paliers de commandite — tarifs sur demande. */
export function SponsorshipTiers({
  tiers,
  onRequestLabel,
}: {
  tiers: SponsorshipTierView[];
  onRequestLabel: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          variant={tier.featured ? "featured" : "default"}
          className="flex flex-col gap-4 p-6"
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-display font-bold text-h2 text-emerald-deep">{tier.name}</h3>
            <span className="text-small text-muted">{tier.tagline}</span>
          </div>
          <Badge variant={tier.featured ? "gold" : "neutral"} className="w-fit">
            {onRequestLabel}
          </Badge>
          <ul className="flex flex-1 flex-col gap-2.5">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-small text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-cta" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
