import Link from "next/link";

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
};

export function ProjectCard({ href, title, description }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="glass-card group block px-8 py-10 transition-[background-color,border-color] duration-300 ease-out md:px-10 md:py-12 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)]"
    >
      <h2 className="read-width text-2xl font-medium leading-snug tracking-tight text-[var(--text)] md:text-3xl">
        {title}
      </h2>
      <p className="read-width mt-5 text-base leading-[1.65] text-[var(--text-muted)] md:text-[17px]">
        {description}
      </p>
      <span className="mt-8 inline-block text-sm text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
        Read the case study
      </span>
    </Link>
  );
}
