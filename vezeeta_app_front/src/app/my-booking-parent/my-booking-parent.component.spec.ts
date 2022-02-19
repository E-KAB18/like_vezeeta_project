import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingParentComponent } from './my-booking-parent.component';

describe('MyBookingParentComponent', () => {
  let component: MyBookingParentComponent;
  let fixture: ComponentFixture<MyBookingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookingParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
