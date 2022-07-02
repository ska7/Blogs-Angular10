import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    imageSrc: String,
    id: String,
});

export const PostModel = mongoose.model('Post', postSchema);
