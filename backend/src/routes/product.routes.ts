import { Router } from 'express';
import { getProducts, getProductBySlug } from '../controllers/product.controller';

const router = Router();

// GET /api/products - List all products
router.get('/', getProducts);

// GET /api/products/:slug - Get single product by slug
router.get('/:slug', getProductBySlug);

export default router;

