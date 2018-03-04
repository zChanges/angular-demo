import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { WorkComponent } from './work/work.component';

import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', redirectTo: 'workModule', pathMatch: 'full' },
      { path: 'workModule', loadChildren: './work/work.module#WorkModule' },
      { path: 'chartModule', loadChildren: './chart/chart.module#ChartModule' },
    ]
  }
];

export const WorkspaceRoutes = RouterModule.forChild(routes);
