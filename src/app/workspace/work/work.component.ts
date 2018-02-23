import { Component, OnInit, OnDestroy } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";
import { workList } from "./workList.model";
import { WorkService } from "./work.service";
import { NzNotificationService } from "ng-zorro-antd";
import { Router, Params } from "@angular/router";
@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit, OnDestroy {
  inputValue = "默认值";
  event: string;
  arrayList: Array<workList>;
  isContains: boolean;
  nameId: any;
  isClass = false;
  changeVal: string;
  outputVal: string;
  broadcastVal: string;
  SubjectVal: string;

  subBroadcast: any;
  subMesssage: any;

  constructor(
    private eleRef: ElementRef,
    private render: Renderer2,
    private workService: WorkService,
    private _notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    const nameClass = this.eleRef.nativeElement.querySelector(".nameClass");
    this.eleRef.nativeElement.querySelector("#nameId");
    this.isContains = this.eleRef.nativeElement.contains(nameClass);

    this.workService.getWorkList().then(data => {
      this.arrayList = data;
    });

    // 订阅广播
    this.subBroadcast = this.workService.broadcast.subscribe(val => {
      console.log(`%c ${val}`, "color:red;");
      this._notification.create("success", "全局广播", val);
    });

    // 订阅消息
    this.subMesssage = this.workService.getMessage().subscribe(val => {
      console.log(`%c subject:${val}`, "color:red;");
      this._notification.create("success", "subJect发送消息", val);
    });
  }

  _console(event: string) {
    this.event = JSON.stringify(event);
  }

  trackByFn(item, index) {
    return item;
  }

  clickChangeClass(isClass: boolean) {
    if (isClass) {
      this.isClass = isClass;
      this.render.addClass(
        this.eleRef.nativeElement.querySelector("#nameId"),
        "bg"
      );
    } else {
      this.isClass = isClass;
      this.render.removeClass(
        this.eleRef.nativeElement.querySelector("#nameId"),
        "bg"
      );
    }
  }

  clickOnChanges(bool: boolean) {
    if (bool) {
      // 改变属性
      this.arrayList[0].val = "1111";
    } else {
      // 改变引用
      this.arrayList = Object.assign([], this.arrayList);
    }
  }

  getChildEmitVal($event: string) {
    this.outputVal = $event;
  }

  emitBroadcast(val: string) {
    this.workService.$broadcast(val);
  }

  emitMeg(val: string) {
    this.workService.sendMessage(val);
  }

  clickSkip(val: boolean) {
    if (val) {
      this.router.navigate(["/workspace/workModule/workTow", { name: "我是路由传过来的值" }]);
    } else {
      this.router.navigateByUrl("/workspace/workModule/workTow");
    }
  }

  ngOnDestroy() {
    // 订阅后请取消订阅： 不取消会产生多次监听，方法就会执行多次
    // 欲看效果请注释下面代码，换其他页面再返回来发送消息后，会触发出现多次消息提醒
    this.subBroadcast.unsubscribe();
    this.subMesssage.unsubscribe();
  }
}
