import { CreatePostResponse, LoadPostsResponse, Post } from 'src/app/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    private postsUrl = 'http://localhost:5050/posts';
    constructor(private http: HttpClient) {}

    load(): Observable<LoadPostsResponse> {
        return this.http.get<LoadPostsResponse>(this.postsUrl);
    }

    createPost(newPost: Post): Observable<CreatePostResponse> {
        return this.http.post<CreatePostResponse>(this.postsUrl, newPost);
    }
}
