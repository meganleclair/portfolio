"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "cowbell-case-study-unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function isCowbellCaseStudyUnlocked(): Promise<boolean> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === "1";
}

export async function unlockCowbellCaseStudy(
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.COWBELL_CASE_STUDY_PASSWORD;

  if (!expected) {
    return { error: "Password isn't configured yet. Contact Megan directly." };
  }

  if (password !== expected) {
    return { error: "That password isn't right — try again." };
  }

  const store = await cookies();
  store.set(COOKIE_NAME, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return { error: null };
}
