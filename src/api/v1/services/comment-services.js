import Comment  from '../models/comment-model'; 

const commentFailed = function (errors, res) {
    return res
        .status(400)
        .send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)}`
        );
}; 

const commentOnPost = async function (req, res) {
    try {
        const comment = new Comment({
            on: req.params.id,
            onModel: 'Post',
            author: req.user[0].id,
            body: req.body.body,
            timestamp: new Date(),
        }); 
        await comment.save();
        return res.status(200).send(comment);
    } catch (err) {
        return res.status(400).send(`Error creating comment: ${err.message}`); 
    }
}

const commentOnComment = async function (req, res) {
    try {
        const comment = new Comment({
            on: req.params.id,
            onModel: 'Comment',
            author: req.user[0].id,
            body: req.body.body,
            timestamp: new Date(),
        }); 
        await comment.save();
        return res.status(200).send(comment);
    } catch (err) {
        return res.status(400).send(`Error creating comment: ${err.message}`); 
    }
}

export {
    commentFailed, 
    commentOnPost,
    commentOnComment
}