import { Router } from 'express';
import { authenticateUser } from '../services/auth-services';
import { likeControllerOnPost, likeControllerOnComment } from '../controllers/like-controller';

const router = Router({mergeParams : true });

router.post('/', authenticateUser, likeControllerOnPost); 

router.post('/:id', authenticateUser, likeControllerOnComment); 


export default router;