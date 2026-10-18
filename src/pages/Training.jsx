import PageHeader from '@/components/site/PageHeader';
import EnquiryForm from '@/components/site/EnquiryForm';
import CtaBand from '@/components/site/home/CtaBand';
import { academyTracks, audiences, certificationPrep, placementPillars } from '@/data/academy';

const admissionSteps = [
  { step: '01', title: 'Enquire', text: 'Send the form with the track you are interested in and a little about your background.' },
  { step: '02', title: 'Screening call', text: 'A short conversation to check the track fits your goals, and to agree the cohort and schedule.' },
  { step: '03', title: 'Placement', text: 'You join a cohort, work in supervised labs, and enter our career and placement programme.' },
];

export default function Training() {
  return (
    <>
      <PageHeader
        eyebrow="Techdawill Academy"
        title="Training, certification and placement."
        lead="We build the talent pool we hire from. Instructor-led programmes in cybersecurity, cloud, software and data — closing with supervised work on live client engagements and an introduction to employers."
        image="/images/img-5.png"
        imageAlt="Young technology professionals working in a modern workspace"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Programme tracks
            </span>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-2">
            {academyTracks.map((track) => (
              <article key={track.name} className="bg-background p-8 lg:p-10">
                <h2 className="font-heading text-2xl tracking-tight text-foreground">{track.name}</h2>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {track.duration}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {track.level}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    {track.certifications}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{track.summary}</p>
                <ul className="mt-6 space-y-3">
                  {track.modules.map((module) => (
                    <li key={module} className="flex gap-4 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {module}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Placement
                </span>
              </div>
              <h2 className="mt-6 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
                Certificates are not the product. Capability is.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Every cohort ends in work and an introduction — not a graduation photograph. Our
                placement team stays with graduates until they are earning.
              </p>
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Certification preparation
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {certificationPrep.map((item) => (
                    <li
                      key={item}
                      className="border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {placementPillars.map((pillar) => (
                <div key={pillar.title} className="bg-background p-8">
                  <h3 className="font-heading text-xl tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Who we train
            </span>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.title} className="border-t border-border pt-6">
                <h3 className="font-heading text-xl tracking-tight text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Enrol
                </span>
              </div>
              <h2 className="mt-6 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
                Request a syllabus or reserve a place.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Tell us the track and how you would like to study. We will send the syllabus, fees
                and the next cohort dates.
              </p>

              <ol className="mt-10 space-y-6">
                {admissionSteps.map((item) => (
                  <li key={item.step} className="flex gap-6 border-b border-border pb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-heading text-lg text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <EnquiryForm page="training" defaultEngagement="Training — individual" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}