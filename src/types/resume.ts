export interface ResumeBasics {
  name: string;
  label: string;
  image?: string;
  summary: string;
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    resume: string;
    email: string;
  };
}

export interface ResumeExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ResumeSkills {
  [category: string]: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  period: string;
}

export interface OpenSourceContribution {
  id: number;
  event: string;
  year: string;
  description: string;
  achievements?: string[];
  badge?: string;
  badgeImage?: string;
  link?: string;
}

export interface ResumeProject {
  id: number;
  title: string;
  description: string;
  stack: string[];
  highlights?: string[];
  status?: 'in-progress' | 'completed';
  githubUrl: string;
  liveUrl?: string;
}

export interface ResumeData {
  basics: ResumeBasics;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  education: ResumeEducation;
  certifications: string[];
  openSource: OpenSourceContribution[];
}
