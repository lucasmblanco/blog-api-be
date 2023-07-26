"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userValidation = _interopRequireDefault(require("../validations/user-validation"));
var _adminController = require("../controllers/admin-controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.status(200).send('response with a resource from admin route');
});
router.post('/signup', _userValidation["default"], _adminController.createAdmin);
router.post('/login', _userValidation["default"], _adminController.logAdmin);
var _default = router;
exports["default"] = _default;