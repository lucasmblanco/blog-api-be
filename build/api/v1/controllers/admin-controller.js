"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOutController = exports.logAdmin = exports.createAdmin = void 0;
var _expressValidator = require("express-validator");
var _adminServices = require("../services/admin-services");
var _authServices = require("../services/auth-services");
var createAdmin = function createAdmin(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    //console.log(errors); 
    (0, _adminServices.adminFailed)(errors, res);
  } else {
    (0, _adminServices.adminApproved)(req, res);
  }
};
exports.createAdmin = createAdmin;
var logAdmin = function logAdmin(req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return (0, _adminServices.adminFailed)(errors, res);
  }
  return void (0, _authServices.logInService)(req, res, 'Admin');
};
exports.logAdmin = logAdmin;
var logOutController = function logOutController(req, res) {
  (0, _authServices.logOutService)(res);
};
exports.logOutController = logOutController;