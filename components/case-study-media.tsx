import Image from "next/image";
import { cn } from "@/lib/utils";

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

export function CaseStudyMedia({ shot }: { shot: ResolvedCaseStudyMedia }) {
  const isHero = shot.variant === "hero";
  const isCompact = shot.variant === "compact";

  return (
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
          "group-hover:scale-[1.01] group-hover:brightness-[1.04]"
        )}
      >
        {shot.src ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            className="h-auto w-full"
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
  );
}
