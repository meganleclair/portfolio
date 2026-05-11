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
    subtitle: "Recipe import & AI-powered cooking",
    description:
      "Import any recipe URL, prep with a checklist, then cook one clear step at a time—with Claude-powered ingredient swaps that stay honest.",
    liveUrl: "https://miseintelligentchef.netlify.app",
    featuredCard: true,
    cardTeaser:
      "Two modes, one session—Editorial for discovery and Cook for the kitchen, with AI-powered swaps, timer state, and persistence across refreshes.",
  },
  {
    slug: "wanderlist",
    title: "Wanderlist",
    subtitle: "Travel planning & discovery",
    description:
      "Search a city, explore real places, and save them into trips. Built on live data with auth, RLS, and persistence for signed-in users.",
    liveUrl: "https://wanderwanderlist.netlify.app/",
    featuredCard: true,
    cardTeaser:
      "Full-stack travel app—stack, security model, and what broke once the database stopped being hypothetical.",
  },
  {
    slug: "relay",
    title: "Threshold",
    subtitle: "Cyber insurance ops",
    liveUrl: "https://threshold-task-tracker.netlify.app",
    description:
      "A purpose-built ops tool for cyber insurance underwriting teams—tracking ransomware assessments, breach evaluations, and sublimit reviews with clear ownership and an auditable decision trail.",
    featuredCard: true,
    cardTeaser:
      "When exposure crosses a risk threshold, it enters the queue. Inline editing, composable filters, activity logs, and a live demo queue that never goes stale.",
  },
  {
    slug: "signal-work-management",
    title: "Signal Work Management",
    subtitle: "Inbound triage & workspace scoping",
    description:
      "An inbound triage surface for work that arrives from Slack, email, and beyond—grouped by urgency, scoped by team workspace.",
    liveUrl: "https://signal-work-management.netlify.app",
    featuredCard: true,
    cardTeaser:
      "Turning a noisy inbound into a legible feed—workspaces, urgency grouping, source filters, and what sharpened once triage felt real.",
  },
  {
    slug: "system-sidekick",
    title: "System Sidekick",
    description:
      "An AI design assistant living inside the Figma panel—answers UX and UI questions in context, without leaving your file.",
    comingSoon: true,
  },
];

export const homeFeaturedCards = projects.filter((p) => p.featuredCard);
export const additionalProjects = projects.filter((p) => !p.featuredCard);
