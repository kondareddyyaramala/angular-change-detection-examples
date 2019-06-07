import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child-one',
  templateUrl: './grand-child-one.component.html',
  styleUrls: ['./grand-child-one.component.scss']
})
export class GrandChildOneComponent {

  constructor() { }

  ngDoCheck() {
    console.log('Grand child one');
  }

}
