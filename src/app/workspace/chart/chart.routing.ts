import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart.component';
import { BarChartsComponent } from './barCharts/barCharts.component';
import { LineChartComponent } from './lineChart/lineChart.component';
import { PieChartComponent } from './pieChart/pieChart.component';
const routes: Routes = [
  {  
    path: '',
    children: [
      { path: '', redirectTo: 'chart', pathMatch: 'full' },
      { path: 'chart', component: ChartComponent },
      { path: 'barChart', component: BarChartsComponent },
      { path: 'pieChart', component: PieChartComponent },
      { path: 'lineChart', component: LineChartComponent },
    ]
  },
];

export const ChartRoutes = RouterModule.forChild(routes);
