const TYPES = [
  'Project or consultancy',
  'Managed IT & support',
  'Training — individual',
  'Training — corporate cohort',
  'Career, internship or placement',
  'Partnership',
  'Something else',
];
const clean = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

  if (clean(b.company_website, 120)) return res.status(200).json({ ok: true }); // bot trap

  const e = {
    name: clean(b.name, 120),
    email: clean(b.email, 160).toLowerCase(),
    phone: clean(b.phone, 40),
    organisation: clean(b.organisation, 180),
    engagement_type: clean(b.engagement_type, 80),
    service_interest: clean(b.service_interest, 140),
    message: clean(b.message, 4000),
    source_page: clean(b.source_page, 40) || 'contact',
  };
  const missing = [];
  if (e.name.length < 2) missing.push('your name');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email)) missing.push('a valid email address');
  if (e.message.length < 10) missing.push('a short description of what you need');
  if (!TYPES.includes(e.engagement_type)) missing.push('a valid enquiry type');
  if (missing.length) return res.status(400).json({ error: `Please provide ${missing.join(', ')}.` });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!key || !to) {
    console.error('Enquiry received but RESEND_API_KEY / ENQUIRY_TO_EMAIL not set', e);
    return res.status(503).json({ error: 'Enquiries are temporarily unavailable. Please email us directly.' });
  }

  const lines = [
    ['Name', e.name], ['Email', e.email], ['Phone', e.phone], ['Organisation', e.organisation],
    ['Enquiry type', e.engagement_type], ['Interested in', e.service_interest], ['Page', e.source_page],
  ].filter(([, v]) => v);
  const html = `<p>A new enquiry came through the Techdawill website.</p>
<table>${lines.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}</table>
<p><b>Message</b></p><p style="white-space:pre-wrap">${esc(e.message)}</p>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || 'Techdawill website <onboarding@resend.dev>',
      to: to.split(',').map((x) => x.trim()),
      reply_to: e.email,
      subject: `New website enquiry — ${e.name}`,
      html,
    }),
  });
  if (!r.ok) {
    console.error('Resend error', r.status, await r.text());
    return res.status(502).json({ error: 'We could not send that. Please try again.' });
  }
  return res.status(200).json({ ok: true });
}
