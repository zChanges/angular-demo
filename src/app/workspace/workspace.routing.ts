import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { WorkComponent } from './work/work.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'workModule', loadChildren: './work/work.module#WorkModule' },
      { path: 'chartModule', loadChildren: './chart/chart.module#ChartModule' },
    ]
  }
];

export const WorkspaceRoutes = RouterModule.forChild(routes);
