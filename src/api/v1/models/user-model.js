import mongoose, { Schema } from 'mongoose';

const UserScheme = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model('User', UserScheme);
