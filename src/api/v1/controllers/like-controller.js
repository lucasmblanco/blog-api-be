import { getLikes, likeResource, dislikeResource } from '../services/like-services';

const likeResourceController = function (req, res) {
    likeResource(req, res);
};

const getController = function (req, res) {
    getLikes(req, res);
};

const dislikeResourceController = function (req, res) {
    dislikeResource(req, res); 
}

export { likeResourceController, getController, dislikeResourceController, };
