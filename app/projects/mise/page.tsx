import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyMedia } from "@/components/case-study-media";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudySignalLink } from "@/components/case-study-signal";
import { getMiseShots } from "@/lib/mise-screenshots";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Mise Intelligent Chef",
  description:
    "A full-stack cooking app powered by Claude. Import any recipe URL, get AI-driven ingredient swaps tuned to real dietary needs, prep with a checklist, then cook one step at a time.",
};

const miseProject = projects.find((p) => p.slug === "mise");
const LIVE_URL = miseProject!.liveUrl as string;
const REPO = "https://github.com/meganleclair/mise-intelligent-chef";

export default function MisePage() {
  const shots = getMiseShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Mise Intelligent Chef
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Claude-powered swaps · recipe import · prep mode · guided cook
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          A full-stack cooking app built around Claude. Import any recipe URL,
          get AI-driven ingredient swaps tuned to real dietary shifts, work
          through a prep checklist, then cook one clear step at a time.
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
          title="The problem"
          leadVisual={<CaseStudyMedia shot={shots.editorialHome} />}
        >
          <p>
            Recipe websites are built for traffic, not cooking. You get five
            paragraphs of backstory, an ingredients list that doesn't match the
            steps, and instructions that assume you've done this before.
          </p>
          <p>
            The gap between "found a recipe" and "actually cooked it" is mostly
            friction—cognitive load from switching context, tracking where you
            are, and figuring out what to do before the heat goes on. And if a
            recipe calls for heavy cream you don't have, or dairy you can't eat,
            you're back to Google.
          </p>
          <p>
            Mise treats those as solvable design problems—and uses Claude to
            solve the ones that need more than layout.
          </p>
        </CaseStudySection>

        <CaseStudySection
          title="Two modes, one session"
          trailVisual={<CaseStudyMedia shot={shots.recipeDetail} />}
        >
          <p>
            The core architecture decision: Editorial and Cook are distinct
            modes with different demands.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Editorial mode
              </h3>
              <p className="mt-2">
                Browse your imported recipes, discover new ones, manage your
                kitchen. Calm, readable, meant for planning—not for a kitchen
                with flour on your hands.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Cook mode
              </h3>
              <p className="mt-2">
                A focused, touch-friendly surface that shows one step at a
                time with only the ingredients relevant to that step alongside.
                No scrolling. No distractions. Timer synced to the session so
                you can step away and come back.
              </p>
            </div>
          </div>
          <p>
            The session model means switching mid-recipe is safe—{" "}
            <code className="text-foreground/90">cook_sessions</code> tracks
            your current step and timer state in Supabase, so a refresh or a
            phone lock doesn't lose your place.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                AI ingredient swaps (Claude)
              </strong>{" "}
              — A slide-up sheet powered by Claude Haiku generates 2–3
              substitutions per ingredient, focused on real dietary shifts:
              dairy-free, lower calorie, lower carb, higher protein. The prompt
              is scope-controlled: vegetables, aromatics, herbs, and spices
              correctly return nothing—swaps are only offered when they
              actually matter (fats, dairy, proteins, grains, sweeteners).
              Combinations are encouraged where they work best (e.g.{" "}
              <em>cream cheese + whole milk</em> as a one-for-one heavy cream
              swap). Quality is enforced at the prompt level: cheap neutral
              oils are hard-banned from suggestions. Claude receives the full
              ingredient list as context so its reasoning is grounded in the
              actual dish, not just the ingredient name in isolation. Saved
              swaps write to{" "}
              <code className="text-foreground/90">recipe_modifications</code>{" "}
              and carry over between sessions.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Batch dietary goal shifts (Claude)
              </strong>{" "}
              — A second, distinct Claude integration separate from per-ingredient
              swaps. The user selects one or more dietary goals (higher protein,
              lower carb, dairy-free, etc.) and Claude reads the full ingredient
              list at once, applies the most practical combination of swaps for
              the actual dish, and writes all results in a single pass. Claude
              resolves goal conflicts natively—if two goals disagree on the same
              ingredient, it picks the swap that serves the most goals
              simultaneously rather than surfacing a mechanical priority-order
              dialog. Batch-shifted lines are tagged in{" "}
              <code className="text-foreground/90">recipe_modifications</code>{" "}
              so they can be cleared independently of manual swaps. A static
              swap catalog serves as a zero-latency fallback if the API is
              unavailable.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Three-tier recipe import pipeline
              </strong>{" "}
              — Spoonacular handles enriched imports when a key is configured.
              When it fails or isn't available, a custom JSON-LD adapter fetches
              the URL directly, parses{" "}
              <code className="text-foreground/90">{"<script type=\"application/ld+json\">"}</code>{" "}
              blocks, and extracts the{" "}
              <code className="text-foreground/90">@type: "Recipe"</code> node—
              handling nested <code className="text-foreground/90">@graph</code>,
              HowToSection with itemListElement, and plain string instruction
              arrays. A demo mock adapter provides a working end-to-end fallback
              with no external dependencies. Virtually any major recipe site
              imports cleanly at one of the three tiers.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Server-side image proxy
              </strong>{" "}
              — Recipe images are routed through{" "}
              <code className="text-foreground/90">/api/image-proxy</code>, which
              fetches with a browser User-Agent and sets{" "}
              <code className="text-foreground/90">Referer</code> to the source
              hostname—bypassing hotlink protection silently. Private IP ranges
              are blocked. Images are validated by content-type, capped at 8 MB,
              and served with{" "}
              <code className="text-foreground/90">Cache-Control: private</code>{" "}
              to prevent CDN-level caching.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Prep editor</strong>{" "}
              — A checklist of tasks that need to happen before the heat goes on:
              sourcing, mise en place, equipment. Editable and persisted
              per-recipe so it reflects your actual habits, not a generic list.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Cook mode</strong>{" "}
              — Step navigator with per-step ingredient narrowing:{" "}
              <code className="text-foreground/90">getIngredientsForStep()</code>{" "}
              matches ingredient names against step text so you see only what's
              relevant now. Multi-sentence steps are split into a numbered list.
              Timer persists to{" "}
              <code className="text-foreground/90">cook_sessions.timer_state</code>{" "}
              as a fixed{" "}
              <code className="text-foreground/90">endsAt</code> timestamp—a
              background tab or refresh doesn't drift the clock.
            </li>
            <li>
              <strong className="font-semibold text-foreground">My Kitchen</strong>{" "}
              — Import recipes, toggle favorites, and search your collection
              without leaving the page. A "continue cooking" banner surfaces
              when an active session exists—no badge, just context when you need it.
              The list paginates client-side from a larger server-fetched set
              so the initial render stays fast.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Auth &amp; security</strong>{" "}
              — Supabase SSR with cookie-aware server and client boundaries.
              Middleware enforces session requirements on Editorial and Cook
              routes; RLS on all tables means no row is accessible outside its
              owner. The Claude-powered swap endpoint requires a valid session
              and applies a sliding-window rate limit per user to prevent
              API cost abuse.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="Cook mode in detail"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.cookMode} />
              <CaseStudyMedia shot={shots.cookModeSwap} />
              <CaseStudyMedia shot={shots.ingredientSwap} />
            </>
          }
        >
          <p>
            The step view has one job: put the right information in front of
            you, at the right time, with as little noise as possible.
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>
              Large type for the instruction—readable at arm's length from a
              phone propped up in the kitchen.
            </li>
            <li>
              Ingredient list narrows to just what's relevant to the current
              step, with a fallback to everything when matching confidence is low.
            </li>
            <li>
              Swap button on each ingredient opens the Claude-powered sheet
              without losing your step position. The sheet knows what recipe
              you're in and surfaces dietary-shift suggestions—not generic
              alternatives.
            </li>
            <li>
              Back / Next at thumb reach; the final step marks the session
              complete and prompts for a rating.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="Prep &amp; kitchen"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.prepEditor} />
              <CaseStudyMedia shot={shots.kitchen} />
              <CaseStudyMedia shot={shots.importFlow} />
            </>
          }
        >
          <p>
            Prep is a separate route from the recipe detail—a deliberate
            checkpoint before committing to a cook session. The checklist
            is editable and persists so it reflects each person's actual
            mise en place habits.
          </p>
          <p>
            My Kitchen deliberately avoids dashboard energy. A short list
            with titles, ratings, and a delete button. Favorites are separated
            so they're easy to find again. The continue-cooking banner appears
            at the top when there's an active session—no notification badge,
            just context when you need it.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Claude Haiku (Anthropic)
              </strong>{" "}
              — Used in two distinct integrations via{" "}
              <code className="text-foreground/90">@anthropic-ai/sdk</code>:{" "}
              per-ingredient swap suggestions (Route Handler, authenticated +
              rate-limited) and batch dietary goal shifts (Server Action, reads the
              full ingredient list in a single pass). Each integration has its own
              prompt-engineering constraints: scope guards, quality rules, and
              structured JSON output requirements.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Next.js 15</strong>{" "}
              (App Router) — Server Components for data fetching, Server Actions
              for mutations, Route Handlers for the AI swap and image proxy
              endpoints. Write paths go through typed actions in{" "}
              <code className="text-foreground/90">lib/actions/</code>.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Supabase SSR</strong>{" "}
              — Per-request server clients for auth-aware queries; browser client
              for cook mode's real-time step and timer syncs. RLS on all tables—
              no row accessible outside its owner.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Recipe import pipeline
              </strong>{" "}
              — Spoonacular for enriched parsing when configured; a custom
              JSON-LD structured-data adapter as a free fallback that handles
              virtually any major recipe site; a demo mock adapter for
              zero-dependency demos.
            </li>
            <li>
              <strong className="font-semibold text-foreground">shadcn/ui</strong>{" "}
              — Dialog, Sheet, Checkbox, and scroll areas; component-level
              overrides kept minimal.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What building it surfaced">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Prompt scope matters more than prompt cleverness.
              </strong>{" "}
              The Claude swap prompt went through several iterations. The
              breakthrough wasn't better positive instructions—it was tighter
              exclusions. Explicitly telling Claude what{" "}
              <em>not</em> to suggest (cheap neutral oils, aromatic vegetables,
              spices) produced dramatically more useful output than rewording
              what it <em>should</em> suggest. Cheap oils were hard-banned by
              name. The scope rule—return{" "}
              <code className="text-foreground/90">[]</code> for anything that
              isn't a meaningful dietary swap candidate—kept the UI honest:
              a swap button that appears means something.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Context makes AI suggestions credible.
              </strong>{" "}
              Sending only the ingredient name produced generic results. Sending
              the full ingredient list alongside it gave Claude enough recipe
              context to reason about what a substitution actually does to the
              dish—not just whether it's chemically similar.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                CDN cache collisions are silent and maddening.
              </strong>{" "}
              The image proxy shipped with{" "}
              <code className="text-foreground/90">Cache-Control: public</code>.
              In production on Netlify, every imported recipe started displaying
              the same image—the first one ever fetched. The CDN was caching the
              proxy response by path alone, ignoring the{" "}
              <code className="text-foreground/90">?url=</code> query parameter
              entirely. The fix was{" "}
              <code className="text-foreground/90">Cache-Control: private</code>
              —browser-only caching, no edge layer. Unsplash URLs were also
              moved to bypass the proxy entirely since their CDN is already
              public. The symptom (all images identical) was obvious; the root
              cause (edge cache keying behavior) took careful reading of Netlify's
              caching docs to confirm.
            </li>
            <li>
              The timer's clock-based model (fixed{" "}
              <code className="text-foreground/90">endsAt</code> timestamp vs. a
              countdown counter) was a small decision with real UX consequences.
              A counter drifts across tab switches and phone locks. A timestamp
              doesn't—remaining seconds are always calculated fresh on each tick.
            </li>
            <li>
              Step-ingredient matching surfaced an inherent tension: strict
              matching misses paraphrased ingredients; loose matching shows too
              much. The solution was to show everything when confidence is
              low—honest beats clever.
            </li>
            <li>
              The three-tier import pipeline emerged from real failures in
              production: Spoonacular occasionally extracts garbage from
              paywalled or redirect pages. JSON-LD structured data is
              surprisingly reliable as a free fallback—most major recipe
              sites include it for SEO. Designing each adapter against the
              same interface kept the fallback logic clean and testable.
            </li>
            <li>
              Server Actions made the mutation pattern unusually clean: no
              route handlers, no client-side fetches for writes, cache
              invalidation via{" "}
              <code className="text-foreground/90">revalidatePath()</code>{" "}
              co-located with the action.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Mise is where architecture, AI integration, and UX deliberateness
              all had to work together. Claude isn&apos;t a single bolt-on
              feature—it runs in two separate places, each with a different
              job: swapping individual ingredients on demand, and shifting an
              entire recipe toward a dietary goal in one pass. Each integration
              is scoped, prompt-engineered, and quality-controlled at the model
              level rather than post-processed in code.
            </li>
            <li>
              The import pipeline handles real-world failure gracefully at every
              tier. The session model means you can set down your phone mid-recipe
              and come back without losing your place. The image proxy was
              simple until it wasn&apos;t—and debugging the CDN cache collision
              required understanding how Netlify&apos;s edge layer keys its
              cache, not just reading error logs.
            </li>
            <li>
              The separation between Editorial and Cook turned out to be the
              right call: each surface has one job, which kept both clean in
              ways that a unified view would have compromised.
            </li>
            <li>
              Code lives here:{" "}
              <a
                href={REPO}
                className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-[5px] hover:decoration-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/meganleclair/mise-intelligent-chef
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
