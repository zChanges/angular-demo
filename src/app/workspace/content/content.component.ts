import { Component, OnInit } from '@angular/core';
import { config } from '../../commonConfig';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isOpenOne = false;
  isCollapsed = false;
  routList = config.routList;
  constructor() { }

  ngOnInit() {
  }

}
