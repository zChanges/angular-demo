import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-workone',
  templateUrl: './workone.component.html',
  styleUrls: ['./workone.component.scss']
})
export class WorkoneComponent implements OnInit {
  name = 'app-workone'
  workerArgument: string;
  constructor(private activatedRoute: ActivatedRoute  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( val => { 
        this.workerArgument = val.name;
    });
  }

}
