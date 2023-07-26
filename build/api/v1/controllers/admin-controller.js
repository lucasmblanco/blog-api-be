"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logAdmin = exports.createAdmin = void 0;
var _expressValidator = require("express-validator");
var _adminServices = require("../services/admin-services");
var _authServices = require("../services/auth-services");
var createAdmin = function createAdmin(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    (0, _adminServices.adminFailed)(errors, res);
  }
  (0, _adminServices.adminApproved)(req, res);
};
exports.createAdmin = createAdmin;
var logAdmin = function logAdmin(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    (0, _adminServices.adminFailed)(errors, res);
  }
  void (0, _authServices.JWTAuth)(req, res, 'Admin');
};
exports.logAdmin = logAdmin;