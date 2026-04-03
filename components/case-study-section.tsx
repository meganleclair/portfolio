export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="read-width">
      <h2 className="text-xl font-medium text-[var(--text)] md:text-2xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-base leading-[1.75] text-[var(--text-muted)] md:text-[17px] md:leading-[1.8]">
        {children}
      </div>
    </section>
  );
}
