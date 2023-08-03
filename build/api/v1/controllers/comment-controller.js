"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getController = exports.deleteController = exports.createOnPostController = exports.createOnCommentController = void 0;
var _expressValidator = require("express-validator");
var _commentServices = require("../services/comment-services");
var getController = function getController(req, res) {
  (0, _commentServices.getCommentService)(req, res);
};
exports.getController = getController;
var createOnPostController = function createOnPostController(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _commentServices.commentFailed)(errors, res);
  }
  return (0, _commentServices.commentOnPost)(req, res);
};
exports.createOnPostController = createOnPostController;
var createOnCommentController = function createOnCommentController(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _commentServices.commentFailed)(errors, res);
  }
  return (0, _commentServices.commentOnComment)(req, res);
};
exports.createOnCommentController = createOnCommentController;
var deleteController = function deleteController(req, res) {
  (0, _commentServices.deleteComment)(req, res);
};
exports.deleteController = deleteController;