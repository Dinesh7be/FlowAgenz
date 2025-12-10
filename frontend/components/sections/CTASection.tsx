import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: 'primary' | 'dark' | 'gradient';
}

export default function CTASection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  variant = 'primary',
}: CTASectionProps) {
  const variants = {
    primary: 'bg-primary text-white',
    dark: 'bg-secondary text-white',
    gradient: 'bg-gradient-to-r from-primary to-primary-dark text-white',
  };

  return (
    <section className={`${variants[variant]} section-padding`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Link
          href={ctaHref}
          className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 group ${
            variant === 'dark'
              ? 'bg-accent text-secondary hover:bg-accent-light'
              : 'bg-white text-primary hover:bg-gray-100'
          }`}
        >
          {ctaLabel}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

