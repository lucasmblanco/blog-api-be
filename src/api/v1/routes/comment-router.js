import { Router } from 'express';
import { authenticateUser, authenticateAdmin } from '../services/auth-services';
import {
    createOnPostController,
    createOnCommentController,
    getController,
    deleteController,
} from '../controllers/comment-controller';
import commentValidation from '../validations/comment-validation';

const router = Router({ mergeParams: true });

router.get('/', getController);

router.get('/:id/', getController); 

router.post('/', authenticateUser, commentValidation, createOnPostController);

router.post(
    '/:id',
    authenticateUser,
    commentValidation,
    createOnCommentController
);



router.delete('/:id', authenticateUser, deleteController); 

export default router;
