import { Injectable, EventEmitter } from "@angular/core";
import { workList } from "./workList.model";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import * as workJson from "../workList.json";
@Injectable()
export class WorkService {
  broadcast: EventEmitter<any> = new EventEmitter();

  subject = new Subject<any>();
  constructor() {
  }

  /**
   * 发送广播
   * @param val 广播val值
   */
  $broadcast(val: string) {
    this.broadcast.emit(val);
  }

  /**
   * 发送全局消息
   * @param message 消息值
   */
  sendMessage(message: string) {
    this.subject.next(message);
  }

  // 获取消息
  getMessage(): Observable<any> {
    console.log(this.subject)
    return this.subject.asObservable();
  }

  getWorkList(): Promise<workList[]> {
    return Promise.resolve([
        { val: "1", text: "aa" },
        { val: "2", text: "bb" },
        { val: "3", text: "cc" },
        { val: "4", text: "dd" }
      ]);
  }
}
