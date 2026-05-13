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
    width: 3456,
    height: 1984,
  },
  urgencyFeed: {
    files: ["feed.webp", "feed.png"],
    alt: "Signal Legal workspace showing urgency-grouped feed with Meridian Health critical signal",
    caption: "Legal workspace — Critical at the top, High and Medium below. The stack sorts itself.",
    placeholderLabel: "Urgency feed — add feed.png to public/signal-work-management/",
    variant: "default" as const,
    width: 3456,
    height: 1984,
  },
  detailPanel: {
    files: ["sidebar-focused.webp", "sidebar-focused.png"],
    alt: "Signal detail panel showing signal context, sources, and related inputs",
    caption: "Detail panel — why it matters, source chips, related message snippets, and triage actions.",
    placeholderLabel: "Detail panel — add sidebar-focused.png to public/signal-work-management/",
    variant: "default" as const,
    width: 3456,
    height: 1984,
  },
  triageAssist: {
    files: ["triage-assist.webp", "triage-assist.png"],
    alt: "Signal Triage Assist result showing urgency, owner, and recommended action powered by Claude",
    caption: "Triage Assist — Claude returns urgency, owner, and a 2-sentence action plan. Owner pre-fills the assign dropdown.",
    placeholderLabel: "Triage Assist — add triage-assist.png to public/signal-work-management/",
    variant: "default" as const,
    width: 3456,
    height: 1984,
  },
  triageStates: {
    files: ["signal-open.webp", "signal-open.png"],
    alt: "Signal showing a triaged and assigned signal in the Legal workspace",
    caption: "Assigned state — signal moved from Needs Triage to Assigned, owner on record.",
    placeholderLabel: "Triage states — add signal-open.png to public/signal-work-management/",
    variant: "default" as const,
    width: 3456,
    height: 1984,
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
    detailPanel: resolveShot(SPECS.detailPanel),
    triageAssist: resolveShot(SPECS.triageAssist),
    triageStates: resolveShot(SPECS.triageStates),
  };
}
