export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="page-wrap py-16 md:py-20">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
