import { Router } from 'express';
import userValidation from '../validations/user-validation';
import { createAdmin, logAdmin } from '../controllers/admin-controller';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send('response with a resource from admin route');
});

router.post('/signup', userValidation, createAdmin);

router.post('/login', userValidation, logAdmin);

export default router;