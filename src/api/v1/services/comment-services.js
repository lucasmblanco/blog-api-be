import Comment from '../models/comment-model';
import User from '../models/user-model';

const commentFailed = function (errors, res) {
    return res.status(400).json({
        code: 400,
        message: 'Failed validation',
        errors: errors.array().map((e) => ({ error: e.msg })),
    });
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
        return res
            .status(200)
            .json({
                code: 200,
                message: 'Success in creating the comment',
                comment: comment,
            });
    } catch (err) {
        return res.status(400).json({
            code: 422,
            message: 'Failed to create a comment.',
            errors: [{ error: err.message }],
        });
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
        return res
            .status(200)
            .send({
                code: 200,
                message: 'Success in creating the comment',
                comment: comment,
            });
    } catch (err) {
        return res.status(422).json({
            code: 422,
            message: 'Failed to create a comment.',
            errors: [{ error: err.message }],
        });
    }
};

const getCommentService = async function (req, res) {
    try {
        const comments = await Comment.find({ on: req.params.id }).populate({
            path: 'author',
            select: 'username',
        });
        return res.status(200).json({
            code: 200,
            message: 'Success retrieving comments',
            comments: comments,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: 'Failed to retrieve comments',
            errors: [{ error: err.message }],
        });
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
            return res.json({
                code: 200,
                message:
                    'The content in the comments has been removed successfully.',
            });
        } else {
            res.status(403).json({
                code: 403,
                message:
                    'The action cannot be performed without authorization.',
                errors: [{ error: 'No authorization found' }],
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed to delete comment content.',
            errors: [{ error: err.message }],
        });
    }
};

export {
    commentFailed,
    commentOnPost,
    commentOnComment,
    getCommentService,
    deleteComment,
};
