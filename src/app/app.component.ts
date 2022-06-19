import { Component } from '@angular/core';
import { Post } from './interfaces/Post';

const defaultPosts = [
  {text: 'Welcome!', id: new Date()},
  {text: 'Create Your Own Post :)', id: new Date()},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  posts: Post[];

  constructor () {
    this.posts = defaultPosts;
  }

  handleCreateNewPost(post) {
    console.log(`Creating new post: ${post}`);
    const newPost: Post = {
      text: post,
      id: new Date()
    }

    this.posts = [...this.posts, newPost]
  }

  handleDeletePost(postId) {
    this.posts = this.posts.filter(blog => blog.id !== postId);
  }
}
