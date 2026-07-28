import { existsSync } from "fs";
import { join } from "path";
import type { ResolvedCaseStudyMedia } from "@/components/case-study-media";

const DIR = join(process.cwd(), "public", "cowbell-broker-portal");

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
  dashboardBefore: {
    files: ["dashboard-before.webp", "dashboard-before.png"],
    alt: "Before — a flat client table with a plain stat summary and a grid of equal-weight action buttons",
    caption: "Before — every client listed flat, nothing telling you what actually needs a decision today.",
    placeholderLabel: "Dashboard before — add dashboard-before.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  dashboardAfter: {
    files: ["dashboard-after.webp", "dashboard-after.png"],
    alt: "After — a personalized dashboard with trend-sparkline stat cards and a 'Needs Attention' triage row above the client table",
    caption: "After — a Needs Attention row surfaces the handful of accounts that actually need a decision, ahead of the full list.",
    placeholderLabel: "Dashboard after — add dashboard-after.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  clientProfileBefore: {
    files: ["client-profile-before.webp", "client-profile-before.png"],
    alt: "Before — a client profile page with policies, binders, quotes, and documents in equal-weight stacked cards",
    caption: "Before — policy, business, and location data, but no read on whether this account is actually in good shape.",
    placeholderLabel: "Client profile before — add client-profile-before.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  clientProfileAfter: {
    files: ["client-profile-after.webp", "client-profile-after.png"],
    alt: "After — a client profile page with a risk-score summary and a coverage adequacy assessment alongside the policy detail",
    caption: "After — a risk-score summary and a plain-language coverage adequacy read, right where the broker is already looking.",
    placeholderLabel: "Client profile after — add client-profile-after.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  quoteFlowBefore: {
    files: ["quote-flow-before.webp", "quote-flow-before.png"],
    alt: "Before — a single quote-creation form asking for organization details all at once",
    caption: "Before — one dense form, no sense of how much is left or what happens next.",
    placeholderLabel: "Quote flow before — add quote-flow-before.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  quoteFlowAfter: {
    files: ["quote-flow-after.webp", "quote-flow-after.png"],
    alt: "After — a six-step guided quoting wizard with a persistent progress sidebar",
    caption: "After — a six-step wizard with a persistent progress rail, so a broker always knows where they are and what's left.",
    placeholderLabel: "Quote flow after — add quote-flow-after.webp",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  clientSearchBefore: {
    files: ["client-search-before.webp", "client-search-before.png"],
    alt: "Before — a flat list of matching client records with address and phone number",
    caption: "Before — a plain match list, same visual weight for every result.",
    placeholderLabel: "Client search before — add client-search-before.webp",
    variant: "compact" as const,
    width: 1200,
    height: 800,
  },
  clientSearchAfter: {
    files: ["client-search-after.webp", "client-search-after.png"],
    alt: "After — a qualification-aware product recommendation step showing which Cowbell products a client is eligible for",
    caption: "After — search resolves straight into which products this client actually qualifies for, not just a name match.",
    placeholderLabel: "Client search after — add client-search-after.webp",
    variant: "compact" as const,
    width: 1200,
    height: 800,
  },
} satisfies Record<string, ShotSpec>;

function resolveShot(spec: ShotSpec): ResolvedCaseStudyMedia {
  for (const file of spec.files) {
    if (existsSync(join(DIR, file))) {
      return {
        src: `/cowbell-broker-portal/${file}`,
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

export function getCowbellShots(): Record<keyof typeof SPECS, ResolvedCaseStudyMedia> {
  return {
    dashboardBefore: resolveShot(SPECS.dashboardBefore),
    dashboardAfter: resolveShot(SPECS.dashboardAfter),
    clientProfileBefore: resolveShot(SPECS.clientProfileBefore),
    clientProfileAfter: resolveShot(SPECS.clientProfileAfter),
    quoteFlowBefore: resolveShot(SPECS.quoteFlowBefore),
    quoteFlowAfter: resolveShot(SPECS.quoteFlowAfter),
    clientSearchBefore: resolveShot(SPECS.clientSearchBefore),
    clientSearchAfter: resolveShot(SPECS.clientSearchAfter),
  };
}
