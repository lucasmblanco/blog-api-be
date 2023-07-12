import { validationResult } from 'express-validator'; 
import { userApproved, userFailed } from '../services/user-services';
import { JWTAuth } from '../services/auth-services'; 

const createAdmin = (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).send(`Failed validation w/ this errors: ${userFailed(errors)} `); 
    }
       userApproved(res, req); 
}

const logAdmin = (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).send(`Failed validation w/ this errors: ${userFailed(errors)} `); 
    } 
        JWTAuth(req, res); 
    // return res.send('admin authenticated');
}

export {
    createAdmin,
    logAdmin
}