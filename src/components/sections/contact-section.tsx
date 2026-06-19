import { Mail } from "lucide-react";
import { ContactForm } from "@/components/blocks/contact-form";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";

/** Sous-section « Nous joindre » : un seul courriel + formulaire à cases à cocher. */
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
            ? "Cochez l'objet de votre demande et écrivez-nous via le formulaire : nous l'acheminerons à la bonne équipe. Vous pouvez aussi nous écrire directement."
            : "Tick what your enquiry is about and reach us via the form — we'll route it to the right team. You can also email us directly."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.7fr_300px] lg:grid-cols-[1fr_300px]">
        <ContactForm />

        <aside className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
              {fr ? "Nous écrire" : "Email us"}
            </h3>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-3 inline-flex items-center gap-2 text-body text-emerald-cta transition-colors hover:text-emerald-deep"
            >
              <Mail className="size-4" />
              {siteConfig.contactEmail}
            </a>
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
