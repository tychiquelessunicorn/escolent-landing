"use client";

import React from "react";
import { LogoLoader } from "@/components/ui/LoadingIcon";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <LogoLoader
        size="lg"
        title="Loading Escolent"
        description="Initializing real-time pedagogical intelligence..."
      />
    </div>
  );
}
