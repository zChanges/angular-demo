# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## 架构模式
MVC -> MVP -> MVVM
Backbone(MVC):用户通过事件触发

## angular/cli
> [angular/cli][1]：angular4脚手架，一键构建angular4项目

### 常用指令：
>`ng help` 查看所有指令
 1. `ng new projectName` -- 创建angular项目 
 2. `ng g component my-new-component`  -- 创建组件component ……还有很多看文档
 3. `ng serve` 启动项目，`--port 4201` 指定特定的端口号
 4. `ng build` 打包项目（webpack） `--aot` aot编辑
 5. `-- hmr` 热替换


### 安装流程
> 
1. `node` 安装不用说了
2. 全局安装`angular-cli` `npm install -g @angular/cli@latest`;
3. `npm`如果慢可用`cnpm` `npm install -g cnpm --registry=https://registry.npm.taobao.org`;
4. 用cli新建angular项目 进入需要安装的文件夹后执行`ng new projectName`，会自动用npm安装angular的依赖包，如果觉得慢可以`ctrl + c`退出，到项目文件夹执行`cnpm install`
5. 启动angular项目 `ng serve` 打开localhost:4200 默认地址；


### 事项
 - 采用Scss创建项目

 ```
 ng new sassy-project --style=scss //创建scss的ng项目
 ```
 - Scss下引入`bootstrap

 ```
 $icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
@import '~bootstrap-sass/assets/stylesheets/_bootstrap';
 ```

## 文件目录
```
.
├── README.md
├── e2e                                     // e2e测试
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js                           // karma配置文件
├── package.json                            // 依赖包
├── protractor.conf.js                      // 测试的配置环境
├── src                                     // 项目根目录
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts                   // 应用的根模块
│   ├── assets                              // 放ico、图片，字体。构建后会copy到dist文件
│   ├── environments                        // 配置开发环境还是生成环境
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html                          // 应用入口html文件
│   ├── main.ts                             // 应用入口文件 （引导AppModule根模块启动引用）
│   ├── polyfills.ts                        // 填充文件 兼容ie……
│   ├── styles.css
│   ├── test.ts                             // 单元测试入口文件
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json                           // ts配置文件
└── tslint.json
```

### @NgModule
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import 引入访问公开对象
// export 声明公开对象

// declarations 申明组件（组件、指令、管道）
// exports 声明其他模块，供其他Module使用
// imports 引入需要的模块
// providers 供应商  全局的服务 service
// bootstrap 启动项 标识主视图(根组件)
```

## 路由or懒加载
**基本**
```
<li routerLink='/task/workOrder' routerLinkActive="active"><a>我的任务</a></li>
<router-outlet></router-outlet> // 占位符

RouterModule.forRoot() // 根模块
RouterModule.forChild() // 子模块
redirectTo 重定向
pathMatch 路由匹配  full 
loadChildren 懒加载  module # moduleName  #号前面模块地址  #后面模块名称
RouterModule.forRoot(routes, { useHash: true });
(前后台路由冲突出现404)`useHash=true` 会再路由前面加个#，
const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'task', loadChildren: './workspace/workspace.module#WorkspaceModule' },
	{ path: 'login', component: LoginComponent }
];
```
**路由传参**
```
传递：
import { Router} from '@angular/router';
this.Router.navigate(["地址",id(单个)])
this.Router.navigate(["地址",{id:id,name:name}(多个)])
```

```
接收：
import { ActivatedRoute } from '@angular/router';
this.activatedRoute.params.subscribe( res => { console.log(res) });
```

```
html传递：
<a *ngFor="let item of list"  [routerLink]="['/detail', item.id]" >

route设置：
{ path: 'detail/:id', component: nameComponent }
```

## 指令及数据绑定

###数据绑定
**1.单向 数据 -> 视图**
![image_1bs7i1l4u1rvj1ogee06episaj9.png-0.7kB][2]
![image_1bs7i3ikb1a5t16op1rsn1bfq19e31j.png-2.2kB][3]
```typescript
{{name}}插入值
<input [value]='name' [attr.disabled]='isDisabled'/>
[attr.disabled]="'true'"
[value]="'name'"
```

**2.单向 视图 -> 数据(事件)**
![image_1bs7io6vnqlk12tp1f6o18deg5n2d.png-32.2kB][4]
```typescript
<input 
  (keyup)="clickMe($event,'keyup')" 
  (keydown)="clickMe($event,'keyDown')" 
  (change)="clickMe($event,'change')" 
  (focus)="clickMe($event,'focus')" 
  (blur)="clickMe($event,'blur')"
/>
```
**3.双向 视图 <--> 数据**
```typescript
<input [(ngModel)]="name"/>
```

### 内置指令
**ngIf else**
```html
<div *ngIf="false; else elseBlock">111111111111111</div>
<ng-template #elseBlock>2222</ng-template>
```
**ngIf then else**
```html
<div *ngIf="false; then thenBlock else elseBlock">11</div>
<ng-template #thenBlock>22...</ng-template>
<ng-template #elseBlock>33...</ng-template>
```
**as**
```html
<div *ngIf="1111 as isShow; else elseBlock">{{isShow}}</div>
//显示 1111

<div *ngFor="let item of [9,8,7,6,5]; index as i; trackBy:item">
  {{i}} --- {{item}}
</div>
// 显示 
0 --- 9
1 --- 8
2 --- 7
…………
```

**ngFor trackBy**
```html
<div *ngFor="let item of list"></div>
<div *ngFor="let item of list; trackBy:item.id"></div>
```


**style Class**
```html
<div [ngStyle]="{style: expression}"></div>
<div [ngClass]="{cssClass: expression}"></div>
```

**ngSwitch**
```html
<div [ngSwitch]="conditionExpression">
  <div *ngSwitchCase="expression">output</div>
  <div *ngSwitchDefault>output2</div>
</div>
```

## dom操作
>**[ElementRef][5]：** 获取dom
```typescript
// html
<div class="nameClass" id="nameId"></div>

// ts
import { ElementRef } from '@angular/core';
const nameClass = this.eleRef.nativeElement.querySelector('.nameClass');
this.eleRef.nativeElement.querySelector('#nameId');
this.elementRef.nativeElement.contains(nameClass)
```
>**[Renderer2][6]** 渲染器
用来创建元素、文本、设置属性、添加样式和设置事件监听…………
```
 changeHostState() {
    if (this.active) {
      this.renderer.addClass(this.elementRef.nativeElement, this.stateCss);
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, this.stateCss);
  }
```

## 拦截器及服务(httpClient)
查看[taskInterceptor.service.ts][7]
和[app.module.ts][8]

## 生命周期钩子
```
//8种
ngOnChange();
ngOninit()
ngDoCheck(); 
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked();
ngOnDestroy()
```

### 组件通讯
父->子： `@input()` 父组件添加子组件的引用`@ViewChild()`来获取子组件
子-> 父： `@Output()`  
通过`service`
`EventEmitter`
订阅`Subject` `next`订阅

## 管道pipe
**内置管道**
```html
<div>{{1507793573000 | date: 'y-MM-dd HH:mm:ss'}}</div>
<div>{{ '1507794154000000' | slice:0:13 | date:'y-MM-dd HH:mm:ss'}}</div>
<div>{{'zzz' | uppercase }}</div>
<div>{{'ZZZsS' | lowercase }}</div>
<div>{{ 3.14159265 | number: '1.4-4' }}</div>
<div>{{ { name: 'semlinker' } | json }}</div>
```

**自定义管道**
```typescript
@NgModule({
  declarations: [DateAppendzeroPipe],
  …………
)}
```
```html
<div>{{ '1507794154' | dateAppendzero | date:'y-MM-dd HH:mm:ss' }}</div>
```
```typescript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateAppendzero'
})
export class DateAppendzeroPipe implements PipeTransform {
  transform(value: any): any {
    return value + '000';
  }
}
```

## 依赖注入（DI）
[依赖注入][9]
## AOT(预编译) or JIT(即时编辑)编译
- JIT：先tsc编译成js文件，打包压缩，浏览器加载代码，启动angular，通过JIT编译处理代码，然后再渲染应用。

- AOT: 在服务端预先编译好所有文件，浏览器直接加载代码运行，直接渲染应用，不同等编译后再运行渲染，打包文件中也不需要angular编译器，编译器都就占angular自身大小的一半。预先编译的话会预先检测模版绑定的一些错误。

JIT：
![image_1bs2sgej6ll91nrq1g5hrs915v11t.png-36.6kB][10]
![image_1bs2shhs91jd7sds1heam0l4uu2a.png-16.9kB][11]

AOT：
![image_1bs2s9qcr1kcr1fif1o09d5611r41g.png-35.6kB][12]
![image_1bs2s9b7618p61ndioeb2l64hs13.png-12.4kB][13]

## HMR(热替换)
>HMR: `ng serve --hmr`;
![hmr.gif-543.5kB][14]
**安装HMR**
```
npm install @angularclass/hmr -D 
// -D: --save-dev -S: --save
```

**更改main.js**
```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}else{
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      let _styles = document.head.querySelectorAll('style');
      let styles = Array.prototype.slice.call(_styles);
      styles
        .filter((style: any) => style.innerText.indexOf('_ng') !== -1)
        .map((el: any) => document.head.removeChild(el));
    })
  }
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

## 杂
删除`node_modules`包提示路径过长
```
npm install rimraf -g
rimraf node_modules
```

  [1]: https://github.com/angular/angular-cli
  [2]: http://static.zybuluo.com/zChange/k5x9nqripyoovmxkt7iz6f7j/image_1bs7i1l4u1rvj1ogee06episaj9.png
  [3]: http://static.zybuluo.com/zChange/clrdh8rww47yt73kkq067rzl/image_1bs7i3ikb1a5t16op1rsn1bfq19e31j.png
  [4]: http://static.zybuluo.com/zChange/h4s3uthem180sz7tnfspoo11/image_1bs7io6vnqlk12tp1f6o18deg5n2d.png
  [5]: https://angular.io/api/core/ElementRef
  [6]: https://angular.io/api/core/Renderer2#overview
  [7]: https://github.com/zChanges/wenyunTask/blob/master/src/app/taskInterceptor.service.ts
  [8]: https://github.com/zChanges/wenyunTask/blob/master/src/app/app.module.ts
  [9]: https://www.angular.cn/guide/dependency-injection
  [10]: http://static.zybuluo.com/zChange/o5dtt0jfezc5627n4z7nk0z7/image_1bs2sgej6ll91nrq1g5hrs915v11t.png
  [11]: http://static.zybuluo.com/zChange/80afnmo0dm36gu9gzk97l8fj/image_1bs2shhs91jd7sds1heam0l4uu2a.png
  [12]: http://static.zybuluo.com/zChange/m2ti57tqqeb5izg1s6xp5rw2/image_1bs2s9qcr1kcr1fif1o09d5611r41g.png
  [13]: http://static.zybuluo.com/zChange/c0nvnaffu08rk73ki4tdfdiz/image_1bs2s9b7618p61ndioeb2l64hs13.png
  [14]: http://static.zybuluo.com/zChange/zbg9ktbs7o6v6lh3kadvj6hp/hmr.gif

