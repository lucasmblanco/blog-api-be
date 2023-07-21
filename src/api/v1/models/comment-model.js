import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
    on: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel',
    },
    onModel: {
        type: 'String',
        required: true,
        enum: ['Post', 'Comment'],
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
        required: true,
    },
});

export default mongoose.model('Comment', CommentSchema);
