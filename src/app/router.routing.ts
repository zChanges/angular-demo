import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'workspace',
        loadChildren: './workspace/workspace.module#WorkspaceModule'
    }
];

export const RouterRoutes = RouterModule.forRoot(routes, { useHash: true });
