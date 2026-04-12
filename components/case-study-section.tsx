import { cn } from "@/lib/utils";

export function CaseStudySection({
  title,
  children,
  leadVisual,
  trailVisual,
}: {
  title: string;
  children: React.ReactNode;
  leadVisual?: React.ReactNode;
  trailVisual?: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="read-width">
        <h2 className="text-xl font-medium text-foreground md:text-2xl">
          {title}
        </h2>
      </div>

      {leadVisual && <div className="mt-7 w-full">{leadVisual}</div>}

      <div
        className={cn(
          "read-width",
          leadVisual ? "mt-10" : "mt-7"
        )}
      >
        <div className="space-y-5 text-base leading-[1.75] text-muted-foreground md:text-[17px] md:leading-[1.8]">
          {children}
        </div>
      </div>

      {trailVisual && (
        <div className="read-width mt-10 flex max-w-3xl flex-col gap-10">
          {trailVisual}
        </div>
      )}
    </section>
  );
}
