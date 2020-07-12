import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { BookingService } from '../../../home/services/booking.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  constructor(
    private bookingService:BookingService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService
  ) {
    this.contactForm = this.createContactFormGroup();
   }

  ngOnInit(): void {
  }

  createContactFormGroup() {
    return new FormGroup({
      contactname: new FormControl(''),
      contactemail: new FormControl(),
      contactphone: new FormControl(),
      contactsubject: new FormControl(),
      contactmessage: new FormControl()
    })
  }

  onContactSubmit(): void{
    this.ngxService.start();
    if (this.contactForm.valid) {
      this.bookingService.contact(this.contactForm.value)
      .subscribe(resp => {
        this.toastr.success('Thanks for your Contact, we will get back to you shortly');
        this.contactForm.reset();
        this.ngxService.stop();
      }, (err) => {
        console.error(err);
        this.ngxService.stop();
      })
    }
  }

}
