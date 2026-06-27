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

interface LoginButtonProps {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  /** Affiche l'icône « lien externe » (pertinent une fois le portail ouvert). */
  withIcon?: boolean;
}

/**
 * Bouton de connexion. L'espace délégué n'étant pas encore ouvert
 * (`siteConfig.loginOpen`), il ouvre une fenêtre « bientôt disponible »
 * au lieu de pointer vers le portail externe.
 */
export function LoginButton({
  label,
  variant = "secondary",
  size = "sm",
  className,
  withIcon = true,
}: LoginButtonProps) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const text = label ?? t("login");

  if (siteConfig.loginOpen) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <a href={siteConfig.loginUrl} target="_blank" rel="noopener noreferrer">
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
        <DialogTitle>{t("loginSoonTitle")}</DialogTitle>
        <DialogDescription>{t("loginSoonBody")}</DialogDescription>
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
