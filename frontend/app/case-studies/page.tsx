import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CaseStudyCard from '@/components/case-study/CaseStudyCard';
import CTASection from '@/components/sections/CTASection';
import type { CaseStudy } from '@/types';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real Transformations via AI & Automation - See how FlowAgenz has helped businesses automate and scale.',
};

// Sample case studies data - In production, this would come from the API
const sampleCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Reducing Support Workload by 70% with AI Agents',
    slug: 'reducing-support-workload-ai-agents',
    client: 'E-commerce Platform',
    challenge: 'The client was struggling with high support ticket volumes, leading to long response times and customer dissatisfaction. Their support team was overwhelmed with repetitive queries.',
    solution: 'We built an AI-powered support agent that handles common queries automatically, routes complex issues to the right team members, and provides instant responses 24/7.',
    techUsed: ['OpenAI GPT-4', 'LangChain', 'n8n', 'Zendesk API'],
    impact: ['70% reduction in support workload', '90% faster response times', '45% improvement in customer satisfaction'],
    content: 'Full case study content...',
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    title: 'AI Onboarding Agent Saving 84+ Hours/Week',
    slug: 'ai-onboarding-agent',
    client: 'SaaS Company',
    challenge: 'Manual employee onboarding was taking significant HR time, with inconsistent information delivery and delayed access to necessary tools and resources.',
    solution: 'We developed an autonomous onboarding agent that guides new hires through the entire process, sets up accounts, schedules training, and answers questions instantly.',
    techUsed: ['Claude AI', 'Make.com', 'Slack API', 'Google Workspace'],
    impact: ['84+ hours saved weekly', '100% consistent onboarding', '2x faster time-to-productivity'],
    content: 'Full case study content...',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
  },
  {
    id: '3',
    title: 'Automated CRM Workflows Improving Lead Conversions by 3x',
    slug: 'automated-crm-workflows',
    client: 'B2B Services Company',
    challenge: 'Sales team was losing leads due to slow follow-ups and inconsistent outreach. Manual CRM updates were causing data quality issues.',
    solution: 'We implemented automated workflows that score leads, trigger personalized follow-ups, update CRM in real-time, and alert sales reps at optimal contact times.',
    techUsed: ['n8n', 'HubSpot API', 'OpenAI', 'Twilio'],
    impact: ['3x improvement in lead conversions', '50% reduction in response time', '99% CRM data accuracy'],
    content: 'Full case study content...',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="Real Transformations via AI & Automation"
        subtitle="See how FlowAgenz has helped businesses automate operations, reduce costs, and scale efficiently."
        centered
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Project"
        subtitle="Ready to transform your business with AI and automation?"
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="gradient"
      />
    </>
  );
}

