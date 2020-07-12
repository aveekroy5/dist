import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminRateChartComponent } from './rate-chart/rate-chart.component';
import { AdminAboutUsComponent } from './about-us/about-us.component';
import { AdminContactUsComponent } from './contact-us/contact-us.component';
import { AdminTestimonialComponent } from './testimonial/testimonial.component';
import { AdminBookingDetailsComponent } from './booking-details/booking-details.component';

import { SharedModule } from './../shared/shared.module'

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AdminRateChartComponent,
    AdminAboutUsComponent,
    AdminContactUsComponent,
    AdminTestimonialComponent,
    AdminBookingDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AdminModule { }
