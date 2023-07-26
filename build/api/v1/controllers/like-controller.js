"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeOnPostController = exports.likeOnCommentController = exports.getController = void 0;
var _likeServices = require("../services/like-services");
var likeOnPostController = function likeOnPostController(req, res) {
  (0, _likeServices.likeOnPost)(req, res);
};
exports.likeOnPostController = likeOnPostController;
var likeOnCommentController = function likeOnCommentController(req, res) {
  (0, _likeServices.likeOnComment)(req, res);
};
exports.likeOnCommentController = likeOnCommentController;
var getController = function getController(req, res) {
  (0, _likeServices.getLikes)(req, res);
};
exports.getController = getController;