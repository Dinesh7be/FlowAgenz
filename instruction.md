# FlowAgenz Website - Project Instructions

## Overview

FlowAgenz is an AI engineering & automation company website. This project implements a full-stack application with a Next.js frontend, Express.js backend, and PostgreSQL database.

**Tagline:** "Where Automation Meets Intelligence."

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **File Storage:** S3-compatible (for contact form uploads)
- **Deployment:** Render / AWS / Railway

---

## Brand Identity

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#2563EB` | Buttons, links, accents |
| Secondary | `#0F172A` | Text, headers, dark sections |
| Accent | `#34D399` | Highlights, success states |
| Background | `#FFFFFF` / `#F8FAFC` | Page backgrounds |

### Brand Voice
- Professional
- Clean & Technical
- Confident
- Modern
- Simple and straight to the point

### Brand Pillars
1. Custom AI Agents
2. Workflow Automation (Make / n8n / API)
3. LLM Fine-tuning
4. No-Code + Code Hybrid Engineering
5. End-to-End System Deployment

---

## Folder Structure

```
flowagenz/
├── frontend/                     # Next.js Application
│   ├── app/                      # App Router pages
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   ├── labs/
│   │   ├── blogs/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Single blog
│   │   ├── case-studies/
│   │   │   ├── page.tsx          # Case studies listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Single case study
│   │   ├── products/
│   │   │   ├── page.tsx          # Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Single product
│   │   ├── contact/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── ServicesGrid.tsx
│   │   ├── blog/
│   │   │   └── BlogCard.tsx
│   │   ├── case-study/
│   │   │   └── CaseStudyCard.tsx
│   │   ├── product/
│   │   │   └── ProductCard.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── lib/                      # Utilities
│   │   ├── api.ts                # API client
│   │   └── utils.ts              # Helper functions
│   ├── types/                    # TypeScript types
│   │   └── index.ts
│   ├── public/                   # Static assets
│   ├── tailwind.config.ts
│   ├── next.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                      # Express API
│   ├── src/
│   │   ├── index.ts              # Entry point
│   │   ├── routes/
│   │   │   ├── blog.routes.ts
│   │   │   ├── caseStudy.routes.ts
│   │   │   ├── product.routes.ts
│   │   │   └── contact.routes.ts
│   │   ├── controllers/
│   │   │   ├── blog.controller.ts
│   │   │   ├── caseStudy.controller.ts
│   │   │   ├── product.controller.ts
│   │   │   └── contact.controller.ts
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   └── upload.ts
│   │   └── lib/
│   │       └── prisma.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── tsconfig.json
│   └── package.json
│
├── instruction.md                # This file
├── rules.json                    # Project rules
└── development-plan.md           # Implementation roadmap
```

---

## API Endpoints

### Blogs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs?page=1&limit=10` | List blogs with pagination |
| GET | `/api/blogs/:slug` | Get single blog by slug |

### Case Studies
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/case-studies` | List all case studies |
| GET | `/api/case-studies/:slug` | Get single case study by slug |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/:slug` | Get single product by slug |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form (multipart/form-data) |

---

## Database Schema

### Blog
```prisma
model Blog {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String   @db.Text
  excerpt     String
  tags        String[]
  publishedAt DateTime
  coverImage  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### CaseStudy
```prisma
model CaseStudy {
  id         String   @id @default(cuid())
  title      String
  slug       String   @unique
  client     String
  challenge  String   @db.Text
  solution   String   @db.Text
  techUsed   String[]
  impact     String[]
  content    String   @db.Text
  coverImage String?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

### Product
```prisma
model Product {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  overview  String   @db.Text
  features  String[]
  techUsed  String[]
  demoUrl   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### ContactMessage
```prisma
model ContactMessage {
  id           String   @id @default(cuid())
  name         String
  email        String
  phone        String?
  company      String?
  requirements String   @db.Text
  budget       String?
  fileUrl      String?
  createdAt    DateTime @default(now())
}
```

---

## Component Guidelines

### Naming Conventions
- **Components:** PascalCase (e.g., `BlogCard.tsx`)
- **Files:** PascalCase for components, camelCase for utilities
- **CSS Classes:** Use Tailwind utilities, no custom CSS unless necessary

### Component Structure
```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) {
  // Component implementation
}
```

### Import Order
1. React/Next.js imports
2. Third-party libraries
3. Local components
4. Types
5. Utilities/helpers

---

## Development Commands

### Frontend
```bash
cd frontend
npm install
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
```

### Backend
```bash
cd backend
npm install
npx prisma generate  # Generate Prisma client
npx prisma migrate dev  # Run migrations
npm run dev          # Start dev server (port 5000)
npm run build        # Build for production
npm run start        # Start production server
```

---

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/flowagenz"
PORT=5000
CORS_ORIGIN=http://localhost:3000
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_BUCKET_NAME=flowagenz-uploads
AWS_REGION=us-east-1
```

---

## SEO Guidelines

- Every page must have unique meta title and description
- Use Next.js metadata API for SEO
- Implement Open Graph tags for social sharing
- Add structured data (JSON-LD) where applicable
- Use semantic HTML (header, main, section, article, footer)

---

## Performance Guidelines

- Use Next/Image for all images
- Implement ISR (Incremental Static Regeneration) for blogs and case studies
- Lazy load below-the-fold content
- Minimize JavaScript bundle size
- Use dynamic imports for heavy components

---

## Content Source

All page content, text, and copy must come from `project-plan.md`. No placeholder text (lorem ipsum) is allowed.

