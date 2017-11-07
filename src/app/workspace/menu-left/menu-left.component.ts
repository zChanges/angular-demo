import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-left",
  templateUrl: "./menu-left.component.html",
  styleUrls: ["./menu-left.component.scss"]
})
export class MenuLeftComponent implements OnInit {
  isOpenOne = false;
  routList = [
    { route: "work", name: "work" },
    { route: "workone", name: "workone" }
  ];
  constructor() {}

  ngOnInit() {}
}
