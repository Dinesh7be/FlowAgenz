import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'FlowAgenz | AI Agents & Automation Solutions',
    template: '%s | FlowAgenz',
  },
  description:
    'FlowAgenz builds custom AI systems, advanced automation pipelines and fine-tuned models that handle your operations end-to-end — so your team works smarter, faster and without limits.',
  keywords: [
    'AI Agents',
    'Workflow Automation',
    'LLM Fine-tuning',
    'Make.com',
    'n8n',
    'Custom AI Solutions',
    'Business Automation',
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FlowAgenz',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

