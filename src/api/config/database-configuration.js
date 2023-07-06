import mongoose from 'mongoose';
import 'dotenv/config';

const db = process.env.MONGO_URL;
mongoose.set('strictQuery', false);
export async function main() {
    await mongoose.connect(db);
}
