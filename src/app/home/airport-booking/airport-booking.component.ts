import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingService } from './../services/booking.service';

import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-airport-booking',
  templateUrl: './airport-booking.component.html',
  styleUrls: ['./airport-booking.component.css']
})
export class AirportBookingComponent implements OnInit {

  airportbookingForm: FormGroup;

  constructor(
    private bookingService:BookingService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService
  ) {
    this.airportbookingForm = this.createBookingFormGroup();
   }

  ngOnInit(): void {
  }

  createBookingFormGroup() {
    return new FormGroup({
      bookingtype: new FormControl(), 
      bookingname: new FormControl(),
      bookingemail: new FormControl(),
      bookingphone: new FormControl(),
      bookingephone: new FormControl(),
      bookingDate: new FormControl(),
      bookingnoofperson: new FormControl(),
      pickupaddress: new FormControl(),
      pickupzip: new FormControl(),
      dropaddress: new FormControl(),
      dropzip: new FormControl(),
      bookingnote: new FormControl(),

    })
  }

  onSubmit(): void {
    this.ngxService.start();
    if (this.airportbookingForm.valid) {
      this.bookingService.airportDetailBooking(this.airportbookingForm.value)
      .subscribe(resp => {
        console.log('resp sdfsdfsdf',resp)
        this.toastr.success('Thanks for your booking, we will contact you shortly');
        this.airportbookingForm.reset();
        this.ngxService.stop();
      }, (err) => {
        console.error(err);
        this.ngxService.stop();
      })
    }
  }

}
