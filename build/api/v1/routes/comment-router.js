"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authServices = require("../services/auth-services");
var _commentController = require("../controllers/comment-controller");
var _commentValidation = _interopRequireDefault(require("../validations/comment-validation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)({
  mergeParams: true
});
router.get('/', _commentController.getController);
router.get('/:id/', _commentController.getController);
router.post('/', _authServices.authenticateUser, _commentValidation["default"], _commentController.createOnPostController);
router.post('/:id', _authServices.authenticateUser, _commentValidation["default"], _commentController.createOnCommentController);
router["delete"]('/:id', _authServices.authenticateUser, _commentController.deleteController);
var _default = router;
exports["default"] = _default;