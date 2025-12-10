import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

// In production, this would fetch from API
async function getProduct(slug: string) {
  return {
    id: '1',
    name: 'AI Support Agent',
    slug: slug,
    overview: 'An intelligent support agent that handles customer queries 24/7, reducing support workload by up to 70% while improving response times and customer satisfaction. Built with state-of-the-art language models and designed for seamless integration with your existing tools.',
    features: [
      'Natural language understanding with context awareness',
      'Multi-channel support (chat, email, voice)',
      'Seamless human handoff for complex issues',
      'Custom knowledge base integration',
      'Analytics and reporting dashboard',
      'Multi-language support',
      'Sentiment analysis and escalation',
      'Continuous learning from interactions',
    ],
    techUsed: ['GPT-4', 'LangChain', 'Vector DB', 'FastAPI', 'React'],
    demoUrl: 'https://demo.flowagenz.com/support-agent',
    benefits: [
      'Reduce support costs by up to 70%',
      'Provide 24/7 instant responses',
      'Improve customer satisfaction scores',
      'Free up human agents for complex issues',
      'Scale support without adding headcount',
    ],
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product.name,
    description: product.overview,
  };
}

export default async function ProductSinglePage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return (
    <>
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/products"
              className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8">
                {product.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Try Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
                <Link href="/contact" className="btn-outline">
                  Contact Sales
                </Link>
              </div>
            </header>

            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background-alt rounded-xl"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
              <h2 className="text-2xl font-bold text-secondary mb-6">Benefits</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {product.techUsed.map((tech) => (
                  <Badge key={tech} variant="primary" className="text-base px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Schedule a demo or contact our team to learn more."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="gradient"
      />
    </>
  );
}

