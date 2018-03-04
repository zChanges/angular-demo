import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Router
import { RouterRoutes } from './router.routing';
// ui组件库
import { NgZorroAntdModule } from 'ng-zorro-antd';
// // 图片放大
// import { NgzLightboxModule } from 'ngz-lightbox';

// service
import { RouterService } from './router.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';

// 拦截器
import { InterceptorService } from './interceptor.service';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    RouterRoutes,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    HttpClientModule,
    // NgzLightboxModule
  ],
  providers: [
    RouterService,
    LoginService,
    RegisterService,
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
