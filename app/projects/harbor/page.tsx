import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Harbor",
};

export default function HarborPage() {
  return (
    <PlaceholderCaseStudy
      title="Harbor"
      intro="Shared space, roles, and onboarding that respects the user’s time."
    />
  );
}
