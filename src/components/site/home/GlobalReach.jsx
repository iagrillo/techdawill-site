import SectionIntro from '@/components/site/SectionIntro';
import { deliveryRegions } from '@/data/services';

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 opacity-30 lg:block"
      >
        <g stroke="hsl(var(--accent))" fill="none" strokeWidth="0.6">
          <circle cx="300" cy="300" r="180" />
          <ellipse cx="300" cy="300" rx="80" ry="180" />
          <ellipse cx="300" cy="300" rx="180" ry="80" />
          <path d="M120 300h360M300 120v360" />
        </g>
        <g fill="hsl(var(--accent))">
          <circle cx="300" cy="120" r="3.5" />
          <circle cx="470" cy="300" r="3.5" />
          <circle cx="210" cy="440" r="3.5" />
          <circle cx="150" cy="230" r="3.5" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <SectionIntro
            tone="dark"
            eyebrow="Global connectivity"
            title="A Nigerian firm with an international delivery bench."
            lead="Our head office, field engineers and training academy sit in Nigeria. Our partnerships extend across five regions, which means clients get local presence with access to skills, vendors and cover that do not stop at a border."
          />

          <ul className="divide-y divide-ink-line border-y border-ink-line">
            {deliveryRegions.map((region) => (
              <li key={region.label} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  {region.label}
                </span>
                <span className="text-sm leading-relaxed text-ink-muted">{region.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}