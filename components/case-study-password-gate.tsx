"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { unlockCowbellCaseStudy } from "@/lib/case-study-auth";
import { Button } from "@/components/ui/button";

export function CaseStudyPasswordGate({ title }: { title: string }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(unlockCowbellCaseStudy, {
    error: null,
  });

  useEffect(() => {
    if (state.error === null) {
      router.refresh();
    }
  }, [state, router]);

  return (
    <div className="page-wrap flex min-h-[70vh] items-center justify-center py-16">
      <div className="glass-card w-full max-w-md px-8 py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Private case study
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          This project involves real, proprietary product work — the details
          are password-protected out of respect for my employer. If
          you&apos;re a recruiter or hiring manager I&apos;m talking with,
          ask me for access.
        </p>
        <form action={formAction} className="mt-6 space-y-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoFocus
            className="border-input bg-background h-11 w-full rounded-md border px-3 text-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          {state.error && (
            <p className="text-sm text-destructive" role="alert">
              {state.error}
            </p>
          )}
          <Button type="submit" disabled={pending} className="w-full justify-center">
            {pending ? "Checking…" : "Unlock"}
          </Button>
        </form>
      </div>
    </div>
  );
}
