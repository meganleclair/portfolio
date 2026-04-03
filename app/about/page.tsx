import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page-wrap py-16 md:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
        About
      </h1>
      <div className="read-width mt-14 space-y-8 text-lg leading-[1.7] text-[var(--text-muted)]">
        <p>
          I’m a product designer. I care about how software feels in use—not
          only how it looks in a deck.
        </p>
        <p>
          I like being close to build: sketches and prototypes, then working
          with real constraints until something shippable exists.
        </p>
        <p>
          This site is a small home for a few projects and how I thought
          through them.
        </p>
      </div>
      <p className="mt-20">
        <Link
          href="/"
          className="text-base text-[var(--text)] underline decoration-[var(--text-muted)] underline-offset-[6px] transition-colors hover:decoration-[var(--text)]"
        >
          Back to work
        </Link>
      </p>
    </div>
  );
}
