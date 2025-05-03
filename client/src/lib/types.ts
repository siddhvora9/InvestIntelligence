// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

// Team member
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

// Transaction
export interface Transaction {
  id: number;
  category: string;
  type: string;
  company: string;
  description: string;
  amount: string;
  industry: string;
  date: string;
  image: string;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: JSX.Element;
  image?: string;
}

// Core value
export interface CoreValue {
  title: string;
  description: string;
}

// Client type
export interface ClientType {
  title: string;
  description: string;
}

// Differentiator
export interface Differentiator {
  title: string;
  description: string;
  icon?: JSX.Element;
}

// Navigation item
export interface NavItem {
  name: string;
  path: string;
  hash?: string;
  isButton?: boolean;
}
