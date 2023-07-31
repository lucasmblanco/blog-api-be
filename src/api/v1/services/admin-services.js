import AdminSchema from '../models/admin-model';
import bcrypt from 'bcryptjs';

const adminFailed = function (errors, res) {
    return res
        .status(400)
        /*.send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)} `
    );*/
    .json( {code: 400, message: 'Failed validation', errors: errors.array().map(e => ({ error: e.msg }))})
};

const adminApproved = function (req, res) {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new AdminSchema({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.status(201).json({ code: 201, message: 'Admin created', user: {username: newUser.username} });
        } catch {
            res.send(500).json({ code: 500, message: 'Failed admin creation', errors: [err.message] });
        }
    });
};

export { adminFailed, adminApproved };
