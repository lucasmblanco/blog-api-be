import { Router } from 'express';
import userValidation from '../validations/user-validation';
import { createController, logController, getController } from '../controllers/user-controller';
import { authenticateAdmin } from '../services/auth-services';
//import { setUserLocal } from '../middlewares/set-user-local';
//import { authenticateUser } from '../services/auth-services';

const router = Router();

router.get('/', authenticateAdmin, getController);

router.post('/signup', userValidation, createController);

router.post('/login', userValidation, logController);

export default router;
