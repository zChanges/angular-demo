import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data';
import { getTimeDistance } from '@delon/abc/utils';
import { DataSet } from "@antv/data-set";

@Component({
  selector: 'app-pieChart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.scss']
})
export class PieChartComponent implements OnInit {


  search = {
    startTime:null,
    endTiem:null
  }

  data
  sourceData = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];
  dv = new DataSet.View().source(this.sourceData);
  scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];
  pieStyle = {
    stroke: "#fff",
    lineWidth: 1
  };
  labelConfig = ['percent', {
    formatter: (val, item) => {
      return item.point.item + ': ' + val;
    },
  }];
  constructor() {
    this.dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    this.data = this.dv.rows

    
  }

  

  ngOnInit() {
  }

  setDate(type: any) {
    const rank = getTimeDistance(type);
    this.search.startTime = rank[0];
    this.search.endTiem = rank[1];
  }
}
