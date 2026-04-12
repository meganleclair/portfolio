import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Meridian",
};

export default function MeridianPage() {
  return (
    <PlaceholderCaseStudy
      title="Meridian"
      intro="Navigation and context for something people open daily—maps, defaults, and cutting noise."
    />
  );
}
