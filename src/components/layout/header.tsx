import { getTranslations } from "next-intl/server";
import { RegisterButton } from "@/components/blocks/register-button";
import { mainNav } from "@/content/navigation";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Container } from "./container";
import { DesktopNav } from "./desktop-nav";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import type { ResolvedNavSection } from "./nav-types";

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
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label="A2M 2027">
          <span className="font-display font-extrabold text-[22px] text-anthracite leading-none tracking-[0.28em]">
            A2M
          </span>
          <span className="font-semibold text-[11px] text-copper tracking-[0.2em]">2027</span>
        </Link>

        <DesktopNav sections={sections} />

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <RegisterButton label={t("register")} className="hidden sm:inline-flex" />
          <MobileNav sections={sections} />
        </div>
      </Container>
    </header>
  );
}
