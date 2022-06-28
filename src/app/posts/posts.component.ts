import { Component, Output, Input, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
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
  fetchedPosts: Post[] = [];
  filteredPosts: Post[] = [];
  @Input() searchValue: string;
  @Input() newPost: Post;
  @Output() deletePost = new EventEmitter<Date>();

  constructor(private postsService: PostsService) { }

  handleFilterPosts(filterString = '') {
    if (!filterString) {
      this.filteredPosts = this.fetchedPosts;
    };

    this.filteredPosts = this.fetchedPosts.filter(post => {
      const titleMatched = post.title.toLowerCase().includes(filterString.toLowerCase());
      const bodyMatched = post.description.toLowerCase().includes(filterString.toLowerCase());

      return titleMatched || bodyMatched;
    })
  };

  handleNewPost(newPost) {
    this.filteredPosts = [newPost ,...this.filteredPosts];
  }

  ngOnInit(): void {
    this.postsService.load().subscribe(({ posts }) => {
      this.fetchedPosts = posts;
      this.filteredPosts = posts;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes in the posts:', changes);
    const { searchValue, newPost } = changes;
    const newSearchValue = searchValue?.currentValue;
    const newPostBody = newPost?.currentValue;

    newSearchValue && this.handleFilterPosts(newSearchValue);
    newPostBody && this.handleNewPost(newPostBody);
  }
}
