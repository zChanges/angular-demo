import { Component, OnInit } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
  inputValue = "默认值";
  event: string;
  arrayList = [
    { val: "1", text: "aa" },
    { val: "2", text: "bb" },
    { val: "3", text: "cc" },
    { val: "4", text: "dd" }
  ];
  isContains: boolean;
  nameId: any;
  isClass = false;
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
      if(isClass){
        this.isClass = isClass;
        this.render.addClass(this.eleRef.nativeElement.querySelector("#nameId"), 'bg');
      }else{
        this.isClass = isClass;
        this.render.removeClass(this.eleRef.nativeElement.querySelector("#nameId"), 'bg');
      }
  }
}
