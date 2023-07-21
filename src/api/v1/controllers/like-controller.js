import {
    getLikes,
    likeOnPost,
    likeOnComment,
} from '../services/like-services';

const likeOnPostController = function (req, res) {
    likeOnPost(req, res);
};

const likeOnCommentController = function (req, res) {
    likeOnComment(req, res);
};

const getController = function (req, res) {
    getLikes(req, res); 
}
export { likeOnPostController, likeOnCommentController, getController };
