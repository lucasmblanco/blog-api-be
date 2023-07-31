import { Router } from 'express';
import { authenticateUser } from '../services/auth-services';
import {
    getController,
    likeOnPostController,
    likeOnCommentController,
} from '../controllers/like-controller';

const router = Router({ mergeParams: true });

router.get('/', getController);

router.get('/:id', getController);

router.post('/', authenticateUser, likeOnPostController);

router.post('/:id', authenticateUser, likeOnCommentController);

export default router;
