export type ProjectListItem = {
  slug: string;
  title: string;
  description: string;
  /** Home featured CTA: opens in new tab when set. */
  liveUrl?: string;
  /** Renders the large glass card on the homepage (same layout as Wanderlist). */
  featuredCard?: boolean;
  /** Right column teaser on the featured card; falls back to description if omitted. */
  cardTeaser?: string;
};

/** Order: featured cards first (in display order), then list-only projects. */
export const projects: ProjectListItem[] = [
  {
    slug: "wanderlist",
    title: "Wanderlist",
    description:
      "Search a city, explore real places, and save them into trips. Built on live data with persistence for signed-in users.",
    liveUrl: "https://wanderwanderlist.netlify.app/",
    featuredCard: true,
    cardTeaser:
      "Stack, tradeoffs, and what broke once the database stopped being hypothetical.",
  },
  {
    slug: "relay",
    title: "Relay Task Tracker",
    description:
      "Workflow and decision tracking—ownership, status, and history for teams moving work forward.",
    featuredCard: true,
    cardTeaser:
      "End-to-end concept and build—filtering, inline edits, and what stood out once the workflow went live.",
  },
  {
    slug: "signal-work-management",
    title: "Signal Work Management",
    description:
      "Triage incoming work by workspace, urgency, and source—a focused feed with clear priorities.",
    featuredCard: true,
    cardTeaser:
      "Workspaces, triage views, and an urgency-grouped feed—what worked once filtering and the panel went live.",
  },
  {
    slug: "meridian",
    title: "Meridian",
    description: "Maps and daily navigation—fewer modes, sharper defaults.",
  },
  {
    slug: "harbor",
    title: "Harbor",
    description: "Shared space and permissions—onboarding without hand-holding.",
  },
  {
    slug: "ledger",
    title: "Ledger",
    description: "Money-adjacent flows—audit trails, zero ornament.",
  },
];

export const homeFeaturedCards = projects.filter((p) => p.featuredCard);

export const additionalProjects = projects.filter((p) => !p.featuredCard);
