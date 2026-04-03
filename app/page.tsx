import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="page-wrap pt-16 pb-24 md:pt-28 md:pb-32">
        <h1 className="max-w-[18ch] text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--text)]">
          Product design, end to end.
        </h1>
        <p className="read-width mt-10 text-lg leading-relaxed text-[var(--text-muted)] md:text-xl md:leading-relaxed">
          Placeholder: a short line about how you work—clarity, craft, and
          shipping real things.
        </p>
      </section>

      <section className="page-wrap pb-28 md:pb-36" aria-label="Selected work">
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              href={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section className="page-wrap pb-20 md:pb-28">
        <p className="read-width text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          A bit more about background and how I collaborate is on the about
          page.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block text-base text-[var(--text)] underline decoration-[var(--text-muted)] underline-offset-[6px] transition-colors hover:decoration-[var(--text)]"
        >
          About
        </Link>
      </section>
    </>
  );
}
