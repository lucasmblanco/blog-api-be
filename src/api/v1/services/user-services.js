import UserSchema from '../models/user-model';
import bcrypt from 'bcryptjs';

const userFailed = function (errors, res) {
    return (
        res
            .status(400)
            /*.send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)} `
    );*/
            .json({
                code: 400,
                message: 'Failed validation',
                errors: errors.array().map((e) => ({ error: e.msg })),
            })
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
            res.status(201).json({
                code: 201,
                message: 'Success in creating the user.',
                user: { username: newUser.username },
            });
        } catch {
            res.send(500).json({
                code: 500,
                message: 'Failed to create an user.',
                errors: [{ error: err.message }],
            });
        }
    });
};

const getUsers = async function (req, res) {
    try {
        const users = await UserSchema.find({}, 'username').sort({
            username: 1,
        });
        res.status(200).json({
            code: 200,
            message: 'Success retrieving users',
            users: users,
        });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed to retrieve users',
            errors: [{ error: err.message }],
        });
    }
};

const deleteUser = async function (req, res) {
    try {
        await UserSchema.findByIdAndDelete(req.params.id);
        return res
            .status(200)
            .json({ code: 200, message: 'The user was successfully deleted' });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: 'Failed retrieving user',
            errors: [{ error: err.message }],
        });
    }
};

export { userFailed, userApproved, getUsers, deleteUser };
