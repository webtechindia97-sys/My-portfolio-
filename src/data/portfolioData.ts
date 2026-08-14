import { SkillItem, ProjectItem, ServiceItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sahil Ansari',
  roles: ['Web Developer', 'Data Entry Professional', 'Computer Science Engineer', 'Freelance Specialist'],
  tagline: 'Passionate about building modern, responsive websites and delivering accurate, efficient data management solutions.',
  email: 'sahilansari35283@gmail.com',
  phone: '+91 98765 43210',
  location: 'India (Available Worldwide for Remote Work)',
  educationShort: 'Diploma in Computer Science Engineering',
  status: 'Available for Freelance & Full-time Roles',
  bio: 'I am a Diploma Computer Science Engineer with a dual passion for modern web engineering and meticulous data management. I specialize in building responsive, blazing-fast web applications using modern web technologies alongside creating automated, error-free Excel & MySQL data pipelines. My goal is to build practical digital solutions that solve real business problems with speed, aesthetic elegance, and 100% precision.',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:sahilansari35283@gmail.com',
    whatsapp: 'https://wa.me/919876543210',
  },
  stats: [
    { label: 'Projects Completed', value: '25+', icon: 'Briefcase' },
    { label: 'Data Accuracy Rate', value: '99.9%', icon: 'CheckCircle2' },
    { label: 'Client Satisfaction', value: '100%', icon: 'Smile' },
    { label: 'Turnaround Time', value: '24-48h', icon: 'Zap' },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    level: 95,
    experience: '3+ Years',
    description: 'Semantic markup, accessibility (a11y), SEO optimization, modern HTML5 APIs and audio/video integrations.',
    iconName: 'Code2',
    popular: true,
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    level: 92,
    experience: '3+ Years',
    description: 'Flexbox, Grid layouts, keyframe animations, glassmorphism, responsive media queries, and modern UI styling.',
    iconName: 'Palette',
    popular: true,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 88,
    experience: '2+ Years',
    description: 'ES6+ syntax, DOM manipulation, asynchronous programming, Fetch/AJAX API, interactive widgets, and client-side logic.',
    iconName: 'FileCode2',
    popular: true,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap 5',
    category: 'frontend',
    level: 94,
    experience: '3+ Years',
    description: 'Rapid prototyping, responsive utility classes, custom themes, components, modals, offcanvas navigation, and flex layouts.',
    iconName: 'LayoutGrid',
    popular: true,
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'frontend',
    level: 96,
    experience: '3+ Years',
    description: 'Mobile-first architectural design, cross-browser compatibility, touch interactions, fluid typography, and viewport optimization.',
    iconName: 'Smartphone',
    popular: true,
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    level: 84,
    experience: '2+ Years',
    description: 'Server-side scripting, RESTful APIs, form handling, authentication systems, and dynamic database integrations.',
    iconName: 'Server',
    popular: true,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 80,
    experience: '2+ Years',
    description: 'Data processing scripts, automation utilities, backend logic, web scraping, and spreadsheet manipulation scripts.',
    iconName: 'Terminal',
    popular: false,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'backend',
    level: 87,
    experience: '2+ Years',
    description: 'Relational database schema design, complex SQL joins, indexing, data import/export pipelines, and query optimization.',
    iconName: 'Database',
    popular: true,
  },
  {
    id: 'excel',
    name: 'MS Excel',
    category: 'data',
    level: 98,
    experience: '4+ Years',
    description: 'Advanced VLOOKUP/XLOOKUP, Pivot Tables, Conditional Formatting, Data Cleaning, Formulas, Macros, and Executive Dashboards.',
    iconName: 'Sheet',
    popular: true,
  },
  {
    id: 'data-entry',
    name: 'Data Entry',
    category: 'data',
    level: 99,
    experience: '4+ Years',
    description: 'High-speed 60+ WPM alphanumeric typing, 99.9% error-free data verification, transcription, CMS data input, and CRM updates.',
    iconName: 'Keyboard',
    popular: true,
  },
  {
    id: 'git-github',
    name: 'Git / GitHub',
    category: 'tools',
    level: 85,
    experience: '2+ Years',
    description: 'Version control workflows, branching, commits, repository maintenance, collaborative pull requests, and deployment.',
    iconName: 'GitBranch',
    popular: false,
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'tools',
    level: 90,
    experience: '2+ Years',
    description: 'Harnessing AI LLMs (Gemini, Claude, GPT) for automated code generation, content drafting, data structuring, and debugging.',
    iconName: 'Sparkles',
    popular: true,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'ShopSphere E-Commerce Website',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Website',
    description: 'Modern, high-converting e-commerce web platform featuring real-time product filtering, interactive shopping cart, promo codes, and fast responsive checkout.',
    longDescription: 'ShopSphere is a full-featured e-commerce storefront crafted for dynamic product discovery and frictionless shopping. Includes category filtering, sorting, price range sliders, reactive cart state, simulated Stripe-style checkout, and responsive order confirmation.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'PHP', 'MySQL'],
    features: [
      'Interactive Product Catalog with instant multi-tag search',
      'Dynamic Cart Drawer with quantity adjusters & price auto-calc',
      'Responsive Mobile Bottom Sheet Navigation',
      'Order Summary Breakdown with Coupon & Tax Calculators'
    ],
    liveDemoUrl: '#live-demo-ecommerce',
    githubUrl: 'https://github.com',
    featured: true,
    demoType: 'interactive',
    interactiveMetrics: {
      speed: '98/100 Lighthouse',
      conversion: '+35% UX Boost',
      users: 'Responsive on all devices',
    }
  },
  {
    id: 'grocery-delivery',
    title: 'FreshMart Grocery Delivery Website',
    category: 'grocery',
    categoryLabel: 'Grocery Delivery Website',
    description: 'Fast, customer-centric online grocery and essentials delivery web application with category shelf navigation, fresh badge indicators, and delivery time slot selection.',
    longDescription: 'FreshMart empowers local shoppers to browse fresh vegetables, fruits, dairy, and pantry items with instant stock indicators. Features a clean category slider, express checkout modal, dynamic address verification, and delivery scheduler.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Local Storage'],
    features: [
      'Category Carousel for Fresh Fruits, Veggies, Dairy, & Bakery',
      'One-click Quick Add to basket with instant total recalculation',
      'Delivery Schedule Slot Picker & pincode availability check',
      'Clean high-contrast mobile layout optimized for quick shopping'
    ],
    liveDemoUrl: '#live-demo-grocery',
    githubUrl: 'https://github.com',
    featured: true,
    demoType: 'interactive',
    interactiveMetrics: {
      speed: 'Sub-second Load',
      accuracy: 'Real-time Cart Sync',
    }
  },
  {
    id: 'business-website',
    title: 'Apex Corporate Business Website',
    category: 'business',
    categoryLabel: 'Business Website',
    description: 'Corporate multi-section business website for consulting & agency services with lead generation forms, interactive quote calculator, and service tier breakdown.',
    longDescription: 'A sleek corporate web presence engineered to convert visitors into clients. Features interactive project cost estimator, client testimonial slider, service portfolio accordion, and an integrated consultation booking modal.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Responsive Design'],
    features: [
      'Interactive Cost & Timeline Estimator Calculator',
      'Client Case Studies with downloadable PDF briefs',
      'Lead Capture Form with real-time field validation',
      'Smooth scrollspy navigation and floating quick-contact bar'
    ],
    liveDemoUrl: '#live-demo-business',
    githubUrl: 'https://github.com',
    featured: true,
    demoType: 'interactive',
    interactiveMetrics: {
      conversion: '2.8x Lead Rate',
      speed: '100% SEO Friendly',
    }
  },
  {
    id: 'data-entry-analytics',
    title: 'Enterprise Excel & Data Entry Automation Suite',
    category: 'data-entry',
    categoryLabel: 'Data Entry & Excel Projects',
    description: 'Comprehensive data cleansing, spreadsheet automation, and MySQL synchronization suite handling 50,000+ customer records with 99.9% accuracy.',
    longDescription: 'An end-to-end data entry and spreadsheet management project demonstrating advanced MS Excel capabilities (Pivot Tables, VLOOKUP/XLOOKUP formulas, automated macros) integrated with MySQL relational database tables for instant reconciliation and reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    technologies: ['MS Excel', 'MySQL', 'Python Automation', 'Data Cleansing', 'Pivot Dashboards'],
    features: [
      'Automated Data Cleansing & Deduplication pipelines',
      'Interactive Excel Sales & Inventory KPI Dashboard with Charts',
      'SQL Query Scripts for Bulk Record Validation and Integrity Checks',
      '100% error-free data verification & audit log generation'
    ],
    liveDemoUrl: '#live-demo-data',
    githubUrl: 'https://github.com',
    featured: true,
    demoType: 'interactive',
    interactiveMetrics: {
      accuracy: '99.9% Precision',
      speed: '50k+ Records Processed',
    }
  },
  {
    id: 'web-dev-portal',
    title: 'TaskFlow Dynamic Web Application',
    category: 'web-dev',
    categoryLabel: 'Web Development Projects',
    description: 'Feature-rich web portal featuring dynamic CRUD operations, task prioritization, dark/light aesthetics, and asynchronous PHP/MySQL database syncing.',
    longDescription: 'A modular productivity web application built with clean semantic HTML5, modern CSS3 styling, vanilla JavaScript DOM handling, and PHP backend endpoints. Highlights robust user session handling and responsive task boards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap 5'],
    features: [
      'Dynamic Kanban Board with drag-and-drop status updates',
      'Live Task Filter by priority, tag, and deadline',
      'PHP REST API with secure input sanitization',
      'Responsive UI with instant optimistic client updates'
    ],
    liveDemoUrl: '#live-demo-taskflow',
    githubUrl: 'https://github.com',
    featured: false,
    demoType: 'interactive',
    interactiveMetrics: {
      speed: 'Lightning Fast',
      users: 'Multi-device ready',
    }
  },
  {
    id: 'fitpulse-wellness',
    title: 'FitPulse Fitness & Lifestyle Hub',
    category: 'web-dev',
    categoryLabel: 'Web Development Projects',
    description: 'High-energy responsive fitness studio website with class schedule filter, membership tier comparison, and interactive BMI calculator widget.',
    longDescription: 'Engineered with vibrant modern typography, bold neon highlights, smooth scroll animations, and an interactive BMI health calculator to convert active fitness enthusiasts into gym members.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Bootstrap'],
    features: [
      'Interactive BMI & Caloric Goal Calculator Widget',
      'Weekly Class Schedule Grid with category filter tabs',
      'Membership Pricing Cards with toggle monthly/yearly plans',
      'Optimized lightweight assets with instant mobile responsiveness'
    ],
    liveDemoUrl: '#live-demo-fitpulse',
    githubUrl: 'https://github.com',
    featured: false,
    demoType: 'interactive',
    interactiveMetrics: {
      conversion: 'High Engagement',
      speed: 'Mobile First 100%',
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    shortDesc: 'Custom, clean-coded websites built from scratch using HTML5, CSS3, JavaScript, PHP, and modern frameworks.',
    iconName: 'Code',
    features: [
      'Semantic, clean, and maintainable codebase',
      'Dynamic database integration with MySQL/PHP',
      'Fast loading speed & optimized asset pipelines',
      'Cross-browser testing and validation'
    ],
    deliverables: 'Complete functional website + full source code + documentation',
    badge: 'Core Expertise',
    popular: true,
  },
  {
    id: 'responsive-design',
    title: 'Responsive Website Design',
    shortDesc: 'Pixel-perfect mobile, tablet, and desktop layouts ensuring your brand looks stunning on all screen sizes.',
    iconName: 'Smartphone',
    features: [
      'Mobile-first responsive architecture',
      'Fluid grids, flexible imagery & custom breakpoints',
      'Touch-friendly navigation & mobile menus',
      'High-DPI Retina display sharpness'
    ],
    deliverables: '100% responsive web layouts verified across devices',
    badge: 'High Demand',
    popular: false,
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Website Development',
    shortDesc: 'Conversion-focused online storefronts with intuitive product catalogs, carts, and checkout flows.',
    iconName: 'ShoppingCart',
    features: [
      'Product catalog with filtering & search',
      'Interactive shopping cart & checkout simulation',
      'Order management & inventory display',
      'Mobile checkout optimization'
    ],
    deliverables: 'Ready-to-deploy e-commerce storefront with product management',
    badge: 'Popular',
    popular: true,
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Development',
    shortDesc: 'High-impact, conversion-optimized landing pages designed to capture leads, boost sales, and drive actions.',
    iconName: 'Rocket',
    features: [
      'Persuasive visual hierarchy & call-to-actions',
      'Fast sub-second loading time for ad traffic',
      'Integrated lead capture forms with validation',
      'A/B test ready structure & SEO tags'
    ],
    deliverables: 'High-converting single-page landing site + lead form',
    badge: 'Fast Turnaround',
    popular: false,
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    shortDesc: 'Accurate, high-speed data entry, web research, document transcription, and CMS product population.',
    iconName: 'Keyboard',
    features: [
      'High typing speed (60+ WPM) with 99.9% accuracy',
      'Web research, data scraping & extraction',
      'CRM, ERP & CMS data entry (WordPress, Shopify, etc.)',
      'Strict confidentiality and data security'
    ],
    deliverables: 'Cleaned, structured data files (Excel, CSV, SQL, JSON)',
    badge: 'Top Accuracy',
    popular: true,
  },
  {
    id: 'excel-management',
    title: 'Excel Data Management',
    shortDesc: 'Advanced spreadsheet formatting, automated VLOOKUP/XLOOKUP formulas, Pivot Tables, and KPI dashboards.',
    iconName: 'FileSpreadsheet',
    features: [
      'Complex formula development & automation',
      'Custom Pivot Tables & visual KPI charts',
      'Data deduplication, sanitization & standardization',
      'Automated summary reports & template creation'
    ],
    deliverables: 'Automated, error-free Excel workbook with interactive dashboard',
    badge: 'Client Favorite',
    popular: false,
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    shortDesc: 'Ongoing website updates, bug fixes, content additions, security enhancements, and performance tune-ups.',
    iconName: 'Wrench',
    features: [
      'Regular content & product updates',
      'Bug fixes, link checks & CSS tweaks',
      'Database backups & speed optimization',
      'Security review and uptime monitoring'
    ],
    deliverables: 'Monthly / per-task maintenance reports and rapid support',
    badge: 'Reliable Support',
    popular: false,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Freelance Web Developer & Data Specialist',
    companyOrType: 'Self-Employed / Freelance',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Delivering end-to-end web development solutions for international clients and local businesses, alongside executing high-volume, precision data entry and spreadsheet automation projects.',
    achievements: [
      'Built and deployed 15+ custom responsive websites and landing pages with 100% client satisfaction ratings.',
      'Constructed automated Excel data management workflows that reduced manual data entry time by 40%.',
      'Maintained a 99.9% accuracy record across 50,000+ processed database and spreadsheet records.',
      'Implemented modern UI/UX principles with Bootstrap 5 and vanilla JavaScript to boost page loading speeds.'
    ],
    skillsUsed: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'PHP', 'MS Excel', 'MySQL', 'Prompt Engineering'],
    type: 'both'
  },
  {
    id: 'exp-2',
    role: 'Web Development & Technical Intern',
    companyOrType: 'Tech Solutions & Development Lab',
    location: 'India',
    period: '2023 - 2024',
    description: 'Collaborated on frontend and backend web modules, translated Figma wireframes into responsive HTML/CSS code, and managed database tables in MySQL.',
    achievements: [
      'Developed reusable UI components in Bootstrap and CSS3 for e-commerce and corporate client projects.',
      'Assisted in writing secure PHP server-side endpoints for contact forms and user data collection.',
      'Conducted cross-browser compatibility tests and resolved layout inconsistencies across iOS and Android browsers.'
    ],
    skillsUsed: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Git', 'Responsive Design'],
    type: 'web'
  },
  {
    id: 'exp-3',
    role: 'Data Entry & Spreadsheet Specialist',
    companyOrType: 'Digital Data & Business Services',
    location: 'Contract / Remote',
    period: '2022 - 2023',
    description: 'Executed high-speed data transcription, inventory cataloging, data cleansing, and Excel formula generation for corporate reporting.',
    achievements: [
      'Accurately transcribed and structured raw handwritten and PDF records into standardized Excel spreadsheets.',
      'Built automated Pivot Table reporting templates for monthly sales and stock tracking.',
      'Awarded recognition for zero-defect data delivery and on-time project completion.'
    ],
    skillsUsed: ['MS Excel', 'Data Cleansing', 'Keyboard 60+ WPM', 'VLOOKUP', 'Pivot Tables', 'Data Verification'],
    type: 'data'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Diploma in Computer Science Engineering',
    institution: 'State Board of Technical Education',
    period: 'Completed with Distinction',
    status: 'Graduated / Engineering Diploma',
    scoreOrGrade: 'First Class with Distinction',
    keyHighlights: [
      'Comprehensive coursework in Data Structures, Algorithms, Web Technologies, Database Management Systems (DBMS), and Computer Networks.',
      'Hands-on engineering projects in Full-Stack Web Development, MySQL Database Design, and Software Quality Assurance.',
      'Active participant in technical coding challenges and computer science symposiums.'
    ],
    badge: 'Primary Technical Degree'
  },
  {
    id: 'edu-2',
    degree: '10th Passed (Secondary School Certificate)',
    institution: 'State Board of Secondary Education',
    period: 'Completed Successfully',
    status: 'Passed with High Merit',
    scoreOrGrade: 'Distinction in Mathematics & Science',
    keyHighlights: [
      'Strong foundational grounding in Mathematics, Physical Sciences, and Computer Fundamentals.',
      'Developed early enthusiasm for computer science, logic formulation, and digital technologies.'
    ],
    badge: 'Secondary Education'
  }
];
