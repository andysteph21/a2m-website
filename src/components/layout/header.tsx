import { getTranslations } from "next-intl/server";
import { RegisterButton } from "@/components/blocks/register-button";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content/navigation";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { DesktopNav } from "./desktop-nav";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import type { ResolvedNavSection } from "./nav-types";
import { TextSizeToggle } from "./text-size-toggle";

function resolveNav(locale: Locale): ResolvedNavSection[] {
  return mainNav.map((section) => ({
    title: section.title[locale],
    href: section.href,
    external: section.external,
    children: section.children?.map((child) => ({
      title: child.title[locale],
      href: child.href,
      external: child.external,
    })),
  }));
}

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations("common");
  const sections = resolveNav(locale as Locale);

  return (
    <header className="sticky top-0 z-40 border-hairline border-b bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        {/* Logo + date/lieu de l'événement */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-baseline gap-1.5" aria-label="A2M 2027">
            <span className="font-display font-extrabold text-[22px] text-anthracite leading-none tracking-[0.28em]">
              A2M
            </span>
            <span className="font-semibold text-[11px] text-copper tracking-[0.2em]">2027</span>
          </Link>
          <span className="hidden border-hairline border-l pl-4 text-[11px] text-muted leading-tight md:block">
            <span className="block font-semibold text-anthracite uppercase tracking-[0.08em]">
              {t("eventDates")}
            </span>
            <span className="block">{siteConfig.venue}</span>
          </span>
        </div>

        <DesktopNav sections={sections} />

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <TextSizeToggle className="hidden sm:inline-flex" />
          <RegisterButton label={t("register")} className="ml-1 hidden sm:inline-flex" />
          <MobileNav sections={sections} />
        </div>
      </div>
    </header>
  );
}
