import { NgModule, OnInit, DoBootstrap, EventEmitter, Input, Output, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@Component({
  selector: 'my-app', /* never used */
  template: `
  <p>Proof that property bindings work:</p> <br>
  Input: <b>{{ foo }}</b>
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
export class AppComponent implements OnInit {
  @Input() foo: string;
  @Output() bar: EventEmitter<string> = new EventEmitter<string>();;

  ngOnInit(): void {
    setTimeout(() => { this.bar.next('YES') }, 2000);
  }
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