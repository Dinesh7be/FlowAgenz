import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller';
import { upload } from '../middleware/upload';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', upload.single('file'), submitContactForm);

export default router;

