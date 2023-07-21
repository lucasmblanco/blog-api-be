import mongoose, { Schema } from 'mongoose';

const LikeSchema = new Schema({
    on: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'OnModel',
    },
    onModel: {
        type: 'String',
        required: true,
        enum: ['Post', 'Comment'],
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

export default mongoose.model('Like', LikeSchema);
