import { useState } from 'react';

import { Check, Loader2 } from 'lucide-react';
import { serviceCategories } from '@/data/services';

const engagementTypes = [
  'Project or consultancy',
  'Managed IT & support',
  'Training — individual',
  'Training — corporate cohort',
  'Career, internship or placement',
  'Partnership',
  'Something else',
];

const interests = [
  ...serviceCategories.map((category) => category.name),
  'Training & placement',
  'General enquiry',
];

const fieldClass =
  'w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent';
const labelClass = 'font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground';

const empty = {
  name: '',
  email: '',
  phone: '',
  organisation: '',
  service_interest: '',
  message: '',
  company_website: '',
};

export default function EnquiryForm({ page = 'contact', defaultEngagement, className = '' }) {
  const [form, setForm] = useState({
    ...empty,
    engagement_type: defaultEngagement || engagementTypes[0],
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    setError('');
    setStatus('sending');

    try {
      if (form.company_website) { setStatus('sent'); return; }
      const res = await fetch('https://formsubmit.co/ajax/techdawill@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          organisation: form.organisation,
          enquiry_type: form.engagement_type,
          interested_in: form.service_interest,
          message: form.message,
          page: page,
          _subject: 'New website enquiry - ' + form.name,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data?.success) === 'true') {
        setStatus('sent');
        return;
      }
      setError(data?.error || 'We could not send that. Please try again.');
      setStatus('idle');
    } catch (err) {
      setError('We could not send that. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'sent') {
    return (
      <div className={`border border-border bg-card p-10 ${className}`}>
        <Check className="h-8 w-8 text-accent" />
        <h3 className="mt-6 font-heading text-2xl tracking-tight">Enquiry received.</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}. Your brief is with our team and
          a named consultant will respond within one working day.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ ...empty, engagement_type: engagementTypes[0] });
            setStatus('idle');
          }}
          className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-primary transition-colors hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`border border-border bg-card p-8 lg:p-10 ${className}`}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Your name *</span>
          <input
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Adaeze Okonkwo"
            className={`mt-3 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@company.com"
            className={`mt-3 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Phone</span>
          <input
            value={form.phone}
            onChange={update('phone')}
            placeholder="+234 ..."
            className={`mt-3 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Organisation</span>
          <input
            value={form.organisation}
            onChange={update('organisation')}
            placeholder="Company, school or institution"
            className={`mt-3 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className={labelClass}>What do you need? *</span>
          <select
            value={form.engagement_type}
            onChange={update('engagement_type')}
            className={`mt-3 ${fieldClass}`}
          >
            {engagementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Area of interest</span>
          <select
            value={form.service_interest}
            onChange={update('service_interest')}
            className={`mt-3 ${fieldClass}`}
          >
            <option value="">Select an area (optional)</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block">
        <span className={labelClass}>Brief *</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your environment, the problem you are facing, timelines and anything you have already tried."
          className={`mt-3 ${fieldClass} resize-none`}
        />
      </label>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.company_website}
        onChange={update('company_website')}
        aria-hidden="true"
        className="hidden"
      />

      {error ? (
        <p className="mt-6 border border-destructive px-4 py-3 text-sm text-destructive">{error}</p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              Sending
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            </>
          ) : (
            'Send enquiry'
          )}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Your brief goes straight to our consultants. We never share it with third parties.
        </p>
      </div>
    </form>
  );
}
