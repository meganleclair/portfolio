import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Meridian",
};

export default function MeridianPage() {
  return (
    <PlaceholderCaseStudy
      title="Meridian"
      intro="Placeholder project—navigation, context, and calm defaults for something people open often."
    />
  );
}
