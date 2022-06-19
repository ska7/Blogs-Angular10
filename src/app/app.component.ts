import { Component } from '@angular/core';
import { Blog } from './interfaces/Blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  blogs: Blog[];

  constructor () {
    this.blogs = [{text: 'Default Post', id: Symbol('Default Post')}];
  }

  handleCreateNewPost(post) {
    console.log(`Creating new post: ${post}`);
    const newPost: Blog = {
      text: post,
      id: Symbol(post)
    }

    this.blogs = [...this.blogs, newPost]
  }
}
