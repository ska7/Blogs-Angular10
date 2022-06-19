import { Component, Input } from '@angular/core';
import { Blog } from '../interfaces/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.less']
})
export class BlogsComponent {
  @Input() blogs: Blog[];
  constructor() { }
}
