import Link from "next/link";
import { CaseStudySection } from "@/components/case-study-section";

type PlaceholderCaseStudyProps = {
  title: string;
  intro: string;
};

export function PlaceholderCaseStudy({ title, intro }: PlaceholderCaseStudyProps) {
  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
          {intro}
        </p>
        <p className="mt-8 text-sm leading-relaxed text-[var(--text-muted)]">
          Draft case study—screens, narrative, and links will land here as this
          project is documented.
        </p>
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
        <CaseStudySection title="Overview">
          <p>
            Placeholder: a short framing of the problem space, who it’s for,
            and why the work mattered. You’ll replace this with the real
            story—constraints, timing, and what success looked like.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I did">
          <p>
            Placeholder: your role, key flows, and collaboration model. This
            section usually carries the bulk of the case study once images and
            captions are in.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Process">
          <p>
            Placeholder: how you moved from ambiguity to something shippable—
            research touchpoints, iterations worth naming, and what you cut.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Outcomes">
          <p>
            Placeholder: what shipped, what you’d revisit, and what you learned.
            Qualitative beats are fine; keep it honest to the project.
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
