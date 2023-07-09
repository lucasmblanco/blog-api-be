import { Router } from 'express';
import userValidation from '../validations/user-validation';
import { createUser } from '../controllers/user-controller'; 

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send('response with a resource');
});

router.post('/sign-up', userValidation, createUser);

export default router;