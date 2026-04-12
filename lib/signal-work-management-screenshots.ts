import { existsSync } from "fs";
import { join } from "path";
import type { ResolvedCaseStudyMedia } from "@/components/case-study-media";

const DIR = join(process.cwd(), "public", "signal-work-management");

type ShotSpec = {
  files: string[];
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: ResolvedCaseStudyMedia["variant"];
  width: number;
  height: number;
};

/** Drop files into public/signal-work-management/ — first filename match wins. */
const SPECS = {
  workspaceHero: {
    files: [
      "workspace.webp",
      "workspace.png",
      "01-workspace.webp",
      "01-signal-workspace.png",
    ],
    alt: "Signal Work Management full workspace",
    caption:
      "Primary workspace—workspace switcher, triage lens, feed, and detail.",
    placeholderLabel:
      "Full workspace — add workspace.webp or .png to public/signal-work-management/",
    variant: "hero" as const,
    width: 1600,
    height: 960,
  },
  urgencyFeed: {
    files: ["feed.webp", "feed.png", "02-feed.webp"],
    alt: "Signal feed grouped by urgency",
    caption: "Feed—signals grouped by urgency so attention follows risk.",
    placeholderLabel:
      "Urgency-grouped feed — add feed.png to public/signal-work-management/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  sidebarSources: {
    files: ["sidebar.webp", "sidebar.png", "03-sidebar.webp"],
    alt: "Signal sidebar with source filters",
    caption: "Sidebar—turn sources on or off to narrow what surfaces.",
    placeholderLabel:
      "Sidebar & sources — add sidebar.png to public/signal-work-management/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  detailPanel: {
    files: ["detail.webp", "detail.png", "04-detail-panel.webp"],
    alt: "Signal detail panel for a selected item",
    caption: "Detail panel—context, related inputs, and triage actions.",
    placeholderLabel:
      "Detail panel — add detail.png to public/signal-work-management/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  toolbar: {
    files: ["toolbar.webp", "toolbar.png", "05-toolbar.webp"],
    alt: "Signal toolbar with search",
    caption: "Toolbar—search and quick actions across the current lens.",
    placeholderLabel:
      "Toolbar / search — add toolbar.png to public/signal-work-management/",
    variant: "compact" as const,
    width: 1200,
    height: 720,
  },
} satisfies Record<string, ShotSpec>;

function resolveShot(spec: ShotSpec): ResolvedCaseStudyMedia {
  for (const file of spec.files) {
    if (existsSync(join(DIR, file))) {
      return {
        src: `/signal-work-management/${file}`,
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

export function getSignalWorkManagementShots(): Record<
  keyof typeof SPECS,
  ResolvedCaseStudyMedia
> {
  return {
    workspaceHero: resolveShot(SPECS.workspaceHero),
    urgencyFeed: resolveShot(SPECS.urgencyFeed),
    sidebarSources: resolveShot(SPECS.sidebarSources),
    detailPanel: resolveShot(SPECS.detailPanel),
    toolbar: resolveShot(SPECS.toolbar),
  };
}
