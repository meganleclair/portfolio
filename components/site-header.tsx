import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="nav-glass sticky top-0 z-50">
      <nav
        className="page-wrap flex items-center justify-between gap-8 py-5 md:py-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-[15px] text-[var(--text)] transition-opacity hover:opacity-70"
        >
          Your Name
        </Link>
        <ul className="flex items-center gap-10 text-[15px] text-[var(--text-muted)]">
          <li>
            <Link href="/" className="transition-colors hover:text-[var(--text)]">
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-[var(--text)]"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
