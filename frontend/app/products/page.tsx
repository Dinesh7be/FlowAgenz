import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ProductCard from '@/components/product/ProductCard';
import CTASection from '@/components/sections/CTASection';
import type { Product } from '@/types';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Our AI Tools & Solutions - Explore our suite of AI-powered products and tools for business automation.',
};

// Sample products data - In production, this would come from the API
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'AI Support Agent',
    slug: 'ai-support-agent',
    overview: 'An intelligent support agent that handles customer queries 24/7, reducing support workload by up to 70% while improving response times and customer satisfaction.',
    features: [
      'Natural language understanding',
      'Multi-channel support (chat, email, voice)',
      'Seamless human handoff',
      'Custom knowledge base integration',
      'Analytics and reporting dashboard',
    ],
    techUsed: ['GPT-4', 'LangChain', 'Vector DB'],
    demoUrl: 'https://demo.flowagenz.com/support-agent',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    name: 'Workflow Monitoring Dashboard',
    slug: 'workflow-monitoring-dashboard',
    overview: 'A comprehensive dashboard for monitoring all your automated workflows across Make, n8n, and custom integrations in one place.',
    features: [
      'Real-time workflow status',
      'Error alerting and notifications',
      'Performance analytics',
      'Cost tracking',
      'Historical data and trends',
    ],
    techUsed: ['React', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://demo.flowagenz.com/workflow-dashboard',
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
  },
  {
    id: '3',
    name: 'AI Sales Assistant',
    slug: 'ai-sales-assistant',
    overview: 'An AI-powered sales assistant that qualifies leads, schedules meetings, and provides personalized follow-ups to increase conversion rates.',
    features: [
      'Lead qualification automation',
      'Personalized outreach sequences',
      'Calendar integration',
      'CRM synchronization',
      'Conversation intelligence',
    ],
    techUsed: ['Claude AI', 'Make.com', 'HubSpot API'],
    demoUrl: 'https://demo.flowagenz.com/sales-assistant',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: '4',
    name: 'Autonomous CRM Processor',
    slug: 'autonomous-crm-processor',
    overview: 'An autonomous system that keeps your CRM data clean, enriched, and actionable without manual intervention.',
    features: [
      'Automatic data enrichment',
      'Duplicate detection and merging',
      'Lead scoring automation',
      'Activity logging',
      'Data quality monitoring',
    ],
    techUsed: ['n8n', 'Clearbit API', 'PostgreSQL'],
    demoUrl: 'https://demo.flowagenz.com/crm-processor',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '5',
    name: 'RAG Knowledge Assistant',
    slug: 'rag-knowledge-assistant',
    overview: 'A retrieval-augmented generation system that provides accurate answers from your company documentation, knowledge base, and internal resources.',
    features: [
      'Document ingestion and indexing',
      'Semantic search',
      'Citation and source tracking',
      'Multi-format support',
      'Access control integration',
    ],
    techUsed: ['Pinecone', 'OpenAI', 'FastAPI'],
    demoUrl: 'https://demo.flowagenz.com/rag-assistant',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Our AI Tools & Solutions"
        subtitle="Explore our suite of AI-powered products and tools designed to automate and scale your business operations."
        centered
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        subtitle="Let us build a tailored AI system for your specific needs."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}

