// Blog Types
export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListResponse {
  data: Blog[];
  pagination: Pagination;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  techUsed: string[];
  impact: string[];
  content: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CaseStudyListResponse {
  data: CaseStudy[];
  pagination?: Pagination;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  overview: string;
  features: string[];
  techUsed: string[];
  demoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  data: Product[];
  pagination?: Pagination;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  requirements: string;
  budget?: string;
  file?: File;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  requirements: string;
  budget?: string;
  fileUrl?: string;
  createdAt: string;
}

// Pagination
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// API Response
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Service Card
export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

// Lab Experiment
export interface LabExperiment {
  title: string;
  description?: string;
}

