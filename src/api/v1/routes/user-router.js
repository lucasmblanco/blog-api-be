import { Router } from 'express';

const router = Router();

router.get('/sign-up', (req, res) => {
    return res.send('response with a resource');
});

export default router;
