import { NgModule, DoBootstrap, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `Start editing to see some magic happen :)`
})
export class AppComponent  {
  @Input() foo: string;
  @Output()bar: string;
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule implements DoBootstrap {   
  ngDoBootstrap() {
    
  }
}