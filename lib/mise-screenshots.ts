import { existsSync } from "fs";
import { join } from "path";
import type { ResolvedCaseStudyMedia } from "@/components/case-study-media";

const DIR = join(process.cwd(), "public", "mise");

type ShotSpec = {
  files: string[];
  alt: string;
  caption: string;
  placeholderLabel: string;
  variant: ResolvedCaseStudyMedia["variant"];
  width: number;
  height: number;
};

/** First matching file in public/mise/ wins. */
const SPECS = {
  hero: {
    files: ["hero.webp", "hero.png"],
    alt: "Mise homepage hero — 'A calmer way to cook the internet.'",
    caption: "The stripped-down hero — one headline, one photo, no form competing for attention.",
    placeholderLabel: "Homepage hero — add hero.webp to public/mise/",
    variant: "hero" as const,
    width: 1440,
    height: 900,
  },
  meetSous: {
    files: ["meet-sous.webp", "meet-sous.png"],
    alt: "Meet Sous section — three capability cards (swap anything, resize on the fly, real macros) and a sample Sous response",
    caption: "Meet Sous — three concrete capabilities instead of one vague AI pitch.",
    placeholderLabel: "Meet Sous section — add meet-sous.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  importDark: {
    files: ["import-dark.webp", "import-dark.png"],
    alt: "Import a recipe URL — dark navy section with an amber eyebrow and cream input field",
    caption: "The one dark panel on the page — a deliberate break in an otherwise light, editorial layout.",
    placeholderLabel: "Import section — add import-dark.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  demoRecipe: {
    files: ["demo-recipe.webp", "demo-recipe.png"],
    alt: "Recipe detail page with a 'Cook with Sous' button, no account required",
    caption: "Every demo recipe is fully playable with Sous — no sign-up, no paywall.",
    placeholderLabel: "Demo recipe page — add demo-recipe.webp to public/mise/",
    variant: "compact" as const,
    width: 1440,
    height: 900,
  },
  sousChat: {
    files: ["sous-chat.webp", "sous-chat.png"],
    alt: "Sous chat panel mid-conversation — a real Claude response to 'What if I swapped in chickpeas instead of white beans?' alongside live macro estimates and a servings stepper",
    caption: "A real exchange, not a mockup — Sous reasons about the actual ingredient list, not the ingredient name in isolation.",
    placeholderLabel: "Sous chat — add sous-chat.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
} satisfies Record<string, ShotSpec>;

function resolveShot(spec: ShotSpec): ResolvedCaseStudyMedia {
  for (const file of spec.files) {
    if (existsSync(join(DIR, file))) {
      return {
        src: `/mise/${file}`,
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

export function getMiseShots(): Record<keyof typeof SPECS, ResolvedCaseStudyMedia> {
  return {
    hero: resolveShot(SPECS.hero),
    meetSous: resolveShot(SPECS.meetSous),
    importDark: resolveShot(SPECS.importDark),
    demoRecipe: resolveShot(SPECS.demoRecipe),
    sousChat: resolveShot(SPECS.sousChat),
  };
}
