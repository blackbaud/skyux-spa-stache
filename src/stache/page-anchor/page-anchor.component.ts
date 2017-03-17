import { Component, Input } from '@angular/core';

@Component({
  selector: 'stache-page-anchor',
  templateUrl: './page-anchor.component.html'
})
export class StachePageAnchorComponent {
  @Input()
  public navItemLabel: string;

  public anchor: string = 'my-title';
}
