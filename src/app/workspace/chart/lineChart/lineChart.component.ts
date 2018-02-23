import { Component, OnInit } from '@angular/core';
import {single, multi} from '../data';
@Component({
  selector: 'app-lineChart',
  templateUrl: './lineChart.component.html',
  styleUrls: ['./lineChart.component.scss']
})
export class LineChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
