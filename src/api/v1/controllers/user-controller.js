import { validationResult } from 'express-validator'; 
import { userApproved, userFailed } from '../services/user-services';

const userCreation = (req, res, next) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).send(`Failed validation w/ this errors: ${userFailed(errors)} `); 
        //userFailed(errors)
    } else {
        try {
            userApproved(req); 
            return res.send('user created'); 
        } catch (err) {
            next(err); 
        }
    }
}
export {
    userCreation
}