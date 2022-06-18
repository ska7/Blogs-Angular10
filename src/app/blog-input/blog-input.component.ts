import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.less']
})
export class BlogInputComponent {
  value: string;
  
  constructor() { 
    this.setInputValue('');
  }

  setInputValue (newValue) {
    this.value = newValue;
  }

  handleChange(value): void {
    this.setInputValue(value);
  }

  handleCreatePost() {
    console.log(`I'm going to create this post: ${this.value}`)
  }

}
