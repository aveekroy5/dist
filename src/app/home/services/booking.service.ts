import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = "/api"; // Production "/api" local "http://localhost:3000"
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  lastId = 0;

  events: Booking[] = [];

  constructor(private http: HttpClient) { }

  getBookingDetails() {
    //Get Quick booking
    return this.http.get<any>(`${endpoint}/booking`);
  }

  taxiBooking(bookingDetails) {
    //Post Quick booking
    return this.http.post<any>(`${endpoint}/booking`, bookingDetails);
  }

  detailBooking(bookingDetails) {
    //Post detailbooking
    return this.http.post<any>(`${endpoint}/detailbooking`, bookingDetails);
  }

  contact(contactDetails) {
    //Post contact
    return this.http.post<any>(`${endpoint}/contact`, contactDetails);
  }

  airportDetailBooking(bookingDetails) {
    //Post airportbooking
    return this.http.post<any>(`${endpoint}/airportbooking`, bookingDetails);
  }



}

