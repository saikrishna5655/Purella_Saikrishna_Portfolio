export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  tagline: string;
  roles: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'ml' | 'cloud' | 'visualization' | 'mlops' | 'bigdata';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  coursework: string[];
  projects: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: {
    summary: string;
    achievements: string[];
  };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education;
}