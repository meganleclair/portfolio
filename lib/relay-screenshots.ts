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
  tableView: {
    files: ["table-view.webp", "table-view.png", "01-table-view.webp"],
    alt: "Relay Task Tracker main table view with work items",
    caption: "Primary surface—dense table for scanning and comparing items.",
    placeholderLabel:
      "Main table view — add table-view.webp or .png to public/relay/",
    variant: "hero" as const,
    width: 1600,
    height: 960,
  },
  drawer: {
    files: ["drawer.webp", "drawer.png", "02-detail-panel.webp"],
    alt: "Relay Task Tracker detail panel beside the table",
    caption: "Detail panel—context, notes, and history without leaving the list.",
    placeholderLabel:
      "Detail panel open — add drawer.png or 02-detail-panel.webp to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  inlineEdit: {
    files: ["inline-edit.webp", "inline-edit.png", "03-inline-edit.webp"],
    alt: "Inline editing in the Relay Task Tracker table",
    caption: "Inline editing—status, owner, priority, and dates in place.",
    placeholderLabel:
      "Inline editing — add inline-edit.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  filtering: {
    files: ["filtering.webp", "filtering.png", "04-filtering.webp"],
    alt: "Filtering controls in Relay Task Tracker",
    caption: "Filters—activity, status, and ownership working together.",
    placeholderLabel:
      "Filtering interaction — add filtering.png to public/relay/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  intake: {
    files: ["intake.webp", "intake.png", "05-intake.webp"],
    alt: "Creating new work in Relay Task Tracker",
    caption: "Lightweight intake—new items land with clear defaults.",
    placeholderLabel:
      "Intake / create flow — add intake.png to public/relay/",
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
    tableView: resolveShot(SPECS.tableView),
    drawer: resolveShot(SPECS.drawer),
    inlineEdit: resolveShot(SPECS.inlineEdit),
    filtering: resolveShot(SPECS.filtering),
    intake: resolveShot(SPECS.intake),
  };
}
