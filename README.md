# FlowAgenz Website

**Where Automation Meets Intelligence.**

FlowAgenz is an AI engineering & automation company website built with Next.js, Express, and PostgreSQL.

## 🌐 Live URLs

- **Frontend**: https://flowagenz-web.onrender.com
- **Backend API**: https://flowagenz.onrender.com

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Render

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Hosting**: Render

## 📁 Project Structure

```
FlowAgenz/
├── frontend/                 # Next.js Application
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Home
│   │   ├── about/            # About page
│   │   ├── labs/             # Labs page
│   │   ├── blogs/            # Blog listing & single
│   │   ├── case-studies/     # Case studies listing & single
│   │   ├── products/         # Products listing & single
│   │   ├── contact/          # Contact form
│   │   ├── privacy/          # Privacy policy
│   │   └── terms/            # Terms of service
│   ├── components/           # Reusable components
│   │   ├── layout/           # Header, Footer
│   │   ├── ui/               # Button, Card, Input, Badge
│   │   ├── sections/         # Hero, CTA, ServicesGrid
│   │   ├── blog/             # BlogCard
│   │   ├── case-study/       # CaseStudyCard
│   │   ├── product/          # ProductCard
│   │   └── contact/          # ContactForm
│   ├── lib/                  # API client, utilities
│   ├── types/                # TypeScript types
│   └── public/               # Static assets, logos
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── index.ts          # Entry point
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Error handling, file upload
│   │   └── lib/              # Prisma client
│   └── prisma/
│       ├── schema.prisma     # Database schema
│       └── seed.ts           # Seed data
│
├── instruction.md            # Development guidelines
├── development-plan.md       # Implementation roadmap
└── rules.json                # Project configuration
```

## 🎨 Brand Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| Primary | `#2563EB` | Buttons, links, accents |
| Secondary | `#0F172A` | Text, headers, dark sections |
| Accent | `#34D399` | Highlights, success states |

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, case studies, CTA |
| About | `/about` | Mission, expertise, tech stack |
| Labs | `/labs` | Experimental projects |
| Blogs | `/blogs` | Blog listing with pagination |
| Blog Single | `/blogs/[slug]` | Individual blog post |
| Case Studies | `/case-studies` | Case studies listing |
| Case Study Single | `/case-studies/[slug]` | Individual case study |
| Products | `/products` | Products listing |
| Product Single | `/products/[slug]` | Individual product |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | List blogs with pagination |
| GET | `/api/blogs/:slug` | Get single blog |
| GET | `/api/case-studies` | List all case studies |
| GET | `/api/case-studies/:slug` | Get single case study |
| GET | `/api/products` | List all products |
| GET | `/api/products/:slug` | Get single product |
| POST | `/api/contact` | Submit contact form |

## 🚀 Deployment on Render

### Step 1: Create PostgreSQL Database

1. Go to https://dashboard.render.com/
2. Click **New +** → **PostgreSQL**
3. Configure:
   - Name: `flowagenz-db`
   - Region: Virginia (US East)
   - Plan: Free
4. Copy the **Internal Database URL**

### Step 2: Deploy Backend

1. Click **New +** → **Web Service**
2. Connect GitHub repo: `Dinesh7be/FlowAgenz`
3. Configure:
   - Name: `flowagenz-api`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install && npx prisma generate && npx prisma migrate deploy`
   - Start Command: `npm run build && npm start`
4. Environment Variables:
   ```
   DATABASE_URL = [Internal Database URL]
   PORT = 5000
   CORS_ORIGIN = https://flowagenz-web.onrender.com
   NODE_ENV = production
   ```

### Step 3: Deploy Frontend

1. Click **New +** → **Web Service**
2. Connect GitHub repo: `Dinesh7be/FlowAgenz`
3. Configure:
   - Name: `flowagenz-web`
   - Root Directory: `frontend`
   - Runtime: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. Environment Variables:
   ```
   NEXT_PUBLIC_API_URL = https://flowagenz.onrender.com/api
   ```

## 💻 Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Backend Setup

```bash
cd backend
npm install

# Create .env file
DATABASE_URL="postgresql://user:password@localhost:5432/flowagenz"
PORT=5000
CORS_ORIGIN=http://localhost:3000

# Run migrations and seed
npx prisma generate
npx prisma migrate dev
npm run db:seed

# Start server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start dev server
npm run dev
```

Open http://localhost:3000 in your browser.

## 📧 Contact Form

Contact form submissions are sent to: **dinesh7be@gmail.com**

To enable email notifications, add SMTP configuration to backend environment:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="FlowAgenz" <noreply@flowagenz.com>
```

## 📦 Database Schema

### Blog
- id, title, slug, content, excerpt, tags[], publishedAt, coverImage

### CaseStudy
- id, title, slug, client, challenge, solution, techUsed[], impact[], content, coverImage

### Product
- id, name, slug, overview, features[], techUsed[], demoUrl

### ContactMessage
- id, name, email, phone, company, requirements, budget, fileUrl

## 📝 License

MIT License - FlowAgenz

---

Built with ❤️ by FlowAgenz Team
