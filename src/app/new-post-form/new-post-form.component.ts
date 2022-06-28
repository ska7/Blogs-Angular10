import { Post, UploadCallback } from './../interfaces/index';
import { Component, OnInit, EventEmitter, Output, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CloudinaryUploaderService } from '../shared/cloudinary-uploader.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'new-post-form',
    templateUrl: './new-post-form.component.html',
    styleUrls: ['./new-post-form.component.less'],
})
export class NewPostFormComponent implements OnInit {
    cloudinaryUploader;
    private postTextValidator = Validators.compose([Validators.minLength(4), Validators.required]);
    @Output() newPostEmitter = new EventEmitter<Post>();

    newPostForm = this.fb.group({
        title: ['', this.postTextValidator],
        description: ['', this.postTextValidator],
        imageSrc: ['', this.postTextValidator],
    });
    constructor(
        private fb: FormBuilder,
        private cloudinary: CloudinaryUploaderService,
        private renderer: Renderer2,
    ) {}

    handleFormChange() {
        // TODO: handle form errors here
        console.log(this.newPostForm);
    }

    onAddPainting(e) {
        e.preventDefault();
        this.cloudinaryUploader.open();
    }

    handlePaintingUpload = (error, result) => {
        const { event, info } = result;
        const isUploadSuccess = event === 'success';

        if (isUploadSuccess) {
            const { url } = info || {};
            this.newPostForm.controls['imageSrc'].setValue(url);
        }
    };

    ngOnInit(): void {
        this.newPostForm.valueChanges.subscribe(() => this.handleFormChange());

        // initialize Cloudinary uploader
        this.cloudinary.renderer = this.renderer;
        this.cloudinary.initializeCloudinaryUploader(this.handlePaintingUpload).subscribe((uploader) => {
            this.cloudinaryUploader = uploader;
        });
    }

    onSubmit() {
        const { title, description, imageSrc } = this.newPostForm?.value;
        const newPost = {
            title,
            description,
            imageSrc,
            id: new Date(),
        };

        this.newPostEmitter.emit(newPost);
        this.newPostForm.reset();
    }
}
