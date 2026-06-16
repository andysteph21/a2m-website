import { Breadcrumb, type Crumb } from "./breadcrumb";
import { Container } from "./container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumb?: Crumb[];
}

/** En-tête de page intérieure : bandeau émeraude profond + fil d'Ariane. */
export function PageHeader({ eyebrow, title, lead, breadcrumb }: PageHeaderProps) {
  return (
    <div className="border-hairline border-b bg-emerald-deep text-ivory">
      <Container className="py-12 lg:py-16">
        {breadcrumb && (
          <div className="mb-6 [&_a]:text-champagne/80 [&_[aria-current]]:text-champagne [&_svg]:text-champagne/40">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        {eyebrow && (
          <span className="font-semibold text-[11px] text-champagne uppercase tracking-[0.26em]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-[820px] font-display font-bold text-h1 text-ivory tracking-[-0.01em]">
          {title}
        </h1>
        {lead && <p className="mt-4 max-w-[680px] text-lead text-champagne/85">{lead}</p>}
      </Container>
    </div>
  );
}
