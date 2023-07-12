import { validationResult } from 'express-validator'; 
import { postFailed, postApproved } from '../services/post-services'; 

const createPost = (req, res, next) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).send(`Failed validation w/ this errors: ${postFailed(errors)} `); 
    }
    postApproved(req, res, next); 
} 

export {
    createPost
}