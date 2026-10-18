import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import TechdawillMark from '@/components/site/TechdawillMark';
import { serviceCategories, deliveryRegions } from '@/data/services';

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <TechdawillMark tone="light" className="h-10 w-10" />
              <span className="font-heading text-2xl tracking-tight">
                Tech<span className="text-accent">dawill</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              IT services. All solutions. One partner. A Nigerian technology and cybersecurity firm
              serving organisations at home and through delivery partnerships abroad.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Innovate · Connect · Deliver · Succeed
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              Practice areas
            </p>
            <ul className="mt-6 space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/services#${category.id}`}
                    className="text-sm text-ink-foreground transition-colors hover:text-accent"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              Company
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Training & placement', to: '/training' },
                { label: 'About Techdawill', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              Contact
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-ink-muted">techdawill@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-ink-muted">
                  Head office: Lagos, Nigeria — serving clients nationwide and worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-ink-line pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {deliveryRegions.map((region) => (
              <li
                key={region.label}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted"
              >
                {region.label}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            © {new Date().getFullYear()} Techdawill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}