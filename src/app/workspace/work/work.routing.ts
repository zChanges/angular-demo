import { Routes, RouterModule } from '@angular/router';
import { WorkoneComponent } from './workone/workone.component';
import { WorkTowComponent } from './workTow/workTow.component';
import { WorkComponent } from './work.component';
import { WorkEditorComponent } from './work-editor/work-editor.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {  
    path: '',
    children:[
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'work', component: WorkComponent },
      { path: 'workone/:name', component: WorkoneComponent },
      { path: 'workTow', component: WorkTowComponent },
      { path: 'workEidtor', component: WorkEditorComponent },
      { path: 'user', component: UserComponent }
    ]
  }
];

export const WorkRoutes = RouterModule.forChild(routes);
