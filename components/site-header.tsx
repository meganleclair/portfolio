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
          className="text-base font-medium tracking-tight text-foreground transition-opacity hover:opacity-[0.88] md:text-[17px]"
        >
          Megan LeClair
        </Link>
        <ul className="flex items-center gap-9 text-[15px] font-medium text-foreground/55 md:gap-10 md:text-base">
          <li>
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-foreground"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
