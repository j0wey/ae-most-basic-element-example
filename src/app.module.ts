import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { SomeLibModule } from "../projects/some-lib/src/lib/some-lib.module";
import { AppComponent } from "./app.component";
import { AcChildComponent } from './app/ac-child/ac-child.component';

@NgModule({
  imports: [
    BrowserModule,
    SomeLibModule,
    RouterModule.forRoot(
      [
        { path: 'ac/child', component: AcChildComponent }
      ]
    )
  ],
  declarations: [
    AppComponent,
    AcChildComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  /* application is bootstrapped by Angular again */
}
