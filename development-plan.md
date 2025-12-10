# FlowAgenz Development Plan

## Project Timeline Overview

| Phase | Description | Duration |
|-------|-------------|----------|
| Phase 1 | Project Setup & Configuration | Day 1 |
| Phase 2 | Backend API Development | Day 2-3 |
| Phase 3 | Core Components | Day 3-4 |
| Phase 4 | Page Implementation | Day 4-6 |
| Phase 5 | Integration & Testing | Day 7 |
| Phase 6 | Deployment | Day 8 |

---

## Phase 1: Project Setup & Configuration

### 1.1 Initialize Frontend (Next.js)
- [ ] Create Next.js 14 app with TypeScript
- [ ] Configure Tailwind CSS with brand colors
- [ ] Set up path aliases (@/components, @/lib, etc.)
- [ ] Create folder structure
- [ ] Add Google Fonts (Inter)

### 1.2 Initialize Backend (Express)
- [ ] Create Express.js app with TypeScript
- [ ] Configure Prisma ORM
- [ ] Set up PostgreSQL connection
- [ ] Configure CORS and middleware
- [ ] Set up file upload (multer + S3)

### 1.3 Environment Configuration
- [ ] Create .env files for both frontend and backend
- [ ] Set up environment variable validation

---

## Phase 2: Backend API Development

### 2.1 Database Schema
- [ ] Define Prisma schema (Blog, CaseStudy, Product, ContactMessage)
- [ ] Run migrations
- [ ] Create seed data

### 2.2 API Routes

#### Blog Routes
```
GET  /api/blogs          - List blogs (paginated)
GET  /api/blogs/:slug    - Get single blog
```

#### Case Study Routes
```
GET  /api/case-studies        - List case studies
GET  /api/case-studies/:slug  - Get single case study
```

#### Product Routes
```
GET  /api/products       - List products
GET  /api/products/:slug - Get single product
```

#### Contact Routes
```
POST /api/contact        - Submit contact form
```

### 2.3 Controllers & Services
- [ ] Blog controller with pagination
- [ ] CaseStudy controller
- [ ] Product controller
- [ ] Contact controller with file upload

---

## Phase 3: Core Components

### 3.1 Layout Components
- [ ] **Header** - Logo, navigation, mobile menu
- [ ] **Footer** - Links, social icons, copyright

### 3.2 UI Components
- [ ] **Button** - Primary, secondary, outline variants
- [ ] **Card** - Generic card with variants
- [ ] **Input** - Text, textarea, select
- [ ] **Badge** - For tags and categories

### 3.3 Section Components
- [ ] **Hero** - Full-width hero with title, subtitle, CTAs
- [ ] **CTASection** - Call-to-action block
- [ ] **ServicesGrid** - 3-column services layout
- [ ] **SectionHeader** - Reusable section titles

### 3.4 Content Components
- [ ] **BlogCard** - Blog post preview card
- [ ] **CaseStudyCard** - Case study preview card
- [ ] **ProductCard** - Product preview card
- [ ] **ContactForm** - Multi-field form with file upload

---

## Phase 4: Page Implementation

### 4.1 Home Page (/)
Sections:
1. Hero Section
   - Title: "AI Agents & Automated Workflows for Fast-Growing Businesses"
   - Subtitle: Full description from project-plan.md
   - CTAs: "Get Started", "View Case Studies"

2. What FlowAgenz Does (3-column)
   - AI Agents
   - Automation Workflows
   - Custom Models

3. Why Businesses Choose FlowAgenz
   - 6 bullet points as list

4. Featured Case Studies
   - 3 case study cards
   - CTA: "View All Case Studies"

5. Footer CTA
   - "Ready to build your AI system?"
   - CTA: "Contact Us"

### 4.2 About Page (/about)
Sections:
1. Who We Are
2. Our Mission
3. Our Expertise (6 items)
4. Tech Stack (categorized)
5. CTA

### 4.3 Labs Page (/labs)
Sections:
1. FlowAgenz Labs intro
2. In Labs Now (7 experiments grid)
3. CTA: "Discover Our Experiments"

### 4.4 Blog Pages

#### Blog Listing (/blogs)
- Title: "Insights, Tutorials & Engineering Notes"
- Category filters
- Blog cards grid (3 columns)
- Pagination

#### Single Blog (/blogs/[slug])
- Title, subtitle, reading time
- Cover image
- Table of contents
- Blog content
- Tags
- Related articles
- CTA: Subscribe/Contact

### 4.5 Case Study Pages

#### Case Studies Listing (/case-studies)
- Title: "Real Transformations via AI & Automation"
- Case study cards grid

#### Single Case Study (/case-studies/[slug])
- Client info
- Challenge
- Solution
- Technology Used
- Impact metrics
- CTA: "Start Your Project"

### 4.6 Product Pages

#### Products Listing (/products)
- Title: "Our AI Tools & Solutions"
- Product cards grid

#### Single Product (/products/[slug])
- Product name
- Overview
- Key Features
- Tech Used
- Demo URL
- CTA: "Learn More"

### 4.7 Contact Page (/contact)
- Title: "Let's Build Something Intelligent"
- Subtitle: "Fill the form and our team will get back within 24 hours."
- Form fields: Name, Email, Phone, Company, Requirements, Budget, Attachment
- CTA: "Send Message"

### 4.8 Legal Pages
- Privacy Policy (/privacy)
- Terms of Service (/terms)

---

## Phase 5: Integration & Testing

### 5.1 Frontend-Backend Integration
- [ ] Configure API client
- [ ] Implement data fetching (ISR for blogs/case studies)
- [ ] Handle loading and error states
- [ ] Form submission handling

### 5.2 Testing
- [ ] Test all API endpoints
- [ ] Test form submissions
- [ ] Test file uploads
- [ ] Test pagination
- [ ] Responsive testing (mobile, tablet, desktop)

### 5.3 SEO Implementation
- [ ] Meta tags for all pages
- [ ] Open Graph tags
- [ ] Sitemap generation
- [ ] robots.txt

### 5.4 Performance Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Bundle analysis
- [ ] Lighthouse audit

---

## Phase 6: Deployment

### 6.1 Frontend Deployment (Vercel)
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Set up custom domain
- [ ] Enable analytics

### 6.2 Backend Deployment (Render/Railway)
- [ ] Create PostgreSQL database
- [ ] Deploy Express app
- [ ] Configure environment variables
- [ ] Set up S3 bucket for uploads

### 6.3 Post-Deployment
- [ ] DNS configuration
- [ ] SSL verification
- [ ] Monitoring setup
- [ ] Backup configuration

---

## Component Checklist

### Layout
- [ ] Header
- [ ] Footer
- [ ] Container
- [ ] PageWrapper

### UI
- [ ] Button
- [ ] Card
- [ ] Input
- [ ] Textarea
- [ ] Select
- [ ] Badge
- [ ] Spinner/Loading

### Sections
- [ ] Hero
- [ ] CTASection
- [ ] ServicesGrid
- [ ] SectionHeader
- [ ] FeatureList

### Content
- [ ] BlogCard
- [ ] BlogList
- [ ] CaseStudyCard
- [ ] CaseStudyGrid
- [ ] ProductCard
- [ ] ProductGrid
- [ ] ContactForm
- [ ] TableOfContents

---

## API Response Formats

### Blog List Response
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "slug": "string",
      "excerpt": "string",
      "tags": ["string"],
      "publishedAt": "ISO date",
      "coverImage": "string"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### Single Blog Response
```json
{
  "id": "string",
  "title": "string",
  "slug": "string",
  "content": "string (HTML/Markdown)",
  "excerpt": "string",
  "tags": ["string"],
  "publishedAt": "ISO date",
  "coverImage": "string"
}
```

### Case Study Response
```json
{
  "id": "string",
  "title": "string",
  "slug": "string",
  "client": "string",
  "challenge": "string",
  "solution": "string",
  "techUsed": ["string"],
  "impact": ["string"],
  "content": "string",
  "coverImage": "string"
}
```

### Product Response
```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "overview": "string",
  "features": ["string"],
  "techUsed": ["string"],
  "demoUrl": "string"
}
```

### Contact Form Request
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string",
  "company": "string",
  "requirements": "string (required)",
  "budget": "string",
  "file": "File (optional)"
}
```

---

## Notes

- All content must come from `project-plan.md`
- No lorem ipsum or placeholder text
- Follow brand colors strictly
- Mobile-first responsive design
- Optimize for Core Web Vitals

