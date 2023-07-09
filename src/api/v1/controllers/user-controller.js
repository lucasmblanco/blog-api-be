import { validationResult } from 'express-validator'; 
import { userApproved, userFailed } from '../services/user-services';

const createUser = (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).send(`Failed validation w/ this errors: ${userFailed(errors)} `); 
    }
        userApproved(res, req); 
}
export {
    createUser
}
