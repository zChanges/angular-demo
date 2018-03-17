/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcTitleComponent } from './nc-title.component';

describe('NcTitleComponent', () => {
  let component: NcTitleComponent;
  let fixture: ComponentFixture<NcTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
