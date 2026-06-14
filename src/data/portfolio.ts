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
    'https://drive.google.com/file/d/1EPUlF8jedeoLh_P9URl89twlM60K7M8b/view?usp=sharing?usp=sharing',
  summary:
    'I design and build scalable SaaS platforms, enterprise applications, and cloud-native solutions using NestJS, React, Next.js, TypeScript, AWS, and Azure.',
  about:
    'Passionate full-stack engineer with expertise in distributed systems, event-driven architectures, and cloud-native development. I deliver high-volume production systems for enterprise clients.',
};

export const stats = [
  { label: 'Years Experience', value: 3, suffix: '+', icon: '💼' },
  { label: 'Projects Completed', value: 5, suffix: '+', icon: '🚀' },
  { label: 'Technologies', value: 10, suffix: '+', icon: '⚡' },
  { label: 'Commitment', value: 100, suffix: '%', icon: '✨' },
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
    items: ['Node.js', 'Express', 'NestJS', 'GraphQL'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    category: 'AI & Document Processing',
    items: ['OpenAI API', 'RAG Systems', 'PDF Processing', 'OCR'],
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
      'Led migration of legacy Node.js services into scalable NestJS modular architecture.',
      'Designed event-driven workflows with Redis and BullMQ for reports and email automation.',
      'Reduced database load by 30% through distributed caching and rate-limiting.',
      'Built secure PDF generation, encryption, and bulk document pipelines.',
    ],
  },
  {
    role: 'Freelance Full-Stack Engineer',
    company: 'Nexg Works',
    location: 'Hyderabad, India',
    duration: 'April 2025 – June 2025',
    accent: '#EC4899',
    highlights: [
      'Designed enterprise authentication with JWT, 2FA, and security monitoring.',
      'Built AI document intelligence platform using RAG and vector databases.',
      'Automated deployment pipelines and cloud infrastructure provisioning.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Aadvi Tech Solutions',
    location: 'Hyderabad, India',
    duration: 'August 2023 – March 2025',
    accent: '#A855F7',
    highlights: [
      'Delivered production apps using React, Node.js, NestJS, and SQL databases.',
      'Built real-time features with WebSockets and event-driven architecture.',
      'Optimized SEO and performance using SSR and SSG techniques.',
    ],
  },
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}[] = [
  {
    title: 'Enterprise Real Estate Platform',
    description:
      'Large-scale SaaS platform for real estate professionals with document automation, Stripe payments, and analytics.',
    tech: ['NestJS', 'React', 'Azure', 'Stripe', 'Redis'],
    liveUrl:
      'https://www.ezroi.net/',
    gradient: 'from-emerald-600/30 to-blue-600/20',
    icon: '🏢',
  },
  {
    title: 'EZROI Investment Platform',
    description:
      'Real estate investment analysis platform with reporting workflows and secure document management.',
    tech: ['NestJS', 'React', 'Azure', 'SQL Server', 'Redis'],
    liveUrl: 'https://red-hill-067ec861e.5.azurestaticapps.net/login',
    gradient: 'from-violet-600/30 to-indigo-600/20',
    icon: '📊',
  },
  {
    title: 'AI Email Intelligence System',
    description:
      'Serverless AWS worker that monitors inboxes, summarizes emails with OpenAI, and sends WhatsApp alerts.',
    tech: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'OpenAI'],
    gradient: 'from-cyan-600/30 to-teal-600/20',
    icon: '🤖',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
