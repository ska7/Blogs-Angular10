import { PostsResponse } from './../interfaces/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  static postsUrl = 'https://app.fakejson.com/q/ixqm99bF?token=wWatAzc5Zepe-lwg87njmw';
  constructor(private http: HttpClient) { }

  load(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(PostsService.postsUrl);
  }
}
