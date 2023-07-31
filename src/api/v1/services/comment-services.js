import Comment from '../models/comment-model';
import User from '../models/user-model';

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
            edited: false,
            deleted: false,
        });
        await comment.save();
        return res.status(200).send(comment);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const commentOnComment = async function (req, res) {
    try {
        const comment = new Comment({
            on: req.params.id,
            onModel: 'Comment',
            author: req.user[0].id,
            body: req.body.body,
            timestamp: new Date(),
            edited: false,
            deleted: false,
        });
        await comment.save();
        return res.status(200).send(comment);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const getCommentService = async function (req, res) {
    try {
        const comments = await Comment.find({ on: req.params.id }).populate({
            path: 'author',
            select: 'username',
        });
        return res.status(200).json(comments);
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

const deleteComment = async function (req, res) {
    try {
        const comment = await Comment.findById(req.params.id);
        const user = await User.findById(req.user[0].id);
        if (comment.author.toString() === user._id.toString()) {
            const deletedMessage = 'Removed by author';
            const newComment = new Comment({
                on: comment.on,
                onModel: comment.onModel,
                author: comment.author,
                body: deletedMessage,
                timestamp: comment.timestamp,
                edited: true,
                deleted: true,
                id: req.params.id,
            });
            await newComment.save();
            res.status(200).json({ message: 'Deleted successfully.' });
        } else {
            res.status(403).json({
                message: 'Without authorization to perform the action.',
            });
        }
    } catch (err) {
        res.status(503).json({ message: err.message });
    }
};

export {
    commentFailed,
    commentOnPost,
    commentOnComment,
    getCommentService,
    deleteComment,
};
