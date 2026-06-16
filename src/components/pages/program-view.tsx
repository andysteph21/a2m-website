import { ProgramSchedule } from "@/components/blocks/program-schedule";
import { QuickLinks } from "@/components/blocks/quick-links";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/layout/section";
import { schedule } from "@/content/data/program";
import { mainNav } from "@/content/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Vue racine « Programme » avec calendrier + liens vers les sous-pages. */
export function ProgramView({ locale }: { locale: Locale }) {
  const section = mainNav.find((s) => s.href === "/program");
  const childLinks =
    section?.children
      ?.filter((c) => c.href !== "/program")
      .map((c) => ({ title: pick(c.title, locale), href: c.href })) ?? [];

  return (
    <>
      <PageHeader
        eyebrow={locale === "fr" ? "Programme" : "Program"}
        title={locale === "fr" ? "Programme de l'événement" : "Event Program"}
        lead={
          locale === "fr"
            ? "Trois jours de keynotes, panels, rencontres B2B et événements de réseautage. Programme prévisionnel ci-dessous."
            : "Three days of keynotes, panels, B2B meetings and networking events. Provisional schedule below."
        }
        breadcrumb={[{ label: locale === "fr" ? "Programme" : "Program" }]}
      />
      <Section>
        <ProgramSchedule
          days={schedule.map((day) => ({
            date: pick(day.date, locale),
            location: pick(day.location, locale),
            sessions: day.sessions.map((s) => ({
              time: s.time,
              title: pick(s.title, locale),
              tag: s.tag ? pick(s.tag, locale) : undefined,
            })),
          }))}
        />
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={locale === "fr" ? "Programme" : "Program"}
          title={locale === "fr" ? "Explorer cette section" : "Explore this section"}
        />
        <div className="mt-10">
          <QuickLinks links={childLinks} />
        </div>
      </Section>
    </>
  );
}
