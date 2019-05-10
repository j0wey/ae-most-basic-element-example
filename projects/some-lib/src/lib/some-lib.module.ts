import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { RouterModule } from "@angular/router";
import { SomeLibComponent } from './some-lib.component';
import { AeChildComponent } from './ae-child/ae-child.component';

@NgModule({
  declarations: [SomeLibComponent, AeChildComponent],
  imports: [
    RouterModule.forRoot(
      [
        { path: 'ae/child', component: AeChildComponent },
      ]
    )
  ],
  entryComponents: [
    SomeLibComponent
  ],
  exports: [SomeLibComponent, AeChildComponent]
})
export class SomeLibModule {
  constructor(injector: Injector) {
    const MyLibElement = createCustomElement(SomeLibComponent, { injector: injector });
    customElements.define('my-lib-element', MyLibElement);
  }
}
