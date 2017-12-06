import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workCommunication',
  templateUrl: './workCommunication.component.html',
  styleUrls: ['./workCommunication.component.scss']
})
export class WorkCommunicationComponent {
  @Input() parentName: string;
  @Output() emitParentVal = new EventEmitter<any>();
  constructor() {}

  emitParentFn() {
    this.emitParentVal.emit('@output子->父通讯的值');
  }
}
