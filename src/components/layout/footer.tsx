import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { NewsletterForm } from "@/components/blocks/newsletter-form";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content/navigation";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Container } from "./container";
import { LanguageSwitcher } from "./language-switcher";

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  const loc = locale as Locale;
  const aboutSection = mainNav.find((s) => s.href === "/about");

  return (
    <footer className="mt-20 border-hairline border-t bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Marque */}
        <div className="lg:col-span-1">
          <Image
            src="/images/brand/a2m-logo.png"
            alt="A2M 2027"
            width={764}
            height={301}
            className="h-16 w-auto"
          />
          <p className="mt-4 text-small text-muted">{t("about")}</p>
        </div>

        {/* À propos (liens) */}
        <nav aria-label={t("news")} className="flex flex-col gap-3">
          <h2 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
            {aboutSection?.title[loc]}
          </h2>
          <ul className="flex flex-col gap-2">
            {aboutSection?.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="text-small text-muted transition-colors hover:text-emerald-cta"
                >
                  {child.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacts */}
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
            {t("contacts")}
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-small text-muted transition-colors hover:text-emerald-cta"
              >
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>

        {/* Infolettre */}
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-2">
          <h2 className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
            {t("newsletter")}
          </h2>
          <p className="text-small text-muted">{t("newsletterIntro")}</p>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-hairline border-t">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[12px] text-subtle">
            © 2027 {siteConfig.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap-page" className="text-[12px] text-subtle hover:text-emerald-cta">
              {tc("sitemap")}
            </Link>
            <LanguageSwitcher />
          </div>
        </Container>
      </div>
    </footer>
  );
}
