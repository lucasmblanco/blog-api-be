import mongoose, { Schema } from 'mongoose';

const PostScheme = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: [
        {
            type: String,
            required: true,
        },
    ],
    published: {
        type: Boolean,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
});

export default mongoose.model('Post', PostScheme);
