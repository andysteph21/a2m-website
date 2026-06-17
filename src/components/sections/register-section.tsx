import { PricingTiers } from "@/components/blocks/pricing-tiers";
import { delegateTiers } from "@/content/data/pricing";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Sous-section « S'inscrire » : barème tarifaire + bouton (popup « bientôt »). */
export function RegisterSection({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-8">
      <PricingTiers
        tiers={delegateTiers.map((tier) => ({
          name: pick(tier.name, locale),
          price: tier.price,
          period: tier.period ? pick(tier.period, locale) : undefined,
          featured: tier.featured,
          features: tier.features.map((f) => pick(f, locale)),
        }))}
        ctaLabel={locale === "fr" ? "S'inscrire" : "Register"}
        popularLabel={locale === "fr" ? "Populaire" : "Popular"}
      />
      <p className="max-w-[680px] text-small text-subtle">
        {locale === "fr"
          ? "Les tarifs sont indiqués en dollars canadiens (CAD), hors taxes applicables. Les inscriptions ouvriront prochainement."
          : "Prices are shown in Canadian dollars (CAD), excluding applicable taxes. Registration will open soon."}
      </p>
    </div>
  );
}
