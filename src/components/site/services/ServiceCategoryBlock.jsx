import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ServiceCategoryBlock({ category, image, imageAlt = '', tone = 'light' }) {
  const Icon = category.icon;
  const dark = tone === 'dark';

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 border-b ${
        dark ? 'border-ink-line bg-ink text-ink-foreground' : 'border-border bg-background'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-24">
        {image ? (
          <div className="mb-16">
            <Image
              src={image}
              alt={imageAlt}
              className="h-[220px] w-full object-cover object-top sm:h-[320px] lg:h-[400px]"
              fittingType="fill"
            />
          </div>
        ) : null}

        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <div className="flex items-center gap-4">
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
                  dark ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {category.numeral}
              </span>
              <Icon className={`h-5 w-5 ${dark ? 'text-accent' : 'text-primary'}`} />
            </div>
            <h2
              className={`mt-6 font-heading text-3xl tracking-tight ${
                dark ? 'text-ink-foreground' : 'text-foreground'
              }`}
            >
              {category.name}
            </h2>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                dark ? 'text-ink-muted' : 'text-muted-foreground'
              }`}
            >
              {category.tagline}
            </p>
            <Link
              to="/contact"
              className={`mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                dark ? 'text-accent' : 'text-primary hover:text-accent'
              }`}
            >
              Enquire about this
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="grid sm:grid-cols-2 sm:gap-x-10">
            {category.services.map((service) => (
              <li
                key={service}
                className={`border-b py-4 text-sm ${dark ? 'border-ink-line' : 'border-border'}`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
