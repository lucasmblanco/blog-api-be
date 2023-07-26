"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logController = exports.getController = exports.deleteController = exports.createController = void 0;
var _expressValidator = require("express-validator");
var _userServices = require("../services/user-services");
var _authServices = require("../services/auth-services");
//import { adminFailed } from '../services/admin-services';

var createController = function createController(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _userServices.userFailed)(errors, res);
  }
  return (0, _userServices.userApproved)(req, res);
};
exports.createController = createController;
var logController = function logController(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _userServices.userFailed)(errors, res);
  }
  return (0, _authServices.JWTAuth)(req, res, 'User');
};
exports.logController = logController;
var getController = function getController(req, res) {
  (0, _userServices.getUsers)(req, res);
};
exports.getController = getController;
var deleteController = function deleteController(req, res) {
  (0, _userServices.deleteUser)(req, res);
};
exports.deleteController = deleteController;