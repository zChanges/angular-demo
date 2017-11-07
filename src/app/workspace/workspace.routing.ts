import { Routes, RouterModule } from "@angular/router";
import { WorkspaceComponent } from "./workspace.component";
import { WorkComponent } from "./work/work.component";
import { WorkoneComponent } from "./workone/workone.component";
const routes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      { path: "", redirectTo: "work", pathMatch: "full" },
      { path: "work", component: WorkComponent },
      { path: "workone", component: WorkoneComponent }
    ]
  }
];

export const WorkspaceRoutes = RouterModule.forChild(routes);
