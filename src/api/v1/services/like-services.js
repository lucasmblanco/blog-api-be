import Like from '../models/likes-model';

const getLikes = async function (req, res) {
    try {
        const likes = await Like.find({ on: req.params.id });
        res.status(200).json({
            code: 200,
            message: 'Success retrieving resource',
            likes: likes,
        });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed retrieving resource',
            errors: [{ error: err.message }],
        });
    }
};

const likeResource = async function (req, res) {
    const url = req.baseUrl.split('/'); 
    try {
        const like = new Like({
            on: req.params.id,
            onModel: url[2] === 'comments' ? 'Comment' : 'Post',
            author: req.user[0].id,
        });
        await like.save();
        return res.status(201).json({
            code: 201,
            message: 'Success creating resource',
            like: like,
        });
    } catch (err) {
        return res.status(422).json({
            code: 422,
            message: 'Resource creation failure.',
            errors: [{ error: err.message }],
        });
    }
};


const dislikeResource = async function (req, res) {
    const likeId = req.params.commentId !== undefined ? req.params.commentId : req.params.id;
    try {
        await Like.findOneAndDelete({on: likeId});
        return res.json({ code: 200, message: 'Like successfully deleted' });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed to delete the like.',
            errors: [{ error: err.message }],
        });
    }
}



export { likeResource, getLikes, dislikeResource };
