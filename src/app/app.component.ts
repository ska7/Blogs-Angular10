import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  searchValue: string = '';
  constructor () {
  }

  handleSearchValueChange(searchValue) {
    this.searchValue = searchValue;
  }
}
