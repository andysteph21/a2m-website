import { Container } from "@/components/layout/container";

export interface EventInfo {
  label: string;
  value: string;
}

/** Bandeau d'informations clés de l'événement (dates, lieu, patron). */
export function EventBandeau({ items }: { items: EventInfo[] }) {
  return (
    <section className="border-hairline border-b bg-surface">
      <Container className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="px-2 py-6 text-center sm:px-6">
            <p className="font-semibold text-[11px] text-taupe uppercase tracking-[0.18em]">
              {item.label}
            </p>
            <p className="mt-2 font-display font-semibold text-h3 text-emerald-deep">
              {item.value}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
