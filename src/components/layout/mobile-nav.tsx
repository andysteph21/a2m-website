"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LoginButton } from "@/components/blocks/login-button";
import { RegisterButton } from "@/components/blocks/register-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import type { ResolvedNavSection } from "./nav-types";
import { TextSizeToggle } from "./text-size-toggle";

export function MobileNav({ sections }: { sections: ResolvedNavSection[] }) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={t("openMenu")}
          className="inline-flex size-11 items-center justify-center rounded-sm text-anthracite transition-colors hover:bg-anthracite/5 lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent closeLabel={t("closeMenu")}>
        <SheetTitle className="mb-2 tracking-[0.2em]">A2M 2027</SheetTitle>

        <Accordion type="multiple" className="mt-2">
          {sections.map((section) => (
            <AccordionItem key={section.href} value={section.href}>
              <AccordionTrigger className="text-[17px]">
                <Link href={section.href} onClick={() => setOpen(false)}>
                  {section.title}
                </Link>
              </AccordionTrigger>
              {section.children && (
                <AccordionContent>
                  <ul className="flex flex-col gap-1">
                    {section.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-body text-muted transition-colors hover:text-emerald-cta"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-6 flex flex-col gap-4">
          <RegisterButton label={t("registerNow")} size="lg" className="w-full" />
          <LoginButton label={t("login")} size="lg" className="w-full" />
          <div className="flex items-center justify-between border-hairline border-t pt-4">
            <span className="font-semibold text-[11px] text-muted uppercase tracking-[0.1em]">
              {t("language")}
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <TextSizeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
