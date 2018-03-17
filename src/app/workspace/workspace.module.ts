import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// component
import { WorkspaceComponent } from './workspace.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './content/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// routs
import { WorkspaceRoutes } from './workspace.routing';
import { CommonTmpModule } from './../commonTmp/commonTmp.module';

import { AdReuseTabModule } from '@delon/abc/reuse-tab';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutes,
    NgZorroAntdModule.forRoot(),
    CommonTmpModule,
    AdReuseTabModule.forRoot()
  ],
  declarations: [
    WorkspaceComponent,
    HeadComponent,
    ContentComponent,
    MenuComponent,
    DashboardComponent
  ]
})
export class WorkspaceModule { }
