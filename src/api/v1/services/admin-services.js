import AdminSchema from '../models/admin-model';
import bcrypt from 'bcryptjs';

const adminFailed = function (errors, res) {
    return (
        res
            .status(400)
            .json({
                code: 400,
                message: 'Failed validation',
                errors: errors.array().map((e) => ({ error: e.msg })),
            })
    );
};

const adminApproved = function (req, res) {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new AdminSchema({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.status(201).json({
                code: 201,
                message: 'Success in creating the admin.',
                user: { username: newUser.username },
            });
        } catch {
            res.status(500).json({
                code: 500,
                message: 'Failed to create an admin.',
                errors: [err.message],
            });
        }
    });
};

export { adminFailed, adminApproved };
