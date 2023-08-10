"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _httpErrors = _interopRequireDefault(require("http-errors"));
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _databaseConfiguration = require("./config/database-configuration.js");
var _routes = _interopRequireDefault(require("./v1/routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = process.env.PORT;
var app = (0, _express["default"])();
(0, _databaseConfiguration.main)()["catch"](function (err) {
  return console.log(err);
});
app.use((0, _cors["default"])({
  origin: true,
  credentials: true
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_passport["default"].initialize());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use('/v1', _routes["default"]);
/*
app.use('/', routes.main); 
app.use('/admin', routes.admin);
app.use('/users', routes.user);
app.use('/posts', routes.post);
app.use('/posts/:id/comments', routes.comment);
app.use('/posts/:id/likes', routes.like); 
*/
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});
app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port, function () {
  console.log("Server started on port: ".concat(port));
});
var _default = app;
exports["default"] = _default;