import { Injectable } from '@angular/core';
import { RateChart } from '../models/ratechart';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = "/api/ratechart";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RateChartService {

  lastId = 0;

  events: RateChart[] = [];

  constructor(private http: HttpClient) { }

  getRateChart() {
    //Get All rate chart
    return this.http.get<any>('/api/ratechart');
  }

  taxiBooking(bookingDetails) {
    //Get All rate chart
    return this.http.post<any>('/api/ratechart', bookingDetails);
  }

  // contact(bookingDetails) {
  //   //Get All rate chart
  //   return this.http.post<any>('http://localhost:3000/ratechart', bookingDetails);
  // }

}

