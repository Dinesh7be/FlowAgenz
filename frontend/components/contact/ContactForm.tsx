'use client';

import { useState } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { submitContactForm } from '@/lib/api';
import type { ContactFormData } from '@/types';

const budgetOptions = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not sure yet',
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    budget: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Message Sent!
        </h3>
        <p className="text-muted">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
        />
        <Input
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
        />
      </div>

      <Textarea
        label="Project Requirements"
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        placeholder="Tell us about your project, goals, and any specific requirements..."
        required
      />

      <div>
        <label className="block text-sm font-medium text-secondary mb-2">
          Budget Range
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select a budget range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-2">
          Attachment (Optional)
        </label>
        <div className="relative">
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
          />
          <div className="input-field flex items-center justify-center gap-2 cursor-pointer hover:border-primary transition-colors">
            <Upload className="w-5 h-5 text-muted" />
            <span className="text-muted">
              {fileName || 'Click to upload a file'}
            </span>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted">
          PDF, DOC, DOCX, TXT, PNG, JPG up to 10MB
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <Button type="submit" isLoading={isSubmitting} className="w-full md:w-auto">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  );
}

