import { Bot, Workflow, Brain } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';

const services = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'We build domain-specific AI agents that can plan, execute, communicate, and manage tasks autonomously.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    description:
      'We create Make, n8n, and code-based workflows that remove repetitive work and connect your entire business.',
  },
  {
    icon: Brain,
    title: 'Custom Models',
    description:
      'From prompt engineering to fully fine-tuned LLMs, we deliver models trained on your data with your business logic.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What FlowAgenz Does
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="bordered"
              hover
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

