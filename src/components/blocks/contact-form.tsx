"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

/** Catégories de besoin (cases à cocher) — qualifient la demande de contact. */
const NEEDS = [
  "needExposition",
  "needPartnership",
  "needSpeakers",
  "needMedia",
  "needRegistration",
  "needOther",
] as const;

export function ContactForm() {
  const t = useTranslations("forms");
  const [needs, setNeeds] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function toggleNeed(id: string, checked: boolean) {
    setNeeds((prev) => (checked ? [...prev, id] : prev.filter((n) => n !== id)));
  }

  // Soumission factice (pas de backend en v1) — `needs` joint à `values` côté serveur.
  async function onSubmit(_values: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 600));
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex max-w-[560px] items-start gap-3 rounded-sm border border-emerald-cta/30 bg-mist/50 p-6">
        <Check className="mt-0.5 size-5 shrink-0 text-emerald-cta" />
        <div>
          <p className="font-display font-semibold text-h3 text-emerald-deep">
            {t("successTitle")}
          </p>
          <p className="mt-1 text-body text-muted">{t("successBody")}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-[560px]">
      {/* Cases à cocher : qualifier la demande */}
      <fieldset className="mb-6">
        <legend className="mb-3 block font-sans font-semibold text-[11px] text-muted uppercase tracking-[0.1em]">
          {t("needsTitle")}
        </legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {NEEDS.map((id) => (
            <label
              key={id}
              htmlFor={`need-${id}`}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-hairline bg-card px-3.5 py-3 transition-colors hover:border-emerald-cta"
            >
              <Checkbox
                id={`need-${id}`}
                checked={needs.includes(id)}
                onCheckedChange={(c) => toggleNeed(id, c === true)}
              />
              <span className="text-small text-ink">{t(id)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label={t("name")} error={errors.name && t("required")}>
          <Input
            id="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field id="email" label={t("email")} error={errors.email && t("invalidEmail")}>
          <Input
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>
      <Field id="company" label={t("company")} className="mt-5">
        <Input id="company" {...register("company")} />
      </Field>
      <Field
        id="message"
        label={t("message")}
        error={errors.message && t("minMessage")}
        className="mt-5"
      >
        <Textarea
          id="message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>
      <Button type="submit" size="lg" className="mt-6" disabled={isSubmitting}>
        {isSubmitting ? t("sending") : t("send")}
      </Button>
    </form>
  );
}
