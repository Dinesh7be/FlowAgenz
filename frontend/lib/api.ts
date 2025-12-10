import type {
  Blog,
  BlogListResponse,
  CaseStudy,
  CaseStudyListResponse,
  Product,
  ProductListResponse,
  ContactFormData,
} from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Blog API
export async function getBlogs(
  page = 1,
  limit = 10
): Promise<BlogListResponse> {
  return fetchApi<BlogListResponse>(`/blogs?page=${page}&limit=${limit}`);
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return fetchApi<Blog>(`/blogs/${slug}`);
}

// Case Study API
export async function getCaseStudies(): Promise<CaseStudyListResponse> {
  return fetchApi<CaseStudyListResponse>('/case-studies');
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy> {
  return fetchApi<CaseStudy>(`/case-studies/${slug}`);
}

// Product API
export async function getProducts(): Promise<ProductListResponse> {
  return fetchApi<ProductListResponse>('/products');
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return fetchApi<Product>(`/products/${slug}`);
}

// Contact API
export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'file' && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }
  });

  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}

