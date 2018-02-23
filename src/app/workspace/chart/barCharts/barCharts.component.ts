import { Component, OnInit } from '@angular/core';
import {single} from '../data';
@Component({
  selector: 'app-barCharts',
  templateUrl: './barCharts.component.html',
  styleUrls: ['./barCharts.component.scss']
})
export class BarChartsComponent implements OnInit {
 /**
  * view:视图,设置宽高[800(宽),400(高)]
  * single:结果,数据
  * scheme:图表颜色
  * gradient:图表颜色渐变
  * xAxis x坐标是否显示
  * yAxis y坐标是否显示
  * legend 是否显示图例
  * showXAxisLabel 是否显示x轴标题
  * showYAxisLabel是否显示y轴标题
  * xAxisLabel 设置x轴标题
  * yAxisLabel 设置y轴标题
  * (select) 选中事件
  */


  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  view=[800,400]

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this, {single})   
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
