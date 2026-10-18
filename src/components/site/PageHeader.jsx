import { Image } from '@/components/ui/image';

export default function PageHeader({ eyebrow, title, lead, image, imageAlt = '' }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-8 max-w-4xl font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        ) : null}
      </div>

      {image ? (
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <Image
            src={image}
            alt={imageAlt}
            className="h-auto w-full"
            fittingType="fill"
          />
        </div>
      ) : null}
    </section>
  );
}


