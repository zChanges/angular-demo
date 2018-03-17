import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcTitleComponent } from './nc-title';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NcTitleComponent
  ],
  exports: [
    NcTitleComponent
  ]
})
export class CommonTmpModule { }