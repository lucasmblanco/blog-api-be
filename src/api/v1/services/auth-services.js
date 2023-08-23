import bcrypt from 'bcryptjs';
import Admin from '../models/admin-model';
import User from '../models/user-model';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { EXPIRATION_TIME } from '../../config/constants';

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['access_token'];
    }
    return token;
};

const PASSPORT_OPTIONS = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.SECRET,
    passReqToCallback: true,
};

const JWT_SIGN_OPTIONS = {
    expiresIn: EXPIRATION_TIME,
};

passport.use(
    'user-auth',
    new JwtStrategy(PASSPORT_OPTIONS, async (req, jwt_payload, done) => {
        try {
            const user = await User.find({ username: jwt_payload.username });
            if (user) {
                req.user = user;
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);

passport.use(
    'admin-auth',
    new JwtStrategy(PASSPORT_OPTIONS, async (req, jwt_payload, done) => {
        try {
            const user = await Admin.find({ username: jwt_payload.username });
            if (user) {
                req.user = user;
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);
const logInService = async function (req, res, option) {
    const { username, password } = req.body;
    const user =
        option === 'Admin'
            ? await Admin.findOne({ username })
            : await User.findOne({ username });
    if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!err && isMatch) {
                const secret = process.env.SECRET;
                const token = jwt.sign({ username }, secret, JWT_SIGN_OPTIONS);
                res.cookie('access_token', token, {
                    httpOnly: true,
                    maxAge: EXPIRATION_TIME,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'none',
                });
                return res.status(200).json({
                    code: 200,
                    message: 'Auth was successfully passed.',
                    user: { username: user.username },
                });
            } else {
                return res.status(401).json({
                    code: 401,
                    errors: [{ error: 'The authorization was not granted.' }],
                });
            }
        });
    } else {
        res.status(401).json({
            code: 401,
            errors: [{ error: 'The authorization was not granted.' }],
        });
    }
};

const logOutService = (res) => {
    res.cookie('access_token', null, {
        httpOnly: true,
        maxAge: -1,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
    });
    return res.status(200).json({
        code: 200,
        message: 'User successfully log out',
    });
};

const authenticateUser = passport.authenticate('user-auth', { session: false });
const authenticateAdmin = passport.authenticate('admin-auth', {
    session: false,
});

export { logInService, logOutService, authenticateUser, authenticateAdmin };
