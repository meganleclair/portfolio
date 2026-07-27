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
    "A cooking app that got smaller on purpose. After shipping a full-featured recipe app, real usage revealed the one thing actually being used — a separate ChatGPT conversation, every single time, to ask about substitutions and recalculate macros. Mise cut everything else and built that as Sous, a Claude-powered cooking companion grounded in the actual recipe.",
};

const miseProject = projects.find((p) => p.slug === "mise");
const LIVE_URL = miseProject!.liveUrl as string;
const REPO = "https://github.com/meganleclair/mise-intelligent-chef";

export default function MisePage() {
  const shots = getMiseShots();

  return (
    <article className="page-wrap py-16 md:py-24">
      <header className="read-width">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
          Flagship project
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Mise Intelligent Chef
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground/90 md:text-[15px]">
          Recipe import · Sous, a Claude-powered cooking companion · a full visual identity reset
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          I built a full-featured recipe app, used it on myself for a few
          weeks, and found out I was ignoring most of it. The one thing I
          actually did—every single time I cooked—was open a separate ChatGPT
          conversation to ask about substitutions and recalculate macros. So I
          cut the rest and built that, properly, inside the product.
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
          leadVisual={<CaseStudyMedia shot={shots.hero} />}
        >
          <p>
            Recipe websites are built for traffic, not cooking. Five
            paragraphs of backstory, an ingredients list that drifts from the
            steps, instructions that assume you've done this before. That was
            the starting premise, and it's still true.
          </p>
          <p>
            But it wasn't the real problem. The real friction shows up after
            you've already found a recipe you like: you don't have heavy
            cream, or you're cooking for six instead of four, or you just want
            to know what a dish actually costs you nutritionally before you
            commit to making it. That renegotiation—swap this, rescale that,
            what's the protein now—was happening in a completely separate app,
            every time, disconnected from the recipe itself.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I actually discovered">
          <p>
            The first version of Mise had two full surfaces: an editorial mode
            for browsing and importing recipes, and a dedicated cook mode—a
            step-by-step, timer-synced, touch-friendly view for standing at the
            counter. It also had a Claude-powered ingredient-swap sheet and a
            batch dietary-goal shifter that could rewrite an entire ingredient
            list in one pass. It was a genuinely full-featured app, and all of
            it worked.
          </p>
          <p>
            Then I used it on myself for a few weeks, the way an actual home
            cook would. And when I looked honestly at what I was doing, the
            step-by-step cook mode barely got touched. What I actually did,
            every single time, was open a completely separate ChatGPT
            conversation to ask things like "can I use chickpeas instead of
            white beans" or "what does this look like at six servings instead
            of four." The app I'd built and the behavior I actually had were
            two different products.
          </p>
          <p>
            That's the kind of thing that's easy to miss if you only ever
            watch other people use something, and easy to see the moment
            you're your own most honest user. So I made the harder call:
            cut cook mode, the prep checklist, the swap sheet, and the batch
            dietary shifter entirely, and rebuild the one behavior that
            mattered as a first-class feature. That became Sous.
          </p>
        </CaseStudySection>

        <CaseStudySection
          title="Meet Sous"
          trailVisual={
            <>
              <CaseStudyMedia shot={shots.meetSous} />
              <CaseStudyMedia shot={shots.demoRecipe} />
            </>
          }
        >
          <p>
            Sous is a recipe-scoped chat, not a bolted-on assistant widget. It
            opens already knowing the recipe you're looking at—every
            ingredient, every quantity—so the first question you ask doesn't
            need context you haven't given it yet.
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-foreground/40">
            <li>
              <strong className="font-semibold text-foreground">
                Swap anything.
              </strong>{" "}
              Ask about a substitution in plain language and get a real
              answer—what changes, what to watch for, whether it's actually a
              good idea—grounded in the specific dish, not a generic
              substitution chart.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Resize on the fly.
              </strong>{" "}
              A servings stepper recalculates the whole recipe, and Sous
              carries that context into the conversation without being asked
              twice.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Real macros.
              </strong>{" "}
              Calories, protein, carbs, fat, and fiber update as the
              conversation and servings change—not a one-time nutrition label,
              a running estimate that stays honest as the recipe changes
              underneath it.
            </li>
          </ul>
          <p>
            Every demo recipe on the homepage is fully playable with Sous—no
            account, no sign-up. That was a deliberate bet: the fastest way to
            prove the feature is worth the friction of creating an account is
            to remove that friction for the first conversation entirely.
          </p>
        </CaseStudySection>

        <CaseStudySection
          title="A real conversation, not a mockup"
          leadVisual={<CaseStudyMedia shot={shots.sousChat} />}
        >
          <p>
            This is a live exchange with the deployed app, not a designed
            composite. I asked Sous whether chickpeas would work in place of
            white beans in a slow-roasted tomato stew, and it answered with
            the actual tradeoff—firmer texture, similar protein, a note about
            stock if the stew runs thick—instead of a canned substitution
            list. The macro panel above the conversation is live too: it
            reflects the current servings count and updates in place as the
            conversation continues.
          </p>
          <p>
            Getting a model to answer honestly is harder than getting it to
            answer confidently. An earlier draft of Sous's sample copy claimed
            chickpeas added "40 more grams of protein per batch" compared to
            white beans—a plausible-sounding number that's simply wrong; the
            two are close in protein per cup. Catching that meant treating
            nutritional claims with the same scrutiny as any other factual
            output, sample copy included.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I built">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Sous, a recipe-scoped nutrition chat (Claude Haiku)
              </strong>{" "}
              — A persisted chat session per recipe, keyed to{" "}
              <code className="text-foreground/90">recipe_nutrition_sessions</code>{" "}
              in Supabase, carrying servings, ingredient overrides, and macro
              estimates as first-class state rather than re-deriving them from
              chat history on every turn. Retries are structured: transient
              failures retry with backoff, but auth and bad-request errors
              from the Anthropic API fail fast instead of burning a retry
              budget on something that will never succeed.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                A no-signup demo path
              </strong>{" "}
              — The same{" "}
              <code className="text-foreground/90">/api/nutrition-chat</code>{" "}
              route branches on whether a request carries a real{" "}
              <code className="text-foreground/90">recipeId</code> (signed-in,
              persisted, per-user rate-limited) or an inline{" "}
              <code className="text-foreground/90">recipeTitle</code> +{" "}
              <code className="text-foreground/90">ingredients</code> payload
              (demo mode: no auth, no database access at all, IP-keyed rate
              limit). The branch is structural, not a flag—the demo path
              can't accidentally reach a real user's data because it never
              queries the recipes table in the first place.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Three-tier recipe import pipeline
              </strong>{" "}
              — Spoonacular for enriched imports when a key is configured; a
              custom JSON-LD adapter that fetches the URL directly and parses{" "}
              <code className="text-foreground/90">{"<script type=\"application/ld+json\">"}</code>{" "}
              blocks for the{" "}
              <code className="text-foreground/90">@type: "Recipe"</code>{" "}
              node when it isn't; a demo mock adapter as a zero-dependency
              fallback. Most major recipe sites import cleanly at one of the
              three tiers.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Duplicate-import prevention
              </strong>{" "}
              — A unique index on{" "}
              <code className="text-foreground/90">(user_id, source_url)</code>{" "}
              plus an application-level check before the (comparatively
              expensive) import pipeline runs, so re-importing a URL you've
              already saved returns the existing recipe instead of creating a
              copy. A race between two near-simultaneous imports of the same
              URL still resolves correctly—the losing insert hits the unique
              constraint and the action recovers by looking up the row the
              winner just created, rather than surfacing a raw database error.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Server-side image proxy
              </strong>{" "}
              — Recipe images route through{" "}
              <code className="text-foreground/90">/api/image-proxy</code>,
              which fetches with a browser User-Agent and sets{" "}
              <code className="text-foreground/90">Referer</code> to the
              source hostname to bypass hotlink protection, blocks private IP
              ranges, validates by content-type, caps at 8&nbsp;MB, and serves
              with <code className="text-foreground/90">Cache-Control: private</code>{" "}
              so a CDN never caches one recipe's photo under another's URL.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Font Awesome Pro Duotone icon system
              </strong>{" "}
              — Every icon in the app runs through a single{" "}
              <code className="text-foreground/90">DuotoneIcon</code>{" "}
              wrapper that sets the secondary-layer opacity via a CSS custom
              property, so the two-tone treatment is consistent everywhere
              without repeating inline styles at each call site.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Auth &amp; security
              </strong>{" "}
              — Supabase SSR with cookie-aware server and client boundaries,
              RLS on every table so no row is reachable outside its owner, and
              a sliding-window rate limit on the authenticated nutrition-chat
              endpoint to prevent API cost abuse.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          title="A visual identity that had to earn its confidence"
          trailVisual={<CaseStudyMedia shot={shots.importDark} />}
        >
          <p>
            The first shipped design was calm and quiet on purpose—a muted
            neutral palette, generous whitespace, a serif tagline that read
            "a calmer way to cook the internet." It was fine. It also didn't
            say anything about what made Sous worth using, and once the
            product's actual center of gravity shifted, the identity needed to
            move with it.
          </p>
          <p>
            The first attempt at "more personality" overcorrected: a bubbly
            rounded display font, a cream-and-blush palette, fully pill-shaped
            everything. It photographed fine in isolation and read as
            unmistakably junior once it was live—every surface fighting for
            the same amount of attention, nothing left to signal
            confidence. Rebuilding it meant treating color the way a site
            like Allrecipes actually does: layered backgrounds instead of one
            flat tone (white chrome, a tinted content panel, white cards on
            top), ink-black headlines instead of accent-colored ones, and an
            accent color used as a border and a line before it's ever used as
            a fill. The final system pairs a confident serif with a navy ink,
            an orange primary accent, and one deliberately bold dark panel
            partway down the homepage—a visual break in an otherwise light,
            editorial layout, not a color choice made in isolation.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Design decisions">
          <div className="space-y-8 md:space-y-9">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Cutting a working feature is still a design decision
              </h3>
              <p className="mt-2">
                Cook mode wasn't broken. It had a synced timer, per-step
                ingredient narrowing, a session model that survived a phone
                lock. It was also not the thing I reached for. Removing
                working software is a harder call than removing something
                that's clearly failing, because there's no error message
                telling you it's wrong—only your own usage data, if you're
                willing to look at it honestly.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                A no-signup demo is a credibility bet, not a growth hack
              </h3>
              <p className="mt-2">
                Letting anyone chat with Sous on a demo recipe before creating
                an account means the feature has to be good enough to survive
                first contact with zero context about the user. That's a
                higher bar than gating it behind sign-up, and it's the right
                bar—if Sous only feels good after you've already committed to
                an account, that's a sign it isn't good enough yet.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Honest beats impressive in nutrition copy
              </h3>
              <p className="mt-2">
                It would have been easy to let Sous's sample responses lean
                toward whatever sounds most compelling—bigger protein deltas,
                more dramatic swaps. The fix for the chickpea/protein error
                wasn't a better-sounding number; it was admitting the swap is
                close to a wash and saying so. A cooking assistant that
                exaggerates results isn't a feature worth having.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Color should earn its saturation before it gets a fill
              </h3>
              <p className="mt-2">
                The visual reset's real lesson wasn't a palette swap, it was a
                rule: an accent color proves itself as a border, a line, or a
                small icon tint before it's allowed to become a large filled
                surface. Applied consistently, that rule is what separates a
                confident, restrained interface from one where every element
                is shouting at the same volume.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                A structural branch is safer than a conditional flag
              </h3>
              <p className="mt-2">
                The demo mode for Sous could have been a boolean flag checked
                before a database call. Instead, the route branches on which
                shape of payload arrived—a real{" "}
                <code className="text-foreground/90">recipeId</code> versus an
                inline title and ingredient list—so the demo code path is
                physically incapable of reaching a signed-in user's data,
                rather than merely instructed not to.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Stack">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Claude Haiku (Anthropic)
              </strong>{" "}
              — Powers Sous via{" "}
              <code className="text-foreground/90">@anthropic-ai/sdk</code>,
              with a retry layer that distinguishes transient failures from
              non-retryable API errors, and structured-output validation on
              every macro estimate and ingredient override before it reaches
              the UI.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Next.js
              </strong>{" "}
              (App Router, Turbopack) — Server Components for data fetching,
              Server Actions for mutations, Route Handlers for the
              nutrition-chat and image-proxy endpoints.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Supabase SSR
              </strong>{" "}
              — Per-request server clients for auth-aware queries; RLS on
              every table so no row is reachable outside its owner.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                shadcn/ui on Base UI
              </strong>{" "}
              — Dialog, Sheet, Tooltip, and Button primitives, kept on one
              component library end to end rather than mixing UI kits.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Font Awesome Pro (Duotone)
              </strong>{" "}
              — The full icon system, routed through one wrapper component
              for consistent secondary-layer styling.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Recipe import pipeline
              </strong>{" "}
              — Spoonacular for enriched parsing when configured; a custom
              JSON-LD structured-data adapter as a free fallback; a demo mock
              adapter for zero-dependency demos.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What building it surfaced">
          <ul className="list-disc space-y-2 pl-5 text-[15px] font-medium leading-snug marker:text-foreground/40 md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Watch what you actually do, not what you built for yourself to
                do.
              </strong>{" "}
              The gap between Mise's designed cook-mode workflow and my
              actual weekly behavior (a separate ChatGPT tab, every time) was
              invisible until I looked at my own usage honestly. Being your
              own first user only works if you're willing to notice when you
              don't use the thing you built.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                A single literal value can hide a parsing bug for a long time.
              </strong>{" "}
              Recipe sites frequently encode JSON-LD yield as "1 loaf,"
              "1 batch," or "1 pan"—and a naive parser reads that leading
              digit as a one-person serving count, producing a confidently
              wrong "Serves 1" label. The fix wasn't a smarter parser; it was
              recognizing that a bare{" "}
              <code className="text-foreground/90">1</code> is almost never
              trustworthy unless the source text explicitly says "serving."
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                A demo good enough to remove the sign-up wall is a genuinely
                different design problem than a demo that's just a locked
                preview.
              </strong>{" "}
              Making Sous usable pre-auth meant the IP-based rate limit, the
              inline ingredient payload, and the "no persistence" behavior all
              had to be designed together—not bolted onto the authenticated
              path after the fact.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Taste feedback loops fast when the medium is right.
              </strong>{" "}
              Iterating on the visual identity through quick side-by-side
              mockups—rather than shipping a full redesign and asking for
              reactions afterward—turned "I hate the UI, it looks junior"
              into a specific, actionable set of fixes (typography, color
              layering, corner radius) within the same conversation, instead
              of another full redesign cycle.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                CDN cache collisions are silent and maddening.
              </strong>{" "}
              The image proxy originally shipped with{" "}
              <code className="text-foreground/90">Cache-Control: public</code>.
              In production, every imported recipe started displaying the
              same photo—the first one ever fetched—because the CDN was
              keying its cache by path alone and ignoring the{" "}
              <code className="text-foreground/90">?url=</code> query
              parameter entirely. The fix was{" "}
              <code className="text-foreground/90">Cache-Control: private</code>.
              The symptom was obvious; the root cause took reading the CDN's
              actual cache-keying behavior to confirm.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <ul className="list-none space-y-3 pl-0 text-[15px] font-medium leading-snug md:text-base">
            <li>
              Mise went from a full-featured app that I only partially used to
              a smaller app built entirely around the one thing that was
              actually working. That's a harder edit than adding a feature—it
              meant deleting a working cook mode, a working swap sheet, and a
              working prep checklist because the data on my own behavior said
              they weren't earning their place.
            </li>
            <li>
              Sous is the product now, not a feature bolted onto one. It's
              recipe-scoped, it carries real context into every answer, and
              it's good enough to hand to a stranger with no account and no
              onboarding.
            </li>
            <li>
              The visual identity went through a real design cycle in the
              open—shipped, judged too junior, diagnosed specifically, and
              rebuilt around a rule (accent color earns saturation before it
              earns a fill) rather than a fixed palette.
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
