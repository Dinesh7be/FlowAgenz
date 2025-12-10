import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Blogs
  const blogs = [
    {
      title: 'Building Production-Ready AI Agents with LangChain',
      slug: 'building-production-ready-ai-agents-langchain',
      content: `<h2>Introduction</h2>
<p>AI agents are autonomous systems that can plan, execute, and manage tasks without constant human intervention. In this guide, we'll explore how to build production-ready AI agents using LangChain and modern LLMs.</p>

<h2>What are AI Agents?</h2>
<p>Unlike simple chatbots that respond to individual queries, AI agents can:</p>
<ul>
<li>Plan multi-step tasks</li>
<li>Use tools and APIs</li>
<li>Remember context across interactions</li>
<li>Make decisions based on goals</li>
</ul>

<h2>Conclusion</h2>
<p>AI agents represent the next evolution in automation. By combining LLMs with tools and memory, we can build systems that truly understand and execute complex business processes.</p>`,
      excerpt: 'Learn how to build AI agents that can plan, execute, and manage tasks autonomously using LangChain and modern LLMs.',
      tags: ['AI Engineering', 'LangChain', 'Agents'],
      publishedAt: new Date('2024-01-15'),
      coverImage: '/images/blog-1.jpg',
    },
    {
      title: 'Automating Business Workflows with n8n and Make',
      slug: 'automating-business-workflows-n8n-make',
      content: `<h2>Introduction</h2>
<p>Business workflow automation has become essential for modern companies looking to scale efficiently.</p>

<h2>n8n vs Make</h2>
<p>Both platforms offer powerful automation capabilities, but they excel in different areas.</p>

<h2>Getting Started</h2>
<p>We'll walk through creating your first workflow in both platforms.</p>`,
      excerpt: 'Discover how to eliminate repetitive tasks and connect your business tools with powerful automation platforms.',
      tags: ['Automation', 'n8n', 'Make'],
      publishedAt: new Date('2024-01-10'),
      coverImage: '/images/blog-2.jpg',
    },
    {
      title: 'Fine-tuning LLMs for Domain-Specific Applications',
      slug: 'fine-tuning-llms-domain-specific',
      content: `<h2>When to Fine-tune</h2>
<p>Fine-tuning isn't always necessary. Here's when it makes sense.</p>

<h2>The Process</h2>
<p>A step-by-step guide to fine-tuning your first model.</p>`,
      excerpt: 'When to fine-tune vs prompt engineering, and how to create models that understand your business domain.',
      tags: ['AI Engineering', 'LLM', 'Fine-tuning'],
      publishedAt: new Date('2024-01-05'),
      coverImage: '/images/blog-3.jpg',
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }
  console.log('✅ Blogs seeded');

  // Seed Case Studies
  const caseStudies = [
    {
      title: 'Reducing Support Workload by 70% with AI Agents',
      slug: 'reducing-support-workload-ai-agents',
      client: 'E-commerce Platform',
      challenge: 'The client was struggling with high support ticket volumes, leading to long response times and customer dissatisfaction. Their 5-person support team was handling over 500 tickets daily.',
      solution: 'We designed and implemented a comprehensive AI support solution with GPT-4 powered agents, knowledge base integration, and smart routing.',
      techUsed: ['OpenAI GPT-4', 'LangChain', 'n8n', 'Zendesk API'],
      impact: ['70% reduction in support workload', '90% faster response times', '45% improvement in customer satisfaction'],
      content: 'Full case study content...',
      coverImage: '/images/case-1.jpg',
    },
    {
      title: 'AI Onboarding Agent Saving 84+ Hours/Week',
      slug: 'ai-onboarding-agent',
      client: 'SaaS Company',
      challenge: 'Manual employee onboarding was taking significant HR time, with inconsistent information delivery.',
      solution: 'We developed an autonomous onboarding agent that guides new hires through the entire process.',
      techUsed: ['Claude AI', 'Make.com', 'Slack API', 'Google Workspace'],
      impact: ['84+ hours saved weekly', '100% consistent onboarding', '2x faster time-to-productivity'],
      content: 'Full case study content...',
      coverImage: '/images/case-2.jpg',
    },
    {
      title: 'Automated CRM Workflows Improving Lead Conversions by 3x',
      slug: 'automated-crm-workflows',
      client: 'B2B Services Company',
      challenge: 'Sales team was losing leads due to slow follow-ups and inconsistent outreach.',
      solution: 'We implemented automated workflows that score leads, trigger personalized follow-ups, and update CRM in real-time.',
      techUsed: ['n8n', 'HubSpot API', 'OpenAI', 'Twilio'],
      impact: ['3x improvement in lead conversions', '50% reduction in response time', '99% CRM data accuracy'],
      content: 'Full case study content...',
      coverImage: '/images/case-3.jpg',
    },
  ];

  for (const caseStudy of caseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: caseStudy.slug },
      update: caseStudy,
      create: caseStudy,
    });
  }
  console.log('✅ Case Studies seeded');

  // Seed Products
  const products = [
    {
      name: 'AI Support Agent',
      slug: 'ai-support-agent',
      overview: 'An intelligent support agent that handles customer queries 24/7, reducing support workload by up to 70%.',
      features: ['Natural language understanding', 'Multi-channel support', 'Seamless human handoff', 'Custom knowledge base integration', 'Analytics dashboard'],
      techUsed: ['GPT-4', 'LangChain', 'Vector DB'],
      demoUrl: 'https://demo.flowagenz.com/support-agent',
    },
    {
      name: 'Workflow Monitoring Dashboard',
      slug: 'workflow-monitoring-dashboard',
      overview: 'A comprehensive dashboard for monitoring all your automated workflows in one place.',
      features: ['Real-time workflow status', 'Error alerting', 'Performance analytics', 'Cost tracking', 'Historical trends'],
      techUsed: ['React', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://demo.flowagenz.com/workflow-dashboard',
    },
    {
      name: 'AI Sales Assistant',
      slug: 'ai-sales-assistant',
      overview: 'An AI-powered sales assistant that qualifies leads and provides personalized follow-ups.',
      features: ['Lead qualification', 'Personalized outreach', 'Calendar integration', 'CRM synchronization', 'Conversation intelligence'],
      techUsed: ['Claude AI', 'Make.com', 'HubSpot API'],
      demoUrl: 'https://demo.flowagenz.com/sales-assistant',
    },
    {
      name: 'Autonomous CRM Processor',
      slug: 'autonomous-crm-processor',
      overview: 'An autonomous system that keeps your CRM data clean, enriched, and actionable.',
      features: ['Automatic data enrichment', 'Duplicate detection', 'Lead scoring', 'Activity logging', 'Data quality monitoring'],
      techUsed: ['n8n', 'Clearbit API', 'PostgreSQL'],
      demoUrl: 'https://demo.flowagenz.com/crm-processor',
    },
    {
      name: 'RAG Knowledge Assistant',
      slug: 'rag-knowledge-assistant',
      overview: 'A retrieval-augmented generation system for accurate answers from your documentation.',
      features: ['Document ingestion', 'Semantic search', 'Citation tracking', 'Multi-format support', 'Access control'],
      techUsed: ['Pinecone', 'OpenAI', 'FastAPI'],
      demoUrl: 'https://demo.flowagenz.com/rag-assistant',
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log('✅ Products seeded');

  console.log('🎉 Database seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

