export const personalInfo = {
  name: 'Mohammad Rasool',
  fullName: 'Shaik Rusun Mohammad Rasool',
  title: 'Senior Full-Stack Developer',
  experience: '3+ Years Experience',
  location: 'Hyderabad, India',
  email: 'rasool84658@gmail.com',
  phone: '+91 8465848116',
  linkedin: 'https://www.linkedin.com/in/mohammad-rasool66/',
  github: 'https://github.com/ras00786',
  resumeUrl:
    'https://drive.google.com/file/d/1EPUlF8jedeoLh_P9URl89twlM60K7M8b/view?usp=sharing',
  summary:
    'I design and build scalable SaaS platforms with invoice automation, Stripe payments, document processing pipelines, and cloud-native backends using NestJS, React, AWS, and Azure.',
  about:
    'Full-stack engineer specializing in enterprise SaaS — invoice generation, Stripe billing, bulk file processing, PDF pipelines, email workflows, and secure document management for high-volume production systems.',
};

export const stats = [
  { label: 'Years Experience', value: 3, suffix: '+', icon: '💼' },
  { label: 'Projects Completed', value: 5, suffix: '+', icon: '🚀' },
  { label: 'Technologies', value: 10, suffix: '+', icon: '⚡' },
  { label: 'Commitment', value: 100, suffix: '%', icon: '✨' },
];

export const capabilities: {
  title: string;
  description: string;
  tech: string[];
  iconKey: 'invoice' | 'stripe' | 'files' | 'pdf' | 'upload' | 'email' | 'reports' | 'workflow' | 'security';
}[] = [
  {
    title: 'Invoice & Billing Automation',
    description:
      'Automated invoice generation, billing cycles, payment tracking, and financial reporting for enterprise customers.',
    tech: ['NestJS', 'MSSQL', 'BullMQ'],
    iconKey: 'invoice',
  },
  {
    title: 'Stripe Payment Integration',
    description:
      'End-to-end Stripe checkout, subscription billing, webhook event handling, and payment reconciliation workflows.',
    tech: ['Stripe', 'Webhooks', 'NestJS'],
    iconKey: 'stripe',
  },
  {
    title: 'Bulk File Processing',
    description:
      'High-volume file upload, validation, splitting, merging, and async processing pipelines handling thousands of records.',
    tech: ['BullMQ', 'Redis', 'Azure Blob'],
    iconKey: 'files',
  },
  {
    title: 'PDF Generation & Encryption',
    description:
      'Secure PDF creation, encryption, watermarking, merging, and document transformation using Puppeteer and Playwright.',
    tech: ['Puppeteer', 'Playwright', 'PDF'],
    iconKey: 'pdf',
  },
  {
    title: 'Document Management',
    description:
      'Secure document storage, version control, access permissions, and large-scale document management on Azure Storage.',
    tech: ['Azure Blob', 'File Share', 'S3'],
    iconKey: 'upload',
  },
  {
    title: 'Email & Notification Workflows',
    description:
      'Template-based email delivery, notification tracking, automated alerts, and communication workflows for enterprise users.',
    tech: ['BullMQ', 'Azure', 'SES'],
    iconKey: 'email',
  },
  {
    title: 'Report Generation',
    description:
      'Automated report building, scheduled exports, dashboard analytics, and data-driven reporting modules.',
    tech: ['NestJS', 'Redis', 'MSSQL'],
    iconKey: 'reports',
  },
  {
    title: 'Event-Driven Workflows',
    description:
      'Async job queues and event-driven architectures for CPU-intensive tasks, invoice processing, and file automation.',
    tech: ['Redis', 'BullMQ', 'Kafka'],
    iconKey: 'workflow',
  },
  {
    title: 'Authentication & Security',
    description:
      'Enterprise-grade auth with JWT, 2FA, rate limiting, CSP policies, and secure API architecture.',
    tech: ['JWT', '2FA', 'NestJS'],
    iconKey: 'security',
  },
];

export const techStack = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'GraphQL'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    category: 'Payments & Processing',
    items: ['Stripe', 'BullMQ', 'Redis', 'Puppeteer'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    school: 'Pace Institute of Technology and Sciences',
    period: '2019 – 2023',
    detail: 'CGPA: 7.2 / 10',
    icon: '🎓',
  },
  {
    degree: 'Intermediate',
    field: 'Science',
    school: 'M.N.M Junior College',
    period: '2017 – 2019',
    detail: 'CGPA: 8.0 / 10',
    icon: '📚',
  },
];

export const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Max Trans Systems',
    location: 'Hyderabad, India',
    duration: 'July 2025 – Present',
    accent: '#22C55E',
    highlights: [
      'Built invoice generation and automated billing systems used by enterprise customers.',
      'Integrated Stripe payment processing with webhook event handling and reconciliation.',
      'Developed bulk document processing pipelines handling thousands of files with BullMQ.',
      'Built secure PDF generation, encryption, watermarking, merging, and transformation services.',
      'Designed event-driven workflows for report generation, invoice processing, and email automation.',
      'Implemented Azure Blob Storage and File Share for large-scale document management.',
    ],
  },
  {
    role: 'Freelance Full-Stack Engineer',
    company: 'Nexg Works',
    location: 'Hyderabad, India',
    duration: 'April 2025 – June 2025',
    accent: '#EC4899',
    highlights: [
      'Built AI-powered document intelligence platform with RAG and vector search.',
      'Designed enterprise authentication with JWT, 2FA, CSP policies, and security monitoring.',
      'Automated deployment pipelines and cloud infrastructure provisioning on AWS.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Aadvi Tech Solutions',
    location: 'Hyderabad, India',
    duration: 'August 2023 – March 2025',
    accent: '#A855F7',
    highlights: [
      'Delivered production apps with secure REST APIs and authentication systems.',
      'Built real-time features using WebSockets and event-driven architecture.',
      'Improved performance through caching, lazy loading, and SSR/SSG optimization.',
    ],
  },
];

export const projects: {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  gradient: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}[] = [
  {
    title: 'Enterprise Real Estate Platform',
    description:
      'Large-scale SaaS platform serving real estate professionals with end-to-end document and payment workflows.',
    features: [
      'Invoice generation and automated billing',
      'Stripe payments with webhook handling',
      'Bulk PDF processing and secure document storage',
      'Dashboard analytics and report automation',
    ],
    tech: ['NestJS', 'React', 'Azure', 'Stripe', 'Redis', 'BullMQ'],
    liveUrl: 'https://www.ezroi.net/',
    gradient: 'from-emerald-600/30 to-blue-600/20',
    icon: '🏢',
  },
  {
    title: 'EZROI Investment Platform',
    description:
      'Real estate investment platform with document workflows, file management, and analytics.',
    features: [
      'Investment analysis and report export',
      'Secure file uploads and document management',
      'Document generation services',
      'Optimized backend APIs and database performance',
    ],
    tech: ['NestJS', 'React', 'Azure', 'SQL Server', 'Redis'],
    liveUrl: 'https://red-hill-067ec861e.5.azurestaticapps.net/login',
    gradient: 'from-violet-600/30 to-indigo-600/20',
    icon: '📊',
  },
  {
    title: 'AI Email Intelligence System',
    description:
      'Serverless system that monitors inboxes, summarizes emails, and sends smart notifications.',
    features: [
      'AWS Lambda inbox monitoring',
      'OpenAI email summarization',
      'WhatsApp Cloud API notifications',
      'Idempotent processing with DynamoDB',
    ],
    tech: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'OpenAI', 'EventBridge'],
    gradient: 'from-cyan-600/30 to-teal-600/20',
    icon: '🤖',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
