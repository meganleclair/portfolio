"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lightbox, type ResolvedCaseStudyMedia } from "@/components/case-study-media";

export function CaseStudyBeforeAfter({
  before,
  after,
}: {
  before: ResolvedCaseStudyMedia;
  after: ResolvedCaseStudyMedia;
}) {
  const shots = [before, after];
  const labels = ["Before", "After"];
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const shot = shots[index];
  const isCompact = shot.variant === "compact";

  const go = (delta: number) => {
    setIndex((i) => (i + delta + shots.length) % shots.length);
  };

  return (
    <>
      <figure
        className={cn("w-full", isCompact ? "mx-auto max-w-2xl" : "max-w-3xl")}
        tabIndex={0}
        role="group"
        aria-label={`Before and after comparison, currently showing ${labels[index]}`}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
      >
        <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.035] backdrop-blur-md focus:outline-none">
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
            {labels[index]}
          </span>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Show previous image"
            className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Show next image"
            className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <ChevronRight size={18} />
          </button>

          <div
            className={cn(shot.src && "cursor-zoom-in")}
            onClick={shot.src ? () => setLightboxOpen(true) : undefined}
          >
            {shot.src ? (
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                className="h-auto w-full"
                loading="lazy"
                sizes={
                  isCompact
                    ? "(max-width: 768px) 100vw, min(42rem, 90vw)"
                    : "(max-width: 768px) 100vw, min(48rem, 90vw)"
                }
              />
            ) : (
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted/20 px-6 py-12 text-center md:min-h-[240px]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Placeholder
                </span>
                <p className="max-w-sm text-[13px] font-medium leading-snug text-muted-foreground md:text-sm">
                  {shot.placeholderLabel}
                </p>
              </div>
            )}
          </div>

          <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {shots.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "size-1.5 rounded-full transition-colors",
                  i === index ? "bg-white" : "bg-white/40"
                )}
                aria-hidden
              />
            ))}
          </div>
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
