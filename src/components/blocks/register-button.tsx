"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

interface RegisterButtonProps {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  /** Affiche l'icône « lien externe » (pertinent une fois les inscriptions ouvertes). */
  withIcon?: boolean;
}

/**
 * Bouton d'inscription. Les inscriptions n'étant pas encore ouvertes
 * (`siteConfig.registrationOpen`), il ouvre une fenêtre « bientôt disponible »
 * au lieu de pointer vers la plateforme externe.
 */
export function RegisterButton({
  label,
  variant = "primary",
  size = "sm",
  className,
  withIcon = true,
}: RegisterButtonProps) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const text = label ?? t("register");

  if (siteConfig.registrationOpen) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <a href={siteConfig.registerUrl} target="_blank" rel="noopener noreferrer">
          {text}
          {withIcon && <ExternalLink />}
        </a>
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant={variant} size={size} className={className}>
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent closeLabel={t("close")}>
        <DialogTitle>{t("registerSoonTitle")}</DialogTitle>
        <DialogDescription>{t("registerSoonBody")}</DialogDescription>
        <div className="mt-2 flex justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary" size="sm">
              {t("close")}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
