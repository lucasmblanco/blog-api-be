import { Router } from 'express';
import {
    createPost,
    deletePost,
    showPosts,
    getPost
} from '../controllers/post-controller';
import { postValidation } from '../validations/post-validation';
import { authenticateAdmin } from '../services/auth-services';

const router = Router();

router.get('/', showPosts);

router.get('/:id', getPost);

router.post('/', authenticateAdmin, postValidation, createPost);

router.delete('/:id', authenticateAdmin, deletePost);

export default router;
