// Tipos TypeScript para la aplicación

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  longDescription?: string;
  benefits?: string[];
  applications?: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details?: string;
  image?: string;
}

export interface Industry {
  name: string;
  icon: string;
  description?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface QuoteFormData extends ContactFormData {
  serviceType: string;
  industry?: string;
  projectDescription: string;
  quantity?: string;
  dimensions?: string;
  finishType?: string;
  color?: string;
  estimatedDate?: string;
  files?: FileList;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  finishType: string;
  images: string[];
  before?: string;
  after?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
}
