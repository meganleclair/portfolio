import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudySection } from "@/components/case-study-section";

export const metadata: Metadata = {
  title: "Wanderlist",
};

export default function WanderlistPage() {
  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-[2.75rem]">
          Wanderlist
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
          A small app for keeping a list of places you might go—written as a
          full project, from structure to deployment.
        </p>
        <p className="mt-10">
          <a
            href="https://example.com"
            className="text-base text-[var(--text)] underline decoration-[var(--text-muted)] underline-offset-[6px] transition-colors hover:decoration-[var(--text)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the live site
          </a>
        </p>
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
        <CaseStudySection title="Overview">
          <p>
            Wanderlist started as a way to hold onto recommendations and
            half-formed plans without turning them into another feed to scroll.
            The focus is a single list you own—quick to add to, easy to skim
            when you’re actually deciding where to go.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <p>
            Flows to add and edit places, light sorting and browsing, and
            sign-in so the list persists. The layout is plain and responsive:
            readable on a phone, comfortable on a larger screen.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Tools">
          <p>
            Built with Cursor for day-to-day work, Supabase for data and auth,
            a few external APIs where they helped the experience, and Netlify
            for hosting. Nothing fancy on purpose—the stack stayed small enough
            to reason about.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Decisions">
          <p>
            Data from APIs is stored in Supabase so the interface always reads
            from one place. That made empty states, errors, and refreshes easier
            to handle than juggling several sources on the client.
          </p>
          <p>
            On the product side, I kept the surface area tight: a few clear
            actions, language that matches what someone is doing in the
            moment, and no extra modes that would compete with the main job of
            the app.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What stuck with me">
          <p>
            Designing and building together surfaced gaps that mockups alone
            wouldn’t have—especially around real data, timing, and what happens
            when something fails.
          </p>
          <p>
            Investing a little in structure early meant I could add to the
            project later without throwing the whole thing away.
          </p>
        </CaseStudySection>
      </div>

      <p className="read-width mt-28 md:mt-36">
        <Link
          href="/"
          className="text-base text-[var(--text)] underline decoration-[var(--text-muted)] underline-offset-[6px] transition-colors hover:decoration-[var(--text)]"
        >
          Back home
        </Link>
      </p>
    </article>
  );
}
