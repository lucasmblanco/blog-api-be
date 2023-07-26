import bcrypt from 'bcryptjs';
import Admin from '../models/admin-model';
import User from '../models/user-model';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const JWTAuth = async function (req, res, option) {
    const { username, password } = req.body;
    const user =
        option === 'Admin'
            ? await Admin.findOne({ username })
            : await User.findOne({ username });
    if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!err && isMatch) {
                const opts = {};
                opts.expiresIn = 1200;
                const secret = process.env.SECRET;
                const token = jwt.sign({ username }, secret, opts);
                return res.status(200).json({
                    message: 'Auth Passed',
                    token,
                });
            } else {
                return res.status(401).json({ message: 'Auth Failed' });
            }
        });
    } else {
        res.status(401).json({ message: 'Auth Failed' });
    }
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
opts.passReqToCallback = true;

passport.use(
    'user-auth',
    new JwtStrategy(opts, async (req, jwt_payload, done) => {
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
    new JwtStrategy(opts, async (req, jwt_payload, done) => {
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

passport.use(
    'jwt-auth',
    new JwtStrategy(opts, async (req, jwt_payload, done) => {
        try {
            let user = await Admin.find({ username: jwt_payload.username });
            if (!user) {
                user = await User.find({ username: jwt_payload.username });
            }
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

const authenticateUser = passport.authenticate('user-auth', { session: false });
const authenticateAdmin = passport.authenticate('admin-auth', {
    session: false,
});

const tokenVerification = passport.authenticate('jwt-auth', { session: false });

export {
    JWTAuth,
    authenticateUser,
    authenticateAdmin,
    tokenVerification,
};
