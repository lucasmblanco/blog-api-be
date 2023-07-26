"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mainRouter = _interopRequireDefault(require("./main-router"));
var _adminRouter = _interopRequireDefault(require("./admin-router"));
var _userRouter = _interopRequireDefault(require("./user-router"));
var _postRouter = _interopRequireDefault(require("./post-router"));
var _likeRouter = _interopRequireDefault(require("./like-router"));
var _commentRouter = _interopRequireDefault(require("./comment-router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  main: _mainRouter["default"],
  admin: _adminRouter["default"],
  user: _userRouter["default"],
  post: _postRouter["default"],
  like: _likeRouter["default"],
  comment: _commentRouter["default"]
};
exports["default"] = _default;