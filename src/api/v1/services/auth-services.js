import bcrypt from 'bcryptjs'; 
import Admin from '../models/admin-model'; 
import jwt from 'jsonwebtoken'; 

const JWTAuth = async function (res, req) {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username });
    if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!err && isMatch) {
                const opts = {}
                opts.expiresIn = 120; 
                const secret = process.env.SECRET;
                const token = jwt.sign({ username }, secret, opts);
                return res.status(200).json({
                    message: "Auth Passed",
                    token
                })
            }
           //return new Error('Auth Failed'); 
            res.status(401).json({ message: "Auth Failed" })
        });
    };
    res.status(401).json({ message: "Auth Failed" })
}

export {
    JWTAuth,
}