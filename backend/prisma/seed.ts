import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.contactMessage.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.caseStudy.deleteMany();
  await prisma.product.deleteMany();

  // ============================================
  // BLOGS
  // ============================================
  const blogs = [
    {
      title: 'Building Production-Ready AI Agents with LangChain',
      slug: 'building-production-ready-ai-agents-langchain',
      content: `
<h2>Introduction</h2>
<p>AI agents represent a paradigm shift in how we think about automation. Unlike traditional software that follows predetermined rules, AI agents can reason, plan, and execute complex tasks autonomously. In this comprehensive guide, we'll walk through building production-ready AI agents using LangChain and modern large language models.</p>

<h2>What Are AI Agents?</h2>
<p>An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike simple chatbots that respond to queries one at a time, agents can:</p>
<ul>
<li><strong>Plan multi-step tasks:</strong> Break down complex objectives into manageable steps</li>
<li><strong>Use tools and APIs:</strong> Interact with external systems to gather information or perform actions</li>
<li><strong>Maintain memory:</strong> Remember context across interactions for coherent conversations</li>
<li><strong>Self-correct:</strong> Identify mistakes and adjust their approach accordingly</li>
</ul>

<h2>Why LangChain?</h2>
<p>LangChain has emerged as the de facto framework for building LLM-powered applications. It provides:</p>
<ul>
<li>Modular components for prompts, chains, and agents</li>
<li>Built-in integrations with popular LLMs (OpenAI, Anthropic, Llama)</li>
<li>Memory systems for maintaining conversation context</li>
<li>Tool abstractions for extending agent capabilities</li>
</ul>

<h2>Setting Up Your Environment</h2>
<p>Let's start by setting up a Python environment with the necessary dependencies:</p>
<pre><code>pip install langchain openai chromadb tiktoken python-dotenv</code></pre>

<p>Create a .env file for your API keys:</p>
<pre><code>OPENAI_API_KEY=your_openai_api_key_here</code></pre>

<h2>Building Your First Agent</h2>
<p>Here's a basic agent that can search the web and answer questions:</p>
<pre><code>from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.memory import ConversationBufferMemory

# Initialize the LLM
llm = OpenAI(temperature=0)

# Define tools the agent can use
tools = [
    Tool(
        name="Search",
        func=search_function,
        description="Useful for searching the web for current information"
    ),
    Tool(
        name="Calculator",
        func=calculator_function,
        description="Useful for performing mathematical calculations"
    )
]

# Create memory for conversation history
memory = ConversationBufferMemory(memory_key="chat_history")

# Initialize the agent
agent = initialize_agent(
    tools,
    llm,
    agent="conversational-react-description",
    memory=memory,
    verbose=True
)</code></pre>

<h2>Adding Custom Tools</h2>
<p>The power of agents comes from their ability to use tools. Here's how to create a custom tool that queries your database:</p>
<pre><code>from langchain.tools import BaseTool

class DatabaseQueryTool(BaseTool):
    name = "database_query"
    description = "Query the customer database for information"
    
    def _run(self, query: str) -> str:
        # Your database query logic here
        result = execute_query(query)
        return format_result(result)
    
    def _arun(self, query: str):
        raise NotImplementedError("Async not supported")</code></pre>

<h2>Production Considerations</h2>
<p>When deploying agents to production, consider these critical factors:</p>

<h3>1. Rate Limiting and Cost Management</h3>
<p>LLM API calls can be expensive. Implement caching, set usage limits, and monitor costs closely.</p>

<h3>2. Error Handling</h3>
<p>Agents can fail in unexpected ways. Build robust error handling with fallbacks and graceful degradation.</p>

<h3>3. Security</h3>
<p>Never expose sensitive operations directly to agents. Implement proper access controls and input validation.</p>

<h3>4. Monitoring and Observability</h3>
<p>Log all agent actions, track performance metrics, and set up alerts for anomalies.</p>

<h2>Conclusion</h2>
<p>AI agents represent the next evolution in automation. By combining LLMs with tools and memory, we can build systems that truly understand and execute complex business processes. Start small, iterate quickly, and always keep the end user in mind.</p>

<p>At FlowAgenz, we specialize in building custom AI agents tailored to your business needs. Contact us to learn how we can help automate your workflows.</p>
      `,
      excerpt: 'Learn how to build AI agents that can plan, execute, and manage tasks autonomously using LangChain and modern LLMs. A comprehensive guide from setup to production deployment.',
      tags: ['AI Engineering', 'LangChain', 'Agents', 'Python'],
      publishedAt: new Date('2024-01-15'),
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    {
      title: 'Automating Business Workflows with n8n and Make',
      slug: 'automating-business-workflows-n8n-make',
      content: `
<h2>Introduction</h2>
<p>In today's fast-paced business environment, automation isn't just a luxury—it's a necessity. Manual processes drain resources, introduce errors, and prevent your team from focusing on high-value work. This guide explores how n8n and Make (formerly Integromat) can transform your business operations.</p>

<h2>Understanding Workflow Automation</h2>
<p>Workflow automation connects your business tools and eliminates manual data transfer. Instead of copying information between systems, automated workflows handle this instantly and accurately.</p>

<h3>Common Use Cases:</h3>
<ul>
<li>Lead capture to CRM synchronization</li>
<li>Invoice generation and payment tracking</li>
<li>Customer onboarding sequences</li>
<li>Report generation and distribution</li>
<li>Social media scheduling and monitoring</li>
</ul>

<h2>n8n vs Make: Which Should You Choose?</h2>

<h3>n8n Advantages:</h3>
<ul>
<li><strong>Self-hosted option:</strong> Full control over your data</li>
<li><strong>Fair-code license:</strong> Transparent and extensible</li>
<li><strong>Technical flexibility:</strong> Write custom JavaScript/Python code</li>
<li><strong>No execution limits:</strong> On self-hosted instances</li>
</ul>

<h3>Make Advantages:</h3>
<ul>
<li><strong>User-friendly interface:</strong> Visual workflow builder</li>
<li><strong>Extensive integrations:</strong> 1000+ pre-built connectors</li>
<li><strong>Reliable cloud hosting:</strong> No infrastructure management</li>
<li><strong>Excellent documentation:</strong> Easy to get started</li>
</ul>

<h2>Building Your First n8n Workflow</h2>
<p>Let's create a workflow that captures form submissions and creates CRM records:</p>

<h3>Step 1: Set Up the Trigger</h3>
<p>Use the Webhook node to receive form data. Configure it to accept POST requests with JSON payloads.</p>

<h3>Step 2: Transform the Data</h3>
<p>Use the Set node to format the data for your CRM. Map form fields to CRM properties.</p>

<h3>Step 3: Create CRM Record</h3>
<p>Connect to your CRM (HubSpot, Salesforce, etc.) and create a new contact with the transformed data.</p>

<h3>Step 4: Send Notification</h3>
<p>Add a Slack or email notification to alert your team about new leads.</p>

<h2>Building the Same Workflow in Make</h2>
<p>Make's visual interface makes this even simpler:</p>
<ol>
<li>Create a new scenario</li>
<li>Add a Webhook module as the trigger</li>
<li>Connect a Router to handle different lead types</li>
<li>Add CRM and notification modules</li>
<li>Configure field mappings using drag-and-drop</li>
</ol>

<h2>Advanced Automation Patterns</h2>

<h3>Error Handling</h3>
<p>Always implement error handling in your workflows. Use try-catch patterns and send alerts when failures occur.</p>

<h3>Rate Limiting</h3>
<p>Respect API rate limits by adding delays between operations when processing bulk data.</p>

<h3>Idempotency</h3>
<p>Design workflows to be safely re-runnable. Use unique identifiers to prevent duplicate records.</p>

<h2>Real-World Example: Customer Onboarding</h2>
<p>Here's a complete onboarding workflow we built for a SaaS client:</p>
<ol>
<li>New user signs up (Stripe webhook)</li>
<li>Create user in database</li>
<li>Provision account in application</li>
<li>Send welcome email sequence</li>
<li>Create Slack channel for support</li>
<li>Schedule onboarding call</li>
<li>Add to CRM pipeline</li>
</ol>
<p>This workflow reduced onboarding time from 2 hours to 5 minutes.</p>

<h2>Conclusion</h2>
<p>Whether you choose n8n or Make depends on your specific needs. For technical teams wanting full control, n8n excels. For business users seeking simplicity, Make is ideal. Often, the best approach combines both platforms for different use cases.</p>

<p>FlowAgenz helps businesses design and implement automation strategies that deliver measurable ROI. Let's discuss how we can streamline your operations.</p>
      `,
      excerpt: 'Discover how to eliminate repetitive tasks and connect your business tools with powerful automation platforms. Compare n8n and Make with practical examples.',
      tags: ['Automation', 'n8n', 'Make', 'Workflows'],
      publishedAt: new Date('2024-01-10'),
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Fine-tuning LLMs for Domain-Specific Applications',
      slug: 'fine-tuning-llms-domain-specific',
      content: `
<h2>Introduction</h2>
<p>While general-purpose LLMs like GPT-4 are incredibly capable, they may not understand your industry's specific terminology, processes, or requirements. Fine-tuning creates a specialized model that speaks your language and understands your domain.</p>

<h2>When to Fine-tune vs Prompt Engineering</h2>
<p>Before investing in fine-tuning, consider whether prompt engineering might suffice:</p>

<h3>Use Prompt Engineering When:</h3>
<ul>
<li>You need quick iteration and experimentation</li>
<li>Your use case is relatively standard</li>
<li>You have limited training data</li>
<li>Budget constraints are significant</li>
</ul>

<h3>Use Fine-tuning When:</h3>
<ul>
<li>The model consistently misunderstands domain concepts</li>
<li>You need specific output formats or styles</li>
<li>You have substantial, high-quality training data</li>
<li>Latency and cost per query matter at scale</li>
</ul>

<h2>Preparing Your Training Data</h2>
<p>Quality training data is the foundation of successful fine-tuning. Here's how to prepare it:</p>

<h3>Data Collection</h3>
<p>Gather examples of ideal inputs and outputs. Sources might include:</p>
<ul>
<li>Historical customer support tickets and resolutions</li>
<li>Expert-written documents and responses</li>
<li>Curated Q&A pairs from your knowledge base</li>
</ul>

<h3>Data Formatting</h3>
<p>Format your data as conversation pairs:</p>
<pre><code>{
  "messages": [
    {"role": "system", "content": "You are a medical billing specialist..."},
    {"role": "user", "content": "What's the CPT code for..."},
    {"role": "assistant", "content": "The appropriate CPT code is..."}
  ]
}</code></pre>

<h3>Data Quality Checklist</h3>
<ul>
<li>Minimum 100-500 high-quality examples</li>
<li>Diverse coverage of expected use cases</li>
<li>Consistent formatting and style</li>
<li>Verified accuracy by domain experts</li>
</ul>

<h2>The Fine-tuning Process</h2>

<h3>Step 1: Choose Your Base Model</h3>
<p>Select based on your needs:</p>
<ul>
<li><strong>GPT-3.5-turbo:</strong> Cost-effective, fast, good for most applications</li>
<li><strong>GPT-4:</strong> Best quality, higher cost</li>
<li><strong>Llama 2:</strong> Open source, self-hostable</li>
<li><strong>Mistral:</strong> Efficient performance-to-size ratio</li>
</ul>

<h3>Step 2: Upload Training Data</h3>
<pre><code>from openai import OpenAI
client = OpenAI()

# Upload training file
training_file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)</code></pre>

<h3>Step 3: Start Fine-tuning Job</h3>
<pre><code>fine_tune_job = client.fine_tuning.jobs.create(
    training_file=training_file.id,
    model="gpt-3.5-turbo",
    hyperparameters={
        "n_epochs": 3
    }
)</code></pre>

<h3>Step 4: Monitor and Evaluate</h3>
<p>Track training metrics and test with held-out examples to ensure quality.</p>

<h2>Best Practices</h2>

<h3>1. Start Small</h3>
<p>Begin with a subset of your data to validate the approach before scaling up.</p>

<h3>2. Iterative Refinement</h3>
<p>Fine-tuning is rarely one-and-done. Plan for multiple iterations based on real-world feedback.</p>

<h3>3. Maintain a Test Set</h3>
<p>Always hold out 10-20% of your data for evaluation.</p>

<h3>4. Version Control</h3>
<p>Track your training data, hyperparameters, and model versions systematically.</p>

<h2>Case Study: Legal Document Analysis</h2>
<p>We fine-tuned a model for a law firm to analyze contracts:</p>
<ul>
<li>Training data: 2,000 annotated contract clauses</li>
<li>Result: 94% accuracy on clause classification</li>
<li>Time saved: 6 hours per contract review</li>
</ul>

<h2>Conclusion</h2>
<p>Fine-tuning unlocks the ability to create AI systems that truly understand your business domain. While it requires investment in data preparation and iteration, the results can be transformative.</p>

<p>FlowAgenz has fine-tuned models across industries including healthcare, legal, and finance. Contact us to explore how a custom model could benefit your organization.</p>
      `,
      excerpt: 'When to fine-tune vs prompt engineering, and how to create models that understand your business domain. A practical guide with real examples.',
      tags: ['AI Engineering', 'LLM', 'Fine-tuning', 'Machine Learning'],
      publishedAt: new Date('2024-01-05'),
      coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
    },
    {
      title: 'RAG Systems: Building Knowledge-Aware AI Applications',
      slug: 'rag-systems-knowledge-aware-ai',
      content: `
<h2>Introduction</h2>
<p>Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge retrieval. Instead of relying solely on what the model learned during training, RAG systems fetch relevant information from your documents and databases to generate accurate, up-to-date responses.</p>

<h2>Why RAG Matters</h2>
<p>Standard LLMs have significant limitations:</p>
<ul>
<li><strong>Knowledge cutoff:</strong> They don't know about recent events or your private data</li>
<li><strong>Hallucinations:</strong> They may confidently generate incorrect information</li>
<li><strong>No citations:</strong> They can't show where information comes from</li>
</ul>
<p>RAG solves these problems by grounding responses in retrieved documents.</p>

<h2>RAG Architecture</h2>
<p>A typical RAG system has three main components:</p>

<h3>1. Document Ingestion</h3>
<p>Process and store your documents:</p>
<ul>
<li>Load documents (PDFs, web pages, databases)</li>
<li>Split into manageable chunks</li>
<li>Generate embeddings for each chunk</li>
<li>Store in a vector database</li>
</ul>

<h3>2. Retrieval</h3>
<p>When a user asks a question:</p>
<ul>
<li>Convert the question to an embedding</li>
<li>Search the vector database for similar chunks</li>
<li>Return the most relevant documents</li>
</ul>

<h3>3. Generation</h3>
<p>Create the final response:</p>
<ul>
<li>Combine the question with retrieved context</li>
<li>Send to the LLM for response generation</li>
<li>Include citations to source documents</li>
</ul>

<h2>Building a RAG System</h2>
<p>Here's a practical implementation using LangChain and Pinecone:</p>

<pre><code>from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# 1. Load documents
loader = DirectoryLoader('./documents', glob="**/*.pdf")
documents = loader.load()

# 2. Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# 3. Create embeddings and store
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_documents(
    chunks,
    embeddings,
    index_name="my-rag-index"
)

# 4. Create retrieval chain
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vectorstore.as_retriever(k=5)
)

# 5. Query
response = qa_chain.run("What is our refund policy?")</code></pre>

<h2>Choosing a Vector Database</h2>

<h3>Pinecone</h3>
<p>Fully managed, scales effortlessly, excellent for production.</p>

<h3>Weaviate</h3>
<p>Feature-rich, supports hybrid search, can be self-hosted.</p>

<h3>Qdrant</h3>
<p>High performance, Rust-based, great filtering capabilities.</p>

<h3>Chroma</h3>
<p>Simple, embeddable, perfect for prototyping.</p>

<h2>Advanced RAG Techniques</h2>

<h3>Hybrid Search</h3>
<p>Combine semantic search with keyword matching for better results.</p>

<h3>Re-ranking</h3>
<p>Use a second model to re-rank retrieved documents for relevance.</p>

<h3>Query Expansion</h3>
<p>Generate multiple variations of the query to improve recall.</p>

<h3>Contextual Compression</h3>
<p>Extract only the relevant portions of retrieved documents.</p>

<h2>Production Considerations</h2>
<ul>
<li><strong>Chunking strategy:</strong> Experiment with chunk sizes and overlap</li>
<li><strong>Embedding model:</strong> Choose based on your domain and languages</li>
<li><strong>Update pipeline:</strong> Keep your knowledge base current</li>
<li><strong>Evaluation:</strong> Measure retrieval quality and response accuracy</li>
</ul>

<h2>Conclusion</h2>
<p>RAG systems bridge the gap between powerful LLMs and your organization's specific knowledge. By implementing RAG, you can build AI assistants that provide accurate, sourced, and up-to-date information.</p>

<p>FlowAgenz builds custom RAG solutions for enterprises. Whether you're creating a customer support bot or an internal knowledge assistant, we can help design and implement the right architecture.</p>
      `,
      excerpt: 'A deep dive into RAG architecture, vector databases, and building AI systems that leverage your company\'s knowledge for accurate, grounded responses.',
      tags: ['AI Engineering', 'RAG', 'Vector DB', 'LangChain'],
      publishedAt: new Date('2024-01-02'),
      coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    },
    {
      title: 'The Complete Guide to Prompt Engineering',
      slug: 'complete-guide-prompt-engineering',
      content: `
<h2>Introduction</h2>
<p>Prompt engineering is the art and science of communicating effectively with large language models. A well-crafted prompt can mean the difference between a mediocre response and an exceptional one. This guide covers everything from basic principles to advanced techniques.</p>

<h2>Fundamental Principles</h2>

<h3>1. Be Specific</h3>
<p>Vague prompts lead to vague responses. Instead of "Write about marketing," try "Write a 500-word blog post about email marketing best practices for B2B SaaS companies, including 3 specific examples."</p>

<h3>2. Provide Context</h3>
<p>Give the model relevant background information:</p>
<pre><code>You are a senior financial analyst at a Fortune 500 company. 
A junior analyst has asked you to explain the concept of 
discounted cash flow analysis. Explain it clearly with an example.</code></pre>

<h3>3. Specify Format</h3>
<p>Tell the model exactly how you want the output structured:</p>
<pre><code>Analyze this customer feedback and provide:
1. Overall sentiment (positive/negative/neutral)
2. Key themes (bullet points)
3. Recommended actions (numbered list)
4. Priority score (1-10)</code></pre>

<h2>Advanced Techniques</h2>

<h3>Chain-of-Thought Prompting</h3>
<p>Ask the model to show its reasoning:</p>
<pre><code>Solve this problem step by step:
A store sells apples for $2 each and oranges for $3 each. 
If someone buys 5 fruits for $12, how many of each did they buy?

Think through this carefully, showing each step of your reasoning.</code></pre>

<h3>Few-Shot Learning</h3>
<p>Provide examples of desired inputs and outputs:</p>
<pre><code>Convert these product descriptions to bullet points:

Input: "Our laptop features a 15-inch display, 16GB RAM, and 512GB SSD."
Output:
• 15-inch display
• 16GB RAM
• 512GB SSD

Input: "The smartphone has a 6.5-inch screen, 128GB storage, and 48MP camera."
Output:</code></pre>

<h3>Role-Based Prompting</h3>
<p>Assign a specific persona to the model:</p>
<pre><code>You are a world-class copywriter with 20 years of experience 
writing for luxury brands. Your writing style is elegant, 
sophisticated, and persuasive. Write a product description 
for a $5,000 watch.</code></pre>

<h2>Prompt Templates for Common Tasks</h2>

<h3>Summarization</h3>
<pre><code>Summarize the following text in [X] sentences/words.
Focus on: [key aspects to highlight]
Audience: [target reader]
Tone: [formal/casual/technical]

Text: [your text here]</code></pre>

<h3>Code Generation</h3>
<pre><code>Write a [language] function that [description].

Requirements:
- [requirement 1]
- [requirement 2]
- Include error handling
- Add comments explaining the logic

Example input: [example]
Expected output: [expected result]</code></pre>

<h3>Analysis</h3>
<pre><code>Analyze the following [data/text/situation]:

[Content to analyze]

Provide:
1. Key observations
2. Potential implications
3. Recommendations
4. Risks to consider</code></pre>

<h2>Common Mistakes to Avoid</h2>
<ul>
<li><strong>Being too vague:</strong> "Make it better" doesn't help</li>
<li><strong>Overloading:</strong> Too many instructions can confuse the model</li>
<li><strong>Assuming knowledge:</strong> Provide necessary context</li>
<li><strong>Ignoring iteration:</strong> Refine prompts based on outputs</li>
</ul>

<h2>Testing and Optimization</h2>
<p>Treat prompts like code—test systematically:</p>
<ol>
<li>Create a test set of diverse inputs</li>
<li>Define success criteria</li>
<li>Compare different prompt variations</li>
<li>Document what works and why</li>
</ol>

<h2>Conclusion</h2>
<p>Prompt engineering is a skill that improves with practice. Start with clear, specific prompts, iterate based on results, and build a library of templates for common tasks. The investment in better prompts pays dividends in output quality.</p>

<p>FlowAgenz helps organizations develop prompt strategies and build systems that consistently produce high-quality outputs. Contact us to learn more.</p>
      `,
      excerpt: 'Master the art of prompt engineering with proven techniques for creating reliable, consistent AI outputs. From basics to advanced strategies.',
      tags: ['AI Engineering', 'Prompt Engineering', 'Tutorials', 'LLM'],
      publishedAt: new Date('2023-12-28'),
      coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    },
    {
      title: 'Building Intelligent Slack Bots with AI',
      slug: 'building-intelligent-slack-bots-ai',
      content: `
<h2>Introduction</h2>
<p>Slack has become the central hub for team communication. By integrating AI capabilities into Slack bots, you can automate workflows, answer questions instantly, and boost team productivity. This guide walks through building an intelligent Slack bot from scratch.</p>

<h2>What We're Building</h2>
<p>Our bot will be able to:</p>
<ul>
<li>Answer questions using company knowledge base</li>
<li>Summarize long threads</li>
<li>Create tasks and reminders</li>
<li>Generate reports on demand</li>
<li>Escalate to humans when needed</li>
</ul>

<h2>Setting Up the Slack App</h2>

<h3>Step 1: Create a Slack App</h3>
<ol>
<li>Go to api.slack.com/apps</li>
<li>Click "Create New App"</li>
<li>Choose "From scratch"</li>
<li>Name your app and select your workspace</li>
</ol>

<h3>Step 2: Configure Permissions</h3>
<p>Add these OAuth scopes:</p>
<ul>
<li>chat:write - Send messages</li>
<li>channels:history - Read channel messages</li>
<li>app_mentions:read - Respond to @mentions</li>
<li>users:read - Get user information</li>
</ul>

<h3>Step 3: Enable Event Subscriptions</h3>
<p>Subscribe to these events:</p>
<ul>
<li>app_mention - When someone @mentions your bot</li>
<li>message.channels - Messages in public channels</li>
</ul>

<h2>Building the Bot Backend</h2>
<pre><code>import os
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler
from openai import OpenAI

# Initialize
app = App(token=os.environ["SLACK_BOT_TOKEN"])
openai_client = OpenAI()

# Knowledge base context
SYSTEM_PROMPT = """You are a helpful assistant for Acme Corp.
You help employees find information about company policies,
procedures, and answer general questions.
Always be professional and concise."""

@app.event("app_mention")
def handle_mention(event, say, client):
    user_message = event["text"]
    thread_ts = event.get("thread_ts", event["ts"])
    
    # Get AI response
    response = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message}
        ]
    )
    
    # Reply in thread
    say(
        text=response.choices[0].message.content,
        thread_ts=thread_ts
    )

if __name__ == "__main__":
    handler = SocketModeHandler(app, os.environ["SLACK_APP_TOKEN"])
    handler.start()</code></pre>

<h2>Adding RAG for Company Knowledge</h2>
<p>Connect to your knowledge base for accurate, sourced answers:</p>
<pre><code>from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings

# Initialize vector store
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_existing_index(
    index_name="company-docs",
    embedding=embeddings
)

def get_context(query):
    docs = vectorstore.similarity_search(query, k=3)
    return "\\n\\n".join([doc.page_content for doc in docs])

@app.event("app_mention")
def handle_mention_with_rag(event, say, client):
    user_message = event["text"]
    
    # Get relevant context
    context = get_context(user_message)
    
    # Generate response with context
    response = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Context:\\n{context}\\n\\nQuestion: {user_message}"}
        ]
    )
    
    say(text=response.choices[0].message.content)</code></pre>

<h2>Adding Slash Commands</h2>
<pre><code>@app.command("/summarize")
def summarize_thread(ack, body, client):
    ack()
    
    channel = body["channel_id"]
    thread_ts = body.get("text")  # Thread timestamp
    
    # Fetch thread messages
    result = client.conversations_replies(
        channel=channel,
        ts=thread_ts
    )
    
    messages = [msg["text"] for msg in result["messages"]]
    thread_content = "\\n".join(messages)
    
    # Generate summary
    response = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Summarize this Slack thread concisely."},
            {"role": "user", "content": thread_content}
        ]
    )
    
    client.chat_postMessage(
        channel=channel,
        text=f"📝 *Thread Summary:*\\n{response.choices[0].message.content}",
        thread_ts=thread_ts
    )</code></pre>

<h2>Best Practices</h2>
<ul>
<li><strong>Respond in threads:</strong> Keep channels clean</li>
<li><strong>Add typing indicators:</strong> Show the bot is working</li>
<li><strong>Handle errors gracefully:</strong> Apologize and suggest alternatives</li>
<li><strong>Implement rate limiting:</strong> Prevent abuse</li>
<li><strong>Log interactions:</strong> For debugging and improvement</li>
</ul>

<h2>Conclusion</h2>
<p>Intelligent Slack bots can dramatically improve team productivity by providing instant access to information and automating routine tasks. Start simple, gather feedback, and iterate.</p>

<p>FlowAgenz builds custom Slack integrations and AI assistants. Let us help you transform your team's productivity.</p>
      `,
      excerpt: 'Create intelligent Slack bots that automate team workflows, answer questions from your knowledge base, and boost productivity.',
      tags: ['Automation', 'Slack', 'Tutorials', 'AI'],
      publishedAt: new Date('2023-12-20'),
      coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.create({ data: blog });
  }
  console.log('✅ Blogs seeded');

  // ============================================
  // CASE STUDIES
  // ============================================
  const caseStudies = [
    {
      title: 'Reducing Customer Support Workload by 70% with AI Agents',
      slug: 'reducing-support-workload-ai-agents',
      client: 'TechFlow E-commerce',
      challenge: `TechFlow, a rapidly growing e-commerce platform with 500,000+ monthly active users, was struggling with overwhelming support ticket volumes. Their 12-person support team was handling over 2,000 tickets daily, with an average response time of 8 hours.

Key pain points:
• 65% of tickets were repetitive queries about orders, shipping, and returns
• Support staff burnout was leading to high turnover
• Customer satisfaction scores had dropped to 3.2/5
• Peak seasons caused 2-3 day response delays
• Manual ticket routing was inconsistent and error-prone`,
      solution: `FlowAgenz designed and implemented a comprehensive AI-powered support system:

**Phase 1: AI Support Agent (Weeks 1-4)**
We built a GPT-4 powered support agent capable of handling common queries automatically. The agent was trained on 2 years of historical tickets to understand TechFlow's products, policies, and communication style.

**Phase 2: Knowledge Base Integration (Weeks 5-6)**
Connected the agent to TechFlow's existing documentation, real-time order management system, and shipping carrier APIs. This enabled instant, accurate responses about order status, delivery times, and return eligibility.

**Phase 3: Smart Routing System (Weeks 7-8)**
Implemented an intelligent routing system that:
• Automatically categorizes incoming tickets
• Routes complex issues to specialists
• Escalates urgent matters with full context
• Learns from routing decisions to improve over time

**Phase 4: Human-in-the-Loop (Weeks 9-10)**
Created a seamless handoff system where the AI agent escalates to human agents when needed, providing full conversation history and suggested responses.

**Phase 5: Continuous Improvement (Ongoing)**
Set up feedback loops where human agent corrections train the AI, improving accuracy over time.`,
      techUsed: ['OpenAI GPT-4', 'LangChain', 'n8n', 'Zendesk API', 'PostgreSQL', 'Redis', 'Python', 'React'],
      impact: [
        '70% reduction in tickets requiring human intervention',
        'Average response time reduced from 8 hours to 30 seconds',
        'Customer satisfaction increased from 3.2 to 4.6 out of 5',
        '24/7 support coverage without additional staffing',
        '$420,000 annual savings in support operations',
        'Support team refocused on complex, high-value interactions',
      ],
      content: 'Full implementation details available upon request.',
      coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    },
    {
      title: 'AI Onboarding Agent Saving 84+ Hours Per Week',
      slug: 'ai-onboarding-agent-saving-84-hours',
      client: 'ScaleUp SaaS',
      challenge: `ScaleUp, a B2B SaaS company with 200 employees across 3 countries, was experiencing severe growing pains with their employee onboarding process. Their HR team of 4 was spending over 60% of their time on repetitive onboarding tasks.

Key challenges:
• New hires waited 3-5 days to get full system access
• Onboarding information was scattered across 15+ documents
• Each new employee required 6+ hours of HR time
• Inconsistent onboarding led to early productivity gaps
• Remote employees felt disconnected and unsupported
• IT spent 4+ hours per new hire on account provisioning`,
      solution: `FlowAgenz built an autonomous AI onboarding agent that guides new hires through their entire first-week experience:

**The Onboarding Agent Capabilities:**

1. **Personalized Welcome Experience**
   • Greets new hires on Slack on day one
   • Provides customized onboarding checklist based on role
   • Introduces team members and key contacts
   • Shares relevant company culture resources

2. **Automated Account Provisioning**
   • Integrates with Google Workspace, Notion, GitHub, and 12 other tools
   • Creates accounts automatically based on role requirements
   • Generates and securely delivers credentials
   • Validates access and troubleshoots issues

3. **Interactive Knowledge Assistant**
   • Answers questions about company policies, benefits, and procedures
   • Provides contextual guidance for specific tasks
   • Surfaces relevant documentation automatically
   • Available 24/7 for global team members

4. **Progress Tracking & Scheduling**
   • Tracks completion of onboarding tasks
   • Schedules 1:1s with manager and team members
   • Sends reminders for pending items
   • Alerts HR to blockers or concerns

5. **Feedback Collection**
   • Surveys new hires at day 1, 7, and 30
   • Identifies pain points automatically
   • Generates improvement recommendations`,
      techUsed: ['Claude AI', 'Make.com', 'Slack API', 'Google Workspace API', 'Notion API', 'GitHub API', 'PostgreSQL', 'Node.js'],
      impact: [
        '84+ hours saved per week across HR and IT teams',
        'Time to full productivity reduced from 3 weeks to 1 week',
        'New hire satisfaction score increased to 4.8/5',
        '100% consistent onboarding experience across all locations',
        'Zero access-related delays for new employees',
        'HR team refocused on strategic initiatives and culture building',
      ],
      content: 'Detailed case study available upon request.',
      coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
    {
      title: 'Automated CRM Workflows Increasing Lead Conversions by 3x',
      slug: 'automated-crm-workflows-3x-conversions',
      client: 'ProServe Consulting',
      challenge: `ProServe, a B2B professional services firm with a $5M annual revenue, was losing deals due to slow follow-ups and inconsistent sales processes. Their 8-person sales team was overwhelmed with manual tasks.

Critical issues:
• Average lead response time was 26 hours (industry best practice is under 5 minutes)
• Only 40% of leads received proper follow-up sequences
• Sales reps spent 3+ hours daily on data entry
• CRM data was 60% incomplete or outdated
• No visibility into pipeline health or rep activity
• Leads frequently fell through the cracks`,
      solution: `FlowAgenz implemented a comprehensive sales automation system that transformed ProServe's lead management:

**Automated Lead Capture & Enrichment**
• Instant capture from all sources (website, LinkedIn, referrals)
• Automatic data enrichment using Clearbit and Apollo
• AI-powered lead scoring based on 15+ factors
• Duplicate detection and merging

**Intelligent Lead Routing**
• Real-time assignment based on territory, expertise, and capacity
• Instant Slack notification to assigned rep
• Automatic escalation if not contacted within 5 minutes
• Round-robin distribution for equal opportunity

**Personalized Outreach Sequences**
• AI-generated personalized first touch emails
• Multi-channel sequences (email, LinkedIn, phone)
• Behavior-triggered branch logic
• Automatic meeting scheduling via Calendly integration

**Real-time CRM Updates**
• Email and call logging automated via integrations
• Meeting notes transcribed and summarized by AI
• Deal stage progression based on activities
• Contact information automatically updated

**Pipeline Intelligence**
• Daily AI-generated pipeline summary
• At-risk deal identification and alerts
• Win/loss analysis with actionable insights
• Forecasting based on historical patterns`,
      techUsed: ['n8n', 'HubSpot API', 'OpenAI GPT-4', 'Twilio', 'Clearbit', 'Calendly', 'Slack', 'PostgreSQL'],
      impact: [
        'Lead response time reduced from 26 hours to under 2 minutes',
        'Lead-to-opportunity conversion increased by 3x',
        'Sales rep administrative time reduced by 70%',
        'CRM data completeness improved to 98%',
        'Pipeline visibility enabled accurate forecasting',
        '$1.2M additional revenue attributed to automation in first year',
      ],
      content: 'Complete implementation guide available upon request.',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
    {
      title: 'AI-Powered Document Processing Reducing Review Time by 85%',
      slug: 'ai-document-processing-85-percent-faster',
      client: 'LegalEdge Partners',
      challenge: `LegalEdge, a mid-size law firm specializing in contract law, was drowning in document review work. Their attorneys spent 60% of billable hours on routine document analysis that didn't leverage their expertise.

Pain points:
• Contract review took 4-6 hours per document
• High risk of missing critical clauses
• Inconsistent analysis across team members
• Junior associates overwhelmed with review backlogs
• Clients frustrated with turnaround times
• Unable to scale without proportional headcount increase`,
      solution: `FlowAgenz built a custom AI document processing system tailored to LegalEdge's practice areas:

**Document Intelligence Platform**

1. **Automated Document Ingestion**
   • Secure upload portal for client documents
   • OCR for scanned documents with 99.5% accuracy
   • Automatic document type classification
   • Metadata extraction and indexing

2. **AI-Powered Clause Analysis**
   • Custom fine-tuned model trained on 10,000+ contracts
   • Identifies 150+ clause types automatically
   • Flags non-standard or risky language
   • Compares against preferred clause library
   • Generates risk scores for each section

3. **Intelligent Summarization**
   • Executive summary generation
   • Key terms and obligations extraction
   • Important dates and deadlines identification
   • Party obligations matrix

4. **Redlining & Recommendations**
   • AI-suggested edits for risky clauses
   • Alternative language recommendations
   • Negotiation talking points
   • Historical comparison with similar deals

5. **Collaboration & Review**
   • Side-by-side AI analysis and source document
   • Attorney approval workflow
   • Version control and audit trail
   • Client-ready report generation`,
      techUsed: ['OpenAI GPT-4', 'Custom Fine-tuned Model', 'LangChain', 'Pinecone', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
      impact: [
        'Contract review time reduced from 4-6 hours to 30-45 minutes',
        '85% reduction in document processing time',
        '40% increase in attorney utilization on high-value work',
        'Zero critical clauses missed since implementation',
        'Client turnaround time improved by 75%',
        'Enabled 50% revenue growth without adding headcount',
      ],
      content: 'Technical architecture details available upon request.',
      coverImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
    },
    {
      title: 'Intelligent Inventory Management Reducing Stockouts by 90%',
      slug: 'intelligent-inventory-management-90-percent-reduction',
      client: 'RetailMax Distribution',
      challenge: `RetailMax, a regional distributor with 3 warehouses and 2,000+ SKUs, was struggling with inventory optimization. Their manual forecasting and ordering processes led to either excess inventory or costly stockouts.

Business impact:
• 15% of orders affected by stockouts
• $800K tied up in slow-moving inventory
• Manual forecasting took 40 hours weekly
• Seasonal demand patterns frequently missed
• Supplier lead time changes caused constant firefighting
• No visibility into optimal reorder points`,
      solution: `FlowAgenz implemented an AI-driven inventory management system:

**Demand Forecasting Engine**
• Machine learning models trained on 5 years of sales data
• Incorporates seasonality, trends, and external factors
• Weather and event-based demand adjustments
• Automatic model retraining with new data

**Dynamic Reorder Point Optimization**
• SKU-level optimal stock calculations
• Safety stock adjusted for demand variability
• Lead time variability factored in
• Service level targets per product category

**Automated Procurement Workflows**
• Purchase orders generated automatically at reorder points
• Supplier selection based on price, reliability, and lead time
• Order consolidation for shipping efficiency
• Approval workflows for large orders

**Real-time Monitoring Dashboard**
• Live inventory levels across all warehouses
• Stockout risk alerts with days-to-stockout
• Excess inventory identification
• Supplier performance tracking

**Integration Layer**
• Connected ERP, WMS, and e-commerce platforms
• Real-time sales data synchronization
• Automated inventory adjustments
• Multi-warehouse transfer recommendations`,
      techUsed: ['Python', 'scikit-learn', 'Prophet', 'n8n', 'PostgreSQL', 'React', 'NetSuite API', 'ShipStation API'],
      impact: [
        'Stockout rate reduced from 15% to 1.5%',
        'Excess inventory reduced by $500K',
        'Forecasting accuracy improved to 94%',
        'Weekly planning time reduced from 40 to 4 hours',
        'Order fulfillment rate increased to 99.2%',
        '$1.8M annual savings from optimized inventory',
      ],
      content: 'Implementation methodology available upon request.',
      coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop',
    },
  ];

  for (const caseStudy of caseStudies) {
    await prisma.caseStudy.create({ data: caseStudy });
  }
  console.log('✅ Case Studies seeded');

  // ============================================
  // PRODUCTS
  // ============================================
  const products = [
    {
      name: 'AI Support Agent',
      slug: 'ai-support-agent',
      overview: 'An intelligent customer support agent that handles inquiries 24/7, reducing support workload by up to 70% while improving response times and customer satisfaction. Built with state-of-the-art language models and designed for seamless integration with your existing tools.',
      features: [
        'Natural language understanding with context awareness',
        'Multi-channel support (chat, email, voice)',
        'Seamless human handoff for complex issues',
        'Custom knowledge base integration',
        'Real-time analytics and reporting dashboard',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and escalation triggers',
        'Continuous learning from interactions',
      ],
      techUsed: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'PostgreSQL'],
      demoUrl: 'https://demo.flowagenz.com/support-agent',
    },
    {
      name: 'Workflow Automation Platform',
      slug: 'workflow-automation-platform',
      overview: 'A comprehensive platform for designing, deploying, and monitoring automated business workflows. Connect your tools, eliminate manual tasks, and scale operations without adding headcount.',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'Pre-built templates for common automation scenarios',
        '500+ integrations with popular business tools',
        'Conditional logic and branching capabilities',
        'Error handling and automatic retries',
        'Real-time monitoring and alerting',
        'Version control and rollback support',
        'Team collaboration features',
      ],
      techUsed: ['n8n', 'Node.js', 'PostgreSQL', 'Redis', 'React', 'Docker'],
      demoUrl: 'https://demo.flowagenz.com/workflow-platform',
    },
    {
      name: 'AI Sales Assistant',
      slug: 'ai-sales-assistant',
      overview: 'An AI-powered sales assistant that qualifies leads, personalizes outreach, and books meetings automatically. Increase your sales team\'s productivity and never let a lead go cold.',
      features: [
        'Intelligent lead qualification and scoring',
        'Personalized email and LinkedIn outreach',
        'Automated meeting scheduling',
        'CRM integration and automatic updates',
        'Conversation intelligence and coaching insights',
        'Pipeline forecasting and analytics',
        'Multi-touch campaign orchestration',
        'A/B testing for outreach optimization',
      ],
      techUsed: ['Claude AI', 'Make.com', 'HubSpot API', 'Salesforce API', 'Calendly', 'React'],
      demoUrl: 'https://demo.flowagenz.com/sales-assistant',
    },
    {
      name: 'Document Intelligence',
      slug: 'document-intelligence',
      overview: 'Transform how you process documents with AI-powered extraction, analysis, and summarization. Handle contracts, invoices, and reports in minutes instead of hours.',
      features: [
        'Automatic document classification',
        'Key information extraction',
        'Contract clause analysis and risk flagging',
        'Intelligent summarization',
        'Custom extraction templates',
        'Batch processing capabilities',
        'API access for integration',
        'Audit trail and compliance features',
      ],
      techUsed: ['GPT-4', 'Custom ML Models', 'FastAPI', 'PostgreSQL', 'React', 'AWS S3'],
      demoUrl: 'https://demo.flowagenz.com/document-intelligence',
    },
    {
      name: 'RAG Knowledge Assistant',
      slug: 'rag-knowledge-assistant',
      overview: 'A retrieval-augmented generation system that provides accurate, sourced answers from your company documentation. Give your team instant access to organizational knowledge.',
      features: [
        'Automatic document ingestion and indexing',
        'Semantic search across all content',
        'Source citations with every answer',
        'Support for multiple file formats',
        'Access control and permissions',
        'Usage analytics and popular queries',
        'Slack and Teams integration',
        'API for custom applications',
      ],
      techUsed: ['Pinecone', 'OpenAI', 'LangChain', 'FastAPI', 'React', 'PostgreSQL'],
      demoUrl: 'https://demo.flowagenz.com/rag-assistant',
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
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
