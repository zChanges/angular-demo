import { Component, TemplateRef, ContentChild, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'nc-title',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="content_title" *ngIf="titleTmp || title">
      <h1>
        {{title}}
        <ng-template
          [ngTemplateOutlet]="titleTmp">
        </ng-template>
        <small *ngIf="smallTmp || small">
          {{small}}
          <ng-template
            [ngTemplateOutlet]="smallTmp">
          </ng-template>
        </small>
      </h1>
    </div>
  `,
  styleUrls: ['./nc-title.component.scss']
})
export class NcTitleComponent{
  
  @Input() title: string;
  @Input() small: string;

  @ContentChild('titleTmp') titleTmp: TemplateRef<void>;
  @ContentChild('smallTmp') smallTmp: TemplateRef<void>;

}
