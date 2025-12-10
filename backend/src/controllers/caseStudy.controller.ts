import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { asyncHandler, AppError } from '../middleware/errorHandler';

// GET /api/case-studies
export const getCaseStudies = asyncHandler(async (req: Request, res: Response) => {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      client: true,
      challenge: true,
      techUsed: true,
      impact: true,
      coverImage: true,
    },
  });

  res.json({
    data: caseStudies,
  });
});

// GET /api/case-studies/:slug
export const getCaseStudyBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const caseStudy = await prisma.caseStudy.findUnique({
    where: { slug },
  });

  if (!caseStudy) {
    throw new AppError('Case study not found', 404);
  }

  res.json(caseStudy);
});

