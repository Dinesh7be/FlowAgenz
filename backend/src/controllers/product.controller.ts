import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { asyncHandler, AppError } from '../middleware/errorHandler';

// GET /api/products
export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      slug: true,
      overview: true,
      features: true,
      techUsed: true,
      demoUrl: true,
    },
  });

  res.json({
    data: products,
  });
});

// GET /api/products/:slug
export const getProductBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  res.json(product);
});

