"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expressValidator = require("express-validator");
var userValidation = [(0, _expressValidator.body)('username').notEmpty().withMessage('username is required').trim().escape()
//.withMessage('username must be specific')
.isLength({
  min: 5
}).withMessage('Username must contain at least 5 characters and a maximum of 8'), (0, _expressValidator.body)('password').notEmpty().withMessage('Password is required').isLength({
  min: 8
}).withMessage('Password must contain at least 8 characters')];
var _default = userValidation;
exports["default"] = _default;