export interface Post {
    title: string;
    text: string;
    id: Date;
    imageSrc?: string;
};

export interface PostsResponse {
    posts: Post[];
};