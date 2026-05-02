import { existsSync } from "fs";
import { join } from "path";

const DIR = join(process.cwd(), "public", "wanderlist");

export type ShotVariant = "hero" | "default" | "compact";

export type ResolvedWanderlistShot = {
  src: string | null;
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: ShotVariant;
  width: number;
  height: number;
};

type ShotSpec = {
  files: string[];
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: ShotVariant;
  width: number;
  height: number;
};

/** Try filenames in order; first match on disk wins. Drop files into public/wanderlist/ */
const SPECS = {
  contextHero: {
    files: [
      "context-hero.webp",
      "context-hero.png",
      "01-search-hero.png",
      "01-search-hero.webp",
    ],
    alt: "Wanderlist main screen with city search and hero",
    caption: "Main search experience—entry into discovering a city.",
    placeholderLabel:
      "Hero: main app experience — add context-hero.png or .webp to public/wanderlist/",
    variant: "hero" as const,
    width: 1600,
    height: 1000,
  },
  builtResults: {
    files: [
      "built-results.webp",
      "built-results.png",
      "02-place-results.png",
      "02-place-results.webp",
    ],
    alt: "Search results showing place cards for a city",
    caption: "Search results combining top spots and hidden gems.",
    placeholderLabel:
      "Screenshot: results grid — add built-results.png or reuse 02-place-results.png",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  builtTrips: {
    files: [
      "trips-open.png",
      "trips-open.webp",
      "built-trips.webp",
      "built-trips.png",
      "03-trips-or-save.png",
      "03-trips-or-save.webp",
    ],
    alt: "My Trips page with Rome 2026 expanded, showing the Leaflet map and day-by-day place list",
    caption: "My Trips — expanded view with live map, day layout, and budget estimate.",
    placeholderLabel:
      "Screenshot: My Trips expanded — add built-trips.png to public/wanderlist/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  builtTripsClosed: {
    files: [
      "trips-closed.png",
      "trips-closed.webp",
      "built-trips-closed.webp",
      "built-trips-closed.png",
    ],
    alt: "My Trips page showing all trips collapsed — Rome 2026, Spain 2027, and completed Greece 2025",
    caption: "Collapsed trip list — upcoming and completed trips with budget estimates at a glance.",
    placeholderLabel:
      "Screenshot: My Trips collapsed — add built-trips-closed.png to public/wanderlist/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  builtStates: {
    files: [
      "built-states.webp",
      "built-states.png",
      "04-ui-states.png",
      "04-ui-states.webp",
    ],
    alt: "Loading, empty, or error UI state in Wanderlist",
    caption: "UI states for loading, empty, and error scenarios.",
    placeholderLabel:
      "Screenshot: loading / empty / error — add built-states.png or 04-ui-states.png",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  dataFlow: {
    files: [
      "data-flow.webp",
      "data-flow.png",
      "05-data-flow.png",
    ],
    alt: "Diagram or UI illustrating data flow in Wanderlist",
    caption:
      "Flow from search in the client through the places API to Supabase and back.",
    placeholderLabel:
      "Optional: diagram or annotated UI — add data-flow.png to public/wanderlist/",
    variant: "compact" as const,
    width: 1200,
    height: 720,
  },
  discover: {
    files: [
      "discover.webp",
      "discover.png",
    ],
    alt: "Discover Itineraries page showing curated trip templates",
    caption: "Discover — curated itineraries filterable by type and interest. One click copies any trip to your account.",
    placeholderLabel:
      "Screenshot: Discover Itineraries — add discover.png to public/wanderlist/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  quizVibe: {
    files: [
      "quiz-vibe.webp",
      "quiz-vibe.png",
    ],
    alt: "Trip Quiz first question — What's your travel vibe?",
    caption: "Trip Quiz — 5 questions that match you to a personalized itinerary.",
    placeholderLabel:
      "Screenshot: Trip Quiz Q1 — add quiz-vibe.png to public/wanderlist/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  quizResult: {
    files: [
      "quiz-result.webp",
      "quiz-result.png",
    ],
    alt: "Trip Quiz results showing ranked itinerary recommendations",
    caption: "Quiz results — ranked matches with destination photography, duration, budget, and interest tags.",
    placeholderLabel:
      "Screenshot: Trip Quiz result — add quiz-result.png to public/wanderlist/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
} satisfies Record<string, ShotSpec>;

function resolveShot(spec: ShotSpec): ResolvedWanderlistShot {
  for (const file of spec.files) {
    if (existsSync(join(DIR, file))) {
      return {
        src: `/wanderlist/${file}`,
        alt: spec.alt,
        caption: spec.caption,
        placeholderLabel: spec.placeholderLabel,
        variant: spec.variant,
        width: spec.width,
        height: spec.height,
      };
    }
  }
  return {
    src: null,
    alt: spec.alt,
    caption: spec.caption,
    placeholderLabel: spec.placeholderLabel,
    variant: spec.variant,
    width: spec.width,
    height: spec.height,
  };
}

export function getWanderlistShots(): Record<
  keyof typeof SPECS,
  ResolvedWanderlistShot
> {
  return {
    contextHero: resolveShot(SPECS.contextHero),
    builtResults: resolveShot(SPECS.builtResults),
    builtTrips: resolveShot(SPECS.builtTrips),
    builtTripsClosed: resolveShot(SPECS.builtTripsClosed),
    builtStates: resolveShot(SPECS.builtStates),
    dataFlow: resolveShot(SPECS.dataFlow),
    discover: resolveShot(SPECS.discover),
    quizVibe: resolveShot(SPECS.quizVibe),
    quizResult: resolveShot(SPECS.quizResult),
  };
}
