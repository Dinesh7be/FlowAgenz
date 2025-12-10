import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'FlowAgenz Privacy Policy - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted mb-4">
              We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us. This may include:
            </p>
            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
              <li>Name and contact information</li>
              <li>Company name and job title</li>
              <li>Project requirements and budget information</li>
              <li>Any files or attachments you choose to share</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Understand your needs and provide tailored solutions</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              3. Data Security
            </h2>
            <p className="text-muted mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              4. Data Retention
            </h2>
            <p className="text-muted mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="text-muted mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              6. Contact Us
            </h2>
            <p className="text-muted mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@flowagenz.com" className="text-primary hover:underline">
                hello@flowagenz.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

