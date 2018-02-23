import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartRoutes } from './chart.routing';
import { BarChartsComponent } from './barCharts/barCharts.component';
import { PieChartComponent } from './pieChart/pieChart.component';
import { LineChartComponent } from './lineChart/lineChart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    ChartRoutes
  ],
  declarations: [ChartComponent,
    BarChartsComponent,
    PieChartComponent,
    LineChartComponent
]
})
export class ChartModule { }