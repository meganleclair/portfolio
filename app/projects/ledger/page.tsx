import type { Metadata } from "next";
import { PlaceholderCaseStudy } from "@/components/placeholder-case-study";

export const metadata: Metadata = {
  title: "Ledger",
};

export default function LedgerPage() {
  return (
    <PlaceholderCaseStudy
      title="Ledger"
      intro="Placeholder project—high-stakes flows where clarity and restraint matter more than novelty."
    />
  );
}
