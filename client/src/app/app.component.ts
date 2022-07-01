import { Post } from './interfaces/index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  searchValue: string = '';
  newPost: Post;
  constructor () {
  }

  handleSearchValueChange(searchValue) {
    this.searchValue = searchValue;
  }

  handleCreateNewPost(newPost) {
    this.newPost = newPost;
  }
}
