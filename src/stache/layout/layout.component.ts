import { Component,
         OnInit,
         Input,
         ViewChild } from '@angular/core';

@Component({
  selector: 'stache-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class StacheLayoutComponent implements OnInit {
  @Input()
  public layout: string = 'sidebar';

  @Input()
  public routes: any[];

  public component: any = {};
  public templateRef;

  @ViewChild('sidebar')
  private sidebar;

  public ngOnInit(): void {
    this.templateRef = this.sidebar;
    this.component = {
      routes: this.routes
    };
  }
}
