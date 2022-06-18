import { Component } from '@angular/core';

interface Blog {
  text: string;
  id: Symbol
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  blogs: Blog[];

  constructor () {
    this.blogs = [];
  }

  handleCreateNewPost(post) {
    console.log(`Trying to create new post: ${post}`);
    const newPost: Blog = {
      text: post,
      id: Symbol(post)
    }

    this.blogs = [...this.blogs, newPost]
  }
}
