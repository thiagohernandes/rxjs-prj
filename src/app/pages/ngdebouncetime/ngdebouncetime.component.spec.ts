import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdebouncetimeComponent } from './ngdebouncetime.component';

describe('NgdebouncetimeComponent', () => {
  let component: NgdebouncetimeComponent;
  let fixture: ComponentFixture<NgdebouncetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdebouncetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdebouncetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
