import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './../app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ContactFormComponent, 
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    BookingFormComponent
  ]
})
export class SharedModule { }
