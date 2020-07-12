import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { AdminComponent } from '../admin/admin.component';
 import { AdminAboutUsComponent } from '../admin/about-us/about-us.component';

 import { LoginComponent } from '../admin/login/login.component';




const routes: Routes = [

   //{ path: 'rate', component: AdminAboutUsComponent },

  //  { path: 'aboutus', component: AboutUsComponent },
  //  { path: 'bookingdetails', component: BookingDetailsComponent },
  //  { path: 'contactus', component: ContactUsComponent },
  //  { path: 'ratechart', component: RateChartComponent },
  //  { path: 'testimonial', component: TestimonialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
