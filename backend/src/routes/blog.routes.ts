import { Router } from 'express';
import { getBlogs, getBlogBySlug } from '../controllers/blog.controller';

const router = Router();

// GET /api/blogs - List blogs with pagination
router.get('/', getBlogs);

// GET /api/blogs/:slug - Get single blog by slug
router.get('/:slug', getBlogBySlug);

export default router;

