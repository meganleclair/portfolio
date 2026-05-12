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

const SPECS = {
  workspaceHero: {
    files: ["workspace.webp", "workspace.png"],
    alt: "Signal Work Management full workspace",
    caption: "Full workspace — sidebar nav, urgency-grouped feed, and detail panel.",
    placeholderLabel: "Full workspace — add workspace.png to public/signal-work-management/",
    variant: "hero" as const,
    width: 1600,
    height: 960,
  },
  urgencyFeed: {
    files: ["feed.webp", "feed.png"],
    alt: "Signal feed grouped by urgency",
    caption: "Feed — Critical, High, Medium, Low groups so the stack sorts itself.",
    placeholderLabel: "Urgency feed — add feed.png to public/signal-work-management/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  sidebarSources: {
    files: ["sidebar.webp", "sidebar.png"],
    alt: "Signal sidebar with views and source filters",
    caption: "Sidebar — triage views and source filters.",
    placeholderLabel: "Sidebar — add sidebar.png to public/signal-work-management/",
    variant: "compact" as const,
    width: 800,
    height: 1000,
  },
  toolbar: {
    files: ["toolbar.webp", "toolbar.png"],
    alt: "Signal workspace switcher bar",
    caption: "Workspace bar — one click to scope the feed to a different team.",
    placeholderLabel: "Toolbar — add toolbar.png to public/signal-work-management/",
    variant: "compact" as const,
    width: 1200,
    height: 200,
  },
  detailPanel: {
    files: ["detail.webp", "detail.png"],
    alt: "Signal detail panel showing signal context and actions",
    caption: "Detail panel — why it matters, sources, related inputs, and triage actions.",
    placeholderLabel: "Detail panel — add detail.png to public/signal-work-management/",
    variant: "compact" as const,
    width: 800,
    height: 1000,
  },
  triageAssist: {
    files: ["triage-assist.webp", "triage-assist.png"],
    alt: "Signal Triage Assist result card powered by Claude",
    caption: "Triage Assist — Claude returns urgency, owner, and a recommended first action.",
    placeholderLabel: "Triage Assist — add triage-assist.png to public/signal-work-management/",
    variant: "default" as const,
    width: 1440,
    height: 900,
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
    toolbar: resolveShot(SPECS.toolbar),
    detailPanel: resolveShot(SPECS.detailPanel),
    triageAssist: resolveShot(SPECS.triageAssist),
  };
}
