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
    alt: "Mise home page — continue where you left off banner for an active recipe",
    caption: "Persistent session — pick up exactly where you stopped, down to the step.",
    placeholderLabel: "Cook mode step view — add cook-mode.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  ingredientSwap: {
    files: ["ingredient-swap.webp", "ingredient-swap.png", "03-ingredient-swap.webp"],
    alt: "Mise recipe detail with lower-calorie swaps applied — SWAP tags on changed ingredients",
    caption: "Shift the recipe — pick one or more dietary goals and Claude applies the most practical swaps, grounded in the actual dish.",
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
  recipeDetail: {
    files: ["recipe-detail.webp", "recipe-detail.png", "06-recipe-detail.webp"],
    alt: "Mise recipe detail page showing ingredients, prep tasks, and cook button",
    caption: "Recipe detail — ingredients, prep checklist, and a single action to start cooking.",
    placeholderLabel: "Recipe detail — add recipe-detail.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  cookModeSwap: {
    files: ["cook-mode-swap.webp", "cook-mode-swap.png", "07-cook-mode-swap.webp"],
    alt: "Mise shift-the-recipe panel — dietary goal selector with six options",
    caption: "Lower calorie applied — SWAP tags appear inline on each changed ingredient, with a note explaining the tradeoff.",
    placeholderLabel: "Cook mode with swap open — add cook-mode-swap.webp to public/mise/",
    variant: "default" as const,
    width: 1440,
    height: 900,
  },
  swapModal: {
    files: ["swap-modal.webp", "swap-modal.png"],
    alt: "Mise manual swap sheet — two substitution options shown for a single ingredient",
    caption: "Manual swap — tap any ingredient to see Claude's substitution options with honest tradeoff notes.",
    placeholderLabel: "Swap modal — add swap-modal.png to public/mise/",
    variant: "compact" as const,
    width: 1200,
    height: 800,
  },
  importFlow: {
    files: ["import-flow.webp", "import-flow.png", "08-import-flow.webp"],
    alt: "Mise recently imported recipe grid — six recipes with photos and star ratings",
    caption: "Recently imported — your shelf of saved recipes, each ready to open or cook.",
    placeholderLabel: "Import URL flow — add import-flow.webp to public/mise/",
    variant: "compact" as const,
    width: 1200,
    height: 800,
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
    recipeDetail: resolveShot(SPECS.recipeDetail),
    cookModeSwap: resolveShot(SPECS.cookModeSwap),
    swapModal: resolveShot(SPECS.swapModal),
    importFlow: resolveShot(SPECS.importFlow),
  };
}
