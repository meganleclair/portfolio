import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutHeadshotSrc } from "@/lib/about-headshot";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer working between design and implementation—systems, interfaces, and shipped software.",
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
      <div className="mx-auto w-full max-w-[42rem]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/55">
          About
        </p>

        <h1 className="mt-8 font-instrument text-[clamp(2rem,5.2vw,2.85rem)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground md:mt-10">
          I’m a product designer focused on building things that actually ship.
        </h1>

        <div className="mt-14 md:mt-20">
          {headshotSrc ? (
            <div className="relative max-w-[13.5rem] overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.06]">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-90"
                aria-hidden
              />
              <Image
                src={headshotSrc}
                alt="Megan LeClair"
                width={432}
                height={540}
                className="relative z-[1] h-auto w-full object-cover"
                sizes="216px"
                priority
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-[4/5] max-w-[13.5rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_40px_-24px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-[2px]"
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

        <div className="my-14 md:my-16">
          <SectionRule />
        </div>

        <div className="space-y-8 text-left text-[15px] font-medium leading-[1.82] text-muted-foreground md:text-base md:leading-[1.85]">
          <p>
            My work sits between design and implementation—thinking through
            systems, interfaces, and what happens when real users interact with
            real data. I care about clarity, but also about what it takes to
            make something work outside of a mock.
          </p>
          <p>
            Recently, I’ve been working closer to the build layer, using tools
            like Cursor, Supabase, and external APIs to reduce the gap between
            idea and execution. Not to replace design, but to make it more real,
            faster.
          </p>
          <p>
            I’m especially interested in product systems, complex workflows, and
            the decisions that only show up once something is live.
          </p>
          <p>
            Outside of work, I’m usually planning my next trip or walking my
            dog, Finn.
          </p>
        </div>

        <div className="my-14 md:my-16">
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
  );
}
