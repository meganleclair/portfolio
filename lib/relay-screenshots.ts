import { existsSync } from "fs";
import { join } from "path";
import type { ResolvedCaseStudyMedia } from "@/components/case-study-media";

const DIR = join(process.cwd(), "public", "relay");

type ShotSpec = {
  files: string[];
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: ResolvedCaseStudyMedia["variant"];
  width: number;
  height: number;
};

/** First matching file in public/relay/ wins. */
const SPECS = {
  dashboard: {
    files: ["dashboard.webp", "dashboard.png"],
    alt: "Threshold dashboard — stat cards, activity chart, and queue",
    caption:
      "Dashboard — live metrics, activity chart, and the full underwriting queue.",
    placeholderLabel: "Dashboard overview — add dashboard.png to public/relay/",
    variant: "hero" as const,
    width: 1600,
    height: 960,
  },
  tableView: {
    files: ["table-view.webp", "table-view.png", "01-table-view.webp"],
    alt: "Threshold full queue table with all work items",
    caption:
      "Queue table — 12 items across owners, priorities, and due dates at a glance.",
    placeholderLabel:
      "Main table view — add table-view.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  filtering: {
    files: ["filtering.webp", "filtering.png", "04-filtering.webp"],
    alt: "Threshold filtered to In Review items via stat card click",
    caption:
      "Metrics as filters — clicking a stat card scopes the table to that slice instantly.",
    placeholderLabel:
      "Filtering interaction — add filtering.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  inlineEdit: {
    files: ["inline-edit.webp", "inline-edit.png", "03-inline-edit.webp"],
    alt: "Inline status editing in the Threshold queue table",
    caption:
      "Inline editing — status, owner, priority, and due date update in the row.",
    placeholderLabel:
      "Inline editing — add inline-edit.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  drawer: {
    files: ["drawer.webp", "drawer.png", "02-detail-panel.webp"],
    alt: "Threshold detail panel open alongside the queue",
    caption:
      "Detail panel — full context, activity log, and notes without leaving the queue.",
    placeholderLabel:
      "Detail panel open — add drawer.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  intake: {
    files: ["intake.webp", "intake.png", "05-intake.webp"],
    alt: "New item intake form in Threshold",
    caption: "Intake form — name, client, owner, priority, and due date.",
    placeholderLabel:
      "Intake / create flow — add intake.png to public/relay/",
    variant: "compact" as const,
    width: 1200,
    height: 720,
  },
  intakeTypes: {
    files: ["intake-types.webp", "intake-types.png"],
    alt: "Threshold intake form showing cyber insurance work type options",
    caption:
      "Domain-specific types — Ransomware Assessment, Data Breach Evaluation, Sublimit Review, and more.",
    placeholderLabel:
      "Intake type dropdown — add intake-types.png to public/relay/",
    variant: "compact" as const,
    width: 1200,
    height: 720,
  },
} satisfies Record<string, ShotSpec>;

function resolveShot(spec: ShotSpec): ResolvedCaseStudyMedia {
  for (const file of spec.files) {
    if (existsSync(join(DIR, file))) {
      return {
        src: `/relay/${file}`,
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

export function getRelayShots(): Record<keyof typeof SPECS, ResolvedCaseStudyMedia> {
  return {
    dashboard: resolveShot(SPECS.dashboard),
    tableView: resolveShot(SPECS.tableView),
    filtering: resolveShot(SPECS.filtering),
    inlineEdit: resolveShot(SPECS.inlineEdit),
    drawer: resolveShot(SPECS.drawer),
    intake: resolveShot(SPECS.intake),
    intakeTypes: resolveShot(SPECS.intakeTypes),
  };
}
