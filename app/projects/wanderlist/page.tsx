import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudyShot } from "@/components/case-study-shot";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getWanderlistShots } from "@/lib/wanderlist-screenshots";
import { projects } from "@/data/projects";

const wanderlistProject = projects.find((p) => p.slug === "wanderlist");
const LIVE_URL = wanderlistProject!.liveUrl as string;

export const metadata: Metadata = {
  title: "Wanderlist",
  description:
    "City search, live place data, and trips—with persistence for signed-in users.",
};

const REPO = "https://github.com/meganleclair/wanderlist";

export default function WanderlistPage() {
  const shots = getWanderlistShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Wanderlist
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          City search · live place data · trips &amp; sharing
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          A full-stack travel planner built on live place data — no static
          content, no manual curation. Search any city and get a curated split
          of headline attractions and local finds with photography layered in,
          then save to named trips, estimate a budget, view on a map, and share
          a read-only link. The Trip Quiz turns five questions about vibe, pace,
          and landscape into a ranked itinerary shortlist. Auth adds persistence;
          anonymous search works without an account.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
          <a
            href={LIVE_URL}
            className="text-foreground underline decoration-muted-foreground underline-offset-[6px] transition-colors hover:decoration-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch app
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
          title="What it does"
          leadVisual={<CaseStudyShot shot={shots.contextHero} />}
        >
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Type any city. Wanderlist geocodes it, pulls live place data from
              Geoapify, layers in Unsplash photography, and returns a curated
              split of headline attractions and hidden gems — no content team, no
              manual curation.
            </li>
            <li>
              Signed-in users get the full product: save places to named
              itineraries, see an estimated trip budget, view everything on a
              map, and share a read-only trip link with anyone.
            </li>
            <li>
              Not sure where to start? The Trip Quiz asks five questions — vibe,
              duration, exploration style, landscape, pace — and returns a ranked
              list of personalized itinerary matches. Or browse the Discover page
              for curated trips filterable by type and interest, and copy any of
              them to your account in one click.
            </li>
            <li>
              Anonymous users still get full search and recent history — the auth
              layer adds persistence, it doesn't gate the core experience.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="What I built"
          trailVisual={
            <>
              <CaseStudyShot shot={shots.builtResults} />
              <CaseStudyShot shot={shots.quizVibe} />
              <CaseStudyShot shot={shots.quizResult} />
              <CaseStudyShot shot={shots.discover} />
              <CaseStudyShot shot={shots.builtTripsClosed} />
              <CaseStudyShot shot={shots.builtTrips} />
              <CaseStudyShot shot={shots.builtStates} />
            </>
          }
        >
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Server-side API pipeline</strong>{" "}
              — geocoding, dual place queries (top spots + hidden gems), retry
              logic, timeouts, and optional Unsplash enrichment all live in a
              single Route Handler. The client gets clean, normalized results or
              a clear error — never a partial state.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Auth with row-level security</strong>{" "}
              — Supabase email/password auth with password reset flow. Every
              private route validates the user's JWT before touching the
              database; RLS policies enforce ownership at the data layer so the
              app is secure even if API logic has a gap.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Trip Quiz & personalization</strong>{" "}
              — a 5-question flow that matches users to itineraries by vibe,
              duration, exploration style, landscape, and pace. Results are
              ranked by match score with destination photography, duration, and
              budget — then immediately copyable into the user's trips.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Discover & curated itineraries</strong>{" "}
              — a pre-built library of trips, filterable by type (City, Country,
              Multi-Country) and interest tag (Culture, Food, Beach, and more).
              One click clones any itinerary into the user's account, ready to
              customize — no blank-slate friction.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Itineraries, saves, and sharing</strong>{" "}
              — users create named trips, save places into them, set a budget,
              and generate shareable links. Shared trips are served read-only
              using the Supabase service role — no auth required for the
              recipient, no data leakage.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Resilient UI states</strong>{" "}
              — every async path has a designed state: loading, success, empty,
              and error. The app never shows a spinner with no resolution, and
              search results return even if the history write fails — discovery
              is never blocked by a secondary operation.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Production hardening</strong>{" "}
              — rate limiting on sensitive routes, input sanitization, JWT
              validation before any trusted Supabase operation. The kind of
              security setup you'd ship to production at a company, not bolted
              on after the fact.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Next.js 14</strong>{" "}
              (App Router) — client components for interactive search and maps,
              Route Handlers for the API layer.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Supabase</strong>{" "}
              — auth, Postgres with RLS, and per-request clients scoped to the
              user's session for private data.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Geoapify</strong>{" "}
              — geocoding, places, and autocomplete. All calls are server-side;
              the key never touches the client.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Unsplash API</strong>{" "}
              — city hero and per-place photography when configured; the UI
              degrades gracefully to category-based fallback imagery when it's
              not.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Leaflet</strong>{" "}
              — dynamically imported map on the trips page (no SSR), with place
              pins pulled from saved itinerary data.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Netlify</strong>{" "}
              — deployed with a clean environment contract; portable to any
              Next.js-compatible host.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="Data flow"
          trailVisual={<CaseStudyShot shot={shots.dataFlow} />}
        >
          <ul className="list-none space-y-4 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              <span className="font-semibold text-foreground">Search</span>
              <br />
              Client posts a city string → server geocodes it → fires two
              parallel place queries (categories tuned for "top" vs "gems") →
              normalizes results → optionally enriches with Unsplash photos →
              writes to search history → returns JSON. If the history write
              fails, results still return. The client never sees a partial or
              inconsistent payload.
            </li>
            <li>
              <span className="font-semibold text-foreground">Private data</span>
              <br />
              Every authenticated request carries the user's access token.
              Server-side route handlers call{" "}
              <code className="text-foreground/90">getUser()</code> before any
              database write; Supabase RLS policies enforce row ownership as a
              second layer. No auth = no data, at the DB level.
            </li>
            <li>
              <span className="font-semibold text-foreground">Shared trips</span>
              <br />
              Sharing generates a unique token on the itinerary. The shared view
              uses the Supabase service role to serve read-only data by token —
              no session required, no private data exposed.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <ul className="list-disc space-y-3 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Editorial aesthetic</strong>{" "}
              — serif headlines, warm cream palette, and generous photography
              keep the places front and center. The UI stays calm enough for
              long browsing sessions without competing with the content.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Auth as enhancement, not a gate</strong>{" "}
              — anonymous users get the full search experience. Sign-in unlocks
              persistence. This is a deliberate product decision: make the value
              obvious before asking for commitment.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Complexity lives server-side</strong>{" "}
              — retries, filtering, image enrichment, and normalization all
              happen in Route Handlers. The client owns state and presentation.
              Easier to test, easier to change, and the browser payload stays
              clean.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Save flows are explicit</strong>{" "}
              — a modal prompts users to choose or create a trip before saving a
              place. No mystery heart button that saves somewhere unknown; every
              saved spot has a home.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Wanderlist is a complete product, not a prototype — search, auth,
              trips, maps, sharing, quiz, and security all ship in one codebase
              and work together end to end. Every surface has a designed state
              for every async outcome: loading, success, empty, and error.
            </li>
            <li>
              The security model is real: JWT validation at the route layer, RLS
              at the database layer, server-only API keys. Not a bolt-on — it was
              designed in from the start and holds up to the same scrutiny as a
              production system.
            </li>
            <li>
              The resilience decisions are deliberate — search results survive a
              failed history write, the app degrades gracefully when third-party
              APIs don't cooperate, and complexity stays on the server so the
              client stays predictable. That's production thinking, not
              happy-path thinking.
            </li>
            <li>
              Code lives here:{" "}
              <a
                href={REPO}
                className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-[5px] hover:decoration-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/meganleclair/wanderlist
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
