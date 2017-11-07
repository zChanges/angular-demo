import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
		path: 'workspace',
		loadChildren: './workspace/workspace.module#WorkspaceModule'
	}
];

export const RouterRoutes = RouterModule.forRoot(routes, { useHash: true });
