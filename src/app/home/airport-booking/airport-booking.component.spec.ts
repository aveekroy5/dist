import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportBookingComponent } from './airport-booking.component';

describe('AirportBookingComponent', () => {
  let component: AirportBookingComponent;
  let fixture: ComponentFixture<AirportBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
