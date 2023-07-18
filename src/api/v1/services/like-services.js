import Like from '../models/likes-model';

const likeServiceOnPost = async function (req, res) {
    try {
        const like = new Like({
            on: req.params.id,
            onModel: 'Post',
            author: req.user[0].id,
        })
        await like.save();
        return res.status(200).send(like);
    } catch (err) {
        return res.status(400).send(`Error creating like: ${err.message}`); 
    }
}

const likeServiceOnComment = async function (req, res) {
    try {
        const like = new Like({
            on: req.params.id,
            onModel: 'Comment',
            author: req.user[0].id,
        })
        await like.save();
        return res.status(200).send(like);
    } catch (err) {
        return res.status(400).send(`Error creating like: ${err.message}`); 
    }
}

export {
    likeServiceOnPost,
    likeServiceOnComment
}