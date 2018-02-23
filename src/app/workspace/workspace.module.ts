import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// component
import { WorkspaceComponent } from './workspace.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './content/menu/menu.component';

// routs
import { WorkspaceRoutes } from './workspace.routing';




@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutes,
    NgZorroAntdModule,
  ],
  declarations: [
    WorkspaceComponent,
    HeadComponent,
    ContentComponent,
    MenuComponent
  ]
})
export class WorkspaceModule { }
