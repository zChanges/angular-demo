import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

// route
import { WorkRoutes } from './work.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 插件
import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    QuillModule,
    WorkRoutes,
  ],
  declarations: [
    WorkComponent,
    WorkTowComponent,
    WorkEditorComponent,
    WorkoneComponent,
    WorkChildComponent,
    WorkCommunicationComponent,
    WorkpipePipe
  ],
  providers: [WorkService]
})
export class WorkModule { }