import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("common");
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="tnum font-display font-bold text-display text-gold">404</span>
      <p className="max-w-[420px] text-lead text-muted">
        {t("home") === "Accueil"
          ? "La page demandée est introuvable."
          : "The page you are looking for could not be found."}
      </p>
      <Button asChild>
        <Link href="/">{t("home")}</Link>
      </Button>
    </Container>
  );
}
