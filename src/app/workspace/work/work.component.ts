import { Component, OnInit } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";
import { workList } from "./workList.model";
import { WorkService } from "./work.service";
import { NzNotificationService } from "ng-zorro-antd";
@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
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

  constructor(
    private eleRef: ElementRef,
    private render: Renderer2,
    private workService: WorkService,
    private _notification: NzNotificationService
  ) {}

  ngOnInit() {
    const nameClass = this.eleRef.nativeElement.querySelector(".nameClass");
    this.eleRef.nativeElement.querySelector("#nameId");
    this.isContains = this.eleRef.nativeElement.contains(nameClass);

    this.workService.getWorkList().then(data => {
      this.arrayList = data;
    });

    // 订阅广播
    this.workService.broadcast.subscribe(val => {
      console.log(`%c ${val}`, "color:red;");
      this._notification.create("success", "全局广播", val);
    });

    // 订阅消息
    this.workService.getMessage().subscribe(val => {
      console.log(`%c subject:${val}`, "color:red;");
      this._notification.create("success", "subJect发送消息", val);
    })
  }

  _console(event) {
    this.event = JSON.stringify(event);
  }

  trackByFn(item, index) {
    return item;
  }

  clickChangeClass(isClass) {
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

  clickOnChanges(bool) {
    if (bool) {
      // 改变属性
      this.arrayList[0].val = "1111";
    } else {
      // 改变引用
      this.arrayList = Object.assign([], this.arrayList);
    }
  }

  getChildEmitVal($event) {
    this.outputVal = $event;
  }

  emitBroadcast(val) {
    this.workService.$broadcast(val);
  }


  emitMeg(val){
    this.workService.sendMessage(val)
  }

  
}
