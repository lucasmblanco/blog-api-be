import mongoose, { Schema } from 'mongoose';

const UserScheme = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
});

export default mongoose.model('User', UserScheme);
