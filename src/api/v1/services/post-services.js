import Post from '../models/post-model';

const postFailed = function (errors, res) {
    return res.status(422).json({
        code: 422,
        message: 'Failed validation',
        errors: errors.array().map((e) => ({ error: e.msg })),
    });
};

const postApproved = async function (req, res) {
    try {
        const newPost = new Post({
            author: req.user[0].id,
            title: req.body.title,
            body: req.body.body,
            published: req.body.published,
            timestamp: new Date(),
        });
        await newPost.save();
        res.status(201).send({
            code: 201,
            message: 'Success in creating the post.',
            post: newPost,
        });
    } catch (err) {
        res.status(422).json({
            code: 422,
            message: 'Failed to create a post.',
            errors: [{ error: err.message }],
        });
    }
};

const postsInStorage = async function (res) {
    try {
        const posts = await Post.find({}).populate({path: 'author', select: 'username'}).sort({ timestamp: 1 });
        return res.json({
            code: 200,
            message: 'Success on retrieving posts',
            posts: posts,
        });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed to retrieve posts.',
            errors: [{ error: err.message }],
        });
    }
};

const postDelete = async function (req, res) {
    try {
        await Post.findByIdAndDelete(req.params.id);
        return res.json({ code: 200, message: 'Post successfully deleted' });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed to delete the post.',
            errors: [{ error: err.message }],
        });
    }
};

const postRequested = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        return res.json({
            code: 200,
            message: 'Success in retrieving the post.',
            post: post,
        });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed on retrieving post',
            errors: [{ error: err.message }],
        });
    }
};

const postEdit = async function (req, res) {
    try {
        const post = new Post({
            author: req.user[0].id,
            title: req.body.title,
            body: req.body.body,
            published: req.body.published,
            timestamp: req.body.timestamp ? req.body.timestamp : new Date(),
            _id: req.params.id,
        });
        const postUpdated = await Post.findByIdAndUpdate(req.params.id, post, {
            new: true,
        });
        res.status(200).json({
            code: 200,
            message: 'Success on updating post',
            post: postUpdated,
        });
    } catch (err) {
        res.status(500).json({
            code: 500,
            message: 'Failed in updating post.',
            errors: [{ error: err.message }],
        });
    }
};

export {
    postsInStorage,
    postFailed,
    postApproved,
    postDelete,
    postRequested,
    postEdit,
};
