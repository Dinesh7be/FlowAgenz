import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { asyncHandler, AppError } from '../middleware/errorHandler';

// GET /api/blogs
export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = Math.min(parseInt(req.query.limit as string) || 10, 50);
  const skip = (page - 1) * limit;

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      orderBy: { publishedAt: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        tags: true,
        publishedAt: true,
        coverImage: true,
      },
    }),
    prisma.blog.count(),
  ]);

  res.json({
    data: blogs,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/blogs/:slug
export const getBlogBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    throw new AppError('Blog not found', 404);
  }

  res.json(blog);
});

