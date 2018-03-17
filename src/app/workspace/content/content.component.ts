import { Component, OnInit } from '@angular/core';
import { config } from '../../commonConfig';

import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isOpenOne = false;
  isCollapsed = false;
  routList = config.routList;
  constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.reuseTabService.title = `编辑`;
      console.log(params)
    });
  }

}
