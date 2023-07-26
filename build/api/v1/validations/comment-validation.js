"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expressValidator = require("express-validator");
var commentValidation = [(0, _expressValidator.body)('body').notEmpty().withMessage('body is required').trim().escape().withMessage('body must be specific')];
var _default = commentValidation;
exports["default"] = _default;