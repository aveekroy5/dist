import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { DashboardComponent } from '../app/home/dashboard/dashboard.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { BookingComponent } from './home/booking/booking.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { RateChartComponent } from './home/rate-chart/rate-chart.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { YourAdvantageComponent } from './home/your-advantage/your-advantage.component';
import { ToAirportComponent } from './home/to-airport/to-airport.component';
import { AirportBookingComponent } from './home/airport-booking/airport-booking.component';


import { RatechartComponent } from '../app/ratechart/ratechart.component';


import { AdminComponent } from '../app/admin/admin.component'; 

import { AdminRateChartComponent } from './admin/rate-chart/rate-chart.component';
import { AdminAboutUsComponent } from './admin/about-us/about-us.component';
import { AdminBookingDetailsComponent } from './admin/booking-details/booking-details.component';
import { AdminContactUsComponent } from './admin/contact-us/contact-us.component';
import { AdminTestimonialComponent } from './admin/testimonial/testimonial.component';

const routes: Routes = [
  { 
  path: '', 
  component: HomeComponent,
  children: [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent, data: {animation: 'home'} },
    { path: 'book', component: BookingComponent, data: {animation: 'book'} },
    { path: 'aboutus', component: AboutUsComponent, data: {animation: 'aboutus'} },
    { path: 'contactus', component: ContactUsComponent, data: {animation: 'contactus'} },
    { path: 'rate', component: RateChartComponent, data: {animation: 'rate'} },
    { path: 'testimonial', component: TestimonialComponent, data: {animation: 'testimonial'} },
    { path: 'advantage', component: YourAdvantageComponent, data: {animation: 'advantage'} },
    { path: 'airport', component: ToAirportComponent, data: {animation: 'airport'} },
    { path: 'airport-booking', component: AirportBookingComponent, data: {animation: 'airportbooking'} }
  ]
 },
  // { path: 'book', component: BookingComponent },
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'contactus', component: ContactusComponent },
  // { path: 'rate', component: RatechartComponent },
  // { path: 'testimonial', component: TestimonialsComponent },
  // { 
  //   path: 'admin',
  //   component: AdminlayoutComponent, 
  //   children: [
  //     { path: 'rate', component: AboutUsComponent }
  //   ]
  // },
  { 
    path: 'admin',
    component: AdminComponent, 
    children: [
      { path: 'rate', component: AdminRateChartComponent },
      { path: 'booking', component: AdminBookingDetailsComponent },
      { path: 'aboutus', component: AdminAboutUsComponent },
      { path: 'contactus', component: AdminContactUsComponent },
      { path: 'testimonial', component: AdminTestimonialComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
