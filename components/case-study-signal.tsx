import { getSignalContactUrl } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

export function CaseStudySignalLink({ className }: { className?: string }) {
  const url = getSignalContactUrl();
  if (!url) return null;

  return (
    <p
      className={cn(
        "text-[13px] font-medium leading-snug text-muted-foreground md:text-sm",
        className
      )}
    >
      <span className="text-muted-foreground">Got questions? </span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground/90 underline decoration-muted-foreground underline-offset-[5px] transition-colors hover:text-foreground hover:decoration-foreground"
      >
        You gotta Signal
      </a>
      <span className="text-muted-foreground">.</span>
    </p>
  );
}
