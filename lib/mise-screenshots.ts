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
  editorialHome: {
    files: ["editorial-home.webp", "editorial-home.png", "01-editorial-home.webp"],
    alt: "Mise editorial home — import form and featured recipe hero",
    caption: "Editorial mode — import a URL or browse what's already in your kitchen.",
    placeholderLabel: "Editorial home — add editorial-home.webp to public/mise/",
    variant: "hero" as const,
    width: 1600,
    height: 960,
  },
  cookMode: {
    files: ["cook-mode.webp", "cook-mode.png", "02-cook-mode.webp"],
    alt: "Mise cook mode — step-by-step instruction with ingredients alongside",
    caption: "Cook mode — one step at a time, ingredients narrowed to just what's needed now.",
    placeholderLabel: "Cook mode step view — add cook-mode.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  ingredientSwap: {
    files: ["ingredient-swap.webp", "ingredient-swap.png", "03-ingredient-swap.webp"],
    alt: "Mise ingredient swap sheet open for a specific ingredient",
    caption: "Swap sheet — honest substitutions surfaced inline without leaving the step.",
    placeholderLabel: "Ingredient swap sheet — add ingredient-swap.webp to public/mise/",
    variant: "compact" as const,
    width: 1200,
    height: 800,
  },
  prepEditor: {
    files: ["prep-editor.webp", "prep-editor.png", "04-prep-editor.webp"],
    alt: "Mise prep page — checklist of tasks before cooking starts",
    caption: "Prep view — everything that needs doing before the heat goes on.",
    placeholderLabel: "Prep checklist — add prep-editor.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  kitchen: {
    files: ["kitchen.webp", "kitchen.png", "05-kitchen.webp"],
    alt: "Mise My Kitchen page with recently imported and favorited recipes",
    caption: "My Kitchen — a quiet shelf for what you're cooking, not a crowded dashboard.",
    placeholderLabel: "Kitchen page — add kitchen.webp to public/mise/",
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
    editorialHome: resolveShot(SPECS.editorialHome),
    cookMode: resolveShot(SPECS.cookMode),
    ingredientSwap: resolveShot(SPECS.ingredientSwap),
    prepEditor: resolveShot(SPECS.prepEditor),
    kitchen: resolveShot(SPECS.kitchen),
  };
}
