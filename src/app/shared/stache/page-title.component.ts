import { Component } from '@angular/core';

@Component({
  selector: 'stache-page-title',
  template: `
    <div class="stache-page-title">
      <h1 class="stache-page-heading">
        <ng-content></ng-content>
      </h1>
    </div>
  `,
  styleUrls: ['./page-title.component.scss']
})
export class StachePageTitleComponent { }
