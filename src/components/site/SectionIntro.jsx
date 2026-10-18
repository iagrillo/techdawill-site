export default function SectionIntro({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  className = '',
}) {
  const dark = tone === 'dark';

  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-accent" />
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
            dark ? 'text-ink-muted' : 'text-muted-foreground'
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-6 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? 'text-ink-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-ink-muted' : 'text-muted-foreground'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}