import { validationResult } from 'express-validator';
import {
    postFailed,
    postApproved,
    postsInStorage,
    postDelete,
    postRequested
} from '../services/post-services';

const showPosts = (req, res, next) => {
    return postsInStorage(res, next);
};

const createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return postFailed(errors, res);
    }
    return postApproved(req, res, next);
};
  
const deletePost = (req, res, next) => {
    return postDelete(req, res, next); 
}

const getPost = (req, res, next) => {
    return postRequested(req, res, next); 
}

export { showPosts, createPost, deletePost, getPost };
