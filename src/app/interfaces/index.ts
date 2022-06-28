export interface Post {
    title: string;
    description: string;
    id: Date;
    imageSrc?: string;
};

export interface PostsResponse {
    posts: Post[];
};