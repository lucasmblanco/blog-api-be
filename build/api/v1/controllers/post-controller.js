"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneController = exports.getController = exports.editController = exports.deleteController = exports.createController = void 0;
var _expressValidator = require("express-validator");
var _postServices = require("../services/post-services");
var getController = function getController(req, res) {
  return (0, _postServices.postsInStorage)(res);
};
exports.getController = getController;
var createController = function createController(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _postServices.postFailed)(errors, res);
  }
  return (0, _postServices.postApproved)(req, res, next);
};
exports.createController = createController;
var deleteController = function deleteController(req, res, next) {
  return (0, _postServices.postDelete)(req, res, next);
};
exports.deleteController = deleteController;
var getOneController = function getOneController(req, res, next) {
  return (0, _postServices.postRequested)(req, res, next);
};
exports.getOneController = getOneController;
var editController = function editController(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _postServices.postFailed)(errors, res);
  }
  return (0, _postServices.postEdit)(req, res, next);
};
exports.editController = editController;