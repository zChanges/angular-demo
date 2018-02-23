import { Routes, RouterModule } from '@angular/router';
import { WorkoneComponent } from './workone/workone.component';
import { WorkTowComponent } from './workTow/workTow.component';
import { WorkComponent } from './work.component';
import { WorkEditorComponent } from './work-editor/work-editor.component';
const routes: Routes = [
  {  
    path: '',
    children:[
      { path: '', redirectTo: 'work', pathMatch: 'full' },
      { path: 'work', component: WorkComponent },
      { path: 'workone/:name', component: WorkoneComponent },
      { path: 'workTow', component: WorkTowComponent },
      { path: 'workEidtor', component: WorkEditorComponent }
    ]
  }
];

export const WorkRoutes = RouterModule.forChild(routes);
