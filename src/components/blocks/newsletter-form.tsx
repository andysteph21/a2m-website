"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Infolettre — soumission factice (pas de backend en v1).
 * À brancher sur un service email/webhook lors de la mise en production.
 */
export function NewsletterForm() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 text-small text-jade">
        <Check className="size-4" />
        {t("newsletterIntro")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("emailPlaceholder")}
        aria-label={t("emailPlaceholder")}
        className="h-12"
      />
      <Button type="submit" size="sm" className="w-full">
        {t("subscribe")}
      </Button>
    </form>
  );
}
