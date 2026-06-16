import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A2M 2027 — Africa Mining in Montréal",
    template: "%s · A2M 2027",
  },
  description:
    "A2M 2027 — la plateforme nord-américaine de référence pour l'investissement minier en Afrique. 7–9 juin 2027, Centre Mont-Royal, Montréal.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${sourceSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory antialiased">
        <NextIntlClientProvider>
          <SkipToContent />
          <Header locale={locale} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
