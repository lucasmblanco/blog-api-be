import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Successful conection with the blog API' });
});

export default router;
