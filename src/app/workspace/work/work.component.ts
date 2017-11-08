import { Component, OnInit } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";
import { workList } from "./workList.model";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
  inputValue = "默认值";
  event: string;
  arrayList: [workList] = [
    { val: "1", text: "aa" },
    { val: "2", text: "bb" },
    { val: "3", text: "cc" },
    { val: "4", text: "dd" }
  ];
  isContains: boolean;
  nameId: any;
  isClass = false;
  changeVal: string;
  constructor(private eleRef: ElementRef, private render: Renderer2) {
    const nameClass = this.eleRef.nativeElement.querySelector(".nameClass");
    this.eleRef.nativeElement.querySelector("#nameId");
    this.isContains = this.eleRef.nativeElement.contains(nameClass);
  }

  ngOnInit() {}

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
      if(bool){
        // 改变属性
        this.arrayList[0].val = '1111';
      }else{
        // 改变引用
        this.arrayList = Object.assign([],this.arrayList);
      }
  }
}
