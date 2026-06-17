import { ContactForm } from "@/components/blocks/contact-form";
import { siteConfig } from "@/config/site";
import type { Localized } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

interface ContactPurpose {
  purpose: Localized;
  email: string;
}

const purposes: ContactPurpose[] = [
  {
    purpose: { fr: "Exposition & commandites", en: "Exhibition & sponsorship" },
    email: siteConfig.emails.sales,
  },
  {
    purpose: { fr: "Partenariats stratégiques", en: "Strategic partnerships" },
    email: siteConfig.emails.partners,
  },
  {
    purpose: { fr: "Conférenciers & programme", en: "Speakers & program" },
    email: siteConfig.emails.programming,
  },
  {
    purpose: { fr: "Presse & médias", en: "Press & media" },
    email: siteConfig.emails.media,
  },
];

/** Sous-section « Nous joindre » : quand utiliser le formulaire + annuaire courriel. */
export function ContactSection({ locale }: { locale: Locale }) {
  const fr = locale === "fr";

  return (
    <div className="flex flex-col gap-8">
      {/* Mise en évidence : quand utiliser le formulaire */}
      <div className="rounded-sm border border-emerald-cta/25 bg-mist/50 p-5 sm:p-6">
        <p className="font-semibold text-[11px] text-emerald-cta uppercase tracking-[0.18em]">
          {fr ? "Quand utiliser le formulaire" : "When to use the form"}
        </p>
        <p className="mt-2 max-w-[680px] text-body text-muted">
          {fr
            ? "Pour une question générale ou si vous ne savez pas à qui vous adresser, utilisez le formulaire ci-dessous : nous acheminerons votre message à la bonne équipe. Pour une demande précise, écrivez directement à l'adresse correspondante."
            : "For a general question or if you're not sure who to reach, use the form below — we'll route your message to the right team. For a specific request, email the relevant address directly."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.7fr_300px] lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
              {fr ? "Écrire directement" : "Email us directly"}
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {purposes.map((item) => (
                <li key={item.email} className="border-hairline-soft border-b pb-4 last:border-0">
                  <p className="font-semibold text-body text-ink">{pick(item.purpose, locale)}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-small text-emerald-cta transition-colors hover:text-emerald-deep"
                  >
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-hairline border-t pt-5">
            <h3 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
              {fr ? "Lieu" : "Venue"}
            </h3>
            <p className="mt-2 text-body text-muted">{siteConfig.venue}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
