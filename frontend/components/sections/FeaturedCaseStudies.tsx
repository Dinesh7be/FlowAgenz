import Link from 'next/link';
import { ArrowRight, TrendingDown, Clock, TrendingUp } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';

const featuredStudies = [
  {
    icon: TrendingDown,
    metric: '70%',
    title: 'Support workload reduced by 70%',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: Clock,
    metric: '84+',
    title: 'AI onboarding agent saving 84+ hours/week',
    color: 'from-accent to-accent-light',
  },
  {
    icon: TrendingUp,
    metric: '3x',
    title: 'Automated CRM workflows improving lead conversions by 3x',
    color: 'from-secondary to-secondary-light',
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Featured Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStudies.map((study, index) => (
            <Card
              key={index}
              variant="bordered"
              hover
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-4">
                  {study.metric}
                </div>
                <p className="text-muted">{study.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-outline group">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

