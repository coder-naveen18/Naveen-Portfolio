import type { Experience, Project, Certificate, ContactItem, SkillGroup, OpenSourceBadge } from '../types'

export const techPills: string[] = [
  'React', 'Next.js', 'TypeScript', 'Django', 'Node.js', 'Express.js',
  'MySQL', 'PostgreSQL', 'Tailwind CSS', 'JWT Auth', 'REST APIs',
  'Git', 'Figma', 'DRF', 'bcrypt', 'HTML5', 'CSS3',
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'DRF', 'JWT / bcrypt'],
  },
  {
    label: 'Databases & Tools',
    skills: ['MySQL', 'PostgreSQL', 'Git', 'VS Code', 'Figma'],
  },
]

export const stats = [
  { num: '2+', label: 'Years coding' },
  { num: '3+', label: 'Projects shipped' },
  { num: '2',  label: 'Internships' },
  { num: '10+', label: 'Technologies' },
]

export const experiences: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'IQuint Technology Services',
    period: 'March 2026 — Present',
    bullets: [
      'Building a full-stack Hospital Management System for small and village-area hospitals (10–150 bed capacity) managing patients, appointments, OPD/IPD workflows, billing, and reports.',
      'Developed a billing and payment module with invoice generation, discounts, receipts, audit trail, and collection reports.',
      'Implemented role-based access control for admins, doctors, receptionists, nurses, and billing staff with protected navigation.',
      'Integrated real-time, API-driven dashboards and analytics to replace hardcoded statistics across modules.',
      'Built a responsive React + TypeScript frontend with Django backend services for a complete hospital workflow solution.',
    ],
    tags: ['React', 'TypeScript', 'Django', 'REST APIs', 'RBAC', 'MySQL'],
  },
  {
    role: 'Next.js Developer',
    company: 'computatia.in — VGU, Jaipur',
    period: 'Sept 2025 — Oct 2025',
    bullets: [
      'Re-architected legacy UI into modular, reusable Next.js components, improving maintainability and rendering performance.',
      'Engineered responsive, mobile-first interfaces using Tailwind CSS and custom CSS, ensuring consistent UX across all devices.',
      'Designed adaptive layouts for unconventional screen sizes (e.g., Google Nest Hub 1024×600).',
      'Took end-to-end ownership of UI feature delivery — from requirement understanding to production deployment.',
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'Component Architecture'],
  },
]

export const projects: Project[] = [
  {
    num: '01 / Finance',
    category: 'Finance',
    icon: '💰',
    name: 'FinDash',
    desc: 'A full-stack personal finance dashboard with RESTful APIs, JWT auth, SQL transactions for data integrity, and interactive charts. Features full CRUD for transactions, savings goals, and credit cards.',
    stack: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Vanilla JS', 'Tailwind CSS'],
    link: 'https://github.com/coder-naveen18',
    linkLabel: 'View on GitHub ↗',
  },
  {
    num: '02 / Backend',
    category: 'Backend',
    icon: '🛒',
    name: 'E-Commerce Backend',
    desc: 'Production-grade Django + DRF e-commerce API with products, collections, carts, orders, and reviews. Features JWT auth with Djoser, relational MySQL schema, N+1 optimized queries, and catalog filters.',
    stack: ['Django 6', 'DRF', 'Djoser', 'SimpleJWT', 'MySQL', 'django-filter'],
    link: 'https://github.com/coder-naveen18',
    linkLabel: 'View on GitHub ↗',
  },
  {
    num: '03 / Healthcare',
    category: 'Healthcare',
    icon: '🏥',
    name: 'Hospital Management System',
    desc: 'End-to-end HMS for small hospitals with patient management, OPD/IPD workflows, appointment scheduling, billing with invoice generation, role-based access, and real-time analytics dashboards.',
    stack: ['React', 'TypeScript', 'Django', 'REST APIs', 'MySQL'],
    note: 'In progress at IQuint',
  },
  {
    num: '04 / UI Engineering',
    category: 'UI Engineering',
    icon: '⚡',
    name: 'Next.js UI Overhaul',
    desc: "Rebuilt a production web app's UI from legacy code into modular Next.js components with Tailwind CSS, supporting unconventional screen sizes and improved rendering via restructured component hierarchy.",
    stack: ['Next.js', 'Tailwind CSS', 'Responsive', 'Performance'],
    note: 'computatia.in — VGU',
    featured: true,
  },
]

export const certificates: Certificate[] = [
  { icon: '🖥️', name: 'Explore a Career in Front-End Web Development', date: 'July 2025' },
  { icon: '⚙️', name: 'JavaScript Essential Training', date: 'July 2025' },
  { icon: '🌐', name: 'Explore Web Development With Node.js', date: 'August 2025' },
]


export const openSourceAchievements: string[] = [
  'Merged 6 pull requests to various open source repositories',
  'Fixed bugs and added features to Python (Django) projects',
  'Contributed to Python and JavaScript projects',
]

export const openSourceSummary =
  'Active contributor to the open source community. Participated in Hacktoberfest 2025 and achieved Supercontributor status by making meaningful contributions to various projects. Earned multiple badges through consistent effort and high-quality pull requests.'

// Holopin collage image (public-facing image that shows all badges)
export const openSourceCollage = {
  src: 'https://holopin.me/codernaveen18',
  link: 'https://holopin.io/@codernaveen18',
}

export const openSourceBadges: OpenSourceBadge[] = [
  { title: 'Hacktoberfest 2025: Level 0 Registered', icon: '🧑‍🚀', image: '/badges/hacktoberfest-level0.png', link: 'https://www.holopin.io/' },
  { title: 'Hacktoberfest 2025: Level 1 Contributor', icon: '🚀', image: '/badges/hacktoberfest-level1.png', link: 'https://www.holopin.io/' },
  { title: 'Hacktoberfest 2025: Level 2 Contributor', icon: '🛰️', image: '/badges/hacktoberfest-level2.png', link: 'https://www.holopin.io/' },
  { title: 'Hacktoberfest 2025: Level 3 Contributor', icon: '🌌', image: '/badges/hacktoberfest-level3.png', link: 'https://www.holopin.io/' },
  { title: 'Hacktoberfest 2025: Level 4 Contributor', icon: '⭐', image: '/badges/hacktoberfest-level4.png', link: 'https://www.holopin.io/' },
  { title: 'Holopin x Hacktoberfest: 1 Badge Club', icon: '🪐', image: '/badges/holopin-1-badge.png', link: 'https://www.holopin.io/' },
  { title: 'Holopin x Hacktoberfest: 5 Badge Club', icon: '🌍', image: '/badges/holopin-5-badge.png', link: 'https://www.holopin.io/' },
  { title: 'Hacktoberfest 2025: Supercontributor', icon: '🏅', image: '/badges/supercontributor.png', link: 'https://www.holopin.io/' },
]

export const contactItems: ContactItem[] = [
  { icon: '✉️', label: 'Email',    value: 'sahu18.naveen@gmail.com',         href: 'mailto:sahu18.naveen@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '+91 95714 79524',                 href: 'tel:+919571479524' },
  { icon: '💼', label: 'LinkedIn', value: 'naveen-sahu',                     href: 'https://linkedin.com/in/naveen-sahu-a61aab258/' },
  { icon: '🐙', label: 'GitHub',   value: 'coder-naveen18',                  href: 'https://github.com/coder-naveen18' },
]

export const typewriterRoles: string[] = [
  'Full Stack Developer',
  'React & Next.js Engineer',
  'Django Backend Dev',
  'UI/UX Enthusiast',
  'Problem Solver',
]
