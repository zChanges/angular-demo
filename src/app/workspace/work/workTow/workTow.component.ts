import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-workTow",
  templateUrl: "./workTow.component.html",
  styleUrls: ["./workTow.component.scss"]
})
export class WorkTowComponent implements OnInit {
  workerArgument: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.workerArgument = val.name || '没传值:默认值';
    });
  }
}
