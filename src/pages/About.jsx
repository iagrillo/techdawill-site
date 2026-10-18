import PageHeader from '@/components/site/PageHeader';
import GlobalReach from '@/components/site/home/GlobalReach';
import CtaBand from '@/components/site/home/CtaBand';
import { sectors } from '@/data/services';

const values = [
  {
    title: 'Precision',
    text: 'Scopes, deliverables and service levels written down before work starts — and measured afterwards.',
  },
  {
    title: 'Integrity',
    text: 'Advice that would survive an audit. If a cheaper or simpler route serves you better, we say so.',
  },
  {
    title: 'Transfer of capability',
    text: 'We document and train as we deliver, so your team is stronger when the engagement ends.',
  },
  {
    title: 'Long-term partnership',
    text: 'Most of our work comes from clients who stayed. That is the measure we care about.',
  },
];

const facts = [
  { value: 'VIII', label: 'Practice areas' },
  { value: '72', label: 'Services in portfolio' },
  { value: '5', label: 'Delivery regions' },
  { value: '1', label: 'Accountable partner' },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="One partner. Many disciplines."
        lead="Techdawill is a Nigerian technology, cybersecurity and training firm. We were built to remove a familiar frustration: organisations stitching together five vendors who never speak to each other."
        image="/images/img-4.png"
        imageAlt="A technology team meeting in a modern boardroom"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Our story
                </span>
              </div>
              <h2 className="mt-6 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
                Built in Nigeria, measured against global standards.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  We started with a straightforward conviction: organisations here deserve the same
                  standard of engineering, security discipline and documentation that their
                  counterparts in London or New York receive — delivered by people who understand
                  the local operating reality.
                </p>
                <p>
                  Today we run managed IT estates, security programmes, software builds and media
                  work for clients across banking, energy, telecoms, government, healthcare and
                  education. Our academy trains the next generation of engineers on the same
                  engagements we are paid to deliver.
                </p>
                <p>
                  Head office in Nigeria, with delivery partners across five regions. Same team on
                  the phone either way.
                </p>
              </div>
            </div>

            <div className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-background p-8">
                  <p className="font-heading text-3xl text-foreground">{fact.value}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              What we hold to
            </span>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="border-t border-border pt-6">
                <h3 className="font-heading text-xl tracking-tight text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalReach />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sectors
            </span>
          </div>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
            Industries where downtime and data loss are not abstract risks.
          </h2>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <li key={sector} className="bg-background px-6 py-6 font-heading text-base text-foreground">
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}