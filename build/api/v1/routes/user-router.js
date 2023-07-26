"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userValidation = _interopRequireDefault(require("../validations/user-validation"));
var _userController = require("../controllers/user-controller");
var _authServices = require("../services/auth-services");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import { setUserLocal } from '../middlewares/set-user-local';
//import { authenticateUser } from '../services/auth-services';
var router = (0, _express.Router)();
router.get('/', _authServices.authenticateAdmin, _userController.getController);
router.post('/signup', _userValidation["default"], _userController.createController);
router.post('/login', _userValidation["default"], _userController.logController);
router["delete"]('/:id', _authServices.authenticateAdmin, _userController.deleteController);
var _default = router;
exports["default"] = _default;