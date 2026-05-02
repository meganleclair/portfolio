import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutHeadshotSrc } from "@/lib/about-headshot";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer and engineer based in Nashville—full-stack, shipped, and working at the intersection of design and code.",
};

function SectionRule() {
  return (
    <div
      className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent"
      aria-hidden
    />
  );
}

export default function AboutPage() {
  const headshotSrc = getAboutHeadshotSrc();

  return (
    <div className="page-wrap py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[54rem]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/55">
          About
        </p>

        <h1 className="mt-8 font-instrument text-[clamp(2rem,5.2vw,2.85rem)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground md:mt-10">
          I'm Megan. Product designer and engineer,{" "}
          <br />
          based in Nashville.
        </h1>

        {/* Editorial two-col: photo left, bio right */}
        <div className="mt-10 md:mt-14 md:grid md:grid-cols-[11rem_1fr] md:gap-12 lg:grid-cols-[13rem_1fr] lg:gap-16">

          {/* Photo */}
          <div className="mb-8 md:mb-0">
            {headshotSrc ? (
              <div className="relative w-full max-w-[14rem] overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.06] md:max-w-none">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-90"
                  aria-hidden
                />
                <Image
                  src={headshotSrc}
                  alt="Megan LeClair"
                  width={640}
                  height={800}
                  className="relative z-[1] h-auto w-full object-cover"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 176px, 208px"
                  priority
                />
              </div>
            ) : (
              <div
                className="relative flex aspect-[4/5] w-full max-w-[14rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_40px_-24px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-[2px] md:max-w-none"
                aria-label="Portrait placeholder"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(1_0_0/0.06),transparent_65%)]"
                  aria-hidden
                />
                <span
                  className="relative font-instrument text-[2.25rem] font-normal leading-none text-muted-foreground/25"
                  aria-hidden
                >
                  —
                </span>
              </div>
            )}
          </div>

          {/* Bio + contact */}
          <div>
            <div className="space-y-7 text-left text-[15px] font-medium leading-[1.82] text-muted-foreground md:text-base md:leading-[1.85]">
              <p>
                I started in design and kept going. Most designers hand off to
                engineering — I wanted to know what happened on the other side. So I
                learned to build, and it changed how I design. When you ship your
                own work, the decisions get a lot more honest.
              </p>
              <p>
                These days I build full-stack — Next.js, Supabase, live APIs —
                with Cursor and Claude woven into the process across engineering and
                design. Not to replace design, but because the gap between a mock
                and a working product is where the real decisions live. The auth
                edge cases, the empty states, what breaks when real data shows up.
              </p>
              <p>
                I'm drawn to complex workflows, product systems, and the kind of
                problems that only surface once something is live.
              </p>
              <p>
                Outside of work, I'm usually planning my next trip, at the gym,
                cooking something I have no business attempting, or walking my dog
                Finn.
              </p>
            </div>

            <div className="my-8 md:my-10">
              <SectionRule />
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/55">
                Experience
              </p>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-medium text-foreground md:text-base">
                    Senior Product Designer ·{" "}
                    <a
                      href="https://cowbell.insure/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Cowbell
                    </a>
                  </span>
                  <span className="shrink-0 text-[13px] font-medium text-muted-foreground/60">
                    2025–present
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-medium text-foreground md:text-base">
                    Product Designer ·{" "}
                    <a
                      href="https://cowbell.insure/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Cowbell
                    </a>
                  </span>
                  <span className="shrink-0 text-[13px] font-medium text-muted-foreground/60">
                    2021–2025
                  </span>
                </div>
              </div>
            </div>

            <div className="my-8 md:my-10">
              <SectionRule />
            </div>

            <div className="space-y-3">
              <p className="text-[15px] font-medium text-muted-foreground md:text-base">
                Want to connect?
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="mailto:meganleclair513@gmail.com"
                  className="group inline-flex text-sm font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="border-b border-border/50 pb-0.5 transition-[border-color,color] group-hover:border-foreground/25">
                    Email
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/megan-leclair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex text-sm font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="border-b border-border/50 pb-0.5 transition-[border-color,color] group-hover:border-foreground/25">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="/about/meganleclair_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex text-sm font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="border-b border-border/50 pb-0.5 transition-[border-color,color] group-hover:border-foreground/25">
                    Résumé
                  </span>
                </a>
              </div>
            </div>

            <div className="my-8 md:my-10">
              <SectionRule />
            </div>

            <p>
              <Link
                href="/"
                className="group inline-flex text-sm font-medium tracking-tight text-foreground/60 transition-colors hover:text-foreground/90"
              >
                <span className="border-b border-border/50 pb-0.5 transition-[border-color,color] group-hover:border-foreground/25">
                  View selected work
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
