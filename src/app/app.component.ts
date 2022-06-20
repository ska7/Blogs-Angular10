import { Component } from '@angular/core';
import { Post } from './interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  posts: Post[];

  constructor () {
  }

  handleCreateNewPost(post) {
    const { title, text } = post;
    console.log(`Creating new post: ${title}`);
    const newPost: Post = {
      title: title,
      text: text,
      id: new Date()
    }

    this.posts = [...this.posts, newPost]
  }

  handleDeletePost(postId) {
    this.posts = this.posts.filter(blog => blog.id !== postId);
  }
}
