import { existsSync } from "fs";
import { join } from "path";

const DIR = join(process.cwd(), "public", "about");
const CANDIDATES = ["headshot.webp", "headshot.jpg", "headshot.jpeg", "headshot.png"];

/** Add one of these files under public/about/ to show your photo. */
export function getAboutHeadshotSrc(): string | null {
  for (const file of CANDIDATES) {
    if (existsSync(join(DIR, file))) {
      return `/about/${file}`;
    }
  }
  return null;
}
