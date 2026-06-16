import { CtaBand } from "@/components/blocks/cta-band";
import { SponsorshipTiers } from "@/components/blocks/sponsorship-tiers";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { sponsorshipTiers } from "@/content/data/sponsorship";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Vue « Opportunités de commandite » avec paliers + CTA ventes. */
export function SponsorshipView({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader
        eyebrow={locale === "fr" ? "Exposer & Commanditer" : "Exhibit & Sponsor"}
        title={locale === "fr" ? "Opportunités de commandite" : "Sponsorship Opportunities"}
        lead={
          locale === "fr"
            ? "Des paliers conçus pour démultiplier votre visibilité. Forfaits personnalisables, tarifs sur demande."
            : "Tiers designed to amplify your visibility. Customisable packages, pricing on request."
        }
        breadcrumb={[
          {
            label: locale === "fr" ? "Exposer & Commanditer" : "Exhibit & Sponsor",
            href: "/exhibit-sponsor",
          },
          { label: locale === "fr" ? "Commandite" : "Sponsorship" },
        ]}
      />
      <Section>
        <SponsorshipTiers
          tiers={sponsorshipTiers.map((tier) => ({
            name: pick(tier.name, locale),
            tagline: pick(tier.tagline, locale),
            featured: tier.featured,
            benefits: tier.benefits.map((b) => pick(b, locale)),
          }))}
          onRequestLabel={locale === "fr" ? "Sur demande" : "On request"}
        />
      </Section>
      <CtaBand
        title={locale === "fr" ? "Construisons votre forfait" : "Let's build your package"}
        text={
          locale === "fr"
            ? "Notre équipe vous accompagne pour bâtir une offre sur mesure."
            : "Our team will help you craft a tailored offer."
        }
        primary={{
          label: locale === "fr" ? "Contacter les ventes" : "Contact sales",
          href: `mailto:${siteConfig.emails.sales}`,
        }}
      />
    </>
  );
}
