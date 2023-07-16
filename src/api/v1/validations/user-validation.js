import { body } from 'express-validator';

const userValidation = [
    body('username')
        .notEmpty()
        .withMessage('username is required')
        .trim()
        .escape()
        .withMessage('username must be specific'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must contain at least 8 characters'),
];

export default userValidation;
