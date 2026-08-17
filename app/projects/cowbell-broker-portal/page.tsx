import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudyPasswordGate } from "@/components/case-study-password-gate";
import { isCowbellCaseStudyUnlocked } from "@/lib/case-study-auth";
import { getCowbellShots } from "@/lib/cowbell-screenshots";

export const metadata: Metadata = {
  title: "Broker Portal Redesign",
  description:
    "A password-protected case study on redesigning the broker dashboard and quoting flow for a cyber insurance platform.",
};

export default async function CowbellBrokerPortalPage() {
  const unlocked = await isCowbellCaseStudyUnlocked();

  if (!unlocked) {
    return <CaseStudyPasswordGate title="Broker Portal Redesign" />;
  }

  const shots = getCowbellShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
          Private case study · Cowbell
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Broker Portal Redesign
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Broker dashboard · quoting flow · client profile
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          Cowbell&apos;s broker-facing platform grew feature by feature for years:
          every client in one flat table, one long form to start a quote, one
          profile page with everything given equal weight. I led a redesign
          of the dashboard, the quoting flow, and the client profile around a
          simpler idea — show a broker what needs a decision right now, and
          guide them through the rest one step at a time.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          This is real, shipped product work for my employer, shown with
          fabricated demo data — no real client names, figures, or records
          appear anywhere below. Product names and underwriting-criteria
          detail are blurred out of respect for what&apos;s genuinely proprietary;
          everything else here is unedited.
        </p>
      </header>

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-28">
        <CaseStudySection title="The problem">
          <p>
            Cowbell&apos;s broker workflow was fragmented across three separate
            experiences at once — a legacy portal, a current dashboard that
            was better but still fragmented, and an early prototype quoting
            flow that hadn&apos;t been validated or unified across products. Each used
            different navigation, field order, and submission logic. Brokers
            struggled to complete quotes efficiently, next steps were
            unclear, and internal teams spent more time propping the
            experience up with support than the platform spent scaling
            itself.
          </p>
          <p>
            The goal wasn&apos;t a visual refresh. It was one coherent broker
            experience — dashboard, quoting, and servicing — that held up
            consistently across lines of business.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Research, not assumptions">
          <p>
            The redesign started with a full audit of all three existing
            experiences, plus structured interviews on both sides: internally
            across underwriting, concierge, sales, and platform support, and
            externally with brokers ranging from retail agencies to
            wholesalers and MGAs — backed by a broader survey to check how
            far those interviews generalized. Brokers were also asked how
            Cowbell&apos;s quoting experience stacked up against Coalition,
            At-Bay, Chubb, and Travelers, since that comparison is the one
            they actually make in their day-to-day work.
          </p>
          <p>
            Interviews establish what people say; they don&apos;t always confirm
            what people do. Session replay and event analytics ran alongside
            the qualitative research to check the two against each other —
            tracking where brokers actually dropped off in the quoting
            stepper, how long they hesitated on specific fields, and whether
            they used help text and tooltips at all, rather than assuming
            they did.
          </p>
        </CaseStudySection>

        <CaseStudySection
          title="Dashboard: from a flat list to a triage view"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.dashboardBefore} />
              <CaseStudyMedia shot={shots.dashboardAfter} />
            </>
          }
        >
          <p>
            The audit of the existing dashboard turned up a structural
            problem, not a visual one: it never committed to a single primary
            object. Clients, submissions, quotes, binders, and policies were
            all presented at once, which forced a broker to translate their
            actual goal — &quot;I need to deal with this client&quot; — into internal
            platform concepts before they could even choose an action.
            Status values like Ready, Referred, and Expired carried equal
            visual weight despite representing completely different levels
            of urgency, so brokers had to do their own triage every time.
            Actions were generic enough (&quot;Bind / More&quot;) that the real next
            step was hidden behind a click.
          </p>
          <p>
            The redesign commits to the client as the anchor. It opens with a
            personalized summary — in-force policies, expiring policies,
            open quotes, and total premium, each with a trend line instead of
            a bare count — then a{" "}
            <strong className="font-semibold text-foreground">
              Needs Attention
            </strong>{" "}
            row that surfaces the specific accounts with a quote ready to
            bind, a policy that just expired, or a binder waiting on action,
            each labeled with the one next step that actually applies to it.
          </p>
          <p>
            The client table itself grew from three columns to ten — line of
            business, product, status, limit, retention, agent, effective
            date, and a plain-language timeline note (&quot;Invoice overdue by 140
            days,&quot; &quot;ERP available — purchase before deadline&quot;) replacing a
            bare date a broker had to interpret themselves.
          </p>
        </CaseStudySection>

        <CaseStudySection
          title="Quoting: from one form to a guided flow"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.quoteFlowBefore} />
              <CaseStudyMedia shot={shots.quoteFlowAfter} />
            </>
          }
        >
          <p>
            Starting a quote used to be a single page asking for
            organization details, with client search and manual entry
            competing for attention in the same form. The redesign splits
            quoting into a six-step wizard — organization profile, product
            selection, security practices, coverage customization, a summary,
            and bind — with a persistent progress rail so a broker always
            knows where they are and how much is left.
          </p>
          <p>
            Client search now resolves directly into product eligibility:
            instead of a flat list of name matches, selecting an
            organization immediately shows which Cowbell products it
            qualifies for, with the recommended option visually distinct
            from the rest — turning a lookup step into a decision step.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <CaseStudyMedia shot={shots.clientSearchBefore} />
            <CaseStudyMedia shot={shots.clientSearchAfter} />
          </div>
        </CaseStudySection>

        <CaseStudySection
          title="Client profile: surfacing risk, not just records"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.clientProfileBefore} />
              <CaseStudyMedia shot={shots.clientProfileAfter} />
            </>
          }
        >
          <p>
            The original client profile listed policies, binders, quotes,
            and documents as equal-weight stacked cards — accurate, but
            silent on whether the account was actually in good shape. The
            redesign adds a risk-score summary and a plain-language coverage
            adequacy read directly on the profile, so a broker preparing for
            a renewal conversation doesn&apos;t have to piece that judgment
            together from raw policy data themselves.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                A broker&apos;s mental model isn&apos;t the system&apos;s data model
              </h3>
              <p className="mt-2">
                Brokers arrive thinking &quot;I need to deal with this client,&quot;
                not &quot;I need to find the submission, then the quote, then the
                binder.&quot; Presenting clients, submissions, quotes, binders,
                and policies as equally weighted entities was internal system
                structure leaking into a broker-facing surface. Committing to
                the client as the one primary object — with everything else
                nested under it — was a bigger interface decision than it
                looks like from the outside.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Attention is a first-class piece of information
              </h3>
              <p className="mt-2">
                A flat list treats every account as equally worth a broker&apos;s
                time, which is never true. The Needs Attention row is a
                deliberate second axis on top of the client table: not
                &quot;here&apos;s everything,&quot; but &quot;here&apos;s what actually needs you
                right now.&quot; The same principle — separating what needs a
                decision from what&apos;s merely available to browse — is one I
                keep coming back to across different products.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                A wizard earns its steps by showing progress, not just by
                existing
              </h3>
              <p className="mt-2">
                Breaking one long form into six steps only helps if a broker
                can see where they are. The persistent progress rail was as
                important as the step boundaries themselves — without it, a
                multi-step flow just feels like a longer form with more
                clicks between fields.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Judgment belongs on the page, not just in the broker&apos;s head
              </h3>
              <p className="mt-2">
                Coverage adequacy and risk scoring already existed as data.
                Putting a plain-language read of that data directly on the
                client profile — rather than requiring a broker to
                cross-reference it themselves — was the smaller technical
                change and the bigger practical one.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Three surfaces — dashboard, quoting, and client profile — moved
              from listing everything with equal weight to actively
              distinguishing what needs a broker&apos;s attention from what
              doesn&apos;t.
            </li>
            <li>
              The redesigned dashboard and quoting stepper went back through
              evaluative usability interviews — internally and with brokers
              — before being treated as validated rather than just shipped.
            </li>
            <li>
              This is live, in-production work at Cowbell. Real screenshots,
              demo data, shared here with my employer&apos;s proprietary details
              deliberately withheld.
            </li>
          </ul>
        </CaseStudySection>
      </div>

      <div className="read-width mt-28 md:mt-36 space-y-8">
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
