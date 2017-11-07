import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
// Component
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

// Router
import { RouterRoutes } from "./router.routing";

// ui组件库
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
      AppComponent, 
      LoginComponent
    ],
  imports: [
      BrowserModule, 
      RouterRoutes, 
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      NgZorroAntdModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
