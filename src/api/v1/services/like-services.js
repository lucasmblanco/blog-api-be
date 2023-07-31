import Like from '../models/likes-model';

const getLikes = async function (req, res) {
    try {
        const likes = await Like.find({ on: req.params.id });
        res.status(200).json({code: 200, message: 'Success retrieving resource', likes: likes});
    } catch (err) {
        res.status(500).json({ code: 500, message: 'Failed retrieving resource', errors: [{ error: err.message }]});
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
        return res.status(201).json({code: 201, message: 'Success creating resource', like: like});
    } catch (err) {
        return res.status(422).json({code: 422, message: 'Failed creating resource', errors:[{error: err.message}]});
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
        return res.status(201).json({code: 201, message: 'Success creating resource', like: like});
    } catch (err) {
        return res.status(422).json({code: 422, message: 'Failed creating resource', errors:[{error: err.message}]});
    }
};

export { likeOnPost, likeOnComment, getLikes };
