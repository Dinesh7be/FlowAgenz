import { Check } from 'lucide-react';

const reasons = [
  'Complete AI Engineering (Agents + Automations + Models)',
  'Enterprise-grade implementation',
  'Faster delivery cycles',
  'Scalable systems',
  'Transparent development',
  'Long-term support',
];

export default function WhyFlowAgenz() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Why Businesses Choose FlowAgenz
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                >
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-secondary">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-7xl font-bold gradient-text mb-4">AI</div>
                <div className="text-2xl font-semibold text-secondary">
                  Engineering Excellence
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

