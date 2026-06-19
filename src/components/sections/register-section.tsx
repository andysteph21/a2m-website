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
          ? "Tarifs en dollars canadiens (CAD), hors TPS (5 %) et TVQ (9,975 %). Les investisseurs qualifiés participent gratuitement. Les inscriptions ouvriront prochainement."
          : "Prices in Canadian dollars (CAD), excluding GST (5%) and QST (9.975%). Qualified investors attend complimentary. Registration will open soon."}
      </p>
    </div>
  );
}
