import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/ac/child">Route to Angular COMPONENT child</a></li>
    </ul>
    <router-outlet>
      <!-- This router outlet will be ignored as long as the Custom Element (MyLibElement) also has and router outlet -->
    </router-outlet>

    <my-lib-element></my-lib-element>

    <!-- If you uncomment this router outlet, the all routes will be rendered in this outlet -->
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: [`:host { 
    display: block; 
    margin: 3rem; 
    padding: 0 1rem 1rem 1rem; 
    border: 5px 
    dashed darkred; 
    }
  `]
})
export class AppComponent {
}
