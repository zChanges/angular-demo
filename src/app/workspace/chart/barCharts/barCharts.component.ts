import { Component, OnInit } from '@angular/core';
import { single } from '../data';
import { getTimeDistance } from '@delon/abc/utils';
import { DataSet } from "@antv/data-set";

@Component({
  selector: 'app-barCharts',
  templateUrl: './barCharts.component.html',
  styleUrls: ['./barCharts.component.scss']
})
export class BarChartsComponent implements OnInit {

  salesData: any[] = [];

  search = {
    startTime:null,
    endTiem:null
  }


  /**
   * 图表1
   */
  data1 =  [
    { year: '1951 年', sales: 38, people:48},
    { year: '1952 年', sales: 52, people:68 },
    { year: '1956 年', sales: 61, people:28 },
    { year: '1957 年', sales: 145, people:30 },
    { year: '1958 年', sales: 48, people:68 },
    { year: '1959 年', sales: 38, people:58 },
    { year: '1960 年', sales: 38, people:18 },
    { year: '1962 年', sales: 38, people:28 },
  ];
  scale1 = [{
    dataKey: 'sales',
    tickInterval: 20,
  }];

  /**
   * 图表2
   */
  data2
  sourceData = [
    { name: '北京', '1月.': 18.9,  '2月.': 39.3, '3月.': 81.4, '4月.': 47, '5月.': 20.3, '6月.': 24, '7月.': 35.6,'8月.': 28.8, },
    { name: '江苏', '1月.': 12.4, '2月.': 34.5, '3月.': 99.7, '4月.': 52.6, '5月.': 35.5, '6月.': 37.4, '7月.': 42.4 ,'8月.': 23.2, },
  ];
  dv = new DataSet.View().source(this.sourceData);
  adjust2 = [{
    type: 'dodge',
    marginRatio: 1 / 32,
  }];
  
  constructor() {
    this.dv.transform({
      type: 'fold',
      fields: ['1月.', '2月.', '3月.', '4月.', '5月.', '6月.', '7月.', '8月.'],
      key: '月份',
      value: '月均降雨量',
    });
    this.data2 = this.dv.rows
  }


  ngOnInit() {

  }

  setDate(type: any) {
    const rank = getTimeDistance(type);
    this.search.startTime = rank[0];
    this.search.endTiem = rank[1];
  }


  



}
