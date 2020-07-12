import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-airport',
  templateUrl: './to-airport.component.html',
  styleUrls: ['./to-airport.component.css']
})
export class ToAirportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MenuRoute() {
    window.scrollTo(0, 0)
  }


}
