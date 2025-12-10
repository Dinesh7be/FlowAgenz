import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blog.routes';
import caseStudyRoutes from './routes/caseStudy.routes';
import productRoutes from './routes/product.routes';
import contactRoutes from './routes/contact.routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({ 
    name: 'FlowAgenz API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/health',
      blogs: '/api/blogs',
      caseStudies: '/api/case-studies',
      products: '/api/products',
      contact: '/api/contact'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;

