import Post from '../models/post-model'; 

const postFailed = function (errors) {
    return errors.array().map(e => e.msg);
}

const postApproved = async function (req, res) {
    try {
        const newPost = new Post({
            author: req.user[0].id,
            title: req.body.title,
            body: [req.body.body],
            published: req.body.published,
            timestamp: new Date()
        });
        await newPost.save(); 
        res.status(201).send(newPost); 
    } catch (err) {
        res.status(400);
    }
}

export {
    postFailed,
    postApproved
}