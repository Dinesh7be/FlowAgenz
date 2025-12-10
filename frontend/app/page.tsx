import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyFlowAgenz from '@/components/sections/WhyFlowAgenz';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero
        title="AI Agents & Automated Workflows for Fast-Growing Businesses"
        subtitle="FlowAgenz builds custom AI systems, advanced automation pipelines and fine-tuned models that handle your operations end-to-end — so your team works smarter, faster and without limits."
        primaryCTA={{ label: 'Get Started', href: '/contact' }}
        secondaryCTA={{ label: 'View Case Studies', href: '/case-studies' }}
      />

      <ServicesGrid />

      <WhyFlowAgenz />

      <FeaturedCaseStudies />

      <CTASection
        title="Ready to build your AI system?"
        subtitle="Let FlowAgenz transform your business."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}

