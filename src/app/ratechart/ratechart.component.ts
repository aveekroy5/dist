import { Component, OnInit } from '@angular/core';
import {RateChartService} from './services/ratechart.service'

@Component({
  selector: 'app-ratechart',
  templateUrl: './ratechart.component.html',
  styleUrls: ['./ratechart.component.css']
})
export class RatechartComponent implements OnInit {

  constructor(
    private rateChartService:RateChartService
  ) {}

  ngOnInit(): void {
    this.rateChartService.getRateChart()
    .subscribe(resp => {
      console.log('resp',resp)
    }, (err) => {
      console.error(err);
    })
  }

}
