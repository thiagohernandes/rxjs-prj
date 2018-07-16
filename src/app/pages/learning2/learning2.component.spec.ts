import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learning2Component } from './learning2.component';

describe('Learning2Component', () => {
  let component: Learning2Component;
  let fixture: ComponentFixture<Learning2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learning2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learning2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
