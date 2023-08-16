"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postValidation = void 0;
var _expressValidator = require("express-validator");
var postValidation = [(0, _expressValidator.body)('title').notEmpty().withMessage('title is required').trim().escape().withMessage('title must be specific'), (0, _expressValidator.body)('body').notEmpty().withMessage('body is required'),
//.trim()
//.escape()
//.withMessage('body must be specific'),
(0, _expressValidator.body)('published').customSanitizer(function (input) {
  return Boolean(input);
})];
exports.postValidation = postValidation;