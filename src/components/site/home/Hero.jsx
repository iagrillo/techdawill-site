import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const LOGO =
  '/images/logo.jpg';

const stats = [
  { value: 'VIII', label: 'Practice areas' },
  { value: '72', label: 'Services in portfolio' },
  { value: 'Global', label: 'Delivery partnerships' },
];

const regions = [
  'West Africa',
  'United Kingdom',
  'North America',
  'Middle East',
  'Asia-Pacific',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute right-[-6%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-accent opacity-[0.14] blur-3xl lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image
          src={LOGO}
          alt="Techdawill identity"
          className="h-full w-full object-contain opacity-[0.16]"
          fittingType="fit"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
            IT Services · All Solutions · One Partner
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl font-heading text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
          Engineering digital confidence, from Nigeria to the world.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Techdawill is a full-spectrum technology and cybersecurity consultancy. We secure,
          build and run the systems growing organisations depend on — and train the people who
          will run them next.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start an enquiry
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-ink-line px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explore our services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <dl className="mt-20 grid max-w-3xl gap-px border-t border-ink-line pt-8 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-3xl text-ink-foreground">{stat.value}</dt>
              <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative border-t border-ink-line">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-6 py-6 lg:px-10">
          {regions.map((region) => (
            <li
              key={region}
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted"
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
