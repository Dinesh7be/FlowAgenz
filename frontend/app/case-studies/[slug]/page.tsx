import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Building2, AlertTriangle, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/sections/CTASection';

// In production, this would fetch from API
async function getCaseStudy(slug: string) {
  return {
    id: '1',
    title: 'Reducing Support Workload by 70% with AI Agents',
    slug: slug,
    client: 'E-commerce Platform',
    clientDescription: 'A fast-growing e-commerce platform with over 100,000 monthly active users and a small but dedicated support team.',
    challenge: 'The client was struggling with high support ticket volumes, leading to long response times and customer dissatisfaction. Their 5-person support team was handling over 500 tickets daily, with 60% being repetitive queries about orders, returns, and shipping.',
    solution: `We designed and implemented a comprehensive AI support solution:

1. **AI Support Agent**: Built using GPT-4 and LangChain, capable of understanding context and providing accurate responses.

2. **Knowledge Base Integration**: Connected to their existing documentation, order management system, and shipping APIs for real-time information.

3. **Smart Routing**: Complex issues that require human intervention are automatically categorized and routed to the appropriate team member.

4. **Continuous Learning**: The system learns from human agent responses to improve over time.`,
    techUsed: ['OpenAI GPT-4', 'LangChain', 'n8n', 'Zendesk API', 'PostgreSQL', 'Redis'],
    impact: [
      '70% reduction in support workload',
      '90% faster average response times',
      '45% improvement in customer satisfaction scores',
      '$150,000 annual savings in support costs',
      '24/7 availability without additional staffing',
    ],
    content: 'Detailed implementation content...',
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
  };
}

export default async function CaseStudySinglePage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);

  return (
    <>
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>

            {/* Featured Image */}
            {caseStudy.coverImage && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={caseStudy.coverImage}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                {caseStudy.title}
              </h1>
            </header>

            {/* Client Section */}
            <section className="mb-12 p-6 bg-background-alt rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-secondary">Client</h2>
              </div>
              <p className="text-lg font-medium text-secondary mb-2">{caseStudy.client}</p>
              <p className="text-muted">{caseStudy.clientDescription}</p>
            </section>

            {/* Challenge Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-xl font-semibold text-secondary">Challenge</h2>
              </div>
              <p className="text-muted text-lg leading-relaxed">{caseStudy.challenge}</p>
            </section>

            {/* Solution Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-secondary">Solution</h2>
              </div>
              <div
                className="prose prose-lg max-w-none prose-headings:text-secondary prose-p:text-muted prose-strong:text-secondary prose-ul:text-muted prose-li:text-muted"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution.replace(/\n/g, '<br/>') }}
              />
            </section>

            {/* Technology Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-secondary">Technology Used</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techUsed.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Impact Section */}
            <section className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-secondary">Impact</h2>
              </div>
              <ul className="space-y-4">
                {caseStudy.impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                    </span>
                    <span className="text-lg text-secondary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <CTASection
        title="Start Your Project"
        subtitle="Ready to achieve similar results for your business?"
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}

