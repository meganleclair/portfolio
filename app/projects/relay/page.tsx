import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getRelayShots } from "@/lib/relay-screenshots";

export const metadata: Metadata = {
  title: "Relay Task Tracker",
  description:
    "A workflow tool for tracking, reviewing, and resolving work with clear ownership, status, and history.",
};

const REPO = "https://github.com/meganleclair/relay-task-tracker";

export default function RelayPage() {
  const shots = getRelayShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Relay Task Tracker
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Workflow &amp; decision tracking
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          A tool for managing work in motion—helping teams track, review, and
          resolve items with clarity and speed.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
          <a
            href={REPO}
            className="text-muted-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source on GitHub
          </a>
        </div>
        <p className="mt-3 text-xs font-medium text-muted-foreground">
          No public deployment yet—browse the repo to run it locally.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground">
          <span>
            <span className="text-muted-foreground/80">Role:</span> Product
            Design, Engineering
          </span>
          <span>
            <span className="text-muted-foreground/80">Scope:</span>{" "}
            End-to-end concept + build
          </span>
        </div>
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-28">
        <CaseStudySection
          title="Overview"
          trailVisual={<CaseStudyMedia shot={shots.tableView} />}
        >
          <p>
            Relay Task Tracker is a workflow tool for teams to track, review, and
            resolve work items with clear ownership, status, and history.
          </p>
          <p>
            I designed and built this project to explore how internal tools can
            reduce friction in decision-heavy workflows.
          </p>
        </CaseStudySection>

        <CaseStudySection title="The problem">
          <p>Teams managing high volumes of work often struggle with:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>unclear ownership</li>
            <li>scattered updates across tools</li>
            <li>slow or blocked decision cycles</li>
            <li>difficulty identifying what needs attention</li>
          </ul>
          <p className="pt-1">
            Most tools either prioritize visibility or flexibility—but not both.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <p>
            Relay Task Tracker is designed to make work visible, actionable, and
            easy to move forward.
          </p>
          <p>It enables:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>real-time filtering and prioritization</li>
            <li>inline editing for faster updates</li>
            <li>clear status and ownership tracking</li>
            <li>activity-driven focus (what needs attention now)</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Key features">
          <div className="space-y-16 md:space-y-20">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Interactive filtering
              </h3>
              <p className="mt-3">
                Activity, status, and ownership filters work together to surface
                the most relevant work instantly.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.filtering} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Inline editing
              </h3>
              <p className="mt-3">
                Users can update status, owner, priority, and due date directly
                in the table—reducing friction and speeding up workflows.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.inlineEdit} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Detail panel
              </h3>
              <p className="mt-3">
                A focused space for deeper context, notes, and history without
                losing the main view.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.drawer} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Lightweight intake
              </h3>
              <p className="mt-3">
                New work can be created quickly and enters the system with
                sensible defaults.
              </p>
              <div className="mt-7 w-full max-w-2xl">
                <CaseStudyMedia shot={shots.intake} />
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Structuring complexity
              </h3>
              <p className="mt-2">
                The workflow is built around a small set of clear states instead of
                granular sub-statuses to reduce cognitive load.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Primary surface
              </h3>
              <p className="mt-2">
                A table was chosen as the main interface to support dense
                information and fast comparison.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Progressive disclosure
              </h3>
              <p className="mt-2">
                Details are handled in a side panel to keep the main view clean
                and scannable.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Action placement
              </h3>
              <p className="mt-2">
                Editing happens inline or in context, reducing friction and
                avoiding unnecessary navigation.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What changed when it got real">
          <p>As the system became interactive, a few things became clear:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>filtering needed to feel immediate and connected</li>
            <li>visual hierarchy mattered more than styling</li>
            <li>
              reducing friction (inline edits) had the biggest impact on usability
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <p>
            The final product feels fast, focused, and usable—closer to a real
            internal tool than a static concept.
          </p>
          <p>
            This project strengthened my ability to design systems that balance
            clarity, speed, and real-world complexity.
          </p>
          <p>
            Code lives here:{" "}
            <a
              href={REPO}
              className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-[5px] hover:decoration-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/meganleclair/relay-task-tracker
            </a>
            .
          </p>
        </CaseStudySection>
      </div>

      <div className="read-width mt-28 md:mt-36 space-y-8">
        <CaseStudySignalLink />
        <p>
          <Link
            href="/"
            className="text-base font-semibold text-foreground underline decoration-muted-foreground underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            Back home
          </Link>
        </p>
      </div>
    </article>
  );
}
