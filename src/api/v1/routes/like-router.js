import { Router } from 'express';
import { authenticateUser } from '../services/auth-services';
import {
    getController,
    likeResourceController,
   
    dislikeResourceController,

} from '../controllers/like-controller';

const router = Router({ mergeParams: true });

router.get('/', getController);

router.post('/', authenticateUser, likeResourceController);

router.delete('/', authenticateUser, dislikeResourceController);

export default router;
