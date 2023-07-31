import Like from '../models/likes-model';

const getLikes = async function (req, res) {
    try {
        const likes = await Like.find({ on: req.params.id });
        res.status(200).json(likes);
    } catch (err) {
        res.status(503).send(err.message);
    }
};

const likeOnPost = async function (req, res) {
    try {
        const like = new Like({
            on: req.params.id,
            onModel: 'Post',
            author: req.user[0].id,
        });
        await like.save();
        return res.status(200).send(like);
    } catch (err) {
        return res.status(400).send(`Error creating like: ${err.message}`);
    }
};

const likeOnComment = async function (req, res) {
    try {
        const like = new Like({
            on: req.params.id,
            onModel: 'Comment',
            author: req.user[0].id,
        });
        await like.save();
        return res.status(200).send(like);
    } catch (err) {
        return res.status(400).send(`Error creating like: ${err.message}`);
    }
};

export { likeOnPost, likeOnComment, getLikes };
