import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../interfaces';
import { PostsService } from '../shared/posts.service';


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
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  @Output() deletePost = new EventEmitter<Date>();

  constructor(private postsService: PostsService) { }

  emitDeletePost(postId) {
    this.deletePost.emit(postId);
  }

  ngOnInit(): void {
    this.postsService.load().subscribe(({ posts }) => {
      this.posts = posts;
    })
  }
}
