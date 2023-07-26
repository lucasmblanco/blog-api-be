import Post from '../models/post-model';

const postFailed = function (errors, res) {
    return res
        .status(400)
        .send(
            `Failed validation w/ this errors: ${errors
                .array()
                .map((e) => e.msg)}`
        );
};

const postApproved = async function (req, res) {
    try {
        const newPost = new Post({
            author: req.user[0].id,
            title: req.body.title,
            body: [req.body.body],
            published: req.body.published,
            timestamp: new Date(),
        });
        await newPost.save();
        res.status(201).send(newPost);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const postsInStorage = async function (res) {
    try {
        const posts = await Post.find({}).sort({ timestamp: 1 });
        return res.json(posts);
    } catch (err) {
        res.status(503).json({message: err.message});
    }
};

const postDelete = async function (req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.json(post);
    } catch (err) {
        res.status(503).json({message: err.message});
    }
};

const postRequested = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        return res.json(post);
    } catch (err) {
        res.status(503).json({message: err.message});
    }
};

const postEdit = async function (req, res) {
    try {
        const post = new Post({
            author: req.user[0].id,
            title: req.body.title,
            body: [req.body.body],
            published: req.body.published,
            timestamp: new Date(),
            _id: req.params.id,
        });
        const postUpdated = await Post.findByIdAndUpdate(req.params.id, post, {
            new: true,
        });
        res.status(200).send(postUpdated);
    } catch (err) {
        res.status(503).json({message: err.message});
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
