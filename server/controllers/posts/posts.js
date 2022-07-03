import { PostModel } from '../../models/postModel.js';
import { performance } from 'perf_hooks';

const getUniqueID = () => new Date().getTime().toString().concat(performance.now());

export const getPosts = async (req, res) => {
    const { q: searchQuery } = req.query;
    let posts = [];

    try {
        if (!searchQuery) {
            posts = await PostModel.find({});
        } else {
            posts = await PostModel.find({
                $or: [{ description: { $regex: searchQuery } }, { title: { $regex: searchQuery } }],
            });
        }

        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const createPost = async (req, res) => {
    const postId = getUniqueID();
    const { title, description, imageSrc } = req.body;
    const newPost = new PostModel({ title, description, imageSrc, id: postId });

    try {
        await newPost.save();
        res.status(200).json({ post: newPost });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export const deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        await PostModel.deleteOne({ id: postId });
        res.status(200);
    } catch (error) {
        res.status(500).json({ error });
    }
};
