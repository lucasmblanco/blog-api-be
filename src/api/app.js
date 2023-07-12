import createError from 'http-errors';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { main } from './config/database-configuration.js';
import routes from './v1/routes';
//import { JWTStrategy, authenticateUser } from './v1/services/auth-services.js';

const port = process.env.PORT;

const app = express();
main().catch((err) => console.log(err));


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//passport.use(JWTStrategy);
app.use('/admin', routes.admin);
app.use('/user', routes.user);
//app.use(authenticateUser); 
app.use('/post', routes.post); 

app.use((req, res, next) => {
   next(createError(404));
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

export default app;
