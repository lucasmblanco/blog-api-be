import { Router } from "express";
import { authenticateUser } from '../services/auth-services';
import { createControllerOnPost, createControllerOnComment } from '../controllers/comment-controller';
import  commentValidation  from '../validations/comment-validation';

const router = Router({mergeParams : true });

router.get('/', (req, res) => {
    const id = req.params.id;
    res.send(id);
}); 

router.post('/', authenticateUser, commentValidation, createControllerOnPost); 

router.post('/:id/', authenticateUser, commentValidation, createControllerOnComment); 

export default router;