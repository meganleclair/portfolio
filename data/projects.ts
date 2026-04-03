export type ProjectListItem = {
  slug: string;
  title: string;
  description: string;
};

/** Order = order on the home page. Edit titles and slugs when real case studies replace placeholders. */
export const projects: ProjectListItem[] = [
  {
    slug: "wanderlist",
    title: "Wanderlist",
    description:
      "A quiet place to save spots you want to visit—without the noise of a full travel product.",
  },
  {
    slug: "meridian",
    title: "Meridian",
    description:
      "Placeholder: product work in progress—navigation, maps, and calm defaults for everyday use.",
  },
  {
    slug: "harbor",
    title: "Harbor",
    description:
      "Placeholder: case study draft—shared spaces, permissions, and a calmer onboarding story.",
  },
  {
    slug: "ledger",
    title: "Ledger",
    description:
      "Placeholder: finance-adjacent tooling—clarity under stress, audit-friendly flows, and restraint.",
  },
];
