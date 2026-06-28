"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { ResolvedNavLink, ResolvedNavSection } from "./nav-types";

/** Navigation principale (desktop) avec menus déroulants à 3 niveaux (survol/focus). */
export function DesktopNav({ sections }: { sections: ResolvedNavSection[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {sections.map((section) => {
          const isActive = pathname === section.href || pathname.startsWith(`${section.href}/`);
          return (
            <li key={section.href} className="group relative">
              <Link
                href={section.href}
                className={cn(
                  "flex items-center gap-1 rounded-sm px-3 py-2 font-sans font-medium text-[13.5px] transition-colors duration-200 ease-discret",
                  isActive
                    ? "text-emerald-cta"
                    : "text-muted hover:bg-anthracite/4 hover:text-anthracite",
                )}
              >
                {section.title}
                {section.children && (
                  <ChevronDown
                    className="size-3.5 text-taupe transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden
                  />
                )}
              </Link>

              {section.children && (
                <div className="pointer-events-none absolute top-full left-0 z-50 min-w-[260px] pt-2 opacity-0 transition-opacity duration-200 ease-discret group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <ul className="rounded-sm border border-hairline bg-card py-2 shadow-card-hover">
                    {section.children.map((child) =>
                      child.children ? (
                        // Groupe : sous-menu en fly-out (les petits-enfants n'apparaissent qu'au survol)
                        <li key={child.href} className="group/sub relative">
                          <Link
                            href={child.href}
                            className="flex items-center justify-between gap-2 px-4 py-2 font-semibold text-body text-ink transition-colors hover:bg-mist hover:text-emerald-deep"
                          >
                            {child.title}
                            <ChevronRight className="size-3.5 shrink-0 text-taupe" aria-hidden />
                          </Link>
                          <div className="pointer-events-none invisible absolute top-0 left-full z-50 min-w-[240px] pl-1 opacity-0 transition-opacity duration-200 ease-discret group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:pointer-events-auto group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                            <ul className="rounded-sm border border-hairline bg-card py-2 shadow-card-hover">
                              {child.children.map((grand: ResolvedNavLink) => (
                                <li key={grand.href}>
                                  <Link
                                    href={grand.href}
                                    className="block px-4 py-2 text-body text-muted transition-colors hover:bg-mist hover:text-emerald-deep"
                                  >
                                    {grand.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-body text-muted transition-colors hover:bg-mist hover:text-emerald-deep"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
