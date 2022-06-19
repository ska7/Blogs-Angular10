import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent {
  @Input() posts: Post[];
  @Output() deletePost = new EventEmitter<Date>();

  emitDeletePost(postId) {
    this.deletePost.emit(postId)
  }
}
