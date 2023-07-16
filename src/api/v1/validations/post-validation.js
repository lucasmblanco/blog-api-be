import { body } from 'express-validator';

const postValidation = [
    body('title')
        .notEmpty()
        .withMessage('title is required')
        .trim()
        .escape()
        .withMessage('title must be specific'),
    body('body')
        .notEmpty()
        .withMessage('body is required')
        .trim()
        .escape()
        .withMessage('body must be specific'),
    body('published').customSanitizer((input) => {
        return Boolean(input);
    }),
];

export { postValidation };
