import { Router } from 'express';
import { getCaseStudies, getCaseStudyBySlug } from '../controllers/caseStudy.controller';

const router = Router();

// GET /api/case-studies - List all case studies
router.get('/', getCaseStudies);

// GET /api/case-studies/:slug - Get single case study by slug
router.get('/:slug', getCaseStudyBySlug);

export default router;

