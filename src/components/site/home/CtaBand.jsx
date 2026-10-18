import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Next step
          </p>
          <h2 className="mt-6 font-heading text-3xl leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.6rem]">
            Tell us what you are trying to solve.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Send a short brief. You will get a named consultant, a scoped response and an honest
            answer about whether we are the right firm for the work.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center gap-2 bg-accent px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          Start an enquiry
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}