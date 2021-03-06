import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'post-search',
    templateUrl: './post-search.component.html',
    styleUrls: ['./post-search.component.less'],
})
export class PostSearchComponent {
    value: string;
    @Output() filterPosts = new EventEmitter<string>();

    constructor() {
        this.setInputValue('');
    }

    emitFilterPosts(newPost) {
        this.filterPosts.emit(newPost);
    }

    setInputValue(newValue) {
        this.value = newValue;
    }

    handleChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.setInputValue(value);
        this.emitFilterPosts(value);
    }
}
