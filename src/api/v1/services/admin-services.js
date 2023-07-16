import AdminSchema from '../models/admin-model';
import bcrypt from 'bcryptjs';

const adminFailed = function (errors, res) {
    return res
        .status(400)
        .send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)} `
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
            res.status(200).json({ message: 'Admin created' });
        } catch {
            res.send(503).json({ message: err.message });
        }
    });
};

export { adminFailed, adminApproved };
