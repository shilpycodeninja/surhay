export interface IndustrySlide {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
  image: string;
  uiCaption: string;
  metrics: { label: string; value: string };
}

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  results: string;
  layout: 'left' | 'right' | 'full';
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  scope: string;
  features: string[];
  highlight?: boolean;
  timeline: string;
}

export interface ArticleItem {
  id: string;
  category: string;
  date: string;
  title: string;
  readTime: string;
  description: string;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  detail?: string;
}

export interface InquiryFormData {
  industry: string;
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}
