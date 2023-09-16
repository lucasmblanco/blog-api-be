"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeResourceController = exports.getController = exports.dislikeResourceController = void 0;
var _likeServices = require("../services/like-services");
var likeResourceController = function likeResourceController(req, res) {
  (0, _likeServices.likeResource)(req, res);
};
exports.likeResourceController = likeResourceController;
var getController = function getController(req, res) {
  (0, _likeServices.getLikes)(req, res);
};
exports.getController = getController;
var dislikeResourceController = function dislikeResourceController(req, res) {
  (0, _likeServices.dislikeResource)(req, res);
};
exports.dislikeResourceController = dislikeResourceController;