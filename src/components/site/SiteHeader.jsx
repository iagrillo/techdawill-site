import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import TechdawillMark from '@/components/site/TechdawillMark';

const tabs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Training & Placement', to: '/training' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <TechdawillMark tone="dark" className="h-9 w-9" />
          <span className="font-heading text-xl tracking-tight">
            Tech<span className="text-primary">dawill</span>
          </span>
        </Link>

        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 lg:px-6"
        >
          <span className="hidden sm:inline">Start an enquiry</span>
          <span className="sm:hidden">Enquire</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <nav aria-label="Primary" className="border-t border-border bg-secondary">
        <ul className="mx-auto flex max-w-7xl items-stretch overflow-x-auto px-2 lg:px-8">
          {tabs.map((tab) => (
            <li key={tab.to} className="shrink-0">
              <NavLink
                to={tab.to}
                end={tab.to === '/'}
                className={({ isActive }) =>
                  `inline-flex items-center whitespace-nowrap border-b-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? 'border-accent bg-background text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}