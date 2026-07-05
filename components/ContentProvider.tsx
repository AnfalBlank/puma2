"use client";

import { createContext, useContext } from "react";
import type { ContentDoc } from "@/lib/types";

const ContentContext = createContext<ContentDoc | null>(null);

export function ContentProvider({
  value,
  children,
}: {
  value: ContentDoc;
  children: React.ReactNode;
}) {
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent(): ContentDoc {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used inside ContentProvider");
  }
  return ctx;
}

/** Hook for dynamic site overrides; falls back to passed defaults if unset */
export function useSiteOverride() {
  const ctx = useContext(ContentContext);
  return ctx?.site ?? {};
}
