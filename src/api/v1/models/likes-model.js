import mongoose, { Schema } from 'mongoose';

const LikeSchema = new Schema({
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

export default mongoose.model('Like', LikeSchema);
