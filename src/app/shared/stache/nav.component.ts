import { Component, Input } from '@angular/core';

@Component({
  selector: 'stache-nav',
  template: `
    <nav>
      <ul class="menu">
        <li *ngFor="let route of routes">
          <a [routerLink]="route.routerLink">{{route.label}}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class StacheNavComponent {
  @Input()
  public routes: any[];
}
