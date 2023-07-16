import { validationResult } from 'express-validator';
import { adminApproved, adminFailed } from '../services/admin-services';
import { JWTAuth } from '../services/auth-services';

const createAdmin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        adminFailed(errors, res);
    }
    adminApproved(req, res);
};

const logAdmin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        adminFailed(errors, res);
    }
    void JWTAuth(req, res, 'Admin');
};

export { createAdmin, logAdmin };
