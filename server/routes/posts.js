import { Router } from 'express';
import { createPost, getPosts } from '../controllers/posts/posts.js';

const postsRouter = Router();

postsRouter.post('/', createPost);
postsRouter.get('/', getPosts);

export default postsRouter;
