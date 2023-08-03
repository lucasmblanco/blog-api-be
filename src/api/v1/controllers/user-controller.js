import { validationResult } from 'express-validator';
import {
    userApproved,
    userFailed,
    getUsers,
    deleteUser,
} from '../services/user-services';
//import { adminFailed } from '../services/admin-services';
import { JWTAuth } from '../services/auth-services';

const createController = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return userFailed(errors, res);
    } 
    return userApproved(req, res);
};

const logController = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return userFailed(errors, res);
    }
    return JWTAuth(req, res, 'User');
};

const getController = (req, res) => {
    getUsers(req, res);
};

const deleteController = (req, res) => {
    deleteUser(req, res);
};

export { createController, logController, getController, deleteController };
