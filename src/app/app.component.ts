import { Component } from '@angular/core';

interface Blog {
  text: string;
  id: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  blogs: Blog[];

  constructor () {
    this.blogs = [];
  }
}
