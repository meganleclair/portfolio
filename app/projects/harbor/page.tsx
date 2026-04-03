import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Harbor",
};

export default function HarborPage() {
  return (
    <PlaceholderCaseStudy
      title="Harbor"
      intro="Placeholder project—shared spaces, permissions, and a softer path for new people."
    />
  );
}
