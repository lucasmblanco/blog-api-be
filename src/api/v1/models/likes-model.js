import mongoose, { Schema } from 'mongoose';

const LikeSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

export default mongoose.Model('Like', LikeSchema)