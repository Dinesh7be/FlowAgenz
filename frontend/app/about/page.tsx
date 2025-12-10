import type { Metadata } from 'next';
import { Check, Code2, Database, Cloud, Bot, Workflow, Settings } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';
import Card, { CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About',
  description:
    'FlowAgenz is an AI engineering & automation company focusing on intelligent agents, high-performance workflows and custom LLM systems.',
};

const expertise = [
  { icon: Bot, title: 'AI Agent Development' },
  { icon: Workflow, title: 'Autonomous Workflows' },
  { icon: Settings, title: 'No-Code/Low-Code Automation' },
  { icon: Code2, title: 'LLM Fine-tuning' },
  { icon: Database, title: 'Custom API Integrations' },
  { icon: Cloud, title: 'Deployment & Infrastructure' },
];

const techStack = [
  {
    category: 'Automation',
    items: ['Make', 'n8n', 'Zapier'],
  },
  {
    category: 'AI/ML',
    items: ['OpenAI', 'Llama', 'Claude'],
  },
  {
    category: 'Frameworks',
    items: ['LangChain', 'LLMOps'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Node', 'Python'],
  },
  {
    category: 'Vector DBs',
    items: ['Pinecone', 'Weaviate', 'Qdrant'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'Supabase'],
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Who We Are"
        subtitle="FlowAgenz is an AI engineering & automation company focusing on intelligent agents, high-performance workflows and custom LLM systems. We help companies eliminate manual work and turn their operations into fully automated pipelines."
        centered
      />

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              To build autonomous systems that unlock productivity, growth and consistency — powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card
                key={item.title}
                variant="bordered"
                hover
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((stack, index) => (
              <div
                key={stack.category}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  {stack.category}
                </h4>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to work with us?"
        subtitle="Let's build something intelligent together."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
        variant="gradient"
      />
    </>
  );
}

