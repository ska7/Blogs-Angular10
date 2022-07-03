export interface Post {
    title: string;
    description: string;
    id: Date;
    imageSrc?: string;
}

export interface LoadPostsResponse {
    posts: Post[];
}

export interface CreatePostResponse {
    post: Post;
}

export type UploadCallback = () => void;
