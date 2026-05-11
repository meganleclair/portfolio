import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getRelayShots } from "@/lib/relay-screenshots";

export const metadata: Metadata = {
  title: "Threshold — Cyber Insurance Ops",
  description:
    "A purpose-built underwriting ops tool for cyber insurance teams—tracking ransomware assessments, breach evaluations, and renewals with clear ownership, inline editing, and an auditable decision trail.",
};

const REPO = "https://github.com/meganleclair/relay-task-tracker";
const LIVE = "https://threshold-task-tracker.netlify.app";

export default function RelayPage() {
  const shots = getRelayShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Threshold
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Cyber insurance operations · underwriting workflow &amp; decision tracking
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          When a cyber event crosses a risk threshold, it enters the queue.
          Threshold is the operational layer between something happening and a
          coverage decision being made—tracking ransomware assessments, breach
          evaluations, and sublimit reviews with clear ownership and a full
          audit trail.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
          <a
            href={LIVE}
            className="text-muted-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live product
          </a>
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
          leadVisual={<CaseStudyMedia shot={shots.dashboard} />}
        >
          <p>
            Cyber insurance underwriting teams move high-stakes work through
            defined review stages—ransomware assessments, data breach
            evaluations, sublimit endorsements, and annual renewals. Each item
            has an owner, a regulatory deadline, and a chain of decisions that
            need to be auditable. A blocked sublimit endorsement can stall a
            policy bind. A missed HIPAA breach notification window can create
            coverage disputes that outlast the original incident.
          </p>
          <p>
            The name comes from the domain: when exposure crosses a risk
            threshold, the underwriting team has to act. Threshold is the
            surface that shows them what crossed, who owns it, where it's
            stuck, and what decisions have been made—without the overhead of a
            general project management tool that wasn't built for this kind of
            work.
          </p>
        </CaseStudySection>

        <CaseStudySection title="The problem">
          <p>
            Cyber insurance ops teams typically track work across email threads,
            shared spreadsheets, and ticketing systems built for engineering, not
            underwriting. The result is predictable: ownership drifts, status
            goes stale, and decisions made in a quick call disappear before the
            next renewal cycle.
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>
              <strong className="font-semibold text-foreground">Blocked items are invisible</strong>{" "}
              — a sublimit review waiting on network architecture docs looks
              identical to one actively in underwriting.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Activity history doesn't exist</strong>{" "}
              — who approved the BEC sublimit adjustment and why isn't captured
              anywhere auditable. That decision matters at renewal.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Prioritization is manual</strong>{" "}
              — figuring out what's due this week requires sorting a spreadsheet,
              not scanning a live queue with regulatory deadlines visible.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Generic tools don't fit the shape of the work</strong>{" "}
              — Kanban boards don't support dense item lists with sublimit
              thresholds; project tools add overhead the team doesn't need and
              don't speak the domain's language.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Dashboard with live metrics</strong>{" "}
              — four stat cards at the top of the queue: In Review, Blocked,
              Completed this week, and avg. turnaround. Clicking In Review or
              Blocked filters the table instantly, so the metric is also a
              shortcut into the relevant slice of the queue.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Activity bar chart</strong>{" "}
              — a Mon–Fri chart shows how many items were touched each weekday.
              Clicking a bar filters the table to that day's work. Hovering
              shows a per-status breakdown for each column. It makes weekly
              cadence visible without a reporting tool.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Inline editing</strong>{" "}
              — status, owner, priority, and due date all update directly in the
              table row. No modal, no navigation, no lost scroll position.
              Updates write to the item's activity log immediately.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Composable filters</strong>{" "}
              — status, owner, and "mine only" dropdowns work together with
              header search and activity chart clicks. A unified filter banner
              shows exactly what's active and clears in one click.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Detail panel</strong>{" "}
              — selecting a row opens a sticky side panel without replacing the
              main view. It shows the item summary, metadata, editable fields,
              and the full activity log. Notes can be added directly—everything
              that would otherwise live in a Slack thread or an email chain.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Lightweight intake</strong>{" "}
              — a modal form creates new items with name, client, type, owner,
              priority, due date, and a summary. Work types are domain-specific:
              Ransomware Assessment, Data Breach Evaluation, Sublimit Review,
              Cyber Renewal. The item lands at the top of the table with an
              activity entry and a flash animation that orients the user to the
              new row.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Scripted live updates</strong>{" "}
              — every 30 seconds, a queued sequence of real notes and status
              changes fires against mock items, keeping the demo queue fresh
              and the "Updated just now" badge honest. No backend needed.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Key features">
          <div className="space-y-16 md:space-y-20">

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                The queue
              </h3>
              <p className="mt-3">
                The full underwriting queue — every active item with owner,
                priority, type, status, and due date visible without opening
                anything. Dense enough to see the whole picture; sortable by
                any column.
              </p>
              <div className="mt-7 w-full max-w-3xl">
                <CaseStudyMedia shot={shots.tableView} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Metrics as filters
              </h3>
              <p className="mt-3">
                The stat cards aren't decorative. Clicking "In Review" or
                "Blocked" scopes the table to those items immediately — the
                metric earns its place by being functional, not just
                informational. A unified filter banner shows exactly what's
                active and clears in one click.
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
                Every field that can change does so in place. Status, owner,
                priority, and due date all update in the row — no modals, no
                navigation. The inline field flashes briefly to confirm the
                write, and the activity log updates in the background.
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
                A focused side panel for context, notes, and history — open
                alongside the table, not instead of it. Owners can leave notes
                and change status without losing their place in the queue. Every
                action is appended to the activity log with a timestamp.
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
                New work enters the system quickly, with sensible defaults and
                domain-specific work types built in. The item lands at the top
                of the table with its activity entry — no ambiguity about where
                it went.
              </p>
              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-full max-w-sm">
                  <CaseStudyMedia shot={shots.intake} />
                </div>
                <div className="w-full max-w-sm">
                  <CaseStudyMedia shot={shots.intakeTypes} />
                </div>
              </div>
            </div>

          </div>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Next.js 16</strong>{" "}
              (App Router) — single-page app shell with a client-side workspace
              component managing all item state.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Mantine</strong>{" "}
              — component library for the table, modals, drawers, selects, and
              form inputs. Theme extended with custom teal-gray design tokens and
              a dark sidebar shell.
            </li>
            <li>
              <strong className="font-semibold text-foreground">TypeScript</strong>{" "}
              — strict types throughout; domain types (<code>ItemStatus</code>,{" "}
              <code>Priority</code>, <code>ItemType</code>) flow from a single{" "}
              <code>types.ts</code>; runtime type guards on all Select callbacks
              replace unsafe casts.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Mock data layer</strong>{" "}
              — 12 seeded items reflecting real cyber underwriting work:
              ransomware assessments, HIPAA breach evaluations, BEC wire fraud
              reviews, SOC-2 renewals, sublimit endorsements. A scripted
              live-update sequence fires every 30s — real notes and status
              changes, not badge animation. State resets on refresh by design:
              this is a demo of the interface, not a persistence layer, and a
              fresh queue is more useful than stale state for a portfolio demo.
            </li>
            <li>
              <strong className="font-semibold text-foreground">FontAwesome</strong>{" "}
              — icon set for status glyphs, stat cards, priority indicators, and
              inline controls.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Table over board
              </h3>
              <p className="mt-2">
                Kanban boards work for work that moves linearly through a few
                stages. Insurance review queues are denser — 50+ items, multiple
                owners, regulatory deadlines that matter. A table lets you scan,
                sort, and compare across dimensions a board can't. Progressive
                disclosure via the detail panel handles depth without polluting
                the main view.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Metrics as filters
              </h3>
              <p className="mt-2">
                The four stat cards aren't decorative. Clicking "In Review" or
                "Blocked" filters the table to those items immediately. The
                metric earns its place by being functional, not just
                informational — it's a shortcut into the relevant slice of the
                queue.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Inline editing over modals
              </h3>
              <p className="mt-2">
                Opening a modal to change a status or reassign an owner is
                friction that compounds across dozens of updates per day. Inline
                editing keeps the user in the flow of the queue. The flash
                feedback confirms the write without an explicit toast — the
                activity log is the record.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Activity log as audit trail
              </h3>
              <p className="mt-2">
                Every status change, ownership move, due date update, and note
                is appended to the item's activity log with a timestamp. This
                matters in cyber insurance: "who approved the BEC sublimit
                adjustment and when" is a real question that gets asked at
                renewal. The log answers it without digging through email.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Domain-specific intake types
              </h3>
              <p className="mt-2">
                Work types in the intake form aren't generic categories — they're
                the actual types cyber underwriting teams deal with: Ransomware
                Assessment, Data Breach Evaluation, Sublimit Review, Cyber
                Renewal, Incident Response Review. This specificity matters: it
                means the tool speaks the team's language from the moment work
                enters the system.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What changed when it got real">
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Filter composition surfaced a UX gap.</strong>{" "}
              The first version had separate "clear" buttons per filter. Once
              multiple filters could be active simultaneously, users had no way
              to see the combined state at a glance. The unified filter banner —
              which lists every active filter and clears them all in one click —
              came from watching that confusion play out.
            </li>
            <li>
              <strong className="font-semibold text-foreground">The table pulse was earned, not added.</strong>{" "}
              Without it, filtering felt instant but directionless — results just
              changed. Adding the CSS pulse class on each filter change gave the
              update a physical register. It's 200ms of animation but it made
              the interaction feel substantially more responsive.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Visual hierarchy beat styling.</strong>{" "}
              Early iterations had more decoration — stronger colors, more
              borders. Stripping back to a cool teal-gray palette with careful
              elevation let the actual content (status, owner, due date) carry
              the weight. The data is the design.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Live ticks forced honest timestamps.</strong>{" "}
              The "Updated just now" badge looked great until the mock data went
              stale 30 seconds after load. The scripted live-update sequence —
              which fires real notes and status changes on a 30s interval — kept
              the badge accurate and made the demo feel like a live team queue
              instead of a screenshot with buttons.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Threshold is a complete, interactive internal tool — not a concept.
              Every feature is wired: metrics filter the table, inline edits
              write to the activity log, the detail panel updates live, and the
              demo queue stays fresh without a backend.
            </li>
            <li>
              The domain specificity is intentional. Cyber insurance
              underwriting teams deal with a specific shape of work: regulated
              notification deadlines, sublimit endorsements that need CAT
              sign-off, breach evaluations that require an auditable decision
              trail. Building for that context — rather than a generic task
              tracker — produces a tool that understands what a blocked item
              means and why the activity log matters at renewal time.
            </li>
            <li>
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
