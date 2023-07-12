import { Router } from 'express';
import { createPost } from '../controllers/post-controller'; 
import { postValidation } from '../validations/post-validation';
import { authenticateUser } from '../services/auth-services';

const router = Router();

router.post('/create', postValidation, authenticateUser, createPost); 

export default router;