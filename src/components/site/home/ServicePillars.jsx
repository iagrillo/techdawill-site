import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '@/components/site/SectionIntro';
import { serviceCategories } from '@/data/services';

export default function ServicePillars() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionIntro
        eyebrow="The service lexicon"
        title="Every capability your organisation needs, under one partnership."
        lead="Eight practice areas, seventy-two services — from securing a single application to running an entire estate. Read it as a menu, or ask us to assemble the pieces you actually need."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          const preview = category.services.slice(0, 4);
          const remaining = category.services.length - preview.length;

          return (
            <article
              key={category.id}
              id={category.id}
              className="group flex flex-col border border-border bg-card p-8 transition-colors hover:border-accent lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {category.numeral}
                </span>
                <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
              </div>

              <h3 className="mt-6 font-heading text-2xl tracking-tight text-foreground">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {category.tagline}
              </p>

              <ul className="mt-6 divide-y divide-border border-t border-border">
                {preview.map((service) => (
                  <li key={service} className="py-3 text-sm text-foreground">
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {remaining > 0 ? `+ ${remaining} more services` : 'Complete list'}
                </span>
                <Link
                  to={`/services#${category.id}`}
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary transition-colors hover:text-accent"
                >
                  Full capability
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}