import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.less']
})
export class NewPostFormComponent implements OnInit {
  private postTextValidator = Validators.compose([Validators.minLength(4), Validators.required]);
  private 

  newPostForm = this.fb.group({
    title: ['', this.postTextValidator],
    description: ['', this.postTextValidator],
    image: ['', this.postTextValidator]
  })
  constructor(private fb: FormBuilder) { }

  handleFormChange() {
    // TODO: handle form errors here
  };

  ngOnInit(): void {
    this.newPostForm.valueChanges.subscribe(() => this.handleFormChange());
  }

  onSubmit() {
  }



}
