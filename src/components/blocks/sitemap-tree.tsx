import type { ResolvedNavSection } from "@/components/layout/nav-types";
import { Link } from "@/i18n/navigation";

/** Plan du site : arborescence complète de la navigation. */
export function SitemapTree({ sections }: { sections: ResolvedNavSection[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <nav key={section.href} aria-label={section.title}>
          <Link
            href={section.href}
            className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta"
          >
            {section.title}
          </Link>
          {section.children && (
            <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
              {section.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="text-body text-muted transition-colors hover:text-emerald-cta"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      ))}
    </div>
  );
}
