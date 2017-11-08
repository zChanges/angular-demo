import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  QueryList,
  AfterContentChecked,
  AfterContentInit
} from "@angular/core";
import { workList } from "./../workList.model";
import { log } from "../../../methodBase";

@Component({
  selector: "app-workChild",
  templateUrl: "./workChild.component.html",
  styleUrls: ["./workChild.component.scss"]
})
export class WorkChildComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    OnDestroy,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() arrayList: [workList];
  @Input() changeVal: string;
  constructorVal: any;
  onInitVal: any;

  constructor() {
    this.constructorVal = this.arrayList;
    log(`constructor:${this.constructorVal}`);
  }

  ngOnChanges(SimpleChanges: SimpleChanges) {
    // 一般@Input发生改变会调用（输入属性变化触发，非输入属性不会触发）
    // 输入属性为对象时，对象属性变化不会触发，对象引用变化才会触发
    log(`ngOnChanges:${JSON.stringify(SimpleChanges)}`);
  }

  ngOnInit() {
    // 初始化的时候
    this.onInitVal = this.arrayList;
    log(`ngOnInit:${this.onInitVal}`);
  }

  ngDoCheck() {
    // 只要值发生改变都回触发,(触发多次是因为只要发生事件都会触发)
    // 解开注释查看Docheck
    //log(`ngDoCheck: ${this.changeVal}`)
  }

  ngAfterContentInit() {
    // 组件初始化
    log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    //组建
    log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`%c ngOnDestroy：组件被销毁了`, "color: red");
  }
}
