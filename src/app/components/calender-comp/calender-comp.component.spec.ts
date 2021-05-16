import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderCompComponent } from './calender-comp.component';

describe('CalenderCompComponent', () => {
  let component: CalenderCompComponent;
  let fixture: ComponentFixture<CalenderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
