import UserSchema from '../models/user-model'; 
import bcrypt from 'bcryptjs'; 

const userFailed = function (errors) {
    return errors.array().map(e => e.msg);
}

const userApproved = function (req) {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new UserSchema({
                username: req.body.username,
                password: hashedPassword
         })
            await newUser.save()
        } catch {
            return err; 
      }
    })
    
}

export {
    userFailed,
    userApproved
}