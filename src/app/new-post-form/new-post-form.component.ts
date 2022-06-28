import { Post } from './../interfaces/index';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.less']
})
export class NewPostFormComponent implements OnInit {
  @Output() newPostEmitter = new EventEmitter<Post>();
  private postTextValidator = Validators.compose([Validators.minLength(4), Validators.required]);

  newPostForm = this.fb.group({
    title: ['', this.postTextValidator],
    description: ['', this.postTextValidator],
    imageSrc: ['', this.postTextValidator]
  })
  constructor(private fb: FormBuilder) { }

  handleFormChange() {
    // TODO: handle form errors here
    console.log(this.newPostForm)
  };

  ngOnInit(): void {
    this.newPostForm.valueChanges.subscribe(() => this.handleFormChange());
  }

  onSubmit() {
    const { title, description, imageSrc } = this.newPostForm?.value;
    const newPost = {
      title,
      description,
      imageSrc,
      id: new Date()
    };

    this.newPostEmitter.emit(newPost);
  }
}
