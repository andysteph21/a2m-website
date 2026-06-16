import { getTranslations } from "next-intl/server";
import { PricingTiers } from "@/components/blocks/pricing-tiers";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { delegateTiers } from "@/content/data/pricing";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Vue « S'inscrire comme délégué » avec barème tarifaire. */
export async function RegisterView({ locale }: { locale: Locale }) {
  const t = await getTranslations("common");
  return (
    <>
      <PageHeader
        eyebrow={locale === "fr" ? "Participer" : "Attend"}
        title={locale === "fr" ? "S'inscrire comme délégué" : "Register as a Delegate"}
        lead={
          locale === "fr"
            ? "Choisissez votre formule. Les tarifs Early Bird sont à durée limitée."
            : "Choose your pass. Early Bird rates are available for a limited time."
        }
        breadcrumb={[
          { label: locale === "fr" ? "Participer" : "Attend", href: "/attend" },
          { label: locale === "fr" ? "S'inscrire" : "Register" },
        ]}
      />
      <Section>
        <PricingTiers
          tiers={delegateTiers.map((tier) => ({
            name: pick(tier.name, locale),
            price: tier.price,
            period: tier.period ? pick(tier.period, locale) : undefined,
            featured: tier.featured,
            features: tier.features.map((f) => pick(f, locale)),
          }))}
          ctaLabel={t("register")}
          ctaUrl={siteConfig.registerUrl}
          popularLabel={locale === "fr" ? "Populaire" : "Popular"}
        />
        <p className="mt-8 max-w-[680px] text-small text-subtle">
          {locale === "fr"
            ? "Les tarifs sont indiqués en dollars canadiens (CAD), hors taxes applicables. L'inscription est traitée sur notre plateforme partenaire."
            : "Prices are shown in Canadian dollars (CAD), excluding applicable taxes. Registration is processed on our partner platform."}
        </p>
      </Section>
    </>
  );
}
