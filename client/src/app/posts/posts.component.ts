import { Component, Output, Input, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../interfaces';
import { PostsService } from '../shared/posts.service';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.less'],
})
export class PostsComponent implements OnInit {
    fetchedPosts: Post[] = [];
    filteredPosts: Post[] = [];
    @Input() searchValue: string;
    @Input() newPost: Post;
    @Output() deletePost = new EventEmitter<Date>();

    constructor(private postsService: PostsService) {}

    handleFilterPosts(filterString = '') {
        this.loadPosts(filterString);
    }

    handleNewPost(newPost) {
        this.postsService.createPost(newPost).subscribe(() => {
            this.loadPosts();
        });
    }

    loadPosts(searchQuery?: string) {
        this.postsService.load(searchQuery).subscribe(({ posts }) => {
            this.fetchedPosts = posts;
        });
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.loadPosts();
        }, 3000);
    }

    ngOnChanges(changes: SimpleChanges) {
        const { searchValue, newPost } = changes;
        const newPostBody = newPost?.currentValue;

        const nextSearchValue = searchValue?.currentValue;
        const prevSearchValue = searchValue?.previousValue;

        const shouldSearchPosts = nextSearchValue !== prevSearchValue && prevSearchValue !== null;
        newPostBody && this.handleNewPost(newPostBody);

        // if (shouldSearchPosts) this.handleFilterPosts(nextSearchValue);
    }
}
