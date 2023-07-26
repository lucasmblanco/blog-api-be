"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authServices = require("../services/auth-services");
var _likeController = require("../controllers/like-controller");
var router = (0, _express.Router)({
  mergeParams: true
});
router.get('/', _likeController.getController);
router.get('/:id', _likeController.getController);
router.post('/', _authServices.authenticateUser, _likeController.likeOnPostController);
router.post('/:id', _authServices.authenticateUser, _likeController.likeOnCommentController);
var _default = router;
exports["default"] = _default;