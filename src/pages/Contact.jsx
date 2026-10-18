import PageHeader from '@/components/site/PageHeader';
import EnquiryForm from '@/components/site/EnquiryForm';
import { deliveryRegions } from '@/data/services';
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react';

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'techdawill@gmail.com',
    note: 'Monitored daily',
  },
  {
    icon: MapPin,
    label: 'Head office',
    value: 'Lagos, Nigeria',
    note: 'Serving clients nationwide and worldwide',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'One working day',
    note: 'Priority support for existing clients',
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        lead="Send us a brief and you will get a named consultant, a scoped response and an honest view of whether we are the right firm for the work."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Enquiry form
                </span>
              </div>
              <h2 className="mt-6 font-heading text-3xl tracking-tight">
                Tell us what you are trying to solve.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Whether it is a security assessment, a full IT estate, a software build, a media
                campaign or a training cohort — one form reaches the right desk.
              </p>
              <EnquiryForm className="mt-10" />
            </div>

            <div className="space-y-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Direct lines
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {details.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <li key={detail.label} className="flex gap-5 py-5">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            {detail.label}
                          </p>
                          <p className="mt-1 font-heading text-lg text-foreground">{detail.value}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{detail.note}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>

              </div>

              <div className="border border-border bg-secondary p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Regional desks
                </p>
                <ul className="mt-6 space-y-4">
                  {deliveryRegions.map((region) => (
                    <li key={region.label}>
                      <p className="font-heading text-base text-foreground">{region.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {region.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Existing client?
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Mark your enquiry as urgent and mention your account name. Service desk requests
                  go straight to the duty engineer assigned to your contract.
                </p>
                <a
                  href="mailto:techdawill@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary transition-colors hover:text-accent"
                >
                  Email the service desk
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}