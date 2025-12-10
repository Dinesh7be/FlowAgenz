import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/sections/CTASection';
import { formatDate, calculateReadingTime } from '@/lib/utils';

// In production, this would fetch from API
async function getBlog(slug: string) {
  // Sample blog data
  return {
    id: '1',
    title: 'Building Production-Ready AI Agents with LangChain',
    slug: slug,
    content: `
      <h2>Introduction</h2>
      <p>AI agents are autonomous systems that can plan, execute, and manage tasks without constant human intervention. In this guide, we'll explore how to build production-ready AI agents using LangChain and modern LLMs.</p>
      
      <h2>What are AI Agents?</h2>
      <p>Unlike simple chatbots that respond to individual queries, AI agents can:</p>
      <ul>
        <li>Plan multi-step tasks</li>
        <li>Use tools and APIs</li>
        <li>Remember context across interactions</li>
        <li>Make decisions based on goals</li>
      </ul>
      
      <h2>Setting Up Your Environment</h2>
      <p>To get started, you'll need Python 3.9+ and the following packages:</p>
      <pre><code>pip install langchain openai chromadb</code></pre>
      
      <h2>Building Your First Agent</h2>
      <p>We'll start with a simple agent that can search the web and answer questions. The key components are:</p>
      <ul>
        <li>Language Model (LLM)</li>
        <li>Tools for the agent to use</li>
        <li>Memory system</li>
        <li>Prompt template</li>
      </ul>
      
      <h2>Production Considerations</h2>
      <p>When deploying agents to production, consider:</p>
      <ul>
        <li>Rate limiting and cost management</li>
        <li>Error handling and fallbacks</li>
        <li>Monitoring and logging</li>
        <li>Security and access control</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI agents represent the next evolution in automation. By combining LLMs with tools and memory, we can build systems that truly understand and execute complex business processes.</p>
    `,
    excerpt: 'Learn how to build AI agents that can plan, execute, and manage tasks autonomously using LangChain and modern LLMs.',
    tags: ['AI Engineering', 'LangChain', 'Agents'],
    publishedAt: '2024-01-15T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    author: 'FlowAgenz Team',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogSinglePage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  const readingTime = calculateReadingTime(blog.content);

  return (
    <>
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blogs"
              className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Featured Image */}
            {blog.coverImage && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                {blog.title}
              </h1>

              <p className="text-xl text-muted mb-8">{blog.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-muted">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(blog.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readingTime} min read
                </span>
              </div>
            </header>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-secondary prose-p:text-muted prose-a:text-primary prose-strong:text-secondary prose-ul:text-muted prose-li:text-muted"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="border-t border-border mt-12 pt-8">
              <h4 className="text-sm font-semibold text-secondary mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title="Want to learn more?"
        subtitle="Subscribe to our newsletter or get in touch."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}

