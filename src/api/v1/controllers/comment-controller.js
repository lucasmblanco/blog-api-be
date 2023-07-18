import { validationResult } from "express-validator"; 
import { commentFailed, commentOnPost, commentOnComment } from '../services/comment-services'; 

const createControllerOnPost = function(req, res){
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return commentFailed(errors, res);
    }
    commentOnPost(req, res);
}

const createControllerOnComment = function(req, res){
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return commentFailed(errors, res);
    }
    commentOnComment(req, res);
}

export {
    createControllerOnPost,
    createControllerOnComment
}