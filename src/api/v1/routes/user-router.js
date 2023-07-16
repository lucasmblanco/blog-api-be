import { Router } from 'express';
import userValidation from '../validations/user-validation';
import { createUser, logUser } from '../controllers/user-controller';
//import { setUserLocal } from '../middlewares/set-user-local';
//import { authenticateUser } from '../services/auth-services';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send('response with a resource');
});

router.post('/signup', userValidation, createUser);

router.post('/login', userValidation, logUser);

export default router;
