import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcChildComponent } from './ac-child.component';

describe('AcChildComponent', () => {
  let component: AcChildComponent;
  let fixture: ComponentFixture<AcChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
