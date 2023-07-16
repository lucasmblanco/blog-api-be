import UserSchema from '../models/user-model';
import bcrypt from 'bcryptjs';

const userFailed = function (errors, res) {
    return res
        .status(400)
        .send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)} `
        );
};

const userApproved = function (req, res) {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new UserSchema({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.status(200).json({ message: 'User created' });
        } catch {
            res.send(503).json({ message: err.message });
        }
    });
};

export { userFailed, userApproved };
