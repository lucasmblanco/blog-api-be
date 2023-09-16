import main from './main-router';
import admin from './admin-router';
import user from './user-router';
import post from './post-router';
import like from './like-router';
import comment from './comment-router';
import { Router } from 'express';

const routes = Router();

routes.use('/', main);
routes.use('/admin', admin);
routes.use('/users', user);
routes.use('/posts', post);
routes.use('/posts/:id/comments', comment);
routes.use('/posts/:id/like', like);
routes.use('/posts/:postId/comments/:commentId/like', like);

export default routes;
