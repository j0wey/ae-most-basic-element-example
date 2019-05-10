import { NgModule, DoBootstrap, Input, Output, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@Component({
  selector: 'my-app', /* never used */
  template: `Start editing to see some magic happen :)`
})
export class AppComponent {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
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