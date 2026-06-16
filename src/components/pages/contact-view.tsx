import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/blocks/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";

/** Vue « Nous joindre » avec formulaire + coordonnées. */
export async function ContactView({ locale }: { locale: Locale }) {
  const t = await getTranslations("footer");
  return (
    <>
      <PageHeader
        eyebrow={locale === "fr" ? "À propos" : "About"}
        title={locale === "fr" ? "Nous joindre" : "Contact Us"}
        lead={
          locale === "fr"
            ? "Une question sur la participation, l'exposition ou les partenariats ? Écrivez-nous."
            : "A question about attending, exhibiting or partnerships? Get in touch."
        }
        breadcrumb={[
          { label: locale === "fr" ? "À propos" : "About", href: "/about" },
          { label: locale === "fr" ? "Nous joindre" : "Contact Us" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <ContactForm />
          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
                {t("contacts")}
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {Object.entries(siteConfig.emails).map(([key, email]) => (
                  <li key={email} className="text-body text-muted">
                    <span className="block text-[11px] text-subtle uppercase tracking-[0.1em]">
                      {key}
                    </span>
                    <a href={`mailto:${email}`} className="hover:text-emerald-cta">
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
                {locale === "fr" ? "Lieu" : "Venue"}
              </h2>
              <p className="mt-3 text-body text-muted">{siteConfig.venue}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
