import PageHeader from '@/components/site/PageHeader';
import ServiceCategoryBlock from '@/components/site/services/ServiceCategoryBlock';
import CtaBand from '@/components/site/home/CtaBand';
import { serviceCategories } from '@/data/services';

const IMAGES = {
  cybersecurity: {
    src: '/images/img-1.png',
    alt: 'Enterprise server racks in a data centre corridor',
  },
  'digital-media': {
    src: '/images/img-2.png',
    alt: 'Light refracting through glass prisms',
  },
};

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Practice areas"
        title="The Techdawill service lexicon."
        lead="Eight practice areas and seventy-two services, arranged so you can find exactly the capability you need — or hand us the whole estate and stop worrying about it."
        image="/images/img-3.png"
        imageAlt="Modern corporate architecture against a clear sky"
      />

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Jump to a practice area
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="font-heading text-base text-foreground transition-colors hover:text-accent"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {serviceCategories.map((category) => (
        <ServiceCategoryBlock
          key={category.id}
          category={category}
          tone={category.id === 'cybersecurity' ? 'dark' : 'light'}
          image={IMAGES[category.id]?.src}
          imageAlt={IMAGES[category.id]?.alt}
        />
      ))}

      <CtaBand />
    </>
  );
}