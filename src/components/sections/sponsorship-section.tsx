import { Mail } from "lucide-react";
import { SponsorshipTiers } from "@/components/blocks/sponsorship-tiers";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { sponsorshipTiers } from "@/content/data/sponsorship";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Sous-section « Commandite » : paliers + invitation à contacter les ventes. */
export function SponsorshipSection({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-8">
      <SponsorshipTiers
        tiers={sponsorshipTiers.map((tier) => ({
          name: pick(tier.name, locale),
          tagline: pick(tier.tagline, locale),
          featured: tier.featured,
          benefits: tier.benefits.map((b) => pick(b, locale)),
        }))}
        onRequestLabel={locale === "fr" ? "Sur demande" : "On request"}
      />
      <div className="flex flex-col items-start gap-4 rounded-sm border-l-2 border-l-gold bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[520px] text-body text-muted">
          {locale === "fr"
            ? "Forfaits personnalisables : notre équipe vous accompagne pour bâtir une offre sur mesure."
            : "Customisable packages: our team will help you craft a tailored offer."}
        </p>
        <Button asChild variant="secondary" size="sm" className="shrink-0">
          <a href={`mailto:${siteConfig.emails.sales}`}>
            <Mail />
            {locale === "fr" ? "Contacter les ventes" : "Contact sales"}
          </a>
        </Button>
      </div>
    </div>
  );
}
