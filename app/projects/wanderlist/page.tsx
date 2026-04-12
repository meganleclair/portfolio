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
        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
          Search a city, explore real places, and save them into trips. Built on
          live data with persistence for signed-in users—end to end from API
          routes to auth and RLS.
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
          title="Context"
          leadVisual={<CaseStudyShot shot={shots.contextHero} />}
        >
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Wanderlist turns a city name into a structured, browsable set of
              real venues—split into headline attractions and smaller “hidden
              gem” style picks so the results feel curated, not generic.
            </li>
            <li>
              It pairs live Geoapify data with persistence: recent searches land
              in Supabase for everyone, and signed-in users get full itineraries,
              saves, sharing, and maps.
            </li>
            <li>
              The point is scale without a content team—one search flow that
              works for any city the API can resolve.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="What I built"
          trailVisual={
            <>
              <CaseStudyShot shot={shots.builtResults} />
              <CaseStudyShot shot={shots.builtTrips} />
              <CaseStudyShot shot={shots.builtStates} />
            </>
          }
        >
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Search flow</strong>{" "}
              — Client posts to <code className="text-foreground/90">/api/places</code>{" "}
              with a city string; UI states: empty, loading, success, error (
              <code className="text-foreground/90">EmptyState</code>,{" "}
              <code className="text-foreground/90">LoadingState</code>,{" "}
              <code className="text-foreground/90">ErrorState</code>).
            </li>
            <li>
              <strong className="font-semibold text-foreground">Geoapify</strong>{" "}
              — Geocode city → coordinates; two place queries (separate category
              sets for “top” vs “gems”) with retry and timeouts in the route
              handler.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Unsplash</strong>{" "}
              — When <code className="text-foreground/90">UNSPLASH_ACCESS_KEY</code>{" "}
              is set, the API layers in a city hero plus per-place photos; the
              client also has a smart category/name fallback grid so the UI
              stays polished either way.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Recent searches</strong>{" "}
              — <code className="text-foreground/90">GET /api/searches</code> reads
              the <code className="text-foreground/90">searches</code> table (last
              20, newest first).
            </li>
            <li>
              <strong className="font-semibold text-foreground">Auth</strong>{" "}
              — Supabase email/password via{" "}
              <code className="text-foreground/90">AuthContext</code>{" "}
              (<code className="text-foreground/90">signUp</code>,{" "}
              <code className="text-foreground/90">signInWithPassword</code>,{" "}
              <code className="text-foreground/90">resetPasswordForEmail</code>{" "}
              → <code className="text-foreground/90">/auth/reset-password</code>
              , <code className="text-foreground/90">NEXT_PUBLIC_SITE_URL</code>{" "}
              when <code className="text-foreground/90">window</code> isn’t
              available).
            </li>
            <li>
              <strong className="font-semibold text-foreground">Trips</strong>{" "}
              — Logged-in users create itineraries and save places through{" "}
              <code className="text-foreground/90">/api/itineraries</code> and{" "}
              <code className="text-foreground/90">/api/saved-places</code>{" "}
              (Bearer access token);{" "}
              <code className="text-foreground/90">SavePlaceModal</code> lists
              trips or creates one, then POSTs the place.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Share</strong>{" "}
              — <code className="text-foreground/90">PATCH /api/itineraries</code>{" "}
              generates a <code className="text-foreground/90">share_id</code>;{" "}
              <code className="text-foreground/90">/api/shared-trip</code> serves
              read-only trip views by link, using the service role when
              configured for clean public reads.
            </li>
            <li>
              <strong className="font-semibold text-foreground">More routes</strong>{" "}
              — <code className="text-foreground/90">/api/place-search</code>{" "}
              (Geoapify autocomplete for “add your own” place),{" "}
              <code className="text-foreground/90">/discover</code> and{" "}
              <code className="text-foreground/90">/quiz</code> with in-file
              sample content, <code className="text-foreground/90">/trips</code>{" "}
              with Leaflet map (dynamic import, no SSR), place detail modal,
              budgets/helpers in <code className="text-foreground/90">lib/</code>.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Hardening</strong>{" "}
              — Rate limits on sensitive routes, strict city input sanitization
              and validation (<code className="text-foreground/90">lib/security.ts</code>
              ), and JWT validation before trusted Supabase operations—baseline
              production hygiene on a public-facing API.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">Next.js 14</strong>{" "}
              (App Router) — client-heavy pages under <code className="text-foreground/90">app/</code>
              , Route Handlers under <code className="text-foreground/90">app/api/</code>.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Supabase</strong>{" "}
              — JS client for auth + anon queries; per-request clients in API
              routes with the user’s <code className="text-foreground/90">Authorization</code>{" "}
              header for private data.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Geoapify</strong>{" "}
              — Geocoding, places, autocomplete (<code className="text-foreground/90">GEOAPIFY_API_KEY</code>
              , server-only).
            </li>
            <li>
              <strong className="font-semibold text-foreground">Unsplash API</strong>{" "}
              — Search endpoint for city and place images when configured.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Cursor</strong>{" "}
              — Used end to end to move faster on API design, types, and refactors
              without sacrificing reviewability.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Deploy</strong>{" "}
              — Documented for <strong className="text-foreground">Vercel</strong>{" "}
              with a clear env contract (<code className="text-foreground/90">.env.example</code>
              ); portable to any host that runs Next.js and the same secrets.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="Data flow"
          trailVisual={<CaseStudyShot shot={shots.dataFlow} />}
        >
          <ul className="list-none space-y-4 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              <span className="font-semibold text-foreground">Places search</span>
              <br />
              Browser → <code className="text-foreground/90">POST /api/places</code>{" "}
              → Geoapify (geocode + 2× places) → normalize to{" "}
              <code className="text-foreground/90">PlaceResult</code> → optional
              Unsplash enrichment →{" "}
              <strong className="text-foreground">insert row into</strong>{" "}
              <code className="text-foreground/90">searches</code>{" "}
              (<code className="text-foreground/90">top_results_json</code>,{" "}
              <code className="text-foreground/90">hidden_gems_json</code>) via the
              shared Supabase client → JSON response to the client for immediate
              render. If persistence fails, the route still returns results—users
              never get blocked by a secondary write; failures are logged for
              follow-up.
            </li>
            <li>
              <span className="font-semibold text-foreground">Recent searches</span>
              <br />
              Browser → <code className="text-foreground/90">GET /api/searches</code>{" "}
              → Supabase select on <code className="text-foreground/90">searches</code>{" "}
              (schema ships with RLS allowing anon access for that table).
            </li>
            <li>
              <span className="font-semibold text-foreground">Saved places</span>
              <br />
              Browser (session) → API routes with{" "}
              <code className="text-foreground/90">Bearer</code> token →{" "}
              <code className="text-foreground/90">createClient</code> +{" "}
              <code className="text-foreground/90">getUser()</code> → RLS on{" "}
              <code className="text-foreground/90">itineraries</code> /{" "}
              <code className="text-foreground/90">saved_places</code> (policies
              in <code className="text-foreground/90">supabase/</code> SQL files).
            </li>
            <li>
              <span className="font-semibold text-foreground">Transforms</span>
              <br />
              Geoapify categories → readable labels; a Latin-script pass on names
              keeps the default UI legible for the product’s primary locales;
              sequential top/gem fetches respect provider limits; the client
              merges streams into one scannable grid.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What shipping surfaced">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              Real Geoapify payloads vary wildly—script systems, sparse fields,
              uneven photo coverage. The places route normalizes aggressively:
              caps, filters, retries, and optional Unsplash so the experience
              stays consistent city to city.
            </li>
            <li>
              Designed a resilient UI layer: category-based imagery and a clear
              empty state when a location truly has no matches, so the product
              never feels “broken”—just honest.
            </li>
            <li>
              Chose resilience over coupling: search results return even if the
              history write hiccups, so discovery never stalls; persistence is
              additive, not a gate.
            </li>
            <li>
              Auth is explicit in the UI—save and trip features appear only when
              a session exists, which keeps expectations aligned with RLS and
              avoids fake affordances.
            </li>
            <li>
              Shipped pragmatic rate limiting at the route layer—enough to
              protect keys and Supabase under normal load, with a straightforward
              path to swap in a shared store if traffic grows.
            </li>
            <li>
              The route pipeline includes room for richer language handling
              (normalization helpers alongside category mapping) as the product
              expands beyond the first set of locales.
            </li>
            <li>
              Evolved the schema deliberately: share links, richer{" "}
              <code className="text-foreground/90">saved_places</code>, and UPDATE
              policies landed as real usage clarified what people actually save
              and share.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Why this matters">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>Helps people move from browsing to actually saving places.</li>
            <li>Reduces friction between discovery and planning.</li>
            <li>
              Separates anonymous exploration from logged-in trip management.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Tradeoffs">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <code className="text-foreground/90">searches</code> uses a permissive
              anon policy so exploration works out of the box—an intentional
              product bet, easy to harden when requirements demand it.
            </li>
            <li>
              Leaned on <code className="text-foreground/90">use client</code>{" "}
              for interactive search, maps, and modals—fast to ship, predictable
              for this surface area, with the API doing the heavy lifting.
            </li>
            <li>
              Discover and quiz content ship as curated in-repo data—zero CMS
              overhead, full creative control, and instant deploys for a solo
              build.
            </li>
            <li>
              Grid keys follow Geoapify’s shape (order-stable results per search)
              rather than imaginary universal IDs—honest to the provider model
              and stable for the UX as implemented.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              Editorial UI in the app (serif headlines, cream/stone palette) so
              places stay the hero—calm enough for long browsing sessions.
            </li>
            <li>
              Concentrated complexity in Route Handlers: retries, filtering, and
              the image pipeline live server-side; the client owns clear states
              and presentation.
            </li>
            <li>
              Save flows go through a modal and an explicit itinerary choice—no
              mystery “heart” with nowhere to land; every saved spot has a home.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              This is a full-stack product, not a concept deck—Geoapify, Unsplash,
              Supabase auth, RLS, and shareable trips all ship in one coherent
              codebase.
            </li>
            <li>
              The split between anonymous search history and authenticated
              itineraries is a clean security and UX story: explore freely,
              commit when you sign in.
            </li>
            <li>
              I’m proud of how much surface area ships in one repo: search,
              persistence, trips, maps, sharing, and hardening—evidence of design
              and engineering moving together.
            </li>
            <li>
              Code and docs live here:{" "}
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
