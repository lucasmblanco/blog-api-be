import mongoose, { Schema } from 'mongoose';

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Admin', AdminSchema);
