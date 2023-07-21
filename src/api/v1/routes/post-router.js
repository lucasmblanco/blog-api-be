import { Router } from 'express';
import {
    createController,
    deleteController,
    editController,
    getController,
    getOneController,
} from '../controllers/post-controller';
import { postValidation } from '../validations/post-validation';
import { authenticateAdmin } from '../services/auth-services';

const router = Router();

router.get('/', getController);

router.get('/:id', getOneController);

router.post('/', authenticateAdmin, postValidation, createController);

router.put('/:id', authenticateAdmin, postValidation, editController);

router.delete('/:id', authenticateAdmin, deleteController);

export default router;
