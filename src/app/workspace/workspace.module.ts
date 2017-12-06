import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// component
import { WorkspaceComponent } from './workspace.component';
import { WorkComponent } from './work/work.component';
import { HeadComponent } from './head/head.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { WorkoneComponent } from './workone/workone.component';
import { WorkChildComponent } from './work/workChild/workChild.component';
import { WorkCommunicationComponent } from './work/workCommunication/workCommunication.component';
// routs
import { WorkspaceRoutes } from './workspace.routing';

// serivce
import { WorkService } from './work/work.service';
import { WorkpipePipe } from './workpipe.pipe';
import { WorkTowComponent } from './workTow/workTow.component';

// 插件
// import { QuillEditorModule } from 'ngx-quill-editor';
import { QuillModule } from 'ngx-quill';
import { WorkEditorComponent } from './work-editor/work-editor.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutes,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    QuillModule
  ],
  declarations: [
    WorkspaceComponent,
    WorkComponent,
    HeadComponent,
    MenuLeftComponent,
    WorkoneComponent,
    WorkChildComponent,
    WorkCommunicationComponent,
    WorkpipePipe,
    WorkTowComponent,
    WorkEditorComponent
],
  providers: [WorkService]
})
export class WorkspaceModule {}
