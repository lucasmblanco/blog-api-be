"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _postController = require("../controllers/post-controller");
var _postValidation = require("../validations/post-validation");
var _authServices = require("../services/auth-services");
var router = (0, _express.Router)();
router.get('/', _postController.getController);
router.get('/:id', _postController.getOneController);
router.post('/', _authServices.authenticateAdmin, _postValidation.postValidation, _postController.createController);
router.put('/:id', _authServices.authenticateAdmin, _postValidation.postValidation, _postController.editController);
router["delete"]('/:id', _authServices.authenticateAdmin, _postController.deleteController);
var _default = router;
exports["default"] = _default;