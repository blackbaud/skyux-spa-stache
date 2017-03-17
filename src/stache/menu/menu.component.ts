import { Component, Input } from '@angular/core';

@Component({
  selector: 'stache-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class StacheMenuComponent {
  @Input()
  public routes: any[];
}
