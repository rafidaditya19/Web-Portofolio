export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  education: {
    degree: string;
    major: string;
    status: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number | string;
  category: "BNSP" | "Industry" | "Government" | "Academic";
  credentialId?: string;
  image?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  location: string;
  year: number | string;
  summary: string;
  highlights: string[];
  techStack: string[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface TimelineUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  tag?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
