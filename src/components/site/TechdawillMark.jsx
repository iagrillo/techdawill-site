export default function TechdawillMark({ tone = 'dark', className = 'h-9 w-9' }) {
  const gradientId = `tdw-mark-${tone}`;
  const top = tone === 'light' ? '#ffffff' : '#0d1218';

  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Techdawill">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor="#00a3ff" />
        </linearGradient>
      </defs>
      <rect x="5" y="11" width="25" height="4.5" rx="1" fill={`url(#${gradientId})`} />
      <rect x="15.5" y="11" width="5" height="41" rx="1" fill={`url(#${gradientId})`} />
      <g stroke="#00a3ff" fill="none">
        <circle cx="43" cy="31" r="13.5" strokeWidth="1.2" opacity="0.9" />
        <ellipse cx="43" cy="31" rx="6" ry="13.5" strokeWidth="0.85" opacity="0.7" />
        <path d="M29.5 26h27M29.5 36h27" strokeWidth="0.85" opacity="0.7" />
        <path d="M28 18h7M56 26h-4M43 45v-3" strokeWidth="0.9" opacity="0.6" />
      </g>
      <g fill="#00a3ff">
        <circle cx="27" cy="18" r="1.9" />
        <circle cx="57" cy="26" r="1.9" />
        <circle cx="43" cy="47" r="1.9" />
      </g>
    </svg>
  );
}