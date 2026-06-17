import type * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Champ de formulaire (libellé + contrôle + message) conforme au brand book :
 * libellé « eyebrow » fixe au-dessus, message d'erreur 12px sous le contrôle.
 */
export function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-[7px] text-[12px] text-deepred">
          {error}
        </p>
      ) : null}
    </div>
  );
}
