import { PostModel } from '../../models/postModel.js';
import { performance } from 'perf_hooks';

const getUniqueID = () => new Date().getTime().toString().concat(performance.now());

export const createPost = async (req, res) => {
    const postId = getUniqueID();
    const { title, description, imageSrc } = req.body.post;
    const newPost = new Post({ title, description, imageSrc, id: postId });

    try {
        await newPost.save();
        res.status(200).json({ post: newPost });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({});
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
};
