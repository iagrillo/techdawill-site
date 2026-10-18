import SectionIntro from '@/components/site/SectionIntro';
import { sectors } from '@/data/services';

const movements = [
  {
    numeral: '01',
    title: 'Assess',
    text: 'We start with evidence: what you run, what it costs, where it breaks and what regulators expect of you.',
  },
  {
    numeral: '02',
    title: 'Architect',
    text: 'A written plan with options, budgets and sequencing — designed so your team can execute it with or without us.',
  },
  {
    numeral: '03',
    title: 'Deliver',
    text: 'Engineering, deployment and training handled by the same people who wrote the plan. No hand-off loss.',
  },
  {
    numeral: '04',
    title: 'Sustain',
    text: 'Monitoring, support and quarterly reviews, so the estate stays secure and the people who run it keep growing.',
  },
];

const assurances = [
  'ISO-aligned delivery documentation on every engagement',
  'NDPR-aware handling of personal and customer data',
  'Vendor partnerships across cloud, network and security platforms',
  'Named engineers, fixed scopes and agreed service levels',
];

export default function Approach() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionIntro
          eyebrow="How we work"
          title="Four movements, repeated with discipline."
          lead="Consultancy that ends in a slide deck is expensive decoration. Our engagements end in working systems and trained staff."
        />

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {movements.map((movement) => (
            <div key={movement.numeral} className="bg-background p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {movement.numeral}
              </span>
              <h3 className="mt-5 font-heading text-2xl tracking-tight text-foreground">
                {movement.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{movement.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              What you can hold us to
            </p>
            <ul className="mt-6 space-y-4">
              {assurances.map((item) => (
                <li key={item} className="flex gap-4 border-b border-border pb-4 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sectors we serve
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="bg-background px-5 py-4 font-heading text-base text-foreground"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}