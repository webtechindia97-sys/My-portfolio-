export type ThemeMode = 'dark' | 'light';

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'data' | 'tools';
  level: number; // 0 - 100
  experience: string;
  description: string;
  iconName: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-dev' | 'ecommerce' | 'grocery' | 'business' | 'data-entry';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  demoType?: 'interactive' | 'external';
  interactiveMetrics?: {
    accuracy?: string;
    speed?: string;
    users?: string;
    conversion?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  deliverables: string;
  badge?: string;
  popular?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrType: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
  type: 'web' | 'data' | 'both';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  scoreOrGrade?: string;
  keyHighlights: string[];
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
