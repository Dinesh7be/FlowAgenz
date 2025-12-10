'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/sections/Hero';
import BlogCard from '@/components/blog/BlogCard';
import type { Blog } from '@/types';

const categories = [
  'All',
  'AI Engineering',
  'Automation',
  'Tutorials',
  'Updates',
  'Case Studies',
];

// Sample blog data - In production, this would come from the API
const allBlogs: Blog[] = [
  {
    id: '1',
    title: 'Building Production-Ready AI Agents with LangChain',
    slug: 'building-production-ready-ai-agents-langchain',
    content: 'A comprehensive guide to building AI agents that can handle real-world tasks. AI agents are autonomous systems that can plan, execute, and manage tasks without constant human intervention. In this guide, we explore how to build production-ready AI agents using LangChain and modern LLMs. Learn about the key components including language models, tools, memory systems, and prompt templates.',
    excerpt: 'Learn how to build AI agents that can plan, execute, and manage tasks autonomously using LangChain and modern LLMs.',
    tags: ['AI Engineering', 'LangChain', 'Agents'],
    publishedAt: '2024-01-15T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Automating Business Workflows with n8n and Make',
    slug: 'automating-business-workflows-n8n-make',
    content: 'Step-by-step tutorial on creating powerful automation workflows. Business workflow automation has become essential for modern companies looking to scale efficiently. Both n8n and Make offer powerful automation capabilities, but they excel in different areas. We walk through creating your first workflow in both platforms.',
    excerpt: 'Discover how to eliminate repetitive tasks and connect your business tools with powerful automation platforms.',
    tags: ['Automation', 'n8n', 'Make'],
    publishedAt: '2024-01-10T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: '3',
    title: 'Fine-tuning LLMs for Domain-Specific Applications',
    slug: 'fine-tuning-llms-domain-specific',
    content: 'Understanding when and how to fine-tune language models. Fine-tuning is not always necessary. Here is when it makes sense and a step-by-step guide to fine-tuning your first model for domain-specific applications.',
    excerpt: 'When to fine-tune vs prompt engineering, and how to create models that understand your business domain.',
    tags: ['AI Engineering', 'LLM', 'Fine-tuning'],
    publishedAt: '2024-01-05T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
  },
  {
    id: '4',
    title: 'RAG Systems: Building Knowledge-Aware AI Applications',
    slug: 'rag-systems-knowledge-aware-ai',
    content: 'Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge retrieval. This comprehensive guide covers vector databases, embedding strategies, and building production RAG systems.',
    excerpt: 'A deep dive into RAG architecture, vector databases, and building AI systems that leverage your companys knowledge.',
    tags: ['AI Engineering', 'RAG', 'Vector DB'],
    publishedAt: '2024-01-02T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    createdAt: '2024-01-02T10:00:00Z',
    updatedAt: '2024-01-02T10:00:00Z',
  },
  {
    id: '5',
    title: 'Building Slack Bots with AI Integration',
    slug: 'building-slack-bots-ai-integration',
    content: 'Learn how to create intelligent Slack bots that can answer questions, automate tasks, and integrate with your business systems using modern AI APIs.',
    excerpt: 'Create intelligent Slack bots that automate team communication and integrate with your AI systems.',
    tags: ['Automation', 'Slack', 'Tutorials'],
    publishedAt: '2023-12-28T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    createdAt: '2023-12-28T10:00:00Z',
    updatedAt: '2023-12-28T10:00:00Z',
  },
  {
    id: '6',
    title: 'Prompt Engineering Best Practices for Production',
    slug: 'prompt-engineering-best-practices',
    content: 'Master the art of prompt engineering with proven techniques for creating reliable, consistent AI outputs in production environments.',
    excerpt: 'Master prompt engineering techniques for reliable and consistent AI outputs in production systems.',
    tags: ['AI Engineering', 'Tutorials'],
    publishedAt: '2023-12-20T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    createdAt: '2023-12-20T10:00:00Z',
    updatedAt: '2023-12-20T10:00:00Z',
  },
];

const ITEMS_PER_PAGE = 3;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter blogs by category
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'All') {
      return allBlogs;
    }
    return allBlogs.filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase() === selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero
        title="Insights, Tutorials & Engineering Notes"
        subtitle="Articles on AI agents, workflow automation, model training, and real-world implementation guides."
        centered
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-primary text-white'
                    : 'bg-background-alt text-muted hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {paginatedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No articles found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                {/* Previous button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-background-alt text-muted hover:bg-primary/10 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      page === currentPage
                        ? 'bg-primary text-white'
                        : 'bg-background-alt text-muted hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-background-alt text-muted hover:bg-primary/10 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Results info */}
          <div className="text-center mt-6 text-muted text-sm">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredBlogs.length)} of {filteredBlogs.length} articles
          </div>
        </div>
      </section>
    </>
  );
}
