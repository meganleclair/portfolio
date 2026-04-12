import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Ledger",
};

export default function LedgerPage() {
  return (
    <PlaceholderCaseStudy
      title="Ledger"
      intro="Money-adjacent flows where every state has to be legible under pressure."
    />
  );
}
