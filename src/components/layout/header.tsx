import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LoginButton } from "@/components/blocks/login-button";
import { RegisterButton } from "@/components/blocks/register-button";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content/navigation";
import type { NavLink } from "@/content/types";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { DesktopNav } from "./desktop-nav";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import type { ResolvedNavLink, ResolvedNavSection } from "./nav-types";
import { TextSizeToggle } from "./text-size-toggle";

/** Résout récursivement un lien de nav (jusqu'à 3 niveaux) dans la locale. */
function resolveLink(link: NavLink, locale: Locale): ResolvedNavLink {
  return {
    title: link.title[locale],
    href: link.href,
    external: link.external,
    children: link.children?.map((child) => resolveLink(child, locale)),
  };
}

function resolveNav(locale: Locale): ResolvedNavSection[] {
  return mainNav.map((section) => resolveLink(section, locale));
}

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations("common");
  const sections = resolveNav(locale as Locale);

  return (
    <header className="sticky top-0 z-40 border-hairline border-b bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      {/* Barre utilitaire supérieure — langue + accessibilité, alignées à droite, format compact */}
      <div className="hidden border-hairline border-b md:block">
        <div className="flex items-center justify-end gap-2.5 px-4 py-1 sm:px-6">
          <LanguageSwitcher />
          <span aria-hidden className="h-3.5 w-px bg-hairline" />
          <TextSizeToggle />
        </div>
      </div>

      {/* Ligne principale */}
      <div className="flex min-h-16 w-full items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo + date/lieu de l'événement (logo compact, ratio préservé) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center" aria-label="A2M 2027">
            <Image
              src="/images/brand/a2m-logo.png"
              alt="A2M 2027"
              width={764}
              height={301}
              priority
              className="h-9 w-auto sm:h-10 md:h-12 lg:h-14"
            />
          </Link>
          <span className="hidden whitespace-nowrap border-hairline border-l pl-4 text-sm text-muted leading-tight md:block lg:hidden xl:block">
            <span className="block font-bold text-anthracite uppercase tracking-[0.06em]">
              {t("eventDates")}
            </span>
            <span className="block">{siteConfig.venue}</span>
          </span>
        </div>

        {/* Droite : deux rangées alignées à droite — boutons au-dessus, navigation en dessous */}
        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end gap-2.5 lg:flex">
            <div className="flex items-center gap-2">
              <LoginButton label={t("login")} />
              <RegisterButton label={t("register")} />
            </div>
            <DesktopNav sections={sections} />
          </div>
          <MobileNav sections={sections} />
        </div>
      </div>
    </header>
  );
}
