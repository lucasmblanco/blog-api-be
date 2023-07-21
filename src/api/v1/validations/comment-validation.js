import { body } from 'express-validator';

const commentValidation = [
    body('body')
        .notEmpty()
        .withMessage('body is required')
        .trim()
        .escape()
        .withMessage('body must be specific'),
];

export default commentValidation;
