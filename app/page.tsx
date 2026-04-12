import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { additionalProjects, homeFeaturedCards } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section
        className="mx-auto max-w-[min(92rem,calc(100vw-1.5rem))] px-3 pt-20 pb-[4.5rem] md:px-6 md:pt-28 md:pb-[5.5rem] lg:px-10 lg:pt-36 lg:pb-32"
        aria-label="Introduction"
      >
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:col-start-1">
            <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground md:mb-12">
              Product design · systems · ship
            </p>
            <h1 className="font-instrument text-[clamp(3.1rem,10vw,6.75rem)] font-normal leading-[0.88] tracking-[-0.038em] text-foreground">
              Design isn’t done
              <br />
              <span className="text-muted-foreground">until it ships.</span>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <Separator
              orientation="horizontal"
              className="mb-9 bg-border lg:hidden"
            />
            <div className="hidden lg:mb-12 lg:block lg:h-px lg:w-14 lg:bg-border" />
            <p className="max-w-[38ch] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-muted-foreground md:text-base md:leading-relaxed lg:max-w-[40ch]">
              I focus on clarity and follow work through implementation—systems,
              interfaces, and what happens when real users hit real data.
            </p>
          </div>
        </div>
      </section>

      {/* Featured — Wanderlist */}
      <section
        className="mx-auto max-w-[min(92rem,calc(100vw-1.5rem))] px-3 pb-[5.5rem] md:px-6 md:pb-28 lg:px-10 lg:pb-36"
        aria-labelledby="featured-label"
      >
        <div className="mb-7 flex flex-col gap-2 md:mb-10 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <p
            id="featured-label"
            className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground"
          >
            Featured
          </p>
          <p className="max-w-xs text-[13px] font-medium leading-snug text-muted-foreground md:text-right md:text-[14px]">
            Case studies with depth—design through implementation.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {homeFeaturedCards.map((project) => {
            const hasLiveProduct = Boolean(project.liveUrl?.trim());
            const teaser = project.cardTeaser ?? project.description;

            return (
              <Card
                key={project.slug}
                className={cn(
                  "relative gap-0 overflow-hidden rounded-2xl border border-white/[0.11] py-0 shadow-none ring-0 md:rounded-3xl",
                  "bg-gradient-to-br from-white/[0.065] via-card/40 to-card",
                  "backdrop-blur-2xl backdrop-saturate-150"
                )}
              >
                <div
                  className="pointer-events-none absolute -right-28 -top-44 h-[30rem] w-[30rem] rounded-full bg-primary/[0.1] blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-[-32%] left-[-12%] h-72 w-[55%] rounded-full bg-primary/[0.05] blur-3xl"
                  aria-hidden
                />

                <div className="relative grid md:grid-cols-12 md:items-stretch">
                  <CardHeader className="gap-0 border-border px-9 py-14 md:col-span-7 md:border-r md:px-12 md:py-16 lg:px-[4.25rem] lg:py-[4.5rem]">
                    <CardTitle className="font-instrument text-[clamp(2.5rem,5vw,4.25rem)] font-normal leading-[0.92] tracking-[-0.034em] text-card-foreground">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-7 max-w-md text-[15px] font-medium leading-relaxed text-muted-foreground md:mt-8 md:text-base md:leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-col justify-between gap-10 border-t border-border bg-muted/20 px-9 py-14 md:col-span-5 md:border-t-0 md:px-12 md:py-16 lg:px-[4.25rem] lg:py-[4.5rem]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Case study
                    </p>
                    <div className="flex flex-col gap-5">
                      <p className="text-[13px] font-medium leading-snug text-muted-foreground md:text-sm">
                        {teaser}
                      </p>
                      {hasLiveProduct ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "h-11 w-fit gap-2 rounded-lg border-white/18 bg-background/50 px-6 text-foreground backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-background/70"
                          )}
                        >
                          View live product
                          <ArrowUpRight className="size-4 opacity-80" aria-hidden />
                        </a>
                      ) : (
                        <Link
                          href={`/projects/${project.slug}`}
                          className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "h-11 w-fit gap-2 rounded-lg border-white/18 bg-background/50 px-6 text-foreground backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-background/70"
                          )}
                        >
                          Case study
                          <ArrowUpRight className="size-4 opacity-80" aria-hidden />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* More work */}
      <section className="border-t border-border/70" aria-label="More work">
        <div className="mx-auto max-w-[min(92rem,calc(100vw-1.5rem))] px-3 py-14 md:px-6 md:py-20 lg:px-10">
          <div className="mb-7 md:mb-9">
            <h2 className="font-instrument text-2xl font-normal tracking-tight text-foreground md:text-3xl">
              More work
            </h2>
            <p className="mt-2 max-w-sm text-[13px] font-medium leading-snug text-muted-foreground">
              Case studies still in motion.
            </p>
          </div>

          <Separator className="bg-border" />

          <ul className="divide-y divide-border">
            {additionalProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block py-8 md:py-10"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-12">
                    <span className="text-xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-0.5 md:text-2xl">
                      {project.title}
                    </span>
                    <span className="max-w-md text-[13px] font-medium leading-snug text-muted-foreground md:pt-0.5 md:text-right md:text-[14px]">
                      {project.description}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[min(92rem,calc(100vw-1.5rem))] px-3 py-20 md:px-6 md:py-24 lg:px-10 lg:pl-[min(9vw,7rem)]">
        <Separator className="mb-10 max-w-xs bg-border md:mb-14" />
        <p className="max-w-md text-base font-medium leading-snug text-muted-foreground md:text-lg md:leading-snug">
          Background, collaboration, what I optimize for—on the about page.
        </p>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "link" }),
            "mt-6 h-auto p-0 text-base font-semibold text-foreground underline-offset-[6px] hover:underline"
          )}
        >
          About
        </Link>
      </section>
    </div>
  );
}
