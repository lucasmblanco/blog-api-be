import { Router } from 'express';
//import UserSchema from '../models/user-model'; 
import userValidation from '../validations/user-validation';
import { userCreation } from '../controllers/user-controller';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send('response with a resource');
});

router.post('/sign-up', userValidation, userCreation);

export default router;
