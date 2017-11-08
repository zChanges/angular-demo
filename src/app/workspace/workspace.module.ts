import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkspaceComponent } from "./workspace.component";
import { WorkComponent } from "./work/work.component";
import { WorkspaceRoutes } from "./workspace.routing";
import { HeadComponent } from "./head/head.component";
import { MenuLeftComponent } from "./menu-left/menu-left.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { WorkoneComponent } from "./workone/workone.component";
import { WorkChildComponent } from './work/workChild/workChild.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
  CommonModule,
    WorkspaceRoutes,
    NgZorroAntdModule.forRoot(),
    FormsModule
  ],
  declarations: [
    WorkspaceComponent, 
    WorkComponent,
    HeadComponent,
    MenuLeftComponent,
    WorkoneComponent,
    WorkChildComponent
  ]
})
export class WorkspaceModule {}
