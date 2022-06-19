import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.less']
})
export class PostInputComponent {
  value: string;
  @Output() createNewPost = new EventEmitter<string>();
  
  constructor() { 
    this.setInputValue('');
  }

  emitCreateNewPost(newPost) {
    this.createNewPost.emit(newPost);
    this.setInputValue('');
  }

  setInputValue (newValue) {
    this.value = newValue;
  }

  handleChange(value): void {
    this.setInputValue(value);
  }
}
