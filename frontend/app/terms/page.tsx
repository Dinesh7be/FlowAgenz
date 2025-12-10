import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'FlowAgenz Terms of Service - Terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted mb-6">
              By accessing and using FlowAgenz services, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              2. Services
            </h2>
            <p className="text-muted mb-6">
              FlowAgenz provides AI engineering, automation, and consulting services. The specific scope, deliverables, and terms of any project will be outlined in a separate agreement or statement of work.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-muted mb-6">
              Unless otherwise agreed in writing, all intellectual property rights in custom solutions developed for clients will be transferred upon full payment. FlowAgenz retains the right to use general knowledge, skills, and experience gained during projects.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              4. Confidentiality
            </h2>
            <p className="text-muted mb-6">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This obligation survives the termination of any agreement.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-muted mb-6">
              Payment terms will be specified in individual project agreements. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may be subject to interest charges.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-muted mb-6">
              FlowAgenz liability is limited to the amount paid for services. We are not liable for indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              7. Termination
            </h2>
            <p className="text-muted mb-6">
              Either party may terminate services with 30 days written notice. Upon termination, client will pay for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              8. Modifications
            </h2>
            <p className="text-muted mb-6">
              FlowAgenz reserves the right to modify these terms at any time. Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">
              9. Contact
            </h2>
            <p className="text-muted mb-6">
              For questions about these Terms of Service, please contact us at{' '}
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

