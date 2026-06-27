"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center rounded-sm border border-hairline bg-card px-4 py-2 font-semibold text-small text-muted transition-colors",
        "hover:border-gold hover:text-ink",
        "focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
        "data-[state=active]:border-emerald-cta data-[state=active]:bg-emerald-cta data-[state=active]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-8 focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    />
  );
}
