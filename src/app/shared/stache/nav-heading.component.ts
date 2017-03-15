import { Component, Input } from '@angular/core';

@Component({
  selector: 'stache-nav-heading',
  template: `
    <h2 #stacheNavHeading id="{{anchor}}" class="stache-nav-heading">
      <i class="fa fa-chain"></i>
      <ng-content></ng-content>
    </h2>
  `
})
export class StacheNavHeadingComponent {
  @Input()
  public navItemLabel: string;

  public anchor: string = 'my-title';
}
