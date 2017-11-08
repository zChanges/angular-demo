/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkChildComponent } from './workChild.component';

describe('WorkChildComponent', () => {
  let component: WorkChildComponent;
  let fixture: ComponentFixture<WorkChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
