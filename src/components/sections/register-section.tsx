import { Check } from "lucide-react";
import { RegisterButton } from "@/components/blocks/register-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { activeDelegateTier, torontoTodayISO } from "@/content/data/pricing";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/**
 * Sous-section « S'inscrire » : affiche UNIQUEMENT le tarif délégué en vigueur,
 * choisi côté serveur d'après la date à Toronto (jamais l'horloge du navigateur).
 * La page est revalidée chaque heure, donc le tarif suit le calendrier.
 */
export function RegisterSection({ locale }: { locale: Locale }) {
  const tier = activeDelegateTier(torontoTodayISO());

  return (
    <div className="flex flex-col gap-8">
      <Card variant="featured" className="flex max-w-sm flex-col gap-5 p-6">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
            {locale === "fr" ? "Tarif actuel" : "Current rate"}
          </span>
          <Badge variant="gold">{pick(tier.name, locale)}</Badge>
        </div>
        <div>
          <span className="tnum font-display font-bold text-data-xl text-emerald-deep">
            {tier.price}
          </span>
          {tier.period && (
            <span className="mt-1 block text-[12px] text-subtle uppercase tracking-[0.1em]">
              {pick(tier.period, locale)}
            </span>
          )}
        </div>
        <ul className="flex flex-col gap-2.5">
          {tier.features.map((feature) => (
            <li key={feature.en} className="flex items-start gap-2 text-small text-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-cta" />
              <span>{pick(feature, locale)}</span>
            </li>
          ))}
        </ul>
        <RegisterButton
          label={locale === "fr" ? "S'inscrire" : "Register"}
          variant="primary"
          className="w-full"
          withIcon={false}
        />
      </Card>
      <p className="max-w-[680px] text-small text-subtle">
        {locale === "fr"
          ? "Tarif délégué en vigueur aujourd'hui (heure de Toronto). Tarifs en dollars canadiens (CAD), hors TPS (5 %) et TVQ (9,975 %). Les investisseurs qualifiés participent gratuitement. Les inscriptions ouvriront prochainement."
          : "Delegate rate in effect today (Toronto time). Prices in Canadian dollars (CAD), excluding GST (5%) and QST (9.975%). Qualified investors attend complimentary. Registration will open soon."}
      </p>
    </div>
  );
}
