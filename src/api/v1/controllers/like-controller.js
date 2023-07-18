import { likeServiceOnPost, likeServiceOnComment } from '../services/like-services'; 

const likeControllerOnPost = function (req, res) {
    likeServiceOnPost(req, res); 
}

const likeControllerOnComment = function (req, res) {
    likeServiceOnComment(req, res); 
}

export {
    likeControllerOnPost,
    likeControllerOnComment
}