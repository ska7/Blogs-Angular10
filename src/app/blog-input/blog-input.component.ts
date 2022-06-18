import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.less']
})
export class BlogInputComponent {
  value: string;
  @Output() createNewPost = new EventEmitter<string>();
  
  constructor() { 
    this.setInputValue('');
  }

  emitCreateNewPost(newPost) {
    this.createNewPost.emit(newPost);
  }

  setInputValue (newValue) {
    this.value = newValue;
  }

  handleChange(value): void {
    this.setInputValue(value);
  }
}
