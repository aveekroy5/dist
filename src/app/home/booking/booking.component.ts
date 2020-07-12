import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingService } from './../services/booking.service';

import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  detailbookingForm: FormGroup;

  constructor(
    private bookingService:BookingService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService
    ) {
    this.detailbookingForm = this.createBookingFormGroup();
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
    if (this.detailbookingForm.valid) {
      this.bookingService.detailBooking(this.detailbookingForm.value)
      .subscribe(resp => {
        this.toastr.success('Thanks for your booking, we will contact you shortly');
        this.detailbookingForm.reset();
        this.ngxService.stop();
      }, (err) => {
        console.error(err);
        this.ngxService.stop();
      })
    }
  }

}
