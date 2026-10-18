import {
  ShieldCheck,
  Server,
  Code2,
  Database,
  Clapperboard,
  GraduationCap,
  Compass,
  Cctv,
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 'cybersecurity',
    numeral: 'I',
    icon: ShieldCheck,
    name: 'Cybersecurity & Assurance',
    tagline:
      'Offensive testing, defensive engineering, and the compliance evidence to prove both.',
    services: [
      'Security posture assessment & gap analysis',
      'Penetration testing — network, web, mobile & API',
      'Continuous vulnerability management & scanning',
      'Zero-trust security architecture & design review',
      'SOC-as-a-Service with managed detection & response',
      'Incident response, containment & digital forensics',
      'Identity & access management deployment',
      'Cloud security hardening for AWS, Azure & GCP',
      'ISO 27001, SOC 2 & NDPR readiness programmes',
      'Security awareness training for staff & executives',
    ],
  },
  {
    id: 'it-infrastructure',
    numeral: 'II',
    icon: Server,
    name: 'IT Services & Infrastructure',
    tagline:
      'The unglamorous plumbing of a serious business — monitored, documented and always on.',
    services: [
      'Managed IT support & service desk',
      'Network design, deployment & optimisation',
      'Server, storage & virtualisation platforms',
      'Cloud migration, hosting & cost optimisation',
      'Backup, disaster recovery & business continuity',
      'Endpoint management & device provisioning',
      'Data centre build-outs & structured cabling',
      'Hardware procurement, licensing & asset management',
      'Uptime monitoring with contractual SLAs',
      'Microsoft 365, Google Workspace & email security',
    ],
  },
  {
    id: 'software',
    numeral: 'III',
    icon: Code2,
    name: 'Software & Digital Products',
    tagline:
      'Products built to survive audits, scale and the second year in production.',
    services: [
      'Custom web, mobile & enterprise application development',
      'ERP, CRM & core banking system implementation',
      'API development & third-party systems integration',
      'UI/UX design, prototyping & product strategy',
      'Corporate websites, portals & intranets',
      'E-commerce platforms & payment integration',
      'Quality assurance & automated test engineering',
      'DevOps, CI/CD pipelines & release engineering',
      'Legacy system modernisation & technical debt reduction',
    ],
  },
  {
    id: 'data-cloud',
    numeral: 'IV',
    icon: Database,
    name: 'Data, Cloud & Analytics',
    tagline:
      'Turning the records you already hold into decisions you can defend.',
    services: [
      'Data strategy, governance & quality frameworks',
      'Data warehousing & ETL pipeline engineering',
      'Business intelligence dashboards & reporting',
      'Analytics, forecasting & KPI modelling',
      'Artificial intelligence & machine learning solutions',
      'Database administration, tuning & migration',
      'Cloud architecture, landing zones & FinOps',
      'Master data management & records digitisation',
    ],
  },
  {
    id: 'digital-media',
    numeral: 'V',
    icon: Clapperboard,
    name: 'Digital Media & Brand',
    tagline:
      'A studio arm for the part of your business that people actually see.',
    services: [
      'Brand identity, naming & visual systems',
      'Graphics design & marketing collateral',
      'Motion graphics, animation & video production',
      'Social media strategy & channel management',
      'Content creation, copywriting & editorial',
      'Digital advertising & performance campaigns',
      'Search engine optimisation & growth marketing',
      'Photography, product shoots & live coverage',
      'Product design & presentation decks',
    ],
  },
  {
    id: 'training-placement',
    numeral: 'VI',
    icon: GraduationCap,
    name: 'Training, Certification & Placement',
    tagline:
      'We build the talent pool we hire from — and place it with employers who need it.',
    services: [
      'Cybersecurity & ethical hacking tracks',
      'Cloud & infrastructure engineering tracks',
      'Software development bootcamps',
      'Data analytics, BI & AI programmes',
      'Corporate & executive technology training',
      'Certification preparation — CompTIA, Cisco, AWS, ISC²',
      'Internships, labs & supervised live projects',
      'CV, portfolio & interview coaching',
      'Job placement & employer partner network',
      'University, polytechnic & secondary school outreach',
    ],
  },
  {
    id: 'consultancy',
    numeral: 'VII',
    icon: Compass,
    name: 'ICT Consultancy & Advisory',
    tagline:
      'Independent judgement on what to buy, what to build and what to stop paying for.',
    services: [
      'Digital transformation strategy & roadmapping',
      'IT audit, governance & policy development',
      'Technology budget, cost & vendor advisory',
      'Vendor selection & procurement support',
      'Enterprise architecture & systems review',
      'Business continuity, risk & resilience planning',
      'Project, programme & change management',
      'Outsourcing & managed service structuring',
      'Regulatory readiness for financial & public sector clients',
    ],
  },
  {
    id: 'smart-systems',
    numeral: 'VIII',
    icon: Cctv,
    name: 'Physical Security & Smart Systems',
    tagline:
      'Where the digital perimeter meets the building — access, surveillance and automation.',
    services: [
      'IP surveillance & CCTV design and installation',
      'Access control, turnstiles & visitor management',
      'Biometrics, time & attendance systems',
      'Smart building, lighting & energy automation',
      'Intercom, PA & unified communications rooms',
      'IoT deployment, telemetry & remote monitoring',
      'Command centre & control room fit-outs',
    ],
  },
];

export const totalServices = serviceCategories.reduce(
  (total, category) => total + category.services.length,
  0,
);

export const deliveryRegions = [
  {
    label: 'Nigeria & West Africa',
    note: 'Head office, field engineers and the delivery bench for regional clients.',
  },
  {
    label: 'United Kingdom & Europe',
    note: 'Consultancy partnerships for compliance, audit and cloud engineering.',
  },
  {
    label: 'North America',
    note: 'Product engineering and after-hours support coverage across time zones.',
  },
  {
    label: 'Middle East',
    note: 'Infrastructure and security programmes delivered with local integrators.',
  },
  {
    label: 'Asia-Pacific',
    note: 'Vendor, hardware and managed-service sourcing partnerships.',
  },
];

export const sectors = [
  'Banking & financial services',
  'Oil, gas & energy',
  'Telecommunications',
  'Government & public sector',
  'Healthcare',
  'Education',
  'SMEs & startups',
  'NGOs & development agencies',
];