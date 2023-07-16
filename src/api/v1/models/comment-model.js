import mongoose, { Schema } from 'mongoose';

const CommentModel = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        red: ' Post',
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
    },
});

export default mongoose.model('Comment', CommentModel);
