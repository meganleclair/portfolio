"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type CaseStudyMediaVariant = "hero" | "default" | "compact";

export type ResolvedCaseStudyMedia = {
  src: string | null;
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: CaseStudyMediaVariant;
  width: number;
  height: number;
};

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} />
      </button>
      <div
        className="relative max-h-full max-w-[90vw] overflow-hidden rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="block max-h-[90vh] w-auto object-contain"
          style={{ maxWidth: "90vw" }}
        />
      </div>
    </div>
  );
}

export function CaseStudyMedia({ shot }: { shot: ResolvedCaseStudyMedia }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isHero = shot.variant === "hero";
  const isCompact = shot.variant === "compact";

  return (
    <>
      <figure
        className={cn(
          "group w-full",
          isCompact && "mx-auto max-w-2xl",
          !isCompact && !isHero && "max-w-3xl",
          isHero && "max-w-[min(56rem,100%)]"
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.035] backdrop-blur-md",
            "transition-[transform,filter] duration-300 ease-out will-change-transform",
            "group-hover:scale-[1.01] group-hover:brightness-[1.04]",
            shot.src && "cursor-zoom-in"
          )}
          onClick={shot.src ? () => setLightboxOpen(true) : undefined}
        >
          {shot.src ? (
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              className="h-auto w-full"
              loading={isHero ? "eager" : "lazy"}
              sizes={
                isHero
                  ? "(max-width: 768px) 100vw, min(56rem, 92vw)"
                  : isCompact
                    ? "(max-width: 768px) 100vw, min(42rem, 90vw)"
                    : "(max-width: 768px) 100vw, min(48rem, 90vw)"
              }
            />
          ) : (
            <div
              className={cn(
                "flex min-h-[200px] flex-col items-center justify-center gap-2 px-6 py-12 text-center md:min-h-[240px]",
                "border border-dashed border-border bg-muted/20"
              )}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Placeholder
              </span>
              <p className="max-w-sm text-[13px] font-medium leading-snug text-muted-foreground md:text-sm">
                {shot.placeholderLabel}
              </p>
            </div>
          )}
        </div>
        <figcaption className="mt-3 text-[13px] font-medium leading-snug text-muted-foreground md:text-sm">
          {shot.caption}
        </figcaption>
      </figure>

      {lightboxOpen && shot.src && (
        <Lightbox
          src={shot.src}
          alt={shot.alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
