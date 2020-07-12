import { Component, OnInit, ViewChild, ElementRef,Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RateChartService } from '../../../ratechart/services/ratechart.service';
import { BookingService } from '../../../home/services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public homeHeader = false;
  isMenuOpen = false;
  bookingForm: FormGroup;

  // @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ViewChild('menu') menu: ElementRef;

  constructor(
    private router: Router, 
    private rateChartService:RateChartService, 
    private bookingService:BookingService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private renderer:Renderer2
    ) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        if(event.url == '/home' || event.url == '/'){
          this.homeHeader = true;
        }
        else{
          this.homeHeader = false;
        }
        console.log(this.homeHeader)
      }
    });

    this.bookingForm = this.createBookingFormGroup();

    // this.renderer.listen('window', 'click',(e:Event)=>{
    //  if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
    //      this.isMenuOpen=false;
    //  }
    // });

   }
   createBookingFormGroup() {
    return new FormGroup({
      bookingname: new FormControl(),
      bookingemail: new FormControl(),
      bookingphone: new FormControl(),
      bookingephone: new FormControl(),
      bookingDate: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  toggleMenu() {
    window.scrollTo(0, 0)
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSubmit(): void {
    this.ngxService.start();
    if (this.bookingForm.valid) {
      this.bookingService.taxiBooking(this.bookingForm.value)
      .subscribe(resp => {
        console.log('resp sdfsdfsdf',resp)
        this.toastr.success('Thanks for your booking, we will contact you shortly');
        this.bookingForm.reset();
        this.ngxService.stop();
      }, (err) => {
        console.error(err);
        this.ngxService.stop();
      })
    }
  }

}
