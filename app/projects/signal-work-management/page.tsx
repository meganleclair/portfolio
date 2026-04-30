import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getSignalWorkManagementShots } from "@/lib/signal-work-management-screenshots";

export const metadata: Metadata = {
  title: "Signal Work Management",
  description:
    "Triage incoming work by workspace, urgency, and source—a focused feed with clear priorities.",
};

const REPO = "https://github.com/meganleclair/signal-work-management";

export default function SignalWorkManagementPage() {
  const shots = getSignalWorkManagementShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Signal Work Management
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Triage by workspace, urgency &amp; source
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          A tool for sorting incoming work in motion—so teams can see what matters,
          where it came from, and what to do next.
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
          No public deployment yet—clone the repo to run it locally.
        </p>
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-28">
        <CaseStudySection
          title="Overview"
          leadVisual={<CaseStudyMedia shot={shots.workspaceHero} />}
        >
          <p>
            Signal Work Management is a triage surface for incoming “signals”—work
            items that arrive from different channels and need ownership, urgency,
            and state.
          </p>
          <p>
            I built it to explore how a small internal tool can make a noisy
            inbox feel legible: team workspaces, a triage lens, urgency-based
            grouping, and filters that match how people actually scan work.
          </p>
        </CaseStudySection>

        <CaseStudySection title="The problem">
          <p>When work arrives from many places, teams often hit the same walls:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>everything looks equally loud</li>
            <li>hard to tell what needs a decision now vs. later</li>
            <li>source context (Slack, email, calendar, etc.) gets lost in handoffs</li>
            <li>switching between tools breaks continuity</li>
          </ul>
          <p className="pt-1">
            You need one place to compare, filter, and commit—without turning it
            into a second project-management suite.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <p>
            A single workspace that scopes by team (Product, Legal, Design,
            Operations, Sales), filters by triage state and source type, and keeps
            the feed grouped by urgency so attention follows risk.
          </p>
          <p>It supports:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>workspace switching to separate streams of work</li>
            <li>triage views (e.g. needs triage, assigned, resolved)</li>
            <li>urgency-led grouping in the feed</li>
            <li>per-signal detail with related inputs and actions</li>
            <li>local persistence with seed data and reset for demos</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Key features">
          <div className="space-y-16 md:space-y-20">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Workspaces &amp; triage lens
              </h3>
              <p className="mt-3">
                A workspace bar and triage view control what you’re looking at—so
                the same backlog doesn’t collapse unrelated teams into one list.
              </p>
              <div className="mt-7 w-full max-w-[min(56rem,100%)]">
                <CaseStudyMedia shot={shots.workspaceHero} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Urgency-grouped feed
              </h3>
              <p className="mt-3">
                Signals roll up under urgency so critical and high items surface
                first—aligned with how people actually scan under pressure.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.urgencyFeed} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Source filters &amp; search
              </h3>
              <p className="mt-3">
                The sidebar and toolbar let you narrow by source type (Slack,
                email, calendar, docs, chat, forms) and search across titles—so
                you can isolate a thread of work without losing the wider view.
              </p>
              <div className="mt-7 flex flex-col gap-10 md:flex-row md:items-start">
                <div className="w-full max-w-3xl md:flex-1">
                  <CaseStudyMedia shot={shots.sidebarSources} />
                </div>
                <div className="w-full max-w-2xl md:w-80 md:shrink-0">
                  <CaseStudyMedia shot={shots.toolbar} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Detail panel
              </h3>
              <p className="mt-3">
                Selecting a signal opens a focused panel for context, related
                inputs, and triage—without losing the list.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.detailPanel} />
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Workspace-first scoping
              </h3>
              <p className="mt-2">
                Team workspaces keep streams honest—legal and product work don’t
                compete in the same default list.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Urgency as structure
              </h3>
              <p className="mt-2">
                Grouping by urgency turned out to be a stronger scan pattern than
                decorative cards alone.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Sources as filters, not clutter
              </h3>
              <p className="mt-2">
                Channel types are first-class so you can mute noise (e.g. forms)
                when you’re in a different mode of work.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Detail on demand
              </h3>
              <p className="mt-2">
                The feed stays scannable; depth lives in the panel when you
                commit attention to one signal.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What changed when it got real">
          <p>Once data was loading and filters were live, a few things stuck out:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>empty states had to explain the lens (workspace, view, search)</li>
            <li>undo/reset mattered once triage actions felt “real”</li>
            <li>visual hierarchy on cards beat extra chrome</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <p>
            The app behaves like a credible internal triage tool: scoped, filterable,
            and fast to read—not a mock of a spreadsheet with better type.
          </p>
          <p>
            It sharpened how I think about turning inbound chaos into a stable
            model—workspaces, state, and source-aware filtering working together.
          </p>
          <p>
            Code lives here:{" "}
            <a
              href={REPO}
              className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-[5px] hover:decoration-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/meganleclair/signal-work-management
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
