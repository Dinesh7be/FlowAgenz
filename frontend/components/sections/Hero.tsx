import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  centered?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  centered = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div
          className={`py-20 md:py-32 ${
            centered ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 animate-fade-in animate-delay-100">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200 ${
                centered ? 'justify-center' : ''
              }`}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn-primary group">
                  {primaryCTA.label}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-outline">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

