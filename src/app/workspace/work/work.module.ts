import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// commponent
import { WorkComponent } from './work.component';
import { WorkoneComponent } from './workone/workone.component';
import { WorkTowComponent } from './workTow/workTow.component';
import { WorkEditorComponent } from './work-editor/work-editor.component';
import { WorkChildComponent } from './workChild/workChild.component';
import { WorkCommunicationComponent } from './workCommunication/workCommunication.component';

// pipe
import { WorkpipePipe } from './workpipe.pipe';
// serivce
import { WorkService } from './work.service';
import { UserService } from './user/user.service';


// route
import { WorkRoutes } from './work.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 插件
import { QuillModule } from 'ngx-quill';
import { UserComponent } from './user/user.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    QuillModule,
    WorkRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WorkComponent,
    WorkTowComponent,
    WorkEditorComponent,
    WorkoneComponent,
    WorkChildComponent,
    WorkCommunicationComponent,
    WorkpipePipe,
    UserComponent
  ],
  providers: [
    WorkService, 
    UserService
  ]
})
export class WorkModule { }