"use client";

import React, { useState, useEffect } from "react";
import { AlertCircle, ArrowUpRight } from "lucide-react";
import { LogoLoader } from "./LoadingIcon";

interface LiveIframeProps {
  src: string;
  title: string;
  className?: string;
  height?: string;
  reloadKey?: number;
}

export function LiveIframe({
  src,
  title,
  className = "",
  height = "h-[520px]",
  reloadKey = 0,
}: LiveIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    // Safety timeout: if iframe doesn't finish loading within 12s, show fallback
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => clearTimeout(timeout);
  }, [src, reloadKey]);

  return (
    <div className={`relative w-full ${height} bg-[var(--bg-canvas)] overflow-hidden ${className}`}>
      {/* Graceful Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--bg-surface)] text-[var(--text-secondary)] pointer-events-none">
          <LogoLoader
            size="sm"
            title="Loading Live Escolent Sandbox"
            description="Connecting directly to real production instance at demo.escolent.com..."
          />
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--bg-surface)] text-[var(--text-secondary)] gap-3 p-6 text-center">
          <div className="w-8 h-8 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--text-muted)]">
            <AlertCircle className="w-4 h-4 text-[var(--text-secondary)]" />
          </div>
          <div className="text-xs font-semibold text-[var(--text-primary)]">
            Interactive Frame Loading Delayed
          </div>
          <p className="text-[11px] text-[var(--text-muted)] max-w-sm">
            You can interact with this exact live demo shell directly in your browser without any login barriers.
          </p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-[14px] bg-[var(--brand-base)] text-white text-xs font-semibold shadow-sm hover:bg-[var(--brand-hover)] transition-colors"
          >
            <span>Open Live Sandbox Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Real Live Iframe */}
      <iframe
        key={reloadKey ? `${src}-${reloadKey}` : src}
        src={src}
        title={title}
        onLoad={() => {
          setIsLoading(false);
          setHasError(false);
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full border-0 transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        loading="eager"
      />
    </div>
  );
}
