import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';

const defaultPic = 'https://m.media-amazon.com/images/I/61VAFMIJlsL._AC_SL1198_.jpg';

const defaultPosts = [
  {title: 'Welcome!', text: 'Create Your Own Post :)',  id: new Date(), imageSrc: defaultPic},
  {title: 'Your ad could have been here', text: '...I mean it', id: new Date(), imageSrc: defaultPic},
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent {
  posts: Post[];
  @Output() deletePost = new EventEmitter<Date>();

  constructor() {
    this.posts = defaultPosts;
  }

  emitDeletePost(postId) {
    this.deletePost.emit(postId)
  }
}
