export type NavPage = 'home' | 'studio' | 'projects' | 'services' | 'process' | 'contact';

export type ProjectCategory = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'WORKSPACES' | 'RENOVATION';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Workspace' | 'Renovation' | 'Villa';
  filterCategory: 'RESIDENTIAL' | 'COMMERCIAL' | 'WORKSPACES' | 'RENOVATION';
  location: string;
  year: string;
  area: string;
  heroImage: string;
  overview: string;
  challenge: string;
  concept: string;
  services: string[];
  materials: string[];
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  summary: string;
  details: string;
}

export interface Testimonial {
  quote: string;
  clientName: string;
  projectTitle: string;
  projectType: string;
  year: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  size: 'tall' | 'wide' | 'square';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  approxArea: string;
  budget: string;
  timeline: string;
  message: string;
}
