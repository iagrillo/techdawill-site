import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from '@/components/site/SectionIntro';
import { academyTracks } from '@/data/academy';

export default function AcademyStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionIntro
        eyebrow="Techdawill Academy"
        title="We train the people who will run the systems we build."
        lead="Instructor-led programmes in cybersecurity, cloud, software and data, closing with supervised work on live client engagements. Graduates leave with a portfolio and an introduction, not just a certificate."
      />

      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
        {academyTracks.map((track) => (
          <div key={track.name} className="bg-background p-8 lg:p-10">
            <h3 className="font-heading text-xl tracking-tight text-foreground">{track.name}</h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {track.duration}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {track.level}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{track.summary}</p>
            <p className="mt-5 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              {track.certifications}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <Link
          to="/training"
          className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Training & placement
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        <p className="text-sm text-muted-foreground">
          Corporate cohorts, school outreach and custom curricula available on request.
        </p>
      </div>
    </section>
  );
}