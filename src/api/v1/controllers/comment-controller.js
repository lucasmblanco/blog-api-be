import { validationResult } from 'express-validator';
import {
    commentFailed,
    commentOnPost,
    commentOnComment,
    getCommentService,
    deleteComment, 
} from '../services/comment-services';

const getController = function (req, res) {
    getCommentService(req, res);
}

const createOnPostController = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return commentFailed(errors, res);
    }
    commentOnPost(req, res);
};

const createOnCommentController = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return commentFailed(errors, res);
    }
    commentOnComment(req, res);
};

const deleteController = function (req, res) {
    deleteComment(req, res); 
}

export { createOnPostController, createOnCommentController, getController, deleteController };
