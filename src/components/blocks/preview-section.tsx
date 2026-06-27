import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/layout/section";
import { Link } from "@/i18n/navigation";

interface PreviewSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  seeAllLabel: string;
  seeAllHref: string;
  className?: string;
  children: ReactNode;
}

/**
 * Section « aperçu » de la page d'accueil : en-tête + lien « Voir tout » aligné à
 * droite, puis un sous-ensemble de contenu. Donne un avant-goût d'une page avec
 * un accès direct à sa version complète.
 */
export function PreviewSection({
  eyebrow,
  title,
  description,
  seeAllLabel,
  seeAllHref,
  className,
  children,
}: PreviewSectionProps) {
  return (
    <Section className={className}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Link
          href={seeAllHref}
          className="group inline-flex shrink-0 items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep"
        >
          {seeAllLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-10">{children}</div>
    </Section>
  );
}
