# FlowAgenz Website

FlowAgenz is an AI engineering & automation company website built with Next.js, Express, and PostgreSQL.

**Tagline:** "Where Automation Meets Intelligence."

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Backend
- Node.js / Express
- Prisma ORM
- PostgreSQL

## Project Structure

```
flowagenz/
├── frontend/           # Next.js application
│   ├── app/            # App Router pages
│   ├── components/     # Reusable components
│   ├── lib/            # Utilities and API client
│   └── types/          # TypeScript types
│
├── backend/            # Express API
│   ├── src/
│   │   ├── routes/     # API routes
│   │   ├── controllers/# Route handlers
│   │   ├── middleware/ # Express middleware
│   │   └── lib/        # Prisma client
│   └── prisma/         # Database schema and seeds
│
├── instruction.md      # Project documentation
├── rules.json          # Project configuration
└── development-plan.md # Implementation roadmap
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/flowagenz"
   PORT=5000
   CORS_ORIGIN=http://localhost:3000
   
   # Optional: S3 for file uploads
   AWS_ACCESS_KEY_ID=your_key
   AWS_SECRET_ACCESS_KEY=your_secret
   AWS_BUCKET_NAME=flowagenz-uploads
   AWS_REGION=us-east-1
   ```

4. Generate Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Seed the database:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Blogs
- `GET /api/blogs?page=1&limit=10` - List blogs with pagination
- `GET /api/blogs/:slug` - Get single blog

### Case Studies
- `GET /api/case-studies` - List all case studies
- `GET /api/case-studies/:slug` - Get single case study

### Products
- `GET /api/products` - List all products
- `GET /api/products/:slug` - Get single product

### Contact
- `POST /api/contact` - Submit contact form (multipart/form-data)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, case studies |
| About | `/about` | Company info, mission, tech stack |
| Labs | `/labs` | Experimental projects and prototypes |
| Blogs | `/blogs` | Blog listing with categories |
| Blog Single | `/blogs/[slug]` | Individual blog post |
| Case Studies | `/case-studies` | Case studies listing |
| Case Study Single | `/case-studies/[slug]` | Individual case study |
| Products | `/products` | Products listing |
| Product Single | `/products/[slug]` | Individual product |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Brand Colors

| Name | Hex |
|------|-----|
| Primary | `#2563EB` |
| Secondary | `#0F172A` |
| Accent | `#34D399` |

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Backend (Render/Railway)
1. Push to GitHub
2. Create new web service
3. Set environment variables
4. Deploy

## License

MIT License - FlowAgenz

