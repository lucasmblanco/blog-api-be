import { validationResult } from 'express-validator';
import { userApproved, userFailed } from '../services/user-services';
import { adminFailed } from '../services/admin-services';
import { JWTAuth } from '../services/auth-services';

const createUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return userFailed(errors, res);
    }
    return userApproved(req, res);
};

const logUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return userFailed(errors, res);
    }
    return JWTAuth(req, res, 'User');
};
export { createUser, logUser };
