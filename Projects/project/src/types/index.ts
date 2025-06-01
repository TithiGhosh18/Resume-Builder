export type Template = 'modern' | 'classic' | 'minimal' | 'creative';

export interface Personal {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

export interface ResumeData {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  [key: string]: any;
}

export interface ResumeSection {
  id: string;
  label: string;
  icon: string;
}