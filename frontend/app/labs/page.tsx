import type { Metadata } from 'next';
import { 
  Users, 
  FileCode, 
  Brain, 
  Sparkles, 
  Database, 
  LayoutDashboard, 
  Layers 
} from 'lucide-react';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';
import Card, { CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Labs',
  description:
    'FlowAgenz Labs - Our experimental space where we build prototypes, test new models and explore next-gen AI systems.',
};

const experiments = [
  {
    icon: Users,
    title: 'Multi-agent orchestration',
    description: 'Coordinating multiple AI agents to work together on complex tasks.',
  },
  {
    icon: FileCode,
    title: 'Workflow blueprints',
    description: 'Pre-built automation templates for common business processes.',
  },
  {
    icon: Brain,
    title: 'Data-aware autonomous agents',
    description: 'Agents that understand and adapt to your business data.',
  },
  {
    icon: Sparkles,
    title: 'Mini LLM fine-tuning',
    description: 'Compact models optimized for specific use cases.',
  },
  {
    icon: Database,
    title: 'RAG experiments',
    description: 'Retrieval-augmented generation for accurate, context-aware responses.',
  },
  {
    icon: LayoutDashboard,
    title: 'Internal dashboards',
    description: 'Monitoring and analytics tools for AI-powered systems.',
  },
  {
    icon: Layers,
    title: 'Automation templates',
    description: 'Ready-to-deploy workflow templates for quick implementation.',
  },
];

export default function LabsPage() {
  return (
    <>
      <Hero
        title="FlowAgenz Labs"
        subtitle="Our experimental space where we build prototypes, test new models and explore next-gen AI systems."
        centered
      />

      {/* Experiments Grid */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            In Labs Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => (
              <Card
                key={experiment.title}
                variant="bordered"
                hover
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6">
                    <experiment.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {experiment.title}
                  </h3>
                  <p className="text-muted">{experiment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discover Our Experiments"
        subtitle="Want early access to our latest innovations?"
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}

