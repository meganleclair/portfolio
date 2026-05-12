import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getSignalWorkManagementShots } from "@/lib/signal-work-management-screenshots";

export const metadata: Metadata = {
  title: "Signal Work Management",
  description:
    "An inbound triage surface for work that arrives from Slack, email, and beyond—grouped by urgency, scoped by team workspace, and powered by Claude for AI-assisted triage suggestions.",
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
          Inbound triage · AI-assisted · workspace scoping · urgency-led feed
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          Work doesn't arrive in a queue. It arrives in fragments—a Slack message
          here, an email thread there, a calendar hold that needs a decision, a
          form submission nobody's claimed yet. Signal is the surface that makes
          that inbound legible: urgency-grouped, workspace-scoped, and built for
          the person everything flows through. A Claude-powered Triage Assist
          reads each signal in full and returns a recommended urgency, owner, and
          first action.
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
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-28">
        <CaseStudySection
          title="Context"
          leadVisual={<CaseStudyMedia shot={shots.workspaceHero} />}
        >
          <p>
            Every growing team has a person (or a few people) who act as a hub.
            They're the product manager fielding requests from engineering, sales,
            and leadership simultaneously. The ops lead who routes everything
            before it has an owner. The team lead whose Slack DMs are half other
            people's blockers. Work flows through them from every direction—and
            it all arrives differently.
          </p>
          <p>
            The problem isn't volume. It's legibility. A critical customer
            escalation and a low-priority docs request look identical in an email
            inbox. The thing that's been waiting a week looks the same as the
            thing that just came in. You feel behind but you don't know what
            you're actually behind on—because the work isn't visible as a
            coherent stack. It's scattered across six channels, with no shared
            sense of urgency or ownership.
          </p>
          <p>
            Signal is the surface that makes the inbound stack visible. It
            collapses work from Slack, email, calendar, docs, forms, and chat
            into a single feed—scoped by team workspace, grouped by urgency, and
            triaged item by item. When you need a second opinion on how to act,
            Triage Assist sends the full signal context to Claude and comes back
            with a structured recommendation.
          </p>
        </CaseStudySection>

        <CaseStudySection title="The problem">
          <p>
            Teams managing multi-channel inbound typically hit the same set of
            structural problems:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>
              <strong className="font-semibold text-foreground">Everything looks equally loud</strong>{" "}
              — a critical enterprise renewal and a low-priority docs request
              compete for the same attention in an undifferentiated inbox. The
              urgent item doesn't announce itself.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Source context gets lost in handoffs</strong>{" "}
              — knowing that a request came from a Slack DM versus a formal email
              versus a calendar hold matters for how you respond and who should
              own it. That context evaporates by the second forward.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Triage happens mentally, not visibly</strong>{" "}
              — most teams triage in their heads, continuously, as new messages
              arrive. There's no record of "we decided to defer this" or "this is
              assigned to Jordan"—just an unspoken understanding that degrades
              over time.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Cross-team work collides</strong>{" "}
              — legal requests, product decisions, design reviews, and ops tasks
              don't belong in the same undifferentiated list. Mixing them creates
              noise for everyone.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Mistakes are hard to reverse</strong>{" "}
              — marking something as ignored or resolved is a lightweight action
              in practice, but it needs a recovery path. Triage actions that can't
              be undone create hesitation.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Triage Assist — Claude API</strong>{" "}
              — a sparkle button in the detail panel sends the full signal
              context (title, urgency, workspace, why it matters, sources, related
              inputs) to Claude. It returns a structured recommendation: suggested
              urgency, recommended owner, and a 2-sentence action plan. The
              suggested owner pre-fills the assign dropdown so one click commits
              it. The result is advisory—you review and decide.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Workspace scoping</strong>{" "}
              — five team workspaces (Product, Legal, Design, Operations, Sales)
              scope the feed so different teams don't compete in the same view.
              Switching workspaces is a single click; the feed, filters, and
              empty states all update to match the new scope.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Urgency-grouped feed</strong>{" "}
              — signals are grouped by urgency (Critical → High → Medium → Low)
              so the stack sorts itself. You don't have to mentally re-sort a
              flat list. The critical items are at the top by definition.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Triage state lifecycle</strong>{" "}
              — every signal moves through states: Needs Triage → Assigned,
              Deferred, Ignored, or Resolved. The triage view filters the feed
              to exactly one state at a time. "Needs Triage" is the default—the
              unprocessed inbound.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Source filters</strong>{" "}
              — signals carry the channel they arrived from (Slack, email,
              calendar, doc, chat, form). The sidebar lets you toggle sources
              on or off so you can focus on a specific channel or silence the
              ones you're not managing right now.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Detail panel</strong>{" "}
              — selecting a signal opens a focused panel showing the full
              context: why it matters, related inputs (the actual message
              snippets and their sources), assignee, and triage actions. The
              feed stays visible alongside it.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Dark mode</strong>{" "}
              — system-aware dark mode with localStorage persistence and an
              anti-flash inline script in the document head. Toggled from the
              user bar in the sidebar.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Undo via Cmd+Z</strong>{" "}
              — triage actions (ignore, defer, resolve, return to triage) are
              reversible. Cmd+Z restores the previous state without a confirm
              dialog. One level of undo; fast and honest about its limits.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Import / export</strong>{" "}
              — the workspace can be exported as JSON and re-imported to restore
              a session. The import validates schema shape before overwriting
              anything.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Local persistence with seed reset</strong>{" "}
              — state persists to localStorage between sessions. A reset
              button restores the original seed data, useful for demos and for
              recovering from a completely triaged queue.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Key features">
          <div className="space-y-16 md:space-y-20">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Triage Assist
              </h3>
              <p className="mt-3">
                The detail panel has a{" "}
                <span className="font-semibold text-foreground">✦ Triage Assist</span>{" "}
                button that sends the full signal context to Claude
                (claude-haiku-4-5) and returns a structured recommendation in
                under two seconds: a suggested urgency level, a recommended
                owner from the team roster, and a 2-sentence action plan
                specific to that signal. The suggested owner pre-fills the
                assign dropdown automatically—review the suggestion, then
                click Assign to commit it. The card is dismissible and resets
                when you switch signals.
              </p>
              <div className="mt-7">
                <CaseStudyMedia shot={shots.triageAssist} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Urgency-grouped feed
              </h3>
              <p className="mt-3">
                Signals group under urgency headers so the stack sorts itself.
                Critical items are always first. Within each group, signals are
                ordered by recency. The visual weight of the urgency label
                matches how much it should matter. The workspace bar above the
                feed scopes everything to one team — one click to switch from
                Product to Legal to Operations.
              </p>
              <div className="mt-7">
                <CaseStudyMedia shot={shots.urgencyFeed} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Sidebar &amp; detail panel
              </h3>
              <p className="mt-3">
                The sidebar gives you two controls: the triage view lens (All,
                Needs Triage, Assigned, Deferred, Ignored, Resolved) and source
                type toggles (Slack, email, calendar, doc, form). Counts update
                as signals move through triage states so you always know what's
                in each bucket.
              </p>
              <p className="mt-3">
                Selecting a signal opens the detail panel without leaving the
                feed. It shows why the signal matters, the raw snippets it
                surfaced from, triage actions, and the Triage Assist button.
                On mobile it slides up as a sheet; on desktop it sits alongside
                the feed.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-5">
                <CaseStudyMedia shot={shots.sidebarSources} />
                <CaseStudyMedia shot={shots.detailPanel} />
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Next.js 16</strong>{" "}
              (App Router) — client workspace component manages all signal state;
              the page shell is server-rendered for fast initial load. API routes
              handle the Claude integration server-side so the key never touches
              the client.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Claude API (Anthropic)</strong>{" "}
              — Triage Assist calls{" "}
              <code>claude-haiku-4-5</code> via a Next.js API route. The system
              prompt defines the team roster and their roles; Claude returns a
              typed JSON object (urgency, suggested_owner, recommended_action)
              that maps directly onto the UI.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Tailwind CSS</strong>{" "}
              — utility-first styling with a three-level surface hierarchy (sidebar,
              background, card) defined in OKLCH color tokens. Full dark mode via{" "}
              <code>.dark</code> class on{" "}
              <code>{"<html>"}</code> with localStorage persistence.
            </li>
            <li>
              <strong className="font-semibold text-foreground">TypeScript</strong>{" "}
              — strict types throughout; domain types (<code>Urgency</code>,{" "}
              <code>TriageState</code>, <code>SourceType</code>,{" "}
              <code>Workspace</code>) flow from a single <code>types.ts</code>.
              Runtime type guards on import validation and Claude response
              parsing prevent corrupt data from silently coercing into the
              wrong shape.
            </li>
            <li>
              <strong className="font-semibold text-foreground">localStorage persistence</strong>{" "}
              — signals persist between sessions with schema versioning (
              <code>signal-signals-v5</code>). The service layer handles
              hydration, patching, and reset to seed without the signals array
              ever touching the component directly.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Seed data</strong>{" "}
              — 30 signals across all five workspaces built around Vela, a
              fictional B2B SaaS company. Signals span enterprise renewals blocked
              on legal review (Meridian Health), mobile crash spikes, onboarding
              drop-offs, vendor NDAs, and API partner escalations. Mixed triage
              states and urgency levels so every view has something to show.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Triage Assist is advisory, not automatic
              </h3>
              <p className="mt-2">
                The AI suggestion doesn't auto-commit anything. It shows a
                recommended urgency, pre-fills the owner dropdown, and gives
                you a two-sentence action plan—but you review it and decide.
                This was a deliberate choice: triage involves judgment calls
                that depend on context Claude doesn't have (team capacity,
                politics, relationships). Showing the reasoning and letting you
                accept or override it keeps the human in the loop while still
                reducing the cognitive load of cold-starting a decision.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                The <code>why_it_matters</code> field
              </h3>
              <p className="mt-2">
                Every signal carries a <code>why_it_matters</code> string — a
                short sentence explaining the business consequence if this item
                isn't handled. This turned out to be the most important field in
                the data model. Without it, signals read as task titles. With it,
                they carry their own context. You don't have to reconstruct the
                stakes from the title — the card tells you: "Meridian Health's
                renewal is the largest in the quarter; legal delay risks churn."
                That changes how you prioritize. It also gives Claude richer
                input for Triage Assist recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Urgency as structure, not decoration
              </h3>
              <p className="mt-2">
                Urgency grouping is structural, not visual. The feed doesn't just
                badge items with a color — it groups them so the scan pattern
                matches how people actually read under pressure: top to bottom,
                most critical first. A flat list with urgency badges still
                requires mental sorting. A grouped feed doesn't.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Triage states over task status
              </h3>
              <p className="mt-2">
                The five triage states (Needs Triage, Assigned, Deferred,
                Ignored, Resolved) model decisions, not progress. Something
                "ignored" isn't broken — it's a conscious choice that the
                team has logged. "Deferred" isn't stalled — it's explicitly
                parked. This matters because it separates the signal from the
                response: you can triage without acting, and the record of what
                you chose is as valuable as the action itself.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Workspace-first scoping
              </h3>
              <p className="mt-2">
                The workspace switcher is the first thing you hit because the
                wrong scope makes everything else useless. Legal work and product
                work compete in the same list only if you let them. Scoping by
                team first — then filtering by urgency and source — means the
                feed is always answering a specific question: what does{" "}
                <em>this team</em> need to handle right now?
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Sources as a filter mode, not metadata
              </h3>
              <p className="mt-2">
                Source type (Slack, email, calendar, doc, form) is filterable
                because different sources imply different response modes. When
                you're clearing your email backlog, form submissions are noise.
                When you're preparing for a meeting, calendar items deserve
                their own focus. Sources aren't just labels — they're a way to
                enter a different mode of work on the same queue.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What changed when it got real">
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Empty states had to explain the lens.</strong>{" "}
              An empty feed without context looks broken. Once workspace, triage
              view, source filters, and search could all combine to produce zero
              results, the empty state needed to tell you why: "No critical
              signals need triage in the Product workspace." Without that
              specificity, users would assume the app had failed, not that
              they'd triaged everything.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Undo became essential once actions felt real.</strong>{" "}
              Early versions had no undo. Marking something as "ignored" felt
              risky — what if you mis-clicked? Adding Cmd+Z reduced hesitation
              on every triage action. One level is enough: you almost never need
              to undo two steps back, but you frequently need to undo the last
              one.
            </li>
            <li>
              <strong className="font-semibold text-foreground">The mobile sheet needed its own design.</strong>{" "}
              On desktop, the detail panel sits alongside the feed. On mobile,
              it opens as a full-height sheet — which created a problem: the
              sheet felt like it replaced the context you were just in rather
              than extending it. The fix was visual: the sheet slides up rather
              than replacing, and the close button returns you to exactly where
              you were in the feed.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Visual hierarchy beat extra chrome.</strong>{" "}
              Early card designs had urgency color blocks, source icons, and
              badges competing for attention. Stripping back to a quiet card
              with strong typographic hierarchy let the{" "}
              <code>why_it_matters</code> text carry the weight. The data is
              the design — decoration was getting in its way.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Schema validation on import caught silent failures.</strong>{" "}
              The first version of import just parsed JSON and loaded it. A
              malformed file would partially load or silently coerce wrong types
              into the state. Adding schema validation before any state mutation
              meant the worst case was a clear error message, not corrupted
              data with confusing behavior downstream.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Claude for Desktop hijacked the API key.</strong>{" "}
              Claude for Desktop injects{" "}
              <code>ANTHROPIC_API_KEY</code> as an empty string into every shell
              it spawns, which silently overrides <code>.env.local</code> values.
              The fix was renaming the variable to{" "}
              <code>SIGNAL_ANTHROPIC_KEY</code> to avoid the collision — a good
              reminder that environment variable naming is part of the
              integration surface.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Signal is a complete, interactive triage tool — not a concept.
              Every feature is wired: workspace scoping narrows the feed, triage
              actions update state and persist, undo works, import validates
              before loading, and the empty states explain exactly what lens
              produced them.
            </li>
            <li>
              The Claude integration shows where AI earns its place in a
              workflow tool: not replacing the decision, but reducing the cold-start
              cost of making it. Triage Assist reads the same context a human
              would—title, stakes, sources, related snippets—and returns a
              structured first opinion. You stay in control; it just gets you to
              a starting point faster.
            </li>
            <li>
              The design question Signal is answering is real: how do you make
              multi-channel inbound legible without flattening it into a generic
              task list? The answer is structural — urgency as the primary sort
              axis, workspace as the scope, triage state as the decision record,
              and source as the filter mode. None of those are decorative
              additions; each one does load-bearing work.
            </li>
            <li>
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
            </li>
          </ul>
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
