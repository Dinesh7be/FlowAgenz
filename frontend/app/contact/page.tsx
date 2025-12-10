import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Let's Build Something Intelligent. Fill the form and our team will get back within 24 hours.",
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@flowagenz.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Remote-First Company',
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 24 hours',
  },
];

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Let&apos;s Build Something Intelligent
              </h1>
              <p className="text-muted mb-8">
                Fill the form and our team will get back within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">
                        {info.title}
                      </h3>
                      <p className="text-muted">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

