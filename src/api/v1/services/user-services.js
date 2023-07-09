//import UserSchema from '../models/user-model'; 
import AdminSchema from '../models/admin-model';
import bcrypt from 'bcryptjs'; 

const userFailed = function (errors) {
    return errors.array().map(e => e.msg);
}

const userApproved = function (res, req) {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new AdminSchema({
                username: req.body.username,
                password: hashedPassword
         })
            await newUser.save();
            return res.status(200).json({ message: 'User created' }); 
        } catch {
            return res.send(503).json({ message: err.message }); 
      }
    })
}


export {
    userFailed,
    userApproved
}