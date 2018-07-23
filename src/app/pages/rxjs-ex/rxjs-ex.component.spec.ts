import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExComponent } from './rxjs-ex.component';

describe('RxjsExComponent', () => {
  let component: RxjsExComponent;
  let fixture: ComponentFixture<RxjsExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
