/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkTowComponent } from './workTow.component';

describe('WorkTowComponent', () => {
  let component: WorkTowComponent;
  let fixture: ComponentFixture<WorkTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
