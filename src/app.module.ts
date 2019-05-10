import { NgModule, DoBootstrap, Input, Output, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { AeChildComponent } from './ae-child/ae-child.component';

import { SomeLibModule } from 'some-lib';

@Component({
  selector: 'my-app', /* never used */
  template: `
  <ul>
    <li><a routerLink="/ae/child">Route to child</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}

@NgModule({
  imports: [BrowserModule,
    SomeLibModule,
    RouterModule.forRoot(
      [
        { path: 'ae/child', component: AeChildComponent }
      ]
    )
  ],
  declarations: [AppComponent, AeChildComponent],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [ /* nothing in here! */]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const MyAppElement = createCustomElement(AppComponent, { injector: injector });
    customElements.define('my-app-element', MyAppElement);
  }

  ngDoBootstrap() {
  }
}
