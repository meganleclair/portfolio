import type { ResolvedWanderlistShot } from "@/lib/wanderlist-screenshots";
import { CaseStudyMedia } from "@/components/case-study-media";

export function CaseStudyShot({ shot }: { shot: ResolvedWanderlistShot }) {
  return <CaseStudyMedia shot={shot} />;
}
