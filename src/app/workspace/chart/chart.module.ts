import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartRoutes } from './chart.routing';
import { ChartComponent } from './chart.component';

import { BarChartsComponent } from './barCharts/barCharts.component';
import { PieChartComponent } from './pieChart/pieChart.component';
import { LineChartComponent } from './lineChart/lineChart.component';

import { ChartService } from './chart.service';


import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ViserModule } from 'viser-ng';

import { CommonTmpModule } from './../../commonTmp/commonTmp.module';



@NgModule({
  imports: [
    CommonModule,
    ViserModule,
    NgxChartsModule,
    ChartRoutes,
    NgxEchartsModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonTmpModule
  ],
  declarations: [
    ChartComponent,
    BarChartsComponent,
    PieChartComponent,
    LineChartComponent,
  ],
  providers:[
    ChartService
  ]
})
export class ChartModule { }