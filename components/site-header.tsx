"use client";

import Link from "next/link";
import { useTheme } from "@/lib/use-theme";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function SiteHeader() {
  const { theme, toggle } = useTheme();

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
        <div className="flex items-center gap-6 md:gap-8">
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
          <button
            type="button"
            onClick={toggle}
            className="rounded-lg p-1.5 text-foreground/40 transition-colors hover:bg-foreground/6 hover:text-foreground/70"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
