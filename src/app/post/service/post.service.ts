import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable()
export class PostService {

  configUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.configUrl);
  }


}
