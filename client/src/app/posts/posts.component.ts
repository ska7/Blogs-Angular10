import { Component, Output, Input, EventEmitter, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
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

    handleFilterPosts(searchQueryChange: SimpleChange) {
        const { currentValue: searchValue, firstChange } = searchQueryChange || {};

        !firstChange && this.loadPosts(searchValue);
    }

    handleNewPost(newPostChange: SimpleChange) {
        const { currentValue: newPost } = newPostChange || {};

        newPost &&
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
        this.loadPosts();
    }

    ngOnChanges(changes: SimpleChanges) {
        const { searchValueChange, newPostChange } = changes;

        this.handleNewPost(newPostChange);
        this.handleFilterPosts(searchValueChange);
    }
}
