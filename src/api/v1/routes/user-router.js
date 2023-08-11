import { Router } from 'express';
import userValidation from '../validations/user-validation';
import {
    createController,
    logController,
    getController,
    deleteController,
    logOutController
} from '../controllers/user-controller';
import { authenticateAdmin, authenticateUser } from '../services/auth-services';

const router = Router();

router.get('/', authenticateAdmin, getController);

router.post('/signup', userValidation, createController);

router.post('/login', userValidation, logController);

router.post('/logout', authenticateUser, logOutController); 

router.delete('/:id', authenticateAdmin, deleteController);

export default router;
