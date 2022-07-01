import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './posts/post/post.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { DeletePostModalComponent } from './posts/post/delete-post-modal/delete-post-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        PostSearchComponent,
        PostsComponent,
        PostComponent,
        NewPostFormComponent,
        DeletePostModalComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
