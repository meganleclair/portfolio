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
    slug: "mise",
    title: "Mise Intelligent Chef",
    subtitle: "Recipe import & AI-powered cooking",
    description:
      "Recipe websites are built for traffic, not cooking. Mise strips the friction—import any URL, get AI-powered ingredient swaps tuned to real dietary needs, then cook one clear step at a time.",
    liveUrl: "https://miseintelligentchef.netlify.app",
    featuredCard: true,
    cardTeaser:
      "The core insight: browsing a recipe and actively cooking it are completely different mental states—so they got completely different surfaces. Claude runs in two distinct integrations, each scoped, prompt-engineered, and quality-controlled differently.",
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
    featuredCard: true,
    cardTeaser:
      "Designed around the decision record, not just the task list. When exposure crosses a threshold, it enters the queue—with inline editing, composable filters, and activity logs that show what changed, when, and by whom.",
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
