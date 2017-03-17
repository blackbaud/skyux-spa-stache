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

  @ViewChild('sidebar')
  public sidebar;

  public component: any = {};

  public ngOnInit(): void {
    this.component = {
      ref: this.sidebar,
      routes: this.routes
    };
  }
}
