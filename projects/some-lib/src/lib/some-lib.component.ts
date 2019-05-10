import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-someLib',
  template: `
    <p>some-lib works!</p>
    <ul>
      <li><a routerLink="/ae/child">Route to Angular ELEMENT child</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`:host { 
    display: block; 
    margin: 1rem; 
    padding: 0 1rem 1rem 1rem; 
    border: 5px 
    dashed dodgerblue; 
    }
  `]
})
export class SomeLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
