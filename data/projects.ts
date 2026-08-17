export type ProjectListItem = {
  slug: string;
  title: string;
  /** Small descriptor shown under the title on the homepage card. */
  subtitle?: string;
  description: string;
  /** Home featured CTA: opens in new tab when set. */
  liveUrl?: string;
  /** Renders the large glass card on the homepage. */
  featuredCard?: boolean;
  /** Right column teaser on the featured card; falls back to description if omitted. */
  cardTeaser?: string;
  /** Shown in More Work list as a coming-soon teaser. */
  comingSoon?: boolean;
};

/** Order: featured cards first (in display order), then list-only projects. */
export const projects: ProjectListItem[] = [
  {
    slug: "mise",
    title: "Mise Intelligent Chef",
    subtitle: "A cooking app that got smaller on purpose",
    description:
      "I shipped a full-featured recipe app, used it on myself, and found out the one thing I actually did every time I cooked was open a separate ChatGPT conversation for substitutions and macros. Mise cut everything else and built that as Sous—a Claude-powered cooking companion grounded in the actual recipe.",
    liveUrl: "https://miseintelligentchef.netlify.app",
    featuredCard: true,
    cardTeaser:
      "The harder edit: deleting a working cook mode, a working swap sheet, and a working prep checklist because real usage data said they weren't earning their place. What survived—Sous—is playable by a stranger with no account, and it's the whole product now.",
  },
  {
    slug: "cowbell-broker-portal",
    title: "Broker Portal Redesign",
    subtitle: "Cyber insurance · dashboard, quoting, client profile",
    description:
      "Real, shipped work at Cowbell—redesigning the broker dashboard, quoting flow, and client profile around a simple idea: show what needs a decision now, guide the rest step by step. Password-protected out of respect for my employer; ask me for access.",
    featuredCard: true,
    cardTeaser:
      "A flat client table and a one-page quote form became a triage view and a six-step guided flow—separating what actually needs a broker's attention from what's just available to browse. Gated behind a password since it's genuinely proprietary; the design decisions aren't.",
  },
  {
    slug: "signal-work-management",
    title: "Signal Work Management",
    subtitle: "Inbound triage · AI-assisted · workspace scoping",
    description:
      "Work arrives in fragments. Signal makes the inbound stack legible—urgency-grouped, workspace-scoped, with a Claude-powered Triage Assist that reads each signal in full and returns a structured recommendation.",
    liveUrl: "https://signal-work-management.netlify.app",
    featuredCard: true,
    cardTeaser:
      "Designed for the person everything flows through. The feed sorts itself so critical work is always at the top. Triage Assist is advisory by design—Claude surfaces a recommendation, you decide. Because triage involves judgment AI doesn't have.",
  },
  {
    slug: "wanderlist",
    title: "Wanderlist",
    subtitle: "Travel planning & discovery",
    description:
      "Most travel apps show you what's popular. Wanderlist surfaces what's actually there—live place data, real photography, no manual curation. Search a city, build a trip, share a read-only link.",
    liveUrl: "https://wanderwanderlist.netlify.app/",
    featuredCard: true,
    cardTeaser:
      "Full-stack travel planner on live data with auth, RLS, and real persistence. The Trip Quiz turns five questions about vibe and pace into a ranked itinerary shortlist—built for the gap between inspiration and a real plan.",
  },
  {
    slug: "relay",
    title: "Threshold",
    subtitle: "Cyber insurance ops",
    liveUrl: "https://threshold-task-tracker.netlify.app",
    description:
      "Coverage decisions have to be traceable. Threshold is the operational layer for cyber insurance underwriting teams—tracking assessments, breach evaluations, and sublimit reviews with clear ownership and a full audit trail.",
  },
];

export const homeFeaturedCards = projects.filter((p) => p.featuredCard);
export const additionalProjects = projects.filter((p) => !p.featuredCard);
