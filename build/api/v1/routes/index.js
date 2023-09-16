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
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express.Router)();
routes.use('/', _mainRouter["default"]);
routes.use('/admin', _adminRouter["default"]);
routes.use('/users', _userRouter["default"]);
routes.use('/posts', _postRouter["default"]);
routes.use('/posts/:id/comments', _commentRouter["default"]);
routes.use('/posts/:id/likes', _likeRouter["default"]);
routes.use('/posts/:postId/comments/:commentId/likes', _likeRouter["default"]);
var _default = routes;
exports["default"] = _default;