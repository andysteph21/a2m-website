import { ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export interface CtaAction {
  label: string;
  href: string;
  external?: boolean;
}

interface CtaBandProps {
  title: string;
  text?: string;
  primary: CtaAction;
  secondary?: CtaAction;
}

/** Bandeau d'appel à l'action pleine largeur. */
export function CtaBand({ title, text, primary, secondary }: CtaBandProps) {
  return (
    <section className="bg-emerald-cta text-ivory">
      <Container className="flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[640px]">
          <h2 className="font-display font-bold text-h2 text-ivory">{title}</h2>
          {text && <p className="mt-3 text-lead text-mist/90">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="prestige" size="lg">
            <a
              href={primary.href}
              target={primary.external ? "_blank" : undefined}
              rel={primary.external ? "noopener noreferrer" : undefined}
            >
              {primary.label}
              {primary.external && <ExternalLink />}
            </a>
          </Button>
          {secondary && (
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-champagne text-champagne hover:bg-champagne hover:text-emerald-deep"
            >
              <a
                href={secondary.href}
                target={secondary.external ? "_blank" : undefined}
                rel={secondary.external ? "noopener noreferrer" : undefined}
              >
                {secondary.label}
              </a>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
